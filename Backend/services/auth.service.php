<?php 

require 'login-response.php';
require 'users.service.php';
require 'jwt.service.php';

class AuthService {

    public static function Authenticate($nombre, $mail, $clave, $tipo) {
        $loginResponse = new LoginResponse();
        $foundUser = UsersService::TraerPorUsuario($nombre);
        if($foundUser != "NO-EXISTE") {

            if($foundUser->clave != $clave) {
                $loginResponse->result = "error";
                $loginResponse->error = "passError";
            } else if($foundUser->mail != $mail) { 
                $loginResponse->result = "error";
                $loginResponse->error = "mailError";    
            } else if($foundUser->tipo != $tipo) { 
                $loginResponse->result = "error";
                $loginResponse->error = "tipoError";    
            } else {
                $loginResponse->error = "";
                $loginResponse->result = "ok";
                $loginResponse->token = JWTService::CreateToken($foundUser);
                $loginResponse->nombre = $foundUser->nombre;
                $loginResponse->tipo = $foundUser->tipo;
            } 
        } else {
            $loginResponse->result = "error";
            $loginResponse->error = "nombreError";
        }
        return $loginResponse;
    }

    public static function ValidateUser($token) {
        return !JWTService::TokenIsExpired($token);
    }

}

?>
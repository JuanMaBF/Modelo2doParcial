<?php 

require 'login-response.php';
require 'users.service.php';
require 'jwt.service.php';

class AuthService {

    public static function Authenticate($nombre, $mail, $clave, $perfil) {
        $loginResponse = new LoginResponse();
        $foundUser = UsersService::TraerPorUsuario($nombre);
        if($foundUser != "NO-EXISTE") {

            if($foundUser->clave != $clave) {
                $loginResponse->result = "error";
                $loginResponse->error = "passError";
            } else if($foundUser->mail != $mail) { 
                $loginResponse->result = "error";
                $loginResponse->error = "mailError";    
            } else if($foundUser->perfil != $perfil) { 
                $loginResponse->result = "error";
                $loginResponse->error = "perfilError";    
            } else {
                $loginResponse->error = "";
                $loginResponse->result = "ok";
                $loginResponse->token = JWTService::CreateToken($foundUser);
                $loginResponse->nombre = $foundUser->nombre;
                $loginResponse->perfil = $foundUser->perfil;
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
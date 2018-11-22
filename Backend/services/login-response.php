<?php

class LoginResponse {

    public $result;
    public $error;
    public $token;
    public $nombre;
    public $perfil;


    function __constructor($result, $error, $token, $nombre, $perfil) {
        $this->result = $result;
        $this->error = $error;
        $this->token = $token;
        $this->nombre = $nombre;
        $this->perfil = $perfil;
    }

}

?>
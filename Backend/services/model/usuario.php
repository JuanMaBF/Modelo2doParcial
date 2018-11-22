<?php 

class Usuario {
    public $nombre;
    public $mail;
    public $clave;
    public $perfil;

    function __construct($nombre, $mail, $clave, $perfil) {
        $this->nombre = $nombre;
        $this->mail = $mail;
        $this->clave = $clave;
        $this->perfil = $perfil;
    }
}

?>
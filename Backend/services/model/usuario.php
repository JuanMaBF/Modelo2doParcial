<?php 

class Usuario {
    public $nombre;
    public $mail;
    public $clave;
    public $tipo;

    function __construct($nombre, $mail, $clave, $tipo) {
        $this->nombre = $nombre;
        $this->mail = $mail;
        $this->clave = $clave;
        $this->tipo = $tipo;
    }
}

?>
<?php 

class Servidor {
    public $nombre;
    public $espacio;
    public $precio;
    public $usuario;

    function __construct($nombre, $espacio, $precio, $usuario) {
        $this->nombre = $nombre;
        $this->espacio = $espacio;
        $this->precio = $precio;
        $this->usuario = $usuario;
    }
}

?>
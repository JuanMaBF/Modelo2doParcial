<?php 

class Zapato {

    public $id;
    public $codModelo;
    public $nombre;
    public $fechaIngreso;
    public $localVenta;
    public $precioCosto;
    public $genero; 

    function __construct($id, $codModelo, $nombre, $fechaIngreso, $localVenta, $precioCosto, $genero) {
        $this->id = $id;
        $this->codModelo = $codModelo;
        $this->nombre = $nombre;
        $this->fechaIngreso = $fechaIngreso;
        $this->localVenta = $localVenta;
        $this->precioCosto = $precioCosto; 
        $this->genero = $genero;  
    }
}

?>
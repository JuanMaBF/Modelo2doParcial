<?php

require('model/zapato.php');

class ZapatoService extends BaseService {

    public static function TraerTodos() {
        $conn = parent::doConnection();
        $result = $conn->query("SELECT * FROM Par2F.Zapato");
        $listaServ = array();
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                array_push($listaServ, new Zapato($row['id'], $row['codModelo'], $row['nombre'], 
                $row['fechaIngreso'], $row['localVenta'], $row['precioCosto'], $row['genero']));
            }
        }
        $conn->close();
        return $listaServ;
    }    

    public static function Alta($zapato) {
        $conn = parent::doConnection();
        $sql = "INSERT INTO Par2F.Zapato (codModelo, nombre, fechaIngreso, localVenta, precioCosto, genero) 
                VALUES ('$zapato->codModelo', '$zapato->nombre', '$zapato->fechaIngreso', 
                    '$zapato->localVenta', '$zapato->precioCosto', '$zapato->genero')";
        $conn->query($sql);
        $conn->close();
        return 'ok';
    }

}

?>
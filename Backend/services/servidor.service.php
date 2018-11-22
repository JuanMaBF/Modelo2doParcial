<?php

require('model/servidor.php');

class ServicorService extends BaseService {

    public static function TraerTodos() {
        $conn = parent::doConnection();
        $result = $conn->query("SELECT * FROM id7281007_labtp.Pedidos");
        $listaPedidos = array();
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                array_push($listaPedidos, new Pedido($row['Id'], $row['Nombre'], $row['Cantidad']
                    ,$row['Estado'], $row['Asignado'], $row['Iniciado'],$row['Estimado'], $row['Mesa']
                    , $row['Mozo'], $row['ImgName']));
            }
        }
        $conn->close();
        return $listaPedidos;
    }    

    public static function Alta($servidor) {
        $conn = parent::doConnection();
        $sql = "INSERT INTO Parcial2.Servidores (nombre, espacio, precio, usuario) 
                VALUES ('$servidor->nombre', '$servidor->espacio', '$servidor->precio', '$servidor->usuario')";
        $conn->query($sql);
        $conn->close();
        return 'ok';
    }


}

?>
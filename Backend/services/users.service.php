<?php

require('model/usuario.php');
require('base.service.php');

class UsersService extends BaseService {

    public static function TraerPorUsuario($nombre) {
        $conn = parent::doConnection();
        $result = $conn->query("SELECT * FROM Par2F.Usuarios WHERE nombre = '$nombre'");
        if ($result != null && $result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                return new Usuario($row['nombre'], $row['mail'], $row['clave'], $row['tipo']);
            }
        }
        $conn->close();
        return "NO-EXISTE";
    }    

}

?>
<?php

    require 'services/vendor/autoload.php';
    require 'services/auth.service.php';
    require 'services/zapato.service.php';

    $app = new Slim\App();
    
    $app->options('/{routes:.+}', function ($request, $response, $args) {
        return $response;
    });
    
    $app->add(function ($req, $res, $next) {
        $response = $next($req, $res);
        return $response
                ->withHeader('Access-Control-Allow-Origin', '*')
                ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
                ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    });

    $app->post('/login', function($request, $response, $args) {
        $user = json_decode($request->getBody());
        $loginResponse = AuthService::Authenticate($user->nombre, $user->mail, $user->clave, $user->tipo);
        return json_encode($loginResponse);
    });

    $app->post('/alta', function($request, $response, $args) {
        $zapatos = json_decode($request->getBody());
        if(AuthService::ValidateUser($zapatos->token)) {
            try {
                foreach($zapatos->zapatos as $zap) { 
                    ZapatoService::Alta($zap);
                }
                return 'ok';
            } catch(Exception $e) {
                return json_encode($e);
            }
        }
        return 'TokenExpirado';
    });

    $app->get('/traerTodos', function($request, $response, $args) {
        $token = json_decode($request->getBody());
        if(AuthService::ValidateUser($token)) {
            $zapatosArray = ZapatoService::TraerTodos();
            return json_encode($zapatosArray);
        }
        return 'TokenExpirado';
    });


    $app->map(['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], '/{routes:.+}', function($req, $res) {
        $handler = $this->notFoundHandler; 
        return $handler($req, $res);
    });

    $app->run();

?>
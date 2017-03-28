
<?php

//using request and reponse class to make it easier to write
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';

//making the app
$app = new \Slim\App;

//adding a route fot student-data
$app->get('/student-data/{id}', function (Request $request, Response $response) {

  $id = $request->getAttribute('id');
  $response->getBody()->write("{ subjectId:$id}");

  return $response;
});
$app->run();

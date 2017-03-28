
<?php

//using request and reponse class to make it easier to write
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';

//making the app
$app = new \Slim\App;

//adding a route for student-data
$app->get('/student-data/{id}', function (Request $request, Response $response) {
  $id = $request->getAttribute('id');

//getting the csv data

//opening the csv file in read-only
$file = fopen('subject-data.csv', 'r');

//getting the headers to be used as keys
$key  = fgetcsv($file,",");

$json = array();

//bind each relevant keyName to it's corresponding value
while ($row = fgetcsv($file, ",")) {
  //only shows data related to id
  if ($row[0] === $id){
        $json[] = array_combine($key, $row);
      }
    }

//encodes the array into JSON format
$json = json_encode($json);

//prints the JSON
print_r($json);
  $response->getBody()->write('');
  return $response;
});
$app->run();

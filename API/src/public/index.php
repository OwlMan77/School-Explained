
<?php
//what's left to do is override Slim's ErrorHandler to give back status codes 

//using request and response class to make it easier to write
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

  //setting the arrays for the loop
  $json = array();
  $subArray= array();

  //bind each relevant keyName to it's corresponding value
  while ($row = fgetcsv($file, ",")) {
  //only shows data related to Subjectid
  if ($row[0] === $id){
    // pushes the 2nd and 3rd items of the array
    //with named keys to $subArray
        $preJson[$key[1]] = $row[1];
        $preJson[$key[2]] = $row[2];
        array_push($subArray, $preJson);
      }
    }
    //sets first key as the request id
    $json[$key[0]] = $id;
    //sets content key to be the subarray made in the while loop
    $json[content] = $subArray;

    //encodes the array into JSON format
    $json = json_encode($json);
    //prints the JSON
  $newResponse = $response->withJson($json);
  return $newResponse;
});

$app->run();

<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
http_response_code(200);
exit(json_encode([
  "text" => "4 todo",
  "completed" => true,
]));
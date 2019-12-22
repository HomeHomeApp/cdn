<?php

$myJSON = '{"name":"test", "level":40, "version":"1.12.22"}';

header('Content-Type: application/x-httpd-php');


echo "getVersion(".$myJSON.");";

?>

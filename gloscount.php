<?php 
$fname=$_REQUEST["fname"];

// input count text in order to loop through
$dir = '/var/www/northmount.org/db/';
$text = 'some text here';
$filename = 'gloscount.txt';

$file = fopen($dir . $filename, "a");
fwrite($file, $fname . "\n");
fclose($file);

// reads through the file and outputs results to the blog lines


$myfile = fopen($dir . $filename, "r");
$aa=0;
while(!feof($myfile)) {
        $aa++;
        $line = fgets($myfile);

        // outputs blog line below
        //echo "$line\r\n";
        echo nl2br("$line\n\r");
}
fclose($myfile);

?>
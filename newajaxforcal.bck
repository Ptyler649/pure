<?php 
$fname=$_REQUEST["fname"];

// input calendar text in order to loop through
$dir = '/home/ubuntu/blog/';
$text = 'some text here';
$filename = 'blogcal.txt';

$file = fopen($dir . $filename, "a");
fwrite($file, $fname . "\n");
fclose($file);

// reads through the file and outputs results to the blog lines


$myfile = fopen($dir . $filename, "r");
$aa=0;
while(!feof($myfile)) {
        $aa++;
        $line = fgets($myfile);
	$stripline = str_replace(' ', '', $line);
	$rest = substr($stripline, 0, -1);

        // outputs blog line below
        // echo "$line\r\n";
        // sample target line is :- <li><a href='blogfeb2014.html'>Feb 2014</a></li>
        // echo nl2br("$line\n\r");
	// <a class="pure-menu-heading" href="">northmount.org</a>
        
        echo nl2br("<a class='pure-menu-heading' href='$rest.html'> $line</a>\n\r");
}
fclose($myfile);

?>

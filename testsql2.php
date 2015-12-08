<?php

// activated from search button where field turns red

$fname=$_REQUEST["fname"];

$db = new SQLite3('db/test.db');

//below adds qoutes to allow search to work correctly
$testfname = '\''.'%'.$fname.'%'.'\'';

$thequery = 'select * from glossary where title like '. $testfname .' limit 100';
//echo $thequery;
//echo $testfname;

$results = $db->query($thequery);


echo '<table id="customers">
<tr>
<th>Id</th>
<th>Title</th>
<th>Relationships</th>
</tr>';

while ($row = $results->fetchArray()){
	echo 
	'<tr>
	<td>'.$row[''].'</td>
	<td>'.$row['title'].'</td>
	<td>'.$row['relationships'].'</td>
	</tr>';
}
echo '</table>';

?>

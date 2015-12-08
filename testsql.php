<?php

// php that runs for the previous and next button presses

$fname=$_REQUEST["fname"];

$db = new SQLite3('db/test.db');

$results = $db->query('select * from glossary where rowid >= '.$fname.' limit 10');


echo '<table id="customers">
<tr>
<th>Id</th>
<th>Title</th>
<th>Definition</th>
<th>Notes</th>
<th>Examples</th>
<th>Relationships</th>
</tr>';

while ($row = $results->fetchArray()){
	echo 
	'<tr>
	<td>'.$row[''].'</td>
	<td>'.$row['title'].'</td>
	<td>'.$row['definition'].'</td>
	<td>'.$row['notes'].'</td>
	<td>'.$row['examples'].'</td>
	<td>'.$row['relationships'].'</td>
	</tr>';
}
echo '</table>';

//echo 'test';
//echo $fname;

?>

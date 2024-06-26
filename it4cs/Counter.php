<?php
	$con = mysql_connect("127.0.0.1","it4cs","it4cs");
	if (!$con)
	{
		die('Could not connect: ' . mysql_error());
	}
	mysql_select_db("it4cs", $con);
	
	$result = mysql_query("SELECT Counter FROM usercounter WHERE ID=1");
	
	$row = mysql_fetch_array($result);
	$counter = $row[0];

	mysql_query("UPDATE usercounter SET Counter=".($counter + 1)." WHERE ID=1");

	mysql_close($con);
	
	echo "您是第".($counter + 1)."位使用者</br>";
?>
<?php
	echo "<table border = \"1\" style=\"text-align:left\">
			<tr>
				<th>趟次</th>";
	for($i = 1; $i <= $_GET["TurnNum"]; $i++)
	{
		echo "<th>第".$i."趟</th>";
	}
	echo "	</tr>
			<tr>
				<th>時間(s)</th>";
	for($i = 1; $i <= $_GET["TurnNum"]; $i++)
	{
		echo "<th><input id = \"input_SP_Time_S".$_GET["SetsIndex"]."_T".$i."\" size = \"5\" type = \"text\" value = \"0\" onkeyup = \"SprintCaculateTrainingTime(".$_GET["SetsIndex"].",".$_GET["TurnNum"].")\"/></th>";
	}
	echo "	</tr>
		</table>";
?>
<?php
	for($i = 1; $i <= $_GET["SetNum"]; $i++)
	{
		echo "<h3>第".$i."組</h>
			</br>單趟最佳訓練時間(s)：<input id = \"input_BS_BestTime_S".$i."\" size = \"5\" type = \"text\" value = \"0\" disabled = \"disabled\"/>
			<table border = \"1\" style=\"text-align:left\">
				<tr>
					<th id = \"th_BS_TurnNum".$i."\">趟數</th>
					<th><input id = \"input_BS_TNum_S".$i."\" size = \"5\" type = \"text\" value = \"0\" onkeyup = \"BickSprintCaculatPrescription(".$i.", this.value, 3)\"/></th>
					<th>趟間休息時間(s)</th>
					<th><input id = \"input_BS_RelaxPerT_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/></th>
					<th rowspan=\"3\">總時間小計(s)</th>
					<th rowspan=\"3\"><input id = \"input_BS_TotalTime_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/></th>
					<th rowspan=\"3\">訓練量小計</th>
					<th rowspan=\"3\"><input id = \"input_BS_PartT_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/></th>
				</tr>
				<tr>
					<th id = \"th_BS_T_RRate".$i."\">訓練時間：休息時間</th>
					<th><input id = \"input_BS_TTime2_S".$i."\" size = \"5\" type = \"text\" value = \"0\" onkeyup = \"BickSprintCaculatPrescription(".$i.", this.value, 1)\"/> ： <input id = \"input_BS_RTime_S".$i."\" size = \"5\" type = \"text\" value = \"0\" onkeyup = \"BickSprintCaculatPrescription(".$i.", this.value, 2)\"/></th>
					<th>訓練時間(s)</th>
					<th><input id = \"input_BS_TTime_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/></th>
				</tr>
				<tr>			
					<th colspan=\"2\"></th>
					<th>休息時間(s)</th>
					<th><input id = \"input_BS_RelaxTime_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/></th>
				</tr>
			</table>
			<div id = \"div_BS_TrainingTimeTable".$i."\"></div>";
	}
?>
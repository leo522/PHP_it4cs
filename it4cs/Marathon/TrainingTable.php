﻿<?php
	$TurnNum = $_GET["TurnNum"];
	
	echo "<button id=\"button_ReturnMenu\" type=\"button\" onclick = \"BasicInfo()\">完成</button></br>
	訓練量合計：<input id = \"input_TotT\" size = \"5\" type = \"text\" disabled = \"disabled\"/>
		臨界速度跑之力竭時間：<input id = \"input_FailureTimeLimite_min_T\" size = \"5\" type = \"text\" onkeyup = \"MarathonRefreshPartT()\"/>min<input id = \"input_FailureTimeLimite_sec_T\" size = \"5\" type = \"text\" onkeyup = \"MarathonRefreshPartT()\"/>sec
		<table id = \"table_Examination\" border = \"1\">
			<tr>
				<td>趟</td>";
				for($i = 1; $i <= $TurnNum; $i++)
				{
					echo "<td><input id = \"input_Turn_T".$i."\" size = \"5\" type = \"text\" value = \"".$i."\" disabled = \"disabled\"/></td>";
				}
			echo "</tr>
			
			<tr>
				<td>距離(km)</td>";
				for($i = 1; $i <= $TurnNum; $i++)
				{
					echo "<td><input id = \"input_Distance_T".$i."\" size = \"5\" type = \"text\" onkeyup = \"MarathonCalculateAverageSpeed(".$i.")\"/></td>";
				}
			echo "</tr>
			
			<tr>
				<td title = \"跑速須小於臨界速度。\">訓練時間(min)</td>";
				for($i = 1; $i <= $TurnNum; $i++)
				{
					echo "<td><input id = \"input_TrainingTime_T".$i."\" size = \"5\" type = \"text\" onkeyup = \"MarathonCalculateAverageSpeed(".$i.")\"/></td>";
				}
			echo "</tr>
			
			<tr>
				<td>平均速度(km/h)</td>";
				for($i = 1; $i <= $TurnNum; $i++)
				{
					echo "<td><input id = \"input_AverageSpeed_T".$i."\" size = \"5\" type = \"text\" disabled = \"disabled\"/></td>";
				}
			echo "</tr>
			
			<tr>
				<td title = \"休息定義為停止運動後心率降至110bpm之時間。\">休息時間</td>";
				for($i = 1; $i <= $TurnNum; $i++)
				{
					echo "<td><input id = \"input_RelaxTime_T_Min".$i."\" size = \"5\" type = \"text\" onkeyup = \"MarathonCalculateAverageSpeed(".$i.")\"/>min<input id = \"input_RelaxTime_T_Sec".$i."\" size = \"5\" type = \"text\" onkeyup = \"MarathonCalculateAverageSpeed(".$i.")\"/>sec</td>";
				}
			echo "</tr>
			
			<tr>
				<td>訓練量小計</td>";
				for($i = 1; $i <= $TurnNum; $i++)
				{
					echo "<td><input id = \"input_PartT_T".$i."\" size = \"5\" type = \"text\" disabled = \"disabled\"/></td>";
				}
			echo "</tr>
		</table>";
?>
<?php
	echo "<h2>最大肌力評估與次最大肌力力竭次數測量</h2>
		<p title = \"依照NSCA建議方式測量。\">步驟一：測量1RM</p>
		測定動作：<input type = \"text\" id = \"input_ActionName\" disabled = \"disabled\"></br>
		<table id = \"table_1RM_Exam\" border = \"1\">
			<tr>
				<td>重量(kg)</td>
				<td>重複次數</td>
				<td title = \"採用維基百科建議: 1RM = (R/30 + 1)*W，R:重複次數，W:重量\">最大肌力(kg)</td>
			</tr>
			<tr>
				<td><input id = \"input_Weight\" type = \"text\" onkeyup = \"MuscleCalculateMaxPower(".$_GET["week"].", ".$_GET["taskID"].")\"/></td>
				<td><input id = \"input_RepeatTimes\" type = \"text\" onkeyup = \"MuscleCalculateMaxPower(".$_GET["week"].", ".$_GET["taskID"].")\"/></td>
				<td><input id = \"input_MaxPower\" type = \"text\" disabled = \"disabled\"/></td>
			</tr>
		</table></br>
		<p>步驟二</p>
		<table border = \"1\">
			<tr>
				<td colspan=\"2\">強度百分比</td>
				<td>重量(kg)</td>
				<td>力竭次數</td>
			</tr>";
		for($i = 0; $i < 7; $i++)
		{
		echo"<tr>";
			if($i == 0)
			{
				echo "<td></td>";
			}
			else
			{
				echo"<td>".(100-($i*5))."%</td>";
			}
			echo"<td>1RM</td>
				<td><input id = \"input_WeightPercent".(100-($i*5))."\" type = \"text\" disabled = \"disabled\"/></td>";
			if($i == 0)
			{
			echo"<td></td>";
			}
			else
			{
			echo"<td><input id = \"input_FailTimes".(100-($i*5))."\" type = \"text\" onchange = \"MuscleSetFaileTime(".$_GET["week"].", ".$_GET["taskID"].", ".$i.")\"/></td>";
			}
			echo"</tr>";
		}
		echo"</table>
		<button id=\"button_ReturnMenu\" type=\"button\" onclick = \"BasicExaminationInfo()\">上一頁</button>
		<button id=\"button_ReturnMenu\" type=\"button\" onclick = \"MusclePrescription(".$_GET["week"].", ".$_GET["taskID"].")\">下一步</button>
		<div id = \"div_MuscleModel\" style =\"position:relative;\">
			<img src = \"Muscle\MusclePointer\MuscleModel.png\" style =\"position:absolute; left:0px; top:0px;\" />";
			for($i = 0; $i < 74; $i++)
			{
				echo "<img id = \"img_MusclePointer_".$i."\" src = \"Muscle\MusclePointer\Muscle_".$i.".png\" style =\"position:absolute; left:0px; top:0px;\" hidden = \"hidden\"/>";
			}
	echo "</div>";
?>
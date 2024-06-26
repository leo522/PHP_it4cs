<?php
	echo "<h2 title = \"共四種模式，每種模式可能是整體、多關節或單關節動作。\">肌力訓練處方/訓練量評估</h2>
		</br>
		<table border = \"1\">
			<tr>
				<td colspan=\"2\">強度百分比</td>
				<td>重量(kg)</td>
				<td>力竭次數</td>
			</tr>";
		for($i = 0; $i < 7; $i++)
		{
		echo"<tr>
				<td>".(100-($i*5))."%</td>";
			echo"<td>1RM</td>
				<td><input id = \"input_WeightPercent".(100-($i*5))."\" type = \"text\" disabled = \"disabled\"/></td>";
			if($i == 0)
			{
			echo"<td></td>";
			}
			else
			{
			echo"<td><input id = \"input_FailTimes".(100-($i*5))."\" type = \"text\" disabled = \"disabled\"/></td>";
			}
			echo"</tr>";
		}
		echo"</table>
		<button id=\"button_LastPage\" type=\"button\" onclick = \"MuscleOneRM(".$_GET["week"].", ".$_GET["taskID"].")\">上一頁</button>
		<button id=\"button_ReturnMenu\" type=\"button\" onclick = \"BasicExaminationInfo()\">完成</button></br>
		
		<div id = \"div_Mode\">
			套用訓練模式：
			<select id = \"select_Mode\">
				<option>最大肌力模式</option>
				<option title = \"適用單次最大瞬發力項目\">瞬發力I模式</option>
				<option title = \"適用多次使用瞬發力項目\">瞬發力II模式</option>
				<option>肌肥大模式</option>
				<option>肌耐力模式</option>
			</select><button id =\"button_ApplyAll\" type = \"button\" onclick = \"MuscleApplyAll(".$_GET["week"].", ".$_GET["taskID"].",select_Mode.value)\">所有組套用</button>
		</div>
		<div id = \"div_SetNum\">
			訓練組數：
			<select id = \"select_Sets\" onchange = \"MuscleSetSetNum(".$_GET["week"].", ".$_GET["taskID"].")\">
				<option value = \"1\">1</option>
				<option value = \"2\">2</option>
				<option value = \"3\">3</option>
				<option value = \"4\">4</option>
				<option value = \"5\">5</option>
				<option value = \"6\">6</option>
				<option value = \"7\">7</option>
				<option value = \"8\">8</option>
				<option value = \"9\">9</option>
				<option value = \"10\">10</option>
			</select>
		</div></br>
		<div>
			總訓練量：<input id = \"input_ActionTraining\" type = \"text\" size = \"3\" disable = \"disabled\"/>
		</div></br>
		<div id = \"div_PrescriptionInfo\">
		</div>";
?>
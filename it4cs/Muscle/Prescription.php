<?php
	for($i = 0; $i < $_GET["SetNum"]; $i++)
	{
		echo "	<h3>第".($i+1)."組</h3>
				<select id = \"select_TrainingMode_".$i."\" onchange = \"MscleChangeMode(".$_GET["week"].",".$_GET["taskNum"].",".$i.")\">
					<option>最大肌力模式</option>
					<option title = \"適用單次最大瞬發力項目\">瞬發力I模式</option>
					<option title = \"適用多次使用瞬發力項目\">瞬發力II模式</option>
					<option>肌肥大模式</option>
					<option>肌耐力模式</option>
				</select>
				<table border = \"1\">
					<tr>
						<td>動作時間:休息時間</td>
						<td><input id =\"input_ActionTimeRate_".$i."\" type = \"text\" size = \"3\" onkeyup = \"MuscleCalculatePrescription(".$_GET["week"].",".$_GET["taskNum"].", 0, ".$i.", this.value)\"/>:<input id =\"input_RelaxTimeRate_".$i."\" type = \"text\" size = \"3\" onkeyup = \"MuscleCalculatePrescription(".$_GET["week"].",".$_GET["taskNum"].", 1, ".$i.", this.value)\"/></td>
						<td>動作時間(s)</td>
						<td><input id =\"input_ActionTime_".$i."\" type = \"text\" size = \"3\" onkeyup = \"MuscleCalculatePrescription(".$_GET["week"].",".$_GET["taskNum"].", 5, ".$i.", this.value)\"/></td>
						<td rowspan=\"4\">訓練重量小計(kg)</td>
						<td rowspan=\"4\"><input id =\"input_SumOfWeight_".$i."\" type = \"text\" size = \"3\"/></td>
						<td rowspan=\"4\">訓練量小計</td>
						<td rowspan=\"4\"><input id =\"input_SumOfTraining_".$i."\" type = \"text\" size = \"3\"/></td>
					</tr>
					<tr>
						<td id = \"td_StrongPercentage_".$i."\">強度(%1RM)</td>
						<td><input id = \"input_StrongPercent_".$i."\" type = \"text\" size = \"3\" onkeyup = \"MuscleCalculatePrescription(".$_GET["week"].",".$_GET["taskNum"].", 2, ".$i.", this.value)\"/>%</td>
						<td>次間休息(s)</td>
						<td><input id =\"input_RelaxTime_Time_".$i."\" type = \"text\" size = \"3\" disabled = \"disabled\"/></td>
					</tr>
					<tr>
						<td id = \"td_NumOfSet_".$i."\">組數</td>
						<td><input id = \"input_NumOfSet_".$i."\" type = \"text\" size = \"3\" onkeyup = \"MuscleCalculatePrescription(".$_GET["week"].",".$_GET["taskNum"].", 3, ".$i.", this.value)\"/></td>
						<td id = \"td_RelaxTime_Set_".$i."\">組間休息</td>
						<td><input id =\"input_RelaxTime_Set_".$i."\" type = \"text\" size = \"3\" onkeyup = \"MuscleCalculatePrescription(".$_GET["week"].",".$_GET["taskNum"].", 6, ".$i.", this.value)\"/></td>
					</tr>
					<tr>
						<td id = \"td_RepeatTime_".$i."\">重複次數</td>
						<td><input id = \"input_RepeatTime_".$i."\" type = \"text\" size = \"3\" onkeyup = \"MuscleCalculatePrescription(".$_GET["week"].",".$_GET["taskNum"].", 4, ".$i.", this.value)\"/></td>
						<td>時間小計(s)</td>
						<td><input id = \"input_SetTime_".$i."\" type = \"text\" size = \"3\" disabled = \"disabled\"/></td>
					</tr>
				</table></br>";
	}
?>
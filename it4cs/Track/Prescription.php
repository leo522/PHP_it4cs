<?php
	for($i = 1; $i <= $_GET["SetNum"]; $i++)
	{
		echo "<h3>第".$i."組</h>
			<table border = \"1\" style=\"text-align:left\">
				<tr>
					<th>強度(%臨界速度)</th>
					<th><input id = \"input_TR_TStrong".$i."\" type = \"text\" size = \"5\" onkeyup = \"TrackCaculatPrescription(".$i.", this.value, 3)\"/>% = <input id = \"input_TR_PercentToSpeed".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>km/h</th>
					<th>單趟訓練時間</th>
					<th><input id = \"input_TR_TimePerT_min_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>min
						<input id = \"input_TR_TimePerT_sec_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>sec
					</th>
				</tr>
				<tr>
					<th>單趟跑距離(m)</th>
					<th>
						<select id = \"select_TR_TDistance_S".$i."\" onchange = \"TrackCaculatPrescription(".$i.", this.value, 0)\">
							<option value = \"200\">200</option>
							<option value = \"400\">400</option>
							<option value = \"800\">800</option>
							<option value = \"1200\">1200</option>
						</select>
					</th>
					<th>單趟休息時間</th>
					<th><input id = \"input_TR_RelaxPerT_min_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>min
						<input id = \"input_TR_RelaxPerT_sec_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>sec
					</th>
				</tr>
				<tr>
					<th id = \"th_TR_T_RRate".$i."\">訓練時間：休息時間</th>
					<th><input id = \"input_TR_TTime2_S".$i."\" size = \"5\" type = \"text\" value = \"\" onkeyup = \"TrackCaculatPrescription(".$i.", this.value, 1)\"/> ： <input id = \"input_TR_RTime_S".$i."\" size = \"5\" type = \"text\" value = \"\" onkeyup = \"TrackCaculatPrescription(".$i.", this.value, 2)\"/></th>
					<th>單組時間</th>
					<th><input id = \"input_TR_TimePerS_min_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>min
						<input id = \"input_TR_TimePerS_sec_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>sec
					</th>
				</tr>
				<tr>
					<th id = \"th_TR_TurnNum".$i."\">趟數</th>
					<th><input id = \"input_TR_TNum_S".$i."\" size = \"5\" type = \"text\" value = \"\" onkeyup = \"TrackCaculatPrescription(".$i.", this.value, 4)\"/></th>
					<th>訓練量小計</th>
					<th><input id = \"input_TR_PartT_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/></th>
				</tr>
			</table>";
	}
?>
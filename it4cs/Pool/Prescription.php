<?php
	for($i = 1; $i <= $_GET["SetNum"]; $i++)
	{
		echo "<h3>第".$i."組</h>
			<table border = \"1\" style=\"text-align:left\">
				<tr>
					<th>強度(%臨界速度)</th>
					<th><input id = \"input_PO_TStrong".$i."\" type = \"text\" size = \"5\" onkeyup = \"PoolCaculatPrescription(".$i.", this.value, 3)\"/>% = <input id = \"input_PO_PercentToSpeed".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>m/s</th>
					<th>單趟訓練時間</th>
					<th><input id = \"input_PO_TimePerT_min_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>min
						<input id = \"input_PO_TimePerT_sec_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>sec
					</th>
				</tr>
				<tr>
					<th>單趟泳距離(m)</th>
					<th>
						<select id = \"select_PO_TDistance_S".$i."\" onchange = \"PoolCaculatPrescription(".$i.", this.value, 0)\">
							<option value = \"100\">100</option>
							<option value = \"200\">200</option>
							<option value = \"400\">400</option>
							<option value = \"800\">800</option>
						</select>
					</th>
					<th>單趟休息時間</th>
					<th><input id = \"input_PO_RelaxPerT_min_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>min
						<input id = \"input_PO_RelaxPerT_sec_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>sec
					</th>
				</tr>
				<tr>
					<th id = \"th_PO_T_RRate".$i."\">訓練時間：休息時間</th>
					<th><input id = \"input_PO_TTime2_S".$i."\" size = \"5\" type = \"text\" value = \"\" onkeyup = \"PoolCaculatPrescription(".$i.", this.value, 1)\"/> ： <input id = \"input_PO_RTime_S".$i."\" size = \"5\" type = \"text\" value = \"\" onkeyup = \"PoolCaculatPrescription(".$i.", this.value, 2)\"/></th>
					<th>單組時間</th>
					<th><input id = \"input_PO_TimePerS_min_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>min
						<input id = \"input_PO_TimePerS_sec_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>sec
					</th>
				</tr>
				<tr>
					<th id = \"th_PO_TurnNum".$i."\">趟數</th>
					<th><input id = \"input_PO_TNum_S".$i."\" size = \"5\" type = \"text\" value = \"\" onkeyup = \"PoolCaculatPrescription(".$i.", this.value, 4)\"/></th>
					<th>訓練量小計</th>
					<th><input id = \"input_PO_PartT_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/></th>
				</tr>
			</table>";
	}
?>
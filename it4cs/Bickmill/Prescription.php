<?php
	 for($i = 1; $i <= $_GET["SetNum"]; $i++)
	{
		echo "<h3>第".$i."組</h3>
			<table border = \"1\" style=\"text-align:left\">
				<tr>
					<th>強度(%最大功率)</th>
					<th><select id = \"select_BM_TStrong_S".$i."\" onchange = \"BickmillCaculatPrescription(".$i.", this.value, 5)\">
							<option value = \"80\">80%</option>
							<option value = \"85\">85%</option>
							<option value = \"90\">90%</option>
							<option value = \"95\">95%</option>
						</select><input id = \"input_BM_PercentToSpeed".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>W
						</th>
					<th>趟做功(kJ)</th>
					<th><input id = \"input_BM_DistancePerT_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/></th>
					<th rowspan=\"4\">訓練量小計</th>
					<th rowspan=\"4\"><input id = \"input_BM_PartT_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/></th>
				</tr>
				<tr>
					<th id = \"th_BM_T_FRate".$i."\">訓練時間：力竭時間</th>
					<th><input id = \"input_BM_TTime_S".$i."\" size = \"5\" type = \"text\" value = \"\" onkeyup = \"BickmillCaculatPrescription(".$i.", this.value, 0)\"/> ： <input id = \"input_BM_FTime_S".$i."\" size = \"5\" type = \"text\" value = \"\" onkeyup = \"BickmillCaculatPrescription(".$i.", this.value, 1)\"/></th>
					<th>單趟訓練時間</th>
					<th><input id = \"input_BM_TimePerT_min_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>min
						<input id = \"input_BM_TimePerT_sec_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>sec
					</th>
				</tr>
				<tr>
					<th id = \"th_BM_T_RRate".$i."\">訓練時間：休息時間</th>
					<th><input id = \"input_BM_TTime2_S".$i."\" size = \"5\" type = \"text\" value = \"\" onkeyup = \"BickmillCaculatPrescription(".$i.", this.value, 2)\"/> ： <input id = \"input_BM_RTime_S".$i."\" size = \"5\" type = \"text\" value = \"\" onkeyup = \"BickmillCaculatPrescription(".$i.", this.value, 3)\"/></th>
					<th>單趟休息時間</th>
					<th><input id = \"input_BM_RelaxPerT_min_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>min
						<input id = \"input_BM_RelaxPerT_sec_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>sec
					</th>
				</tr>
				<tr>
					<th id = \"th_BM_TurnNum".$i."\">趟數</th>
					<th><input id = \"input_BM_TNum_S".$i."\" size = \"5\" type = \"text\" value = \"\" onkeyup = \"BickmillCaculatPrescription(".$i.", this.value, 4)\"/></th>
					<th>單組時間</th>
					<th><input id = \"input_BM_TimePerS_min_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>min
						<input id = \"input_BM_TimePerS_sec_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>sec
					</th>
				</tr>
			</table>";
	}
?>
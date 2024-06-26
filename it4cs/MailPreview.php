<?php
	echo "日期：<input id = \"input_Date_Year\" type = \"text\" disabled = \"disabled\"/>年<input id = \"input_Date_Month\" type = \"text\" disabled = \"disabled\"/>月<input id = \"input_Date_Day\" type = \"text\" disabled = \"disabled\"/>日</br>
		用途：<input id = \"input_Stage\" type = \"text\" disabled = \"disabled\"/>";
	if($_POST["TreadmillTest"] != 0)
	{
		echo"<h2>有氧/無氧代謝能力測定:跑台法</h2>
			<p>最大跑速(km/h)：<input id = \"input_MaxSpeed\" type = \"text\" disabled = \"disabled\"/></p>
			</p>臨界速度(km/h)：<input id = \"input_Treadmill_LimitSpeed\" type = \"text\" disabled = \"disabled\"/></p>
			<p>最大無氧做功(m)：<input id = \"input_Treadmill_MaxWork\" type = \"text\" disabled = \"disabled\"/></p>";

		echo "<table id = \"table_Examination\"  border = \"1\">
				<tr>
					<td>強度百分比</td>
					<td>力竭時間(s)</td>
					<td>速度(km/h)</td>
				</tr>";
				
				for($i = 0; $i < 4; $i++)
				{
					$Strong = 95-($i*5);
					echo "<tr>
							<td>".$Strong."%</td>
							<td><input id = \"input_".$Strong."Time\"type = \"text\"/ disabled = \"disabled\"/></td>
							<td><input id = \"input_".$Strong."Speed\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
				}
				echo "	<tr>
							<td><i>r</i> <sup>2</sup></td>
							<td ColSpan = \"3\"><input id = \"input_TM_R2\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
		echo "</table>";
	}
	
	if($_POST["TrackTest"] != 0)
	{
		echo "<h2>有氧/無氧代謝能力測定:田徑場法</h2>
		
			  <p>臨界速度(km/h)：<input id = \"input_Track_LimitSpeed\" type = \"text\" disabled = \"disabled\"/></p>
			  <p>最大無氧做功(m)：<input id = \"input_Track_MaxWork\" type = \"text\" disabled = \"disabled\"/></p>
			  
			  <table id = \"table_Examination\" border = \"1\">
				<tr>
					<td>距離(m)</td>
					<td>力竭時間(s)</td>
					<td>速度(km/h)</td>
				</tr>";
				
				for($i = 0; $i < 4; $i++)
				{
					switch($i)
					{
						case 0;
							$distance = 200;
							break;
						case 1;
							$distance = 400;
							break;
						case 2;
							$distance = 800;
							break;
						case 3;
							$distance = 1200;
							break;
					}
					echo "<tr>
							<td>".$distance."</td>
							<td><input id = \"input_".$distance."Time\" type = \"text\" disabled = \"disabled\"/></td>
							<td><input id = \"input_".$distance."Speed\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
				}
				echo "	<tr>
							<td><i>r</i> <sup>2</sup></td>
							<td ColSpan = \"3\"><input id = \"input_TR_R2\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
		echo  "</table>";
	}
	if($_POST["PoolTest"] != 0)
	{
		echo "<h2>有氧/無氧代謝能力測定:泳池法</h2>
		
			  <p>臨界速度(m/s)：<input id = \"input_Pool_LimitSpeed\" type = \"text\" disabled = \"disabled\"/></p>
			  <p>最大無氧做功(m)：<input id = \"input_Pool_MaxWork\" type = \"text\" disabled = \"disabled\"/></p>
			  
			  <table id = \"table_Examination\" border = \"1\">
				<tr>
					<td>距離(m)</td>
					<td>力竭時間(s)</td>
					<td>速度(m/s)</td>
				</tr>";
				
				for($i = 0; $i < 4; $i++)
				{
					switch($i)
					{
						case 0;
							$distance = 100;
							break;
						case 1;
							$distance = 200;
							break;
						case 2;
							$distance = 400;
							break;
						case 3;
							$distance = 800;
							break;
					}
					echo "<tr>
							<td>".$distance."</td>
							<td><input id = \"input_Pool".$distance."Time\" type = \"text\" disabled = \"disabled\"/></td>
							<td><input id = \"input_Pool".$distance."Speed\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
				}
				echo "	<tr>
							<td><i>r</i> <sup>2</sup></td>
							<td ColSpan = \"3\"><input id = \"input_PO_R2\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
		echo  "</table>";
	}
	if($_POST["BickmillTest"] != 0)
	{
		echo"<h2>有氧/無氧代謝能力測定:滾筒訓練台法</h2>
			<p>最大功率(W)：<input id = \"input_BM_MaxSpeed\" type = \"text\" disabled = \"disabled\"/></p>
			</p>臨界功率(W)：<input id = \"input_Bickmill_LimitSpeed\" type = \"text\" disabled = \"disabled\"/></p>
			<p>最大無氧做功(kJ)：<input id = \"input_Bickmill_MaxWork\" type = \"text\" disabled = \"disabled\"/></p>";

		echo "<table id = \"table_Examination\"  border = \"1\">
				<tr>
					<td>強度百分比</td>
					<td>力竭時間(s)</td>
					<td>功率值(W)</td>
				</tr>";
				
				for($i = 0; $i < 4; $i++)
				{
					$Strong = 95-($i*5);
					echo "<tr>
							<td>".$Strong."%</td>
							<td><input id = \"input_BM_".$Strong."Time\"type = \"text\"/ disabled = \"disabled\"/></td>
							<td><input id = \"input_BM_".$Strong."Speed\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
				}
				echo "	<tr>
							<td><i>r</i> <sup>2</sup></td>
							<td ColSpan = \"3\"><input id = \"input_BM_R2\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
		echo "</table>";
	}
	if($_POST["SprintTest"] != 0)
	{
		echo "<div id = \"div_ExaminationTitle\"><h2>100m衝刺跑最大速力竭時間</h2>
			  
			  <table id = \"table_Examination\" border = \"1\">
				<tr>
					<td>距離(m)</td>
					<td>時間(s)</td>
					<td>速度(m/s)</td>
					<td>差值%</td>
				</tr>";
				
				for($i = 0; $i < 6; $i++)
				{
					$distance = 50 + 10 * $i;
					echo "<tr>
							<td>".$distance."</td>
							<td><input id = \"input_SP_".$distance."Time\" type = \"text\" disabled = \"disabled\"/></td>
							<td><input id = \"input_SP_".$distance."Speed\" type = \"text\" disabled = \"disabled\" value = \"0\"/></td>
							<td><input id = \"input_SP_".$distance."Percent\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
				}
		echo  "</table>";
	}
	if($_POST["SwimSprintTest"] != 0)
	{
		echo "<div id = \"div_ExaminationTitle\"><h2>25m衝刺泳最大速力竭時間</h2>
			  
			  <table id = \"table_Examination\" border = \"1\">
				<tr>
					<td>距離(m)</td>
					<td>時間(s)</td>
					<td>速度(m/s)</td>
					<td>差值%</td>
				</tr>";
				
				for($i = 0; $i < 6; $i++)
				{
					$distance = 25 + 5 * $i;
					echo "<tr>
							<td>".$distance."</td>
							<td><input id = \"input_SS_".$distance."Time\" type = \"text\" disabled = \"disabled\"/></td>
							<td><input id = \"input_SS_".$distance."Speed\" type = \"text\" disabled = \"disabled\" value = \"0\"/></td>
							<td><input id = \"input_SS_".$distance."Percent\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
				}
		echo  "</table>";
	}
	if($_POST["BickSprintTest"] != 0)
	{
		echo "<div id = \"div_ExaminationTitle\"><h2>200m衝刺騎最大速力竭時間</h2>
			  </div>
			  
			  <table id = \"table_Examination\" border = \"1\">
				<tr>
					<td>時間(s)(50m開始計算)</td>
					<td>速度(km/m)</td>
					<td>距離(m)</td>
					<td>差值%</td>
				</tr>";
				
				for($i = 0; $i < 21; $i++)
				{
					$time = $i;
					echo "<tr>
							<td>".$time."</td>
							<td><input id = \"input_BS_".$time."Speed\" type = \"text\" disabled = \"disabled\" /></td>
							<td><input id = \"input_BS_".$time."Distance\" type = \"text\" disabled = \"disabled\" value = \"0\"/></td>
							<td><input id = \"input_BS_".$time."Percent\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
				}
		echo  "</table>";
	}
	if($_POST["TreadmillPrescription"] != 0)
	{
		echo "<h2>速耐力間歇跑(跑台法)</h2>
				訓練量合計：
				<input id = \"input_TM_TotT\" type = \"text\" disabled = \"disabled\"/></br>
				訓練變項：
				<input id = \"select_TM_Factor\" type = \"text\" disabled = \"disabled\"/>";
		for($i = 1; $i <= $_POST["TreadmillPrescription"]; $i++)
		{
		echo "<h3>第".$i."組</h3>
			<table border = \"1\" style=\"text-align:left\">
				<tr>
					<th>強度(%最大跑速)</th>
					<th><input id = \"select_TM_TStrong_S".$i."\" size = \"5\" type = \"text\" disabled = \"disabled\"/>% = <input id = \"input_TM_PercentToSpeed".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>km/h
						</th>
					<th>趟跑距離(m)</th>
					<th><input id = \"input_TM_DistancePerT_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/></th>
					<th rowspan=\"4\">訓練量小計</th>
					<th rowspan=\"4\"><input id = \"input_TM_PartT_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/></th>
				</tr>
				<tr>
					<th id = \"th_TM_T_FRate".$i."\">訓練時間：力竭時間</th>
					<th><input id = \"input_TM_TTime_S".$i."\" size = \"5\" type = \"text\" disabled = \"disabled\"/> ： <input id = \"input_TM_FTime_S".$i."\" size = \"5\" type = \"text\" disabled = \"disabled\"/></th>
					<th>單趟訓練時間</th>
					<th><input id = \"input_TM_TimePerT_min_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>min
						<input id = \"input_TM_TimePerT_sec_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>sec
					</th>
				</tr>
				<tr>
					<th id = \"th_TM_T_RRate".$i."\">訓練時間：休息時間</th>
					<th><input id = \"input_TM_TTime2_S".$i."\" size = \"5\" type = \"text\" disabled = \"disabled\"/> ： <input id = \"input_TM_RTime_S".$i."\" size = \"5\" type = \"text\" disabled = \"disabled\"/></th>
					<th>單趟休息時間</th>
					<th><input id = \"input_TM_RelaxPerT_min_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>min
						<input id = \"input_TM_RelaxPerT_sec_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>sec
					</th>
				</tr>
				<tr>
					<th id = \"th_TM_TurnNum".$i."\">趟數</th>
					<th><input id = \"input_TM_TNum_S".$i."\" size = \"5\" type = \"text\" disabled = \"disabled\"/></th>
					<th>單組時間</th>
					<th><input id = \"input_TM_TimePerS_min_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>min
						<input id = \"input_TM_TimePerS_sec_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>sec
					</th>
				</tr>
			</table>";
		}
	}
	if($_POST["TrackPrescription"] != 0)
	{
		echo "<h2>速耐力間歇跑(田徑場法)</h2>
				訓練量合計：<input id = \"input_TR_TotT\" type = \"text\" disabled = \"disabled\"></br>
				訓練變項：<input id = \"select_TR_Factor\" type = \"text\" disabled = \"disabled\"/>";
		for($i = 1; $i <= $_POST["TrackPrescription"]; $i++)
		{
			echo "<h3>第".$i."組</h>
				<table border = \"1\" style=\"text-align:left\">
					<tr>
						<th>強度(%臨界速度)</th>
						<th><input id = \"input_TR_TStrong".$i."\" type = \"text\" size = \"5\" disabled = \"disabled\"/>% = <input id = \"input_TR_PercentToSpeed".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>km/h</th>
						<th>單趟訓練時間</th>
						<th><input id = \"input_TR_TimePerT_min_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>min
							<input id = \"input_TR_TimePerT_sec_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>sec
						</th>
					</tr>
					<tr>
						<th>單趟跑距離(m)</th>
						<th>
							<input id = \"select_TR_TDistance_S".$i."\" type = \"text\" size = \"5\" disabled = \"disabled\"/>
						</th>
						<th>單趟休息時間</th>
						<th><input id = \"input_TR_RelaxPerT_min_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>min
							<input id = \"input_TR_RelaxPerT_sec_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>sec
						</th>
					</tr>
					<tr>
						<th id = \"th_TR_T_RRate".$i."\">訓練時間：休息時間</th>
						<th><input id = \"input_TR_TTime2_S".$i."\" size = \"5\" type = \"text\" disabled = \"disabled\"/> ： <input id = \"input_TR_RTime_S".$i."\" size = \"5\" type = \"text\" disabled = \"disabled\"/></th>
						<th>單組時間</th>
						<th><input id = \"input_TR_TimePerS_min_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>min
							<input id = \"input_TR_TimePerS_sec_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>sec
						</th>
					</tr>
					<tr>
						<th id = \"th_TR_TurnNum".$i."\">趟數</th>
						<th><input id = \"input_TR_TNum_S".$i."\" size = \"5\" type = \"text\" disabled = \"disabled\"/></th>
						<th>訓練量小計</th>
						<th><input id = \"input_TR_PartT_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/></th>
					</tr>
				</table>";
		}
	}
	if($_POST["PoolPrescription"] != 0)
	{
		echo "<h2>速耐力間歇泳訓練處方(泳池法)</h2>
				訓練量合計：<input id = \"input_PO_TotT\" type = \"text\" disabled = \"disabled\"></br>
				訓練變項：<input id = \"select_PO_Factor\" type = \"text\" disabled = \"disabled\"/>";
		for($i = 1; $i <= $_POST["PoolPrescription"]; $i++)
		{
			echo "<h3>第".$i."組</h>
				<table border = \"1\" style=\"text-align:left\">
					<tr>
						<th>強度(%臨界速度)</th>
						<th><input id = \"input_PO_TStrong".$i."\" type = \"text\" size = \"5\" disabled = \"disabled\"/>% = <input id = \"input_PO_PercentToSpeed".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>m/s</th>
						<th>單趟訓練時間</th>
						<th><input id = \"input_PO_TimePerT_min_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>min
							<input id = \"input_PO_TimePerT_sec_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>sec
						</th>
					</tr>
					<tr>
						<th>單趟跑距離(m)</th>
						<th>
							<input id = \"select_PO_TDistance_S".$i."\" type = \"text\" size = \"5\" disabled = \"disabled\"/>
						</th>
						<th>單趟休息時間</th>
						<th><input id = \"input_PO_RelaxPerT_min_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>min
							<input id = \"input_PO_RelaxPerT_sec_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>sec
						</th>
					</tr>
					<tr>
						<th id = \"th_PO_T_RRate".$i."\">訓練時間：休息時間</th>
						<th><input id = \"input_PO_TTime2_S".$i."\" size = \"5\" type = \"text\" disabled = \"disabled\"/> ： <input id = \"input_PO_RTime_S".$i."\" size = \"5\" type = \"text\" disabled = \"disabled\"/></th>
						<th>單組時間</th>
						<th><input id = \"input_PO_TimePerS_min_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>min
							<input id = \"input_PO_TimePerS_sec_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>sec
						</th>
					</tr>
					<tr>
						<th id = \"th_PO_TurnNum".$i."\">趟數</th>
						<th><input id = \"input_PO_TNum_S".$i."\" size = \"5\" type = \"text\" disabled = \"disabled\"/></th>
						<th>訓練量小計</th>
						<th><input id = \"input_PO_PartT_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/></th>
					</tr>
				</table>";
		}
	}
	if($_POST["BickmillPrescription"] != 0)
	{
		echo "<h2>速耐力間歇騎(公路/滾筒訓練台法)</h2>
				訓練量合計：
				<input id = \"input_BM_TotT\" type = \"text\" disabled = \"disabled\"/></br>
				訓練變項：
				<input id = \"select_BM_Factor\" type = \"text\" disabled = \"disabled\"/>";
		for($i = 1; $i <= $_POST["BickmillPrescription"]; $i++)
		{
		echo "<h3>第".$i."組</h3>
			<table border = \"1\" style=\"text-align:left\">
				<tr>
					<th>強度(%最大功率)</th>
					<th><input id = \"select_BM_TStrong_S".$i."\" size = \"5\" type = \"text\" disabled = \"disabled\"/>% = <input id = \"input_BM_PercentToSpeed".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>W
						</th>
					<th>趟做功(kJ)</th>
					<th><input id = \"input_BM_DistancePerT_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/></th>
					<th rowspan=\"4\">訓練量小計</th>
					<th rowspan=\"4\"><input id = \"input_BM_PartT_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/></th>
				</tr>
				<tr>
					<th id = \"th_BM_T_FRate".$i."\">訓練時間：力竭時間</th>
					<th><input id = \"input_BM_TTime_S".$i."\" size = \"5\" type = \"text\" disabled = \"disabled\"/> ： <input id = \"input_BM_FTime_S".$i."\" size = \"5\" type = \"text\" disabled = \"disabled\"/></th>
					<th>單趟訓練時間</th>
					<th><input id = \"input_BM_TimePerT_min_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>min
						<input id = \"input_BM_TimePerT_sec_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>sec
					</th>
				</tr>
				<tr>
					<th id = \"th_BM_T_RRate".$i."\">訓練時間：休息時間</th>
					<th><input id = \"input_BM_TTime2_S".$i."\" size = \"5\" type = \"text\" disabled = \"disabled\"/> ： <input id = \"input_BM_RTime_S".$i."\" size = \"5\" type = \"text\" disabled = \"disabled\"/></th>
					<th>單趟休息時間</th>
					<th><input id = \"input_BM_RelaxPerT_min_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>min
						<input id = \"input_BM_RelaxPerT_sec_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>sec
					</th>
				</tr>
				<tr>
					<th id = \"th_BM_TurnNum".$i."\">趟數</th>
					<th><input id = \"input_BM_TNum_S".$i."\" size = \"5\" type = \"text\" disabled = \"disabled\"/></th>
					<th>單組時間</th>
					<th><input id = \"input_BM_TimePerS_min_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>min
						<input id = \"input_BM_TimePerS_sec_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/>sec
					</th>
				</tr>
			</table>";
		}
	}
	if($_POST["SprintPrescription"] != 0)
	{
		echo "<h2>100m衝刺跑</h2>
		訓練量合計：<input id = \"input_SP_TotT\" type = \"text\" disabled = \"disabled\">";
		for($i = 1; $i <= $_POST["SprintPrescription"]; $i++)
		{
			echo "<h3>第".$i."組</h></br>
			單趟最佳訓練時間(s)：<input id = \"input_SP_BestTime_S".$i."\" size = \"5\" type = \"text\" value = \"0\" disabled = \"disabled\"/>";
			echo "<table border = \"1\" style=\"text-align:left\">
				<tr>
					<th id = \"th_SP_TurnNum".$i."\">趟數</th>
					<th><input id = \"input_SP_TNum_S".$i."\" size = \"5\" type = \"text\" value = \"0\" disabled = \"disabled\"/></th>
					<th>趟間休息時間(s)</th>
					<th><input id = \"input_SP_RelaxPerT_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/></th>
					<th rowspan=\"3\">總時間小計(s)</th>
					<th rowspan=\"3\"><input id = \"input_SP_TotalTime_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/></th>
					<th rowspan=\"3\">訓練量小計</th>
					<th rowspan=\"3\"><input id = \"input_SP_PartT_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/></th>
				</tr>
				<tr>
					<th id = \"th_SP_T_RRate".$i."\">訓練時間：休息時間</th>
					<th><input id = \"input_SP_TTime2_S".$i."\" size = \"5\" type = \"text\" value = \"0\" disabled = \"disabled\"/> ： <input id = \"input_SP_RTime_S".$i."\" size = \"5\" type = \"text\" value = \"0\" disabled = \"disabled\"/></th>
					<th>訓練時間(s)</th>
					<th><input id = \"input_SP_TTime_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/></th>
				</tr>
				<tr>
					<th colspan=\"2\"></th>
					<th>休息時間(s)</th>
					<th><input id = \"input_SP_RelaxTime_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/></th>
				</tr>
			</table>
			<div id = \"div_SP_TrainingTimeTable".$i."\"></div>";
		}
	}
	if($_POST["SwimSprintPrescription"] != 0)
	{
		echo "<h2>50m衝刺泳</h2>
		訓練量合計：<input id = \"input_SS_TotT\" type = \"text\" disabled = \"disabled\">";
		for($i = 1; $i <= $_POST["SwimSprintPrescription"]; $i++)
		{
			echo "<h3>第".$i."組</h></br>
			單趟最佳訓練時間(s)：<input id = \"input_SS_BestTime_S".$i."\" size = \"5\" type = \"text\" value = \"0\" disabled = \"disabled\"/>";
			echo "<table border = \"1\" style=\"text-align:left\">
				<tr>
					<th id = \"th_SS_TurnNum".$i."\">趟數</th>
					<th><input id = \"input_SS_TNum_S".$i."\" size = \"5\" type = \"text\" value = \"0\" disabled = \"disabled\"/></th>
					<th>趟間休息時間(s)</th>
					<th><input id = \"input_SS_RelaxPerT_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/></th>
					<th rowspan=\"3\">總時間小計(s)</th>
					<th rowspan=\"3\"><input id = \"input_SS_TotalTime_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/></th>
					<th rowspan=\"3\">訓練量小計</th>
					<th rowspan=\"3\"><input id = \"input_SS_PartT_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/></th>
				</tr>
				<tr>
					<th id = \"th_SS_T_RRate".$i."\">訓練時間：休息時間</th>
					<th><input id = \"input_SS_TTime2_S".$i."\" size = \"5\" type = \"text\" value = \"0\" disabled = \"disabled\"/> ： <input id = \"input_SS_RTime_S".$i."\" size = \"5\" type = \"text\" value = \"0\" disabled = \"disabled\"/></th>
					<th>訓練時間(s)</th>
					<th><input id = \"input_SS_TTime_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/></th>
				</tr>
				<tr>
					<th colspan=\"2\"></th>
					<th>休息時間(s)</th>
					<th><input id = \"input_SS_RelaxTime_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/></th>
				</tr>
			</table>
			<div id = \"div_SS_TrainingTimeTable".$i."\"></div>";
		}
	}
	if($_POST["BickSprintPrescription"] != 0)
	{
		echo "<h2>200m衝刺泳</h2>
		訓練量合計：<input id = \"input_BS_TotT\" type = \"text\" disabled = \"disabled\">";
		for($i = 1; $i <= $_POST["BickSprintPrescription"]; $i++)
		{
			echo "<h3>第".$i."組</h></br>
			單趟最佳訓練時間(s)：<input id = \"input_BS_BestTime_S".$i."\" size = \"5\" type = \"text\" value = \"0\" disabled = \"disabled\"/>";
			echo "<table border = \"1\" style=\"text-align:left\">
				<tr>
					<th id = \"th_BS_TurnNum".$i."\">趟數</th>
					<th><input id = \"input_BS_TNum_S".$i."\" size = \"5\" type = \"text\" value = \"0\" disabled = \"disabled\"/></th>
					<th>趟間休息時間(s)</th>
					<th><input id = \"input_BS_RelaxPerT_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/></th>
					<th rowspan=\"3\">總時間小計(s)</th>
					<th rowspan=\"3\"><input id = \"input_BS_TotalTime_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/></th>
					<th rowspan=\"3\">訓練量小計</th>
					<th rowspan=\"3\"><input id = \"input_BS_PartT_S".$i."\" size = \"5\" type = \"text\" value = \"\" disabled = \"disabled\"/></th>
				</tr>
				<tr>
					<th id = \"th_BS_T_RRate".$i."\">訓練時間：休息時間</th>
					<th><input id = \"input_BS_TTime2_S".$i."\" size = \"5\" type = \"text\" value = \"0\" disabled = \"disabled\"/> ： <input id = \"input_BS_RTime_S".$i."\" size = \"5\" type = \"text\" value = \"0\" disabled = \"disabled\"/></th>
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
	}
	if($_POST["MarathonPrescription"] != 0)
	{
		echo "<h2>長距離耐力跑</h2>
		<div id = \"div_PrescriptionInfo\"></div>";
	}
	if($_POST["SwimMarathonPrescription"] != 0)
	{
		echo "<h2>長距離耐力泳</h2>
		<div id = \"div_SM_PrescriptionInfo\"></div>";
	}
	if($_POST["BickMarathonPrescription"] != 0)
	{
		echo "<h2>長距離耐力騎</h2>
		<div id = \"div_BMar_PrescriptionInfo\"></div>";
	}
	if($_POST["MusclePrescription"] != 0)
	{
		echo "<h2>肌力訓練</h2>";
		for($week = 0; $week < 7; $week++)
		{
			$Date_Attribute = "";
			$Date_Name = "";
			switch($week)
			{
			case 0:
				$Date_Attribute = "TaskNum_Sun";
				$Date_Name = "星期日";
				break;
			case 1:
				$Date_Attribute = "TaskNum_Mon";
				$Date_Name = "星期一";
				break;
			case 2:
				$Date_Attribute = "TaskNum_Tue";
				$Date_Name = "星期二";
				break;
			case 3:
				$Date_Attribute = "TaskNum_Wen";
				$Date_Name = "星期三";
				break;
			case 4:
				$Date_Attribute = "TaskNum_Thr";
				$Date_Name = "星期四";
				break;
			case 5:
				$Date_Attribute = "TaskNum_Fri";
				$Date_Name = "星期五";
				break;
			case 6:
				$Date_Attribute = "TaskNum_Sat";
				$Date_Name = "星期六";
				break;			
			}
			if($_POST[$Date_Attribute] > 0)
			{
				echo "<h3>".$Date_Name."</h3>";
				for($i = 0; $i < $_POST[$Date_Attribute]; $i++)
				{
					if($_POST["Task_".$week."_".$i] != "")
					{
						//<input id = \"input_MS_%RM_content_week_taskNum\" type = \"text\" size = \"5\" disabled = \"disabled\"/>
						echo "<h4>".$_POST["Task_".$week."_".$i]."</h4>
						<table border = \"1\" style=\"text-align:left\">
							<tr>
								<th>%1RM</th>
								<th>100</th>
								<th>95</th>
								<th>90</th>
								<th>85</th>
								<th>80</th>
								<th>75</th>
								<th>70</th>
							</tr>
							<tr>
								<th>重量(kg)</th>
								<th><input id = \"input_MS_100RM_Weight_".$week."_".$i."\" type = \"text\" size = \"5\" disabled = \"disabled\"/></th>
								<th><input id = \"input_MS_95RM_Weight_".$week."_".$i."\" type = \"text\" size = \"5\" disabled = \"disabled\"/></th>
								<th><input id = \"input_MS_90RM_Weight_".$week."_".$i."\" type = \"text\" size = \"5\" disabled = \"disabled\"/></th>
								<th><input id = \"input_MS_85RM_Weight_".$week."_".$i."\" type = \"text\" size = \"5\" disabled = \"disabled\"/></th>
								<th><input id = \"input_MS_80RM_Weight_".$week."_".$i."\" type = \"text\" size = \"5\" disabled = \"disabled\"/></th>
								<th><input id = \"input_MS_75RM_Weight_".$week."_".$i."\" type = \"text\" size = \"5\" disabled = \"disabled\"/></th>
								<th><input id = \"input_MS_70RM_Weight_".$week."_".$i."\" type = \"text\" size = \"5\" disabled = \"disabled\"/></th>
							</tr>
							<tr>
								<th>力竭次數</th>
								<th></th>
								<th><input id = \"input_MS_95RM_Times_".$week."_".$i."\" type = \"text\" size = \"5\" disabled = \"disabled\"/></th>
								<th><input id = \"input_MS_90RM_Times_".$week."_".$i."\" type = \"text\" size = \"5\" disabled = \"disabled\"/></th>
								<th><input id = \"input_MS_85RM_Times_".$week."_".$i."\" type = \"text\" size = \"5\" disabled = \"disabled\"/></th>
								<th><input id = \"input_MS_80RM_Times_".$week."_".$i."\" type = \"text\" size = \"5\" disabled = \"disabled\"/></th>
								<th><input id = \"input_MS_75RM_Times_".$week."_".$i."\" type = \"text\" size = \"5\" disabled = \"disabled\"/></th>
								<th><input id = \"input_MS_70RM_Times_".$week."_".$i."\" type = \"text\" size = \"5\" disabled = \"disabled\"/></th>
							</tr>
						</table></br>
						使用肌群：<input id = \"input_MuscelGroup_".$week."_".$i."\" type = \"text\" size = \"150\"/></br>";
						
						for($j = 0; $j < $_POST["Task_SetNum_".$week."_".$i]; $j++)
						{
							echo "<h4>第".($j+1)."組</h4>
							訓練模式：<input id = \"input_MS_TrainingMode_".$week."_".$i."_".$j."\" type = \"text\" disabled = \"disabled\"/>
							<table border = \"1\">
								<tr>
									<td>動作時間:休息時間</td>
									<td><input id =\"input_MS_ActionTimeRate_".$week."_".$i."_".$j."\" type = \"text\" size = \"3\" disabled = \"disabled\"/>:<input id =\"input_MS_RelaxTimeRate_".$week."_".$i."_".$j."\" type = \"text\" size = \"3\" disabled = \"disabled\"/></td>
									<td>動作時間(s)</td>
									<td><input id =\"input_MS_ActionTime_".$week."_".$i."_".$j."\" type = \"text\" size = \"3\" disabled = \"disabled\"/></td>
									<td rowspan=\"4\">訓練重量小計(kg)</td>
									<td rowspan=\"4\"><input id =\"input_MS_SumOfWeight_".$week."_".$i."_".$j."\" type = \"text\" size = \"3\" disabled = \"disabled\"/></td>
									<td rowspan=\"4\">訓練量小計</td>
									<td rowspan=\"4\"><input id =\"input_MS_SumOfTraining_".$week."_".$i."_".$j."\" type = \"text\" size = \"3\" disabled = \"disabled\"/></td>
								</tr>
								<tr>
									<td>強度(%1RM)</td>
									<td><input id = \"input_MS_StrongPercent_".$week."_".$i."_".$j."\" type = \"text\" size = \"3\" disabled = \"disabled\"/>%</td>
									<td>次間休息(s)</td>
									<td><input id =\"input_MS_RelaxTime_Time_".$week."_".$i."_".$j."\" type = \"text\" size = \"3\" disabled = \"disabled\"/></td>
								</tr>
								<tr>
									<td>組數</td>
									<td><input id = \"input_MS_NumOfSet_".$week."_".$i."_".$j."\" type = \"text\" size = \"3\" disabled = \"disabled\"/></td>
									<td>組間休息</td>
									<td><input id =\"input_MS_RelaxTime_Set_".$week."_".$i."_".$j."\" type = \"text\" size = \"3\" disabled = \"disabled\"/></td>
								</tr>
								<tr>
									<td>重複次數</td>
									<td><input id = \"input_MS_RepeatTime_".$week."_".$i."_".$j."\" type = \"text\" size = \"3\" disabled = \"disabled\"/></td>
									<td>時間小計(s)</td>
									<td><input id = \"input_MS_SetTime_".$week."_".$i."_".$j."\" type = \"text\" size = \"3\" disabled = \"disabled\"/></td>
								</tr>
							</table></br>";
							//<input id = \"input_MS_100RM_Times_".$week."_".$i."\" type = \"text\" size = \"5\" disabled = \"disabled\"/>
						}
					}
				}
			}
		}
	}
?>
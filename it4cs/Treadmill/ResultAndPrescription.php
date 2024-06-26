<?php
	echo "<div id = \"div_ExaminationResult\">
			<div id = \"div_ExaminationTitle\"><h2 title = \"先測最大跑速.再測3-4種次最大跑速下力竭時間。\">有氧/無氧代謝能力測定:跑台法</h2></div>
			<div id = \"div_ExaminationInfo\">
				<table border = \"1\">
					<tr>
						<th>強度百分比</th>
						<th>速度(km/h)</th>
						<th>力竭時間(s)</th>
						<th>距離(m)</th>
					</tr>";
					for($i = 0; $i < 5; $i++)
					{
					$Strong = 100 - (5 * $i);
					echo "<tr>
							<th>".$Strong."%</th>
							<th><input id = \"input_".$Strong."Speed\" type = \"text\" disabled = \"disabled\"/></th>
							<th><input id = \"input_".$Strong."Time\"type = \"text\" disabled = \"disabled\"/></th>
							<th><input id = \"input_".$Strong."Distance\"type = \"text\" disabled = \"disabled\"/></th>
						</tr>";
					}
					echo "	<tr>
							<td><i>r</i> <sup>2</sup></td>
							<td ColSpan = \"3\"><input id = \"input_TM_R2\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
			echo "</table>
				<div id = \"ExaminationResult\">
					<p title = \"代表無氧閾值(有氧代謝能力),和耐力運動表現高相關。\">臨界速度(km/h)：<input id = \"input_LimitSpeed\"type = \"text\" disabled = \"disabled\"/></p>
					<p title = \"代表最大無氧能力。\">最大無氧做功能力(m)：<input id = \"input_MaxWork\"type = \"text\" disabled = \"disabled\"/></p>
					<p>最大跑速百分比(%)：<input id = \"input_MaxSpeedPercentage\"type = \"text\" size = \"5\" disabled = \"disabled\"/></p>
				</div>
				<div id = \"div_HeartInfo\">
					<p>心率資訊<input id = \"HeartInfo\" type = \"checkbox\" onchange = \"EnableHeartInfo()\"></p>
					<table id = \"table_HeartInfo\" border = \"1\">
						<tr>
							<td title = \"早晨睡醒坐姿休息5分鐘後測得之心率。\">基礎心率(bpm)</td>
							<td><input id = \"input_BasicHeartbeat\" type = \"text\" disabled = \"disabled\" onkeyup = \"SetHeartInfo()\"/></td>
						</tr>
						<tr>
							<td title = \"以跑台遞增負荷力竭時心率。\">最大心率(bpm)</td>
							<td><input id = \"input_MaxHeartbeat\" type = \"text\" disabled = \"disabled\" onkeyup = \"SetHeartInfo()\"/></td>
						</tr>
						<tr>
							<td title = \"在跑台以臨界速度跑5分鐘，測得最後1分內穩定心率。\">臨界速度之穩定心率(bpm)</td>
							<td><input id = \"input_ExerciseHeartbeat\" type = \"text\" disabled = \"disabled\" onkeyup = \"SetHeartInfo()\"/></td>
						</tr>
						<tr>
							<td>儲備心率百分比(%HRR)</td>
							<td><input id = \"input_HRR\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>
					</table>
				</div>
			</div>
			<div id = \"div_PrescriptionTitle\"><h2 title = \"單趟訓練時間:休息時間 = 2:1~1:4.速度須高於臨界速度。\">速耐力間歇跑訓練處方/訓練量評估: 跑台法</h2></div>
			<button id=\"button_LastPage\" type=\"button\" onclick = \"BasicExaminationInfo()\">上一頁</button>
			<button id=\"button_ReturnMenu\" type=\"button\" onclick = \"BasicInfo()\">完成</button></br>
			<div id = \"div_PrescriptionMode\">
				<div id = \"div_Mode\">
					訓練模式：
					<select id = \"select_Mode\" onchange = \"TreadmillPrescriptionTable(this.value, select_Sets.value)\">
						<option value = \"SingleSet\">單組模式</option>
						<option value = \"Increase\">遞增模式</option>
						<option value = \"Decrease\">遞減模式</option>
						<option value = \"Wave\">波浪模式</option>
					</select>
					訓練變項：
					<select id = \"select_TM_Factor\" onchange = \"TreadmillPrescriptionTable(select_Mode.value, select_Sets.value)\" disabled = \"disabled\">
						<option value = \"T_FRate\">訓練-力竭比例</option>
						<option value = \"T_RRate\">訓練-休息比例</option>
						<option value = \"TurnNum\">趟數</option>
					</select>
				</div>
				
				<div id = \"div_SetNum\">
					訓練組數：
					<select id = \"select_Sets\" onchange = \"TreadmillPrescriptionTable(select_Mode.value, this.value)\">
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
						<option value = \"11\">11</option>
						<option value = \"12\">12</option>
						<option value = \"13\">13</option>
						<option value = \"14\">14</option>
						<option value = \"15\">15</option>
						<option value = \"16\">16</option>
						<option value = \"17\">17</option>
						<option value = \"18\">18</option>
						<option value = \"18\">19</option>
						<option value = \"20\">20</option>
					</select>
				</div>
				<button type = \"button\" onclick = \"TreadmillDefaultAttribute()\">預設訓練參數</button>
				訓練量合計：
				<input id = \"input_TM_TotT\" type = \"text\" disabled = \"disabled\">
			</div>
			<div id = \"div_PrescriptionInfo\">
			</div>
		</div>";		
?>
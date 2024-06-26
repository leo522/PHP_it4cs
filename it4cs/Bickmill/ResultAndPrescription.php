<?php
	echo "<div id = \"div_ExaminationResult\">
			<div id = \"div_ExaminationTitle\"><h2 title = \"先測遞增負荷最大功率，再測4種次最大功率騎之力竭時間。\">有氧/無氧代謝能力測定:滾筒訓練台法</h2></div>
			<div id = \"div_ExaminationInfo\">
				<table border = \"1\">
					<tr>
						<th>強度百分比</th>
						<th>功率值(W)</th>
						<th>力竭時間(s)</th>
						<th>功(kJ)</th>
					</tr>";
					for($i = 0; $i < 5; $i++)
					{
					$Strong = 100 - (5 * $i);
					echo "<tr>
							<th>".$Strong."%</th>
							<th><input id = \"input_BM_".$Strong."Speed\" type = \"text\" disabled = \"disabled\"/></th>
							<th><input id = \"input_BM_".$Strong."Time\"type = \"text\" disabled = \"disabled\"/></th>
							<th><input id = \"input_BM_".$Strong."Distance\"type = \"text\" disabled = \"disabled\"/></th>
						</tr>";
					}
					echo "	<tr>
							<td><i>r</i> <sup>2</sup></td>
							<td ColSpan = \"3\"><input id = \"input_BM_R2\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
			echo "</table>
				<div id = \"ExaminationResult\">
					<p title = \"代表無氧閾值(有氧代謝能力),和耐力運動表現高相關。\">臨界功率(W)：<input id = \"input_BM_LimitSpeed\"type = \"text\" disabled = \"disabled\"/></p>
					<p title = \"代表最大無氧能力。\">最大無氧做功能力(kJ)：<input id = \"input_BM_MaxWork\"type = \"text\" disabled = \"disabled\"/></p>
					<p>最大功率百分比(%)：<input id = \"input_BM_MaxSpeedPercentage\"type = \"text\" size = \"5\" disabled = \"disabled\"/></p>
				</div>
				<div id = \"div_HeartInfo\">
					<p>心率資訊<input id = \"HeartInfo\" type = \"checkbox\" onchange = \"EnableHeartInfo()\"></p>
					<table id = \"table_HeartInfo\" border = \"1\">
						<tr>
							<td title = \"早晨睡醒坐姿休息5分鐘後測得之心率。\">基礎心率(bpm)</td>
							<td><input id = \"input_BasicHeartbeat\" type = \"text\" disabled = \"disabled\" onkeyup = \"SetHeartInfo()\"/></td>
						</tr>
						<tr>
							<td title = \"於測最大速度騎時力竭之心率。\">最大心率(bpm)</td>
							<td><input id = \"input_MaxHeartbeat\" type = \"text\" disabled = \"disabled\" onkeyup = \"SetHeartInfo()\"/></td>
						</tr>
						<tr>
							<td title = \"以臨界功率騎5分鐘時之穩定心率。\">臨界功率之穩定心率(bpm)</td>
							<td><input id = \"input_ExerciseHeartbeat\" type = \"text\" disabled = \"disabled\" onkeyup = \"SetHeartInfo()\"/></td>
						</tr>
						<tr>
							<td>儲備心率百分比(%HRR)</td>
							<td><input id = \"input_HRR\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>
					</table>
				</div>
			</div>
			<div id = \"div_PrescriptionTitle\"><h2 title = \"休息時間=2:1~1:4，訓練功率須高於臨界功率。\">速耐力間歇騎訓練處方/訓練量評估: 公路/滾筒訓練台法</h2></div>
			<button id=\"button_LastPage\" type=\"button\" onclick = \"BasicExaminationInfo()\">上一頁</button>
			<button id=\"button_ReturnMenu\" type=\"button\" onclick = \"BasicInfo()\">完成</button></br>
			<div id = \"div_PrescriptionMode\">
				<div id = \"div_Mode\">
					訓練模式：
					<select id = \"select_Mode\" onchange = \"BickmillPrescriptionTable(this.value, select_Sets.value)\">
						<option value = \"SingleSet\">單組模式</option>
						<option value = \"Increase\">遞增模式</option>
						<option value = \"Decrease\">遞減模式</option>
						<option value = \"Wave\">波浪模式</option>
					</select>
					訓練變項：
					<select id = \"select_BM_Factor\" onchange = \"BickmillPrescriptionTable(select_Mode.value, select_Sets.value)\" disabled = \"disabled\">
						<option value = \"T_FRate\">訓練-力竭比例</option>
						<option value = \"T_RRate\">訓練-休息比例</option>
						<option value = \"TurnNum\">趟數</option>
					</select>
				</div>
				
				<div id = \"div_SetNum\">
					訓練組數：
					<select id = \"select_Sets\" onchange = \"BickmillPrescriptionTable(select_Mode.value, this.value)\">
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
				<button type = \"button\" onclick = \"BickmillDefaultAttribute()\">預設訓練參數</button>
				訓練量合計：
				<input id = \"input_BM_TotT\" type = \"text\" disabled = \"disabled\">
			</div>
			<div id = \"div_PrescriptionInfo\">
			</div>
		</div>";		
?>
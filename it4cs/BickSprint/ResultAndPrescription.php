﻿<?php
	echo "<div id = \"div_ExaminationResult\">
			<div id = \"div_ExaminationTitle\"><h2 title = \"測200m，從50m開始每10m測量該點時間。以50m之均速為最大值，往後速度掉落5%點作為力竭點。記錄成力竭時間。\">200m衝刺騎最大速力竭時間</h2></div>
			<div id = \"div_ExaminationInfo\">
				<table border = \"1\">
					<tr>
						<td>時間(s)(50m開始計算)</td>
						<td>速度(km/h)</td>
						<td>距離(m)</td>
						<td>差值%</td>
					</tr>";
					for($i = 0; $i < 21; $i++)
					{
						$time = $i;
						echo "<tr>
								<td>".$time."</td>
								<td><input id = \"input_BS_".$time."Speed\" type = \"text\" disabled = \"disabled\"/></td>
								<td><input id = \"input_BS_".$time."Distance\" type = \"text\" disabled = \"disabled\" value = \"0\"/></td>
								<td><input id = \"input_BS_".$time."Percent\" type = \"text\" disabled = \"disabled\"/></td>
							</tr>";
					}
			echo "</table>
			</div>
			<div id = \"div_PrescriptionTitle\"><h2>200m衝刺騎訓練處方/訓練量評估</h2></div>
			<button id=\"button_LastPage\" type=\"button\" onclick = \"BasicExaminationInfo()\">上一頁</button>
			<button id=\"button_ReturnMenu\" type=\"button\" onclick = \"BasicInfo()\">完成</button></br>
				
				<div id = \"div_SetNum\">
					訓練組數：
					<select id = \"select_Sets\" onchange = \"BickSprintPrescriptionTable(this.value)\">
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
				訓練量合計：
				<input id = \"input_BS_TotT\" type = \"text\" disabled = \"disabled\">
			</div>
			<div id = \"div_PrescriptionInfo\">
			</div>
		</div>";		
?>
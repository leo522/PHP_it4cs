<?php
	echo "日期：<select id = \"select_Date_Year\" onchange = \"SetYear(this.value)\">";
	for($year = 2010; $year < 2101; $year++)
	{
		echo "<option id = \"Year".($year)."\">".$year."</option>";
	}
	echo "</select>年";
	echo "<select id = \"select_Date_Month\" onchange = \"SetMonth(this.value)\">";
	for($month = 1; $month <= 12; $month++)
	{
		echo "<option id = \"Month".($month - 1)."\">".$month."</option>";
	}
	echo "</select>月";
	echo "<select id = \"select_Date_Day\" onchange = \"SetDay(this.value)\">";
	for($day = 1; $day <= 31; $day++)
	{
		echo "<option id = \"Day".($day)."\">".$day."</option>";
	}
	echo "</select>日</br>";
	
	echo "用途：<select id = \"select_Stage\" onchange = \"SetStage(this.value)\">
					<option>訓練前規劃</option>
					<option>訓練成果</option>
				</select></br>";
				
	echo "能力測定：<select id = \"select_Ability\">
			<option>請選擇能力測定方法</option>
			<option>有氧/無氧代謝能力測定(跑台法)</option>
			<option>有氧/無氧代謝能力測定(田徑場法)</option>
			<option>有氧/無氧代謝能力測定(泳池法)</option>
			<option>有氧/無氧代謝能力測定(滾筒訓練台法)</option>
			<option>100m衝刺跑最大速力竭時間</option>
			<option>50m衝刺泳最大速力竭時間</option>
			<option>200m衝刺騎最大速力竭時間</option>
		</select>";
	echo "<button id = \"button_ToResult\" type = \"button\" onclick = \"BasicInfoCheck(select_Ability.value)\">下一步</button></br>";
	
	echo "訓練處方：<select id = \"select_Prescription\">
			<option>請選擇訓練處方</option>
			<option>速耐力間歇跑(跑台法)</option>
			<option>速耐力間歇跑(田徑場法)</option>
			<option>速耐力間歇泳(泳池法)</option>
			<option>速耐力間歇騎(公路/滾筒訓練台法)</option>
			<option>100m衝刺跑</option>
			<option>50m衝刺泳</option>
			<option>200m衝刺騎</option>
			<option>長距離耐力跑</option>
			<option>長距離耐力泳</option>
			<option>長距離耐力騎</option>
			<option>肌力訓練</option>
		</select>";
	echo "<button id = \"button_ToResult\" type = \"button\" onclick = \"BasicInfoCheck(select_Prescription.value)\">下一步</button></br></br>";
	echo "<button id = \"button_SendMail\" type = \"button\" onclick = \"PlanContent()\">寄送處方</button><button id = \"button_ToGuide\" type = \"button\" onclick = \"Load(1)\">回說明頁</button>";
	echo "<h2>有氧/無氧代謝能力評估</h2>
		<table border = \"1\">
			<tr>
				<td>有氧代謝能力測定(跑台法)-臨界速度(km/h)</td>
				<td><input id = \"input_Treadmill_LimitSpeed\" type = \"text\" disabled = \"disabled\"/></td>
			</tr>
			<tr>
				<td>無氧代謝能力測定(跑台法)-最大無氧做功(m)</td>
				<td><input id = \"input_Treadmill_MaxWork\" type = \"text\" disabled = \"disabled\"/></td>
			</tr>
			<tr>
				<td>有氧代謝能力測定(田徑場法)-臨界速度(km/h)</td>
				<td><input id = \"input_Track_LimitSpeed\" type = \"text\" disabled = \"disabled\"/></td>
			</tr>
			<tr>
				<td>無氧代謝能力測定(田徑場法)-最大無氧做功(m)</td>
				<td><input id = \"input_Track_MaxWork\" type = \"text\" disabled = \"disabled\"/></td>
			</tr>
			<tr>
				<td>有氧代謝能力測定(泳池法)-臨界速度(m/s)</td>
				<td><input id = \"input_Pool_LimitSpeed\" type = \"text\" disabled = \"disabled\"/></td>
			</tr>
			<tr>
				<td>無氧代謝能力測定(泳池法)-最大無氧做功(m)</td>
				<td><input id = \"input_Pool_MaxWork\" type = \"text\" disabled = \"disabled\"/></td>
			</tr>
			<tr>
				<td>有氧代謝能力測定(滾筒訓練台法)-臨界功率(W)</td>
				<td><input id = \"input_Bickmill_LimitSpeed\" type = \"text\" disabled = \"disabled\"/></td>
			</tr>
			<tr>
				<td>無氧代謝能力測定(滾筒訓練台法)-最大無氧做功(kJ)</td>
				<td><input id = \"input_Bickmill_MaxWork\" type = \"text\" disabled = \"disabled\"/></td>
			</tr>
		</table></br>
		<h2>訓練量結算</h2>
		<table border = \"1\">
			<tr>
				<td>選擇</td>
				<td>測定項目</td>
				<td>訓練量</td>
				<td>總訓練量</td>
			</tr>
			<tr>
				<td><input id = \"check_Item_1\" type = \"checkbox\" checked = \"checked\" onchange = \"CalculateTotalTraining()\"/></td>
				<td>速耐力間歇跑(跑台法)</td>
				<td><input id = \"input_Item_1\" type = \"text\" disabled = \"disabled\"/></td>
				<td rowspan=\"11\"><input id = \"input_TotleTraining\" type = \"text\" disabled = \"disabled\"/></td>
			</tr>
			<tr>
				<td><input id = \"check_Item_2\" type = \"checkbox\" checked = \"checked\" onchange = \"CalculateTotalTraining()\"/></td>
				<td>速耐力間歇跑(田徑場法)</td>
				<td><input id = \"input_Item_2\" type = \"text\" disabled = \"disabled\"/></td>
			</tr>
			<tr>
				<td><input id = \"check_Item_6\" type = \"checkbox\" checked = \"checked\" onchange = \"CalculateTotalTraining()\"/></td>
				<td>速耐力間歇泳(泳池法)</td>
				<td><input id = \"input_Item_6\" type = \"text\" disabled = \"disabled\"/></td>
			</tr>
			<tr>
				<td><input id = \"check_Item_9\" type = \"checkbox\" checked = \"checked\" onchange = \"CalculateTotalTraining()\"/></td>
				<td>速耐力間歇騎(公路/滾筒訓練台法)</td>
				<td><input id = \"input_Item_9\" type = \"text\" disabled = \"disabled\"/></td>
			</tr>
			<tr>
				<td><input id = \"check_Item_3\" type = \"checkbox\" checked = \"checked\" onchange = \"CalculateTotalTraining()\"/></td>
				<td>100m衝刺跑</td>
				<td><input id = \"input_Item_3\" type = \"text\" disabled = \"disabled\"/></td>
			</tr>
			<tr>
				<td><input id = \"check_Item_7\" type = \"checkbox\" checked = \"checked\" onchange = \"CalculateTotalTraining()\"/></td>
				<td>50m衝刺泳</td>
				<td><input id = \"input_Item_7\" type = \"text\" disabled = \"disabled\"/></td>
			</tr>
			<tr>
				<td><input id = \"check_Item_10\" type = \"checkbox\" checked = \"checked\" onchange = \"CalculateTotalTraining()\"/></td>
				<td>200m衝刺騎</td>
				<td><input id = \"input_Item_10\" type = \"text\" disabled = \"disabled\"/></td>
			</tr>
			<tr>
				<td><input id = \"check_Item_4\" type = \"checkbox\" checked = \"checked\" onchange = \"CalculateTotalTraining()\"/></td>
				<td>長距離耐力跑</td>
				<td><input id = \"input_Item_4\" type = \"text\" disabled = \"disabled\"/></td>
			</tr>
			<tr>
				<td><input id = \"check_Item_8\" type = \"checkbox\" checked = \"checked\" onchange = \"CalculateTotalTraining()\"/></td>
				<td>長距離耐力泳</td>
				<td><input id = \"input_Item_8\" type = \"text\" disabled = \"disabled\"/></td>
			</tr>
			<tr>
				<td><input id = \"check_Item_11\" type = \"checkbox\" checked = \"checked\" onchange = \"CalculateTotalTraining()\"/></td>
				<td>長距離耐力騎</td>
				<td><input id = \"input_Item_11\" type = \"text\" disabled = \"disabled\"/></td>
			</tr>
			<tr>
				<td><input id = \"check_Item_5\" type = \"checkbox\" checked = \"checked\" onchange = \"CalculateTotalTraining()\"/></td>
				<td>肌力訓練</td>
				<td><input id = \"input_Item_5\" type = \"text\" disabled = \"disabled\"/></td>
			</tr>
		</table>";
		
		//<button id=\"button_ReturnMenu\" type=\"button\" onclick = \"BasicInfo()\">回選單頁</button>";
		//echo "<p title = \"早晨睡醒坐姿休息5分鐘後測得之心率\">基礎心率：<input id = \"input_BasicHeartbeat\" type = \"text\" onchange = \"BasicHeartbeat = input_BasicHeartbeat.value\"/></p>";
		//echo "<p title = \"以跑台遞增負荷力竭時心率\">最大心率：<input id = \"input_MaxHeartbeat\" type = \"text\" onchange = \"MaxHeartbeat = input_MaxHeartbeat.value\"/></p>";
		//echo "<p title = \"若配帶心率錶,運動當時心率值\">運動心率：<input id = \"input_ExerciseHeartbeat\" type = \"text\" onchange = \"ExerciseHeartbeat = input_ExerciseHeartbeat.value\"/></p>";
		//echo "<p>心率資訊<input id = \"HeartInfo\" type = \"checkbox\" checked = \"checked\" onchange = \"EnableHeartInfo()\"></p>";
?>
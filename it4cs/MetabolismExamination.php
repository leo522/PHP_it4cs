<?php
	if($_GET["Method"] == "有氧/無氧代謝能力測定(跑台法)")
	{
		echo "<div id = \"div_ExaminationTitle\"><h2>有氧/無氧代謝能力測定:跑台法</h2>
			  <p>先測最大跑速，再測3-4種次最大跑速下力竭時間。</p></div>";
			  
		echo"<div id = \"div_MaxSpeed\">
			 <p title = \"以跑台施測:以8km/h開始，每兩分鐘增加1km/h，至力竭為止。事前佩帶心率錶可測最大心率。\">最大跑速(km/h)：<input id = \"input_MaxSpeed\" type = \"text\" onkeyup = \"CaculateTreadmillSpeed()\"/></p>
			 </div>";


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
							<td><input id = \"input_".$Strong."Time\"type = \"text\"/ onkeyup = \"TreadmillCaculateLinearRegression(".$Strong.")\"></td>
							<td><input id = \"input_".$Strong."Speed\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
				}
				echo "	<tr>
							<td title = \"建議要接近1.0，否則應重測。 \"><i>r</i> <sup>2</sup></td>
							<td ColSpan = \"3\"><input id = \"input_TM_R2\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
		echo "</table>";
		echo "<button id=\"button_ReturnMenu\" type=\"button\" onclick = \"BasicInfo()\">回選單頁</button>
			<button id=\"button_Prescription\" type=\"button\" onclick = \"TreadmillPrescription(0)\">完成</button>";
	}
	if($_GET["Method"] == "有氧/無氧代謝能力測定(田徑場法)")
	{
		echo "<div id = \"div_ExaminationTitle\"><h2>有氧/無氧代謝能力測定:田徑場法</h2>
			  <p>測3-4種距離的力竭時間。</p></div>
			  
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
							<td><input id = \"input_".$distance."Time\" type = \"text\" onkeyup = \"CaculateTrackSpeed(".$distance.", this.value)\"/></td>
							<td><input id = \"input_".$distance."Speed\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
				}
				echo "	<tr>
							<td title = \"建議要接近1.0，否則應重測。 \"><i>r</i> <sup>2</sup></td>
							<td ColSpan = \"3\"><input id = \"input_TR_R2\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
		echo  "</table>";
		echo "</table>";
		echo "<button id=\"button_ReturnMenu\" type=\"button\" onclick = \"BasicInfo()\">回選單頁</button>
			<button id=\"button_Prescription\" type=\"button\" onclick = \"TrackPrescription(0)\">完成</button>";
	}
	if($_GET["Method"] == "有氧/無氧代謝能力測定(滾筒訓練台法)")
	{
		echo "<div id = \"div_ExaminationTitle\"><h2>有氧/無氧代謝能力測定:滾筒訓練台法</h2>
			  <p>先測遞增負荷最大功率，再測4種次最大功率騎之力竭時間。</p></div>";
			  
		echo"<div id = \"div_MaxSpeed\">
			 <p title = \"以滾筒訓練台施測：維持踩頻70 rpm，以100W開始，每兩分鐘增加20W至力竭為止。事前可佩帶心率錶可測最大心率。\">最大功率(W)：<input id = \"input_BM_MaxSpeed\" type = \"text\" onkeyup = \"CaculateBickmillSpeed()\"/></p>
			 </div>";


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
							<td><input id = \"input_BM_".$Strong."Time\"type = \"text\"/ onchange = \"BickmillCaculateLinearRegression(".$Strong.")\"></td>
							<td><input id = \"input_BM_".$Strong."Speed\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
				}
				echo "	<tr>
							<td title = \"建議要接近1.0，否則應重測。 \"><i>r</i> <sup>2</sup></td>
							<td ColSpan = \"3\"><input id = \"input_BM_R2\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
		echo "</table>";
		echo "<button id=\"button_ReturnMenu\" type=\"button\" onclick = \"BasicInfo()\">回選單頁</button>
			<button id=\"button_Prescription\" type=\"button\" onclick = \"BickmillPrescription(0)\">完成</button>";
	}
	if($_GET["Method"] == "有氧/無氧代謝能力測定(泳池法)")
	{
		echo "<div id = \"div_ExaminationTitle\"><h2>有氧/無氧代謝能力測定:泳池法</h2>
			  <p>測3-4種距離的力竭時間。</p></div>
			  
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
							<td><input id = \"input_Pool".$distance."Time\" type = \"text\" onkeyup = \"CaculatePoolSpeed(".$distance.", this.value)\"/></td>
							<td><input id = \"input_Pool".$distance."Speed\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
				}
				echo "	<tr>
							<td title = \"建議要接近1.0，否則應重測。 \"><i>r</i> <sup>2</sup></td>
							<td ColSpan = \"3\"><input id = \"input_PO_R2\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
		echo  "</table>";
		echo "</table>";
		echo "<button id=\"button_ReturnMenu\" type=\"button\" onclick = \"BasicInfo()\">回選單頁</button>
			<button id=\"button_Prescription\" type=\"button\" onclick = \"PoolPrescription(0)\">完成</button>";
	}
	else if($_GET["Method"] == "速耐力間歇跑(跑台法)")
	{
		echo "<div id = \"div_ExaminationTitle\"><h2>有氧/無氧代謝能力測定:跑台法</h2>
			  <p>先測最大跑速，再測3-4種次最大跑速下力竭時間。</p></div>";
			  
		echo"<div id = \"div_MaxSpeed\">
			 <p title = \"以跑台施測:以8km/h開始，每兩分鐘增加1km/h，至力竭為止。事前佩帶心率錶可測最大心率。\">最大跑速(km/h)：<input id = \"input_MaxSpeed\" type = \"text\" onkeyup = \"CaculateTreadmillSpeed()\"/></p>
			 </div>";


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
							<td><input id = \"input_".$Strong."Time\"type = \"text\"/ onkeyup = \"TreadmillCaculateLinearRegression(".$Strong.")\"></td>
							<td><input id = \"input_".$Strong."Speed\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
				}
				echo "	<tr>
							<td title = \"建議要接近1.0，否則應重測。 \"><i>r</i> <sup>2</sup></td>
							<td ColSpan = \"3\"><input id = \"input_TM_R2\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
		echo "</table>";
		echo "<button id=\"button_ReturnMenu\" type=\"button\" onclick = \"BasicInfo()\">回選單頁</button>
			<button id=\"button_Prescription\" type=\"button\" onclick = \"TreadmillPrescription(1)\">下一步</button>";
	}
	
	else if($_GET["Method"] == "速耐力間歇跑(田徑場法)")
	{
		echo "<div id = \"div_ExaminationTitle\"><h2>有氧/無氧代謝能力測定:田徑場法</h2>
			  <p>測3-4種距離的力竭時間。</p></div>
			  
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
							<td><input id = \"input_".$distance."Time\" type = \"text\" onkeyup = \"CaculateTrackSpeed(".$distance.", this.value)\"/></td>
							<td><input id = \"input_".$distance."Speed\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
				}
				echo "	<tr>
							<td title = \"建議要接近1.0，否則應重測。 \"><i>r</i> <sup>2</sup></td>
							<td ColSpan = \"3\"><input id = \"input_TR_R2\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
		echo  "</table>";
		echo "<button id=\"button_ReturnMenu\" type=\"button\" onclick = \"BasicInfo()\">回選單頁</button>
			<button id=\"button_Prescription\" type=\"button\" onclick = \"TrackPrescription(1)\">下一步</button>";
	}
	
	else if($_GET["Method"] == "速耐力間歇泳(泳池法)")
	{
		echo "<div id = \"div_ExaminationTitle\"><h2>有氧/無氧代謝能力測定:泳池法</h2>
			  <p>測3-4種距離的力竭時間。</p></div>
			  
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
							<td><input id = \"input_Pool".$distance."Time\" type = \"text\" onkeyup = \"CaculatePoolSpeed(".$distance.", this.value)\"/></td>
							<td><input id = \"input_Pool".$distance."Speed\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
				}
				echo "	<tr>
							<td title = \"建議要接近1.0，否則應重測。 \"><i>r</i> <sup>2</sup></td>
							<td ColSpan = \"3\"><input id = \"input_PO_R2\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
		echo  "</table>";
		echo "<button id=\"button_ReturnMenu\" type=\"button\" onclick = \"BasicInfo()\">回選單頁</button>
			<button id=\"button_Prescription\" type=\"button\" onclick = \"PoolPrescription(1)\">下一步</button>";
	}
	else if($_GET["Method"] == "速耐力間歇騎(公路/滾筒訓練台法)")
	{
		echo "<div id = \"div_ExaminationTitle\"><h2>有氧/無氧代謝能力測定:滾筒訓練台法</h2>
			  <p>先測遞增負荷最大功率，再測4種次最大功率騎之力竭時間。</p></div>";
			  
		echo"<div id = \"div_MaxSpeed\">
			 <p title = \"以滾筒訓練台施測：維持踩頻70 rpm，以100W開始，每兩分鐘增加20W至力竭為止。事前可佩帶心率錶可測最大心率。\">最大功率(W)：<input id = \"input_BM_MaxSpeed\" type = \"text\" onkeyup = \"CaculateBickmillSpeed()\"/></p>
			 </div>";


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
							<td><input id = \"input_BM_".$Strong."Time\"type = \"text\"/ onkeyup = \"BickmillCaculateLinearRegression(".$Strong.")\"></td>
							<td><input id = \"input_BM_".$Strong."Speed\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
				}
				echo "	<tr>
							<td title = \"建議要接近1.0，否則應重測。 \"><i>r</i> <sup>2</sup></td>
							<td ColSpan = \"3\"><input id = \"input_BM_R2\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
		echo "</table>";
		echo "<button id=\"button_ReturnMenu\" type=\"button\" onclick = \"BasicInfo()\">回選單頁</button>
			<button id=\"button_Prescription\" type=\"button\" onclick = \"BickmillPrescription(1)\">完成</button>";
	}
	else if($_GET["Method"] == "100m衝刺跑")
	{
		echo "<div id = \"div_ExaminationTitle\"><h2>100m衝刺跑最大速力竭時間</h2>
			  <p>測100m,從50m開始每10m測量該點時間。以前50m之均速為基礎值，往後每10m之分段速度與前50m均速比較，第一個減少5%的距離點設為力竭點，並記錄成力竭時間。</p></div>
			  
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
							<td><input id = \"input_SP_".$distance."Time\" type = \"text\" onkeyup = \"CaculateSprintSpeed(SprintTime".$distance." = this.value)\"/></td>
							<td><input id = \"input_SP_".$distance."Speed\" type = \"text\" disabled = \"disabled\" value = \"0\"/></td>
							<td><input id = \"input_SP_".$distance."Percent\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
				}
		echo  "</table>";
		echo "<button id=\"button_ReturnMenu\" type=\"button\" onclick = \"BasicInfo()\">回選單頁</button>
			<button id=\"button_Prescription\" type=\"button\" onclick = \"SprintPrescription(1)\">下一步</button>";
	}
	else if($_GET["Method"] == "100m衝刺跑最大速力竭時間")
	{
		echo "<div id = \"div_ExaminationTitle\"><h2>100m衝刺跑最大速力竭時間</h2>
			  <p>測100m,從50m開始每10m測量該點時間。以前50m之均速為基礎值，往後每10m之分段速度與前50m均速比較，第一個減少5%的距離點設為力竭點，並記錄成力竭時間。</p></div>
			  
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
							<td><input id = \"input_SP_".$distance."Time\" type = \"text\" onkeyup = \"CaculateSprintSpeed(SprintTime".$distance." = this.value)\"/></td>
							<td><input id = \"input_SP_".$distance."Speed\" type = \"text\" disabled = \"disabled\" value = \"0\"/></td>
							<td><input id = \"input_SP_".$distance."Percent\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
				}
		echo  "</table>";
		echo "<button id=\"button_ReturnMenu\" type=\"button\" onclick = \"BasicInfo()\">回選單頁</button>
			<button id=\"button_Prescription\" type=\"button\" onclick = \"SprintPrescription(0)\">完成</button>";
	}
	else if($_GET["Method"] == "50m衝刺泳")
	{
		echo "<div id = \"div_ExaminationTitle\"><h2>50m衝刺泳最大速力竭時間</h2>
			  <p>測50m,從25m開始每5m測量該點時間。以前25m之均速為基礎值，往後每5m之分段速度與前25m均速比較，第一個減少5%的距離點設為力竭點，並記錄成力竭時間。</p></div>
			  
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
							<td><input id = \"input_SS_".$distance."Time\" type = \"text\" onkeyup = \"CaculateSwimSprintSpeed(SwimSprintTime".$distance." = this.value)\"/></td>
							<td><input id = \"input_SS_".$distance."Speed\" type = \"text\" disabled = \"disabled\" value = \"0\"/></td>
							<td><input id = \"input_SS_".$distance."Percent\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
				}
		echo  "</table>";
		echo "<button id=\"button_ReturnMenu\" type=\"button\" onclick = \"BasicInfo()\">回選單頁</button>
			<button id=\"button_Prescription\" type=\"button\" onclick = \"SwimSprintPrescription(1)\">下一步</button>";
	}
	else if($_GET["Method"] == "50m衝刺泳最大速力竭時間")
	{
		echo "<div id = \"div_ExaminationTitle\"><h2>50m衝刺泳最大速力竭時間</h2>
			  <p>測50m,從25m開始每5m測量該點時間。以前25m之均速為基礎值，往後每5m之分段速度與前25m均速比較，第一個減少5%的距離點設為力竭點，並記錄成力竭時間。</p></div>
			  
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
							<td><input id = \"input_SS_".$distance."Time\" type = \"text\" onkeyup = \"CaculateSwimSprintSpeed(SwimSprintTime".$distance." = this.value)\"/></td>
							<td><input id = \"input_SS_".$distance."Speed\" type = \"text\" disabled = \"disabled\" value = \"0\"/></td>
							<td><input id = \"input_SS_".$distance."Percent\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
				}
		echo  "</table>";
		echo "<button id=\"button_ReturnMenu\" type=\"button\" onclick = \"BasicInfo()\">回選單頁</button>
			<button id=\"button_Prescription\" type=\"button\" onclick = \"SwimSprintPrescription(0)\">完成</button>";
	}
	
	else if($_GET["Method"] == "200m衝刺騎")
	{
		echo "<div id = \"div_ExaminationTitle\"><h2>200m衝刺騎最大速力竭時間</h2>
			  <p>以平坦公路直線250m為測試場地，固定齒輪比為54:15。0-50m為啟動階段，姿勢可站可坐。測50-250m中瞬時最大速度後掉落5%點作為力竭點，記錄成力竭時間。</p></div>
			  
			  <table id = \"table_Examination\" border = \"1\">
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
							<td><input id = \"input_BS_".$time."Speed\" type = \"text\" onkeyup = \"CaculateBickSprintSpeed(BickSprintSpeed[".$time."] = this.value)\"/></td>
							<td><input id = \"input_BS_".$time."Distance\" type = \"text\" disabled = \"disabled\" value = \"0\"/></td>
							<td><input id = \"input_BS_".$time."Percent\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
				}
		echo  "</table>";
		echo "<button id=\"button_ReturnMenu\" type=\"button\" onclick = \"BasicInfo()\">回選單頁</button>
			<button id=\"button_Prescription\" type=\"button\" onclick = \"BickSprintPrescription(1)\">下一步</button>";
	}
	else if($_GET["Method"] == "200m衝刺騎最大速力竭時間")
	{
		echo "<div id = \"div_ExaminationTitle\"><h2>200m衝刺騎最大速力竭時間</h2>
			  <p>以平坦公路直線250m為測試場地，固定齒輪比為54:15。0-50m為啟動階段，姿勢可站可坐。測50-250m中瞬時最大速度後掉落5%點作為力竭點，記錄成力竭時間。</p></div>
			  
			  <table id = \"table_Examination\" border = \"1\">
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
							<td><input id = \"input_BS_".$time."Speed\" type = \"text\" onkeyup = \"CaculateBickSprintSpeed(BickSprintSpeed[".$time."] = this.value)\"/></td>
							<td><input id = \"input_BS_".$time."Distance\" type = \"text\" disabled = \"disabled\" value = \"0\"/></td>
							<td><input id = \"input_BS_".$time."Percent\" type = \"text\" disabled = \"disabled\"/></td>
						</tr>";
				}
		echo  "</table>";
		echo "<button id=\"button_ReturnMenu\" type=\"button\" onclick = \"BasicInfo()\">回選單頁</button>
			<button id=\"button_Prescription\" type=\"button\" onclick = \"BickSprintPrescription(0)\">完成</button>";
	}
	
	else if($_GET["Method"] == "長距離耐力跑")
	{
		echo "<div id = \"div_ExaminationTitle\">
				<h2>長距離耐力跑訓練量估算</h2>
				<p>指單次或多次長距離耐力跑。使用跑台時控制速度小於臨界速度，或戶外跑時，可監控心率使小於臨界速度時心率，或說話測試法少於但接近10字。</p>
			</div>

			<select id = \"select_TurnNum\" onchange = \"MarathonResetTurnNum(select_TurnNum.value)\">
				<option value = \"0\">選擇趟數</option>
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
				<option value = \"19\">19</option>
				<option value = \"20\">20</option>
			</select>
			
			<div id = \"div_PrescriptionInfo\"></div>
			<button id=\"button_ReturnMenu\" type=\"button\" onclick = \"BasicInfo()\">回選單頁</button>";
	}
	else if($_GET["Method"] == "長距離耐力泳")
	{
		echo "<div id = \"div_ExaminationTitle\">
				<h2>長距離耐力泳訓練量估算</h2>
				<p>指單次或多次長距離耐力泳。控制速度小於臨界速度，或可監控心率使小於臨界速度時心率。</p>
			</div>

			<select id = \"select_TurnNum\" onchange = \"SwimMarathonResetTurnNum(select_TurnNum.value)\">
				<option value = \"0\">選擇趟數</option>
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
				<option value = \"19\">19</option>
				<option value = \"20\">20</option>
			</select>
			
			<div id = \"div_SM_PrescriptionInfo\"></div>
			<button id=\"button_ReturnMenu\" type=\"button\" onclick = \"BasicInfo()\">回選單頁</button>";
	}
	else if($_GET["Method"] == "長距離耐力騎")
	{
		echo "<div id = \"div_ExaminationTitle\">
				<h2>長距離耐力騎訓練量估算</h2>
				<p>指單次或多次長距離耐力騎。控制訓練功率須小於臨界功率，或可監控心率使小於臨界功率時心率，或說話測試法少於但接近10字。</p>
			</div>

			<select id = \"select_TurnNum\" onchange = \"BickMarathonResetTurnNum(select_TurnNum.value)\">
				<option value = \"0\">選擇趟數</option>
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
				<option value = \"19\">19</option>
				<option value = \"20\">20</option>
			</select>
			
			<div id = \"div_BMar_PrescriptionInfo\"></div>
			<button id=\"button_ReturnMenu\" type=\"button\" onclick = \"BasicInfo()\">回選單頁</button>";
	}
	else if($_GET["Method"] == "肌力訓練")
	{
		echo "<h2>訓練動作與人體肌群對照</h2>
				<p>設定一週內訓練天數及訓練部位</p>
				<table id = \"table_Scheduale\" border = \"1\">
					<tr>
						<td>星期</td>
						<td>日</td>
						<td>一</td>
						<td>二</td>
						<td>三</td>
						<td>四</td>
						<td>五</td>
						<td>六</td>
					</tr>
					<tr>
						<td>選擇</td>
						<td><input type = \"checkbox\" id = \"check_Week_0\" onchange = \"EnableScheduale(0)\"/></td>
						<td><input type = \"checkbox\" id = \"check_Week_1\" onchange = \"EnableScheduale(1)\"/></td>
						<td><input type = \"checkbox\" id = \"check_Week_2\" onchange = \"EnableScheduale(2)\"/></td>
						<td><input type = \"checkbox\" id = \"check_Week_3\" onchange = \"EnableScheduale(3)\"/></td>
						<td><input type = \"checkbox\" id = \"check_Week_4\" onchange = \"EnableScheduale(4)\"/></td>
						<td><input type = \"checkbox\" id = \"check_Week_5\" onchange = \"EnableScheduale(5)\"/></td>
						<td><input type = \"checkbox\" id = \"check_Week_6\" onchange = \"EnableScheduale(6)\"/></td>
					</tr>
					<tr>
						<td>項目</td>";
						for($i = 0; $i < 7; $i++)
						{
							echo"<td nowrap = \"true\">
									<div id = \"div_TaskList".$i."\">
										<select id = \"select_WeekDay".$i."_0\" onchange = \"SetMusclePart(this.value, ".$i.", 0)\" disabled = \"disabled\">
											<option>選擇類型</option>
											<option>整體瞬發力</option>
											<option>多關節</option>
											<option>單關節</option>
											<option>休息</option>
										</select>
										<img id = \"img_eye_".$i."_0\" src = \"Muscle\eye.jpg\" height=\"22\" width=\"22\" onclick = \"MuscleEyeView(0, ".$i.", select_WeekDay".$i."_0.value, 1)\"/>
										<img src = \"Muscle\EditT.png\" height=\"20\" width=\"20\"/ onclick = \"MuscleOneRM(".$i.", 0)\">
									</div>
									<button id=\"button_AddTask\" type=\"button\" onclick = \"AddTask(".$i.")\">新增項目</button>
									<button id=\"button_DelTask\" type=\"button\" onclick = \"DelTask(".$i.")\">刪除項目</button>
								</td>";
						}
				echo"</tr>
					<tr>
						<td>單日訓練量</td>
						<td><input type = \"text\" id = \"input_DayT_0\" disabled = \"disabled\" size = \"5\"/><button id=\"button_DayTDetail_0\" type=\"button\" onclick = \"MuscleShowDetail(0)\">明細</button></td>
						<td><input type = \"text\" id = \"input_DayT_1\" disabled = \"disabled\" size = \"5\"/><button id=\"button_DayTDetail_1\" type=\"button\" onclick = \"MuscleShowDetail(1)\">明細</button></td>
						<td><input type = \"text\" id = \"input_DayT_2\" disabled = \"disabled\" size = \"5\"/><button id=\"button_DayTDetail_2\" type=\"button\" onclick = \"MuscleShowDetail(2)\">明細</button></td>
						<td><input type = \"text\" id = \"input_DayT_3\" disabled = \"disabled\" size = \"5\"/><button id=\"button_DayTDetail_3\" type=\"button\" onclick = \"MuscleShowDetail(3)\">明細</button></td>
						<td><input type = \"text\" id = \"input_DayT_4\" disabled = \"disabled\" size = \"5\"/><button id=\"button_DayTDetail_4\" type=\"button\" onclick = \"MuscleShowDetail(4)\">明細</button></td>
						<td><input type = \"text\" id = \"input_DayT_5\" disabled = \"disabled\" size = \"5\"/><button id=\"button_DayTDetail_5\" type=\"button\" onclick = \"MuscleShowDetail(5)\">明細</button></td>
						<td><input type = \"text\" id = \"input_DayT_6\" disabled = \"disabled\" size = \"5\"/><button id=\"button_DayTDetail_6\" type=\"button\" onclick = \"MuscleShowDetail(6)\">明細</button></td>
					</tr>
				</table>
				<select id = \"select_ShowDay\" onchange = \"TaskScanner(this.value)\">
					<option>顯示當日全部訓練肌群</option>
					<option>星期日</option>
					<option>星期一</option>
					<option>星期二</option>
					<option>星期三</option>
					<option>星期四</option>
					<option>星期五</option>
					<option>星期六</option>
				</select>
				<button id=\"button_ReturnMenu\" type=\"button\" onclick = \"BasicInfo()\">回選單頁</button>
				</br>
				<p><img src = \"Muscle\SurfacePoint.bmp\" height=\"10\" width=\"10\"/>為淺層肌肉</p>
				<p><img src = \"Muscle\DeepPoint.bmp\" height=\"10\" width=\"10\"/>為深層肌肉</p>				
				<div id = \"div_MuscleModel\" style =\"position:relative;\">
					<img src = \"Muscle\MusclePointer\MuscleModel.png\" style =\"position:absolute; left:0px; top:0px;\" />";
					
					for($i = 0; $i < 74; $i++)
					{
						echo "<img id = \"img_MusclePointer_".$i."\" src = \"Muscle\MusclePointer\Muscle_".$i.".png\" style =\"position:absolute; left:0px; top:0px;\" hidden = \"hidden\"/>";
					}
						
				echo "</div>";
	}
?>
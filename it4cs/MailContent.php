<?php	
	echo "<h2>寄送處方內容</h2>
		收件信箱<input id = \"input_Email\" type = \"text\" size = \"20\"/><button id = \"button_Send\" type = \"button\" onclick = \"SendEmail()\" disabled = \"disabled\">送出</button><button id = \"button_Preview\" type = \"button\" onclick = \"PreviewEmail()\">預覽</button>
		<button id = \"button_Return\" type = \"button\" onclick = \"BasicInfo()\">返回</button></br>
		<table id = \"table_EMail_Prescripton\" border = \"1\">
			<tr>
				<td>選擇</td>
				<td>項目</td>
			</tr>
			<tr>
				<td colspan = \"2\"><b>能力測定</b></td>
			</tr>
			<tr>
				<td><input id = \"check_Prescription_0\" type = \"checkbox\" onclick = \"SetSelected(0)\"></td>
				<td>有氧/無氧代謝能力測定(跑台法)</td>
			</tr>
			<tr>
				<td><input id = \"check_Prescription_1\" type = \"checkbox\" onclick = \"SetSelected(1)\"></td>
				<td>有氧/無氧代謝能力測定(田徑場法)</td>
			</tr>
			<tr>
				<td><input id = \"check_Prescription_8\" type = \"checkbox\" onclick = \"SetSelected(8)\"></td>
				<td>有氧/無氧代謝能力測定(泳池法)</td>
			</tr>
			<tr>
				<td><input id = \"check_Prescription_13\" type = \"checkbox\" onclick = \"SetSelected(13)\"></td>
				<td>有氧/無氧代謝能力測定(滾筒訓練台法)</td>
			</tr>
			<tr>
				<td><input id = \"check_Prescription_2\" type = \"checkbox\" onclick = \"SetSelected(2)\"></td>
				<td>100m衝刺跑最大速力竭時間</td>
			</tr>
			<tr>
				<td><input id = \"check_Prescription_10\" type = \"checkbox\" onclick = \"SetSelected(10)\"></td>
				<td>50m衝刺泳最大速力竭時間</td>
			</tr>
			<tr>
				<td><input id = \"check_Prescription_15\" type = \"checkbox\" onclick = \"SetSelected(15)\"></td>
				<td>200m衝刺騎最大速力竭時間</td>
			</tr>
			<tr>
				<td colspan = \"2\"><b>訓練處方</b></td>
			</tr>
			<tr>
				<td><input id = \"check_Prescription_3\" type = \"checkbox\" onclick = \"SetSelected(3)\"></td>
				<td>速耐力間歇跑(跑台法)</td>
			</tr>
			<tr>
				<td><input id = \"check_Prescription_4\" type = \"checkbox\" onclick = \"SetSelected(4)\"></td>
				<td>速耐力間歇跑(田徑場法)</td>
			</tr>
			<tr>
				<td><input id = \"check_Prescription_9\" type = \"checkbox\" onclick = \"SetSelected(9)\"></td>
				<td>速耐力間歇泳(泳池法)</td>
			</tr>
			<tr>
				<td><input id = \"check_Prescription_14\" type = \"checkbox\" onclick = \"SetSelected(14)\"></td>
				<td>速耐力間歇騎(公路/滾筒訓練台法)</td>
			</tr>
			<tr>
				<td><input id = \"check_Prescription_5\" type = \"checkbox\" onclick = \"SetSelected(5)\"></td>
				<td>100m衝刺跑</td>
			</tr>
			<tr>
				<td><input id = \"check_Prescription_11\" type = \"checkbox\" onclick = \"SetSelected(11)\"></td>
				<td>50m衝刺泳</td>
			</tr>
			<tr>
				<td><input id = \"check_Prescription_16\" type = \"checkbox\" onclick = \"SetSelected(16)\"></td>
				<td>200m衝刺騎</td>
			</tr>
			<tr>
				<td><input id = \"check_Prescription_6\" type = \"checkbox\" onclick = \"SetSelected(6)\"></td>
				<td>長距離耐力跑</td>
			</tr>
			<tr>
				<td><input id = \"check_Prescription_12\" type = \"checkbox\" onclick = \"SetSelected(12)\"></td>
				<td>長距離耐力泳</td>
			</tr>
			<tr>
				<td><input id = \"check_Prescription_17\" type = \"checkbox\" onclick = \"SetSelected(17)\"></td>
				<td>長距離耐力騎</td>
			</tr>
			<tr>
				<td><input id = \"check_Prescription_7\" type = \"checkbox\" onclick = \"SetSelected(7)\"></td>
				<td>肌力訓練</td>
			</tr>
		</table>
		<div id = \"div_EmailContent\">
		</div>
		<button id = \"button_SelectAll\" type = \"button\" onclick = \"MailSelectAll()\">全選</button></br>";
  
?>  

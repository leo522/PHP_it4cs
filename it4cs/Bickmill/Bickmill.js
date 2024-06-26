var BickmillFailureTime95 = 0;
var BickmillFailureTime90 = 0;
var BickmillFailureTime85 = 0;
var BickmillFailureTime80 = 0;
var BickmillMaxSpeed = 0;
var BickmillSingleMode = [3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3];
var BickmillIncreaseMode_TF = [1, 21, 1, 1, 3, 2, 21, 1, 1, 3, 3, 21, 1, 1, 3, 4, 21, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var BickmillIncreaseMode_TR = [3, 5, 1, 10, 3, 3, 5, 2, 10, 3, 3, 5, 3, 10, 3, 3, 5, 4, 10, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var BickmillIncreaseMode_TN = [3, 5, 1,  2, 1, 3, 5, 1,  2, 2, 3, 5, 1, 2, 3, 3, 5, 1,  2, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var BickmillDecreaseMode_TF = [20, 21, 1, 1, 3, 19, 21, 1, 1, 3, 18, 21, 1, 1, 3, 17, 21, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var BickmillDecreaseMode_TR = [3, 5, 10, 5, 3, 3, 5, 7, 5, 3, 3, 5, 5, 5, 3, 3, 5, 3, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var BickmillDecreaseMode_TN = [3, 5, 1, 2, 5, 3, 5, 1, 2, 4, 3, 5, 1, 2, 3, 3, 5, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var BickmillWaveMode_TF = [1, 5, 3, 2, 3, 4, 5, 3, 2, 3, 1, 5, 3, 2, 3, 4, 5, 3, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var BickmillWaveMode_TR = [3, 5, 2, 2, 3, 3, 5, 5, 2, 3, 3, 5, 2, 2, 3, 3, 5, 5, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var BickmillWaveMode_TN = [3, 5, 3, 2, 2, 3, 5, 3, 2, 4, 3, 5, 3, 2, 2, 3, 5, 3, 2, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var BickmillBickmillMaxSpeedPercent = [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80];
var BickmillCurrentMode = "SingleSet";
var BickmillCurrentSets = 1;
var BickmillFactor = "T_FRate";
var BickmillTotT = 0;
var BickmillLimitSpeed = 0;
var BickmillMaxWork = 0;
var BickMillMaxR = 0;
var BickMillMaxR_a;
var BickMillMaxR_b;

function SetHeartInfo()
{
	BasicHeartbeat = document.getElementById("input_BasicHeartbeat").value;
	MaxHeartbeat = document.getElementById("input_MaxHeartbeat").value;
	ExerciseHeartbeat = document.getElementById("input_ExerciseHeartbeat").value;
	HRR = (((ExerciseHeartbeat - BasicHeartbeat) / (MaxHeartbeat - BasicHeartbeat)) * 100).toFixed(0);
	document.getElementById("input_HRR").value = HRR;
}

function CaculateBickmillSpeed()
{
	BickmillMaxSpeed = document.getElementById("input_BM_MaxSpeed").value;
	for(var i = 0; i < 4; i++)
	{
		var Strong = 95 - (i * 5);
		var SpeedElementName = "input_BM_"+ Strong + "Speed";
		var TimeElementName = "input_BM_"+ Strong + "Time";
		document.getElementById(SpeedElementName).setAttribute("value", (BickmillMaxSpeed * ((95 - (i * 5)) / 100)).toFixed(1));
	}
}

function BickmillPrescription(type)
{
	//type = 0 : 代謝能力
	//type = 1 : 速耐力間歇跑
	
	HeartInfo = false;
	pattern = /^[0-9]+(.[0-9]+)?$/;
	var ErrorMessage = "請檢查以下參數：\n";
	var ErrorFlag = 0;
	if(!pattern.test(BickmillMaxSpeed) || BickmillMaxSpeed <= 0)
	{
		ErrorMessage += "最大跑速\n";
		ErrorFlag = 1;
	}
	if(!pattern.test(BickmillFailureTime95) || BickmillFailureTime95 <= 0)
	{
		ErrorMessage += "95%時的力竭時間\n";
		ErrorFlag = 1;
	}
	if(!pattern.test(BickmillFailureTime90) || BickmillFailureTime90 <= 0)
	{
		ErrorMessage += "90%時的力竭時間\n";
		ErrorFlag = 1;
	}
	if(!pattern.test(BickmillFailureTime85) || BickmillFailureTime85 <= 0)
	{
		ErrorMessage += "85%時的力竭時間\n";
		ErrorFlag = 1;
	}
	if(!pattern.test(BickmillFailureTime80) || BickmillFailureTime80 <= 0)
	{
		ErrorMessage += "80%時的力竭時間\n";
		ErrorFlag = 1;
	}
	
	if(ErrorFlag == 1)
	{
		alert(ErrorMessage);
	}
	else
	{
		var xmlhttp;
		if (window.XMLHttpRequest)
		{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
		}
		else
		{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange=function()
		{
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				document.getElementById("div_MainDiv").innerHTML=xmlhttp.responseText;
				
				//Heart Info
				document.getElementById("input_BasicHeartbeat").value = BasicHeartbeat;
				document.getElementById("input_MaxHeartbeat").value = MaxHeartbeat;
				document.getElementById("input_ExerciseHeartbeat").value = ExerciseHeartbeat;
				HRR = (((ExerciseHeartbeat - BasicHeartbeat) / (MaxHeartbeat - BasicHeartbeat)) * 100).toFixed(0);
				document.getElementById("input_HRR").value = HRR;				
				
				document.getElementById("input_BM_95Time").value = BickmillFailureTime95;
				document.getElementById("input_BM_90Time").value = BickmillFailureTime90;
				document.getElementById("input_BM_85Time").value = BickmillFailureTime85;
				document.getElementById("input_BM_80Time").value = BickmillFailureTime80;				
					
				for(var i = 0; i < 5; i++)
				{
					var Strong = 100 - (i * 5);
					var SpeedElementName = "input_BM_"+ Strong + "Speed";
					var TimeElementName = "input_BM_"+ Strong + "Time";
					document.getElementById(SpeedElementName).value = (BickmillMaxSpeed * ((100 - (i * 5)) / 100)).toFixed(1);
				}

				document.getElementById("input_BM_95Distance").value = ((BickmillFailureTime95 * BickmillMaxSpeed * 0.95) / 1000).toFixed(1);
				document.getElementById("input_BM_90Distance").value = ((BickmillFailureTime90 * BickmillMaxSpeed * 0.90) / 1000).toFixed(1);
				document.getElementById("input_BM_85Distance").value = ((BickmillFailureTime85 * BickmillMaxSpeed * 0.85) / 1000).toFixed(1);
				document.getElementById("input_BM_80Distance").value = ((BickmillFailureTime80 * BickmillMaxSpeed * 0.80) / 1000).toFixed(1);
									
				/*//Caculate limite speed and max work
				var a, b, mxy, xx, yy, x2, x22;
				a = b = mxy = xx = yy = x2 = x22 = 0.0;
					
				mxy = 4 * (BickmillFailureTime95 * Distance95 + BickmillFailureTime90 * Distance90 + BickmillFailureTime85 * Distance85 + BickmillFailureTime80 * Distance80);
				xx = 1 * BickmillFailureTime95 + 1 * BickmillFailureTime90 + 1 * BickmillFailureTime85 + 1 * BickmillFailureTime80;
				yy = 1 * Distance95 + 1 * Distance90 + 1 * Distance85 + 1 * Distance80;
				x2 = 4 * (BickmillFailureTime95 * BickmillFailureTime95 + BickmillFailureTime90 * BickmillFailureTime90 + BickmillFailureTime85 * BickmillFailureTime85 + BickmillFailureTime80 * BickmillFailureTime80);
				x22 = 1 * BickmillFailureTime95 + 1 * BickmillFailureTime90 + 1 * BickmillFailureTime85 + 1 * BickmillFailureTime80;
					
				b = (mxy - xx * yy) / (x2 - x22 * x22);
				a = yy / 4 - b * xx / 4;
				//End of caculate*/
				BickmillCaculateLinearRegression();

				BickmillLimitSpeed = BickMillMaxR_b.toFixed(1);
				
				document.getElementById("input_BM_LimitSpeed").value = BickmillLimitSpeed;
				document.getElementById("input_BM_MaxWork").value = BickmillMaxWork = (BickMillMaxR_a/1000).toFixed(2);
				document.getElementById("input_BM_MaxSpeedPercentage").value = ((BickMillMaxR_b / BickmillMaxSpeed) * 100).toFixed(0);
				document.getElementById("input_HRR").value = (((ExerciseHeartbeat - BasicHeartbeat) / (MaxHeartbeat - BasicHeartbeat)) * 100).toFixed(0);
						
				document.getElementById("select_Mode").value = BickmillCurrentMode;
				document.getElementById("select_Sets").value = BickmillCurrentSets;
				document.getElementById("select_BM_Factor").value = BickmillFactor;
				BickmillPrescriptionTable(BickmillCurrentMode, BickmillCurrentSets);
			}
		}
		if(type == 1)
		{
			xmlhttp.open("GET","Bickmill/ResultAndPrescription.php",true);
			xmlhttp.send();
		}
		else if(type == 0)
		{
			BasicInfo();
			var Distance95 = (BickmillFailureTime95 * BickmillMaxSpeed * 0.95).toFixed(1);
			var Distance90 = (BickmillFailureTime90 * BickmillMaxSpeed * 0.90).toFixed(1);
			var Distance85 = (BickmillFailureTime85 * BickmillMaxSpeed * 0.85).toFixed(1);
			var Distance80 = (BickmillFailureTime80 * BickmillMaxSpeed * 0.80).toFixed(1);
					
					
					
			/*//Caculate limite speed and max work
			var a, b, mxy, xx, yy, x2, x22;
			a = b = mxy = xx = yy = x2 = x22 = 0.0;
					
			mxy = 4 * (BickmillFailureTime95 * Distance95 + BickmillFailureTime90 * Distance90 + BickmillFailureTime85 * Distance85 + BickmillFailureTime80 * Distance80);
			xx = 1 * BickmillFailureTime95 + 1 * BickmillFailureTime90 + 1 * BickmillFailureTime85 + 1 * BickmillFailureTime80;
			yy = 1 * Distance95 + 1 * Distance90 + 1 * Distance85 + 1 * Distance80;
			x2 = 4 * (BickmillFailureTime95 * BickmillFailureTime95 + BickmillFailureTime90 * BickmillFailureTime90 + BickmillFailureTime85 * BickmillFailureTime85 + BickmillFailureTime80 * BickmillFailureTime80);
			x22 = 1 * BickmillFailureTime95 + 1 * BickmillFailureTime90 + 1 * BickmillFailureTime85 + 1 * BickmillFailureTime80;
					
			b = (mxy - xx * yy) / (x2 - x22 * x22);
			a = yy / 4 - b * xx / 4;
			//End of caculate*/
			BickmillCaculateLinearRegression();
		
			BickmillMaxWork = (BickMillMaxR_a/1000).toFixed(2);
			BickmillLimitSpeed = BickMillMaxR_b.toFixed(1);
		}			
	}
}

function BickmillCaculateLinearRegression(Strong)
{
	TreadMillMaxR = 0;
	switch(Strong)
	{
	case 95:
		BickmillFailureTime95 = document.getElementById("input_BM_"+ Strong +"Time").value;
		break;
	case 90:
		BickmillFailureTime90 = document.getElementById("input_BM_"+ Strong +"Time").value;
		break;
	case 85:
		BickmillFailureTime85 = document.getElementById("input_BM_"+ Strong +"Time").value;
		break;
	case 80:
		BickmillFailureTime80 = document.getElementById("input_BM_"+ Strong +"Time").value;
		break;
	}
	
	BickmillDistance95 = (BickmillFailureTime95 * BickmillMaxSpeed * 0.95).toFixed(1);
	BickmillDistance90 = (BickmillFailureTime90 * BickmillMaxSpeed * 0.90).toFixed(1);
	BickmillDistance85 = (BickmillFailureTime85 * BickmillMaxSpeed * 0.85).toFixed(1);
	BickmillDistance80 = (BickmillFailureTime80 * BickmillMaxSpeed * 0.80).toFixed(1);
	
	var MaxR = 0;
	var MaxR_a = 0;
	var MaxR_b = 0;
	for(var i = 0; i < 4; i++)
	{
		switch(i)
		{
		case 0:
			var X_1 = BickmillFailureTime95;
			var X_2 = BickmillFailureTime90;
			var X_3 = BickmillFailureTime85;
			var Y_1 = BickmillDistance95;
			var Y_2 = BickmillDistance90;
			var Y_3 = BickmillDistance85;
			break;
		case 1:
			var X_1 = BickmillFailureTime95;
			var X_2 = BickmillFailureTime85;
			var X_3 = BickmillFailureTime80;
			var Y_1 = BickmillDistance95;
			var Y_2 = BickmillDistance85;
			var Y_3 = BickmillDistance80;
			break;
		case 2:
			var X_1 = BickmillFailureTime95;
			var X_2 = BickmillFailureTime90;
			var X_3 = BickmillFailureTime80;
			var Y_1 = BickmillDistance95;
			var Y_2 = BickmillDistance90;
			var Y_3 = BickmillDistance80;
			break;
		case 3:
			var X_1 = BickmillFailureTime90;
			var X_2 = BickmillFailureTime85;
			var X_3 = BickmillFailureTime80;
			var Y_1 = BickmillDistance90;
			var Y_2 = BickmillDistance85;
			var Y_3 = BickmillDistance80;
			break;
		}
		var a, b, mxy, xx, yy, x2, x22;
		a = b = mxy = xx = yy = x2 = x22 = 0.0;
			
		mxy = 3 * (X_1 * Y_1 + X_2 * Y_2 + X_3 * Y_3);
		xx = 1 * X_1 + 1 * X_2 + 1 * X_3;
		yy = 1 * Y_1 + 1 * Y_2 + 1 * Y_3;
		x2 = 3 * (X_1 * X_1 + X_2 * X_2 + X_3 * X_3);
		x22 = 1 * X_1 + 1 * X_2 + 1 * X_3;
			
		b = (mxy - xx * yy) / (x2 - x22 * x22);
		a = yy / 3 - b * xx / 3;
		
		//y = bx + a
		var Y_Average = (Y_1 * 1 + Y_2 * 1 + Y_3 * 1) / 3;
		var Y_DistanceWithBar = (Y_1 - Y_Average) * (Y_1 - Y_Average) + (Y_2 - Y_Average) * (Y_2 - Y_Average) + (Y_3 - Y_Average) * (Y_3 - Y_Average);
		var Y_DistanceWithLine = (Y_1 - (b * X_1 + a * 1)) * (Y_1 - (b * X_1 + a * 1)) + (Y_2 - (b * X_2 + a * 1)) * (Y_2 - (b * X_2 + a * 1)) + (Y_3 - (b * X_3 + a * 1)) * (Y_3 - (b * X_3 + a * 1));
		var R2 = 1-(Y_DistanceWithLine / Y_DistanceWithBar);
		if(R2 > MaxR)
		{
			MaxR = R2;
			MaxR_a = a;
			MaxR_b = b;
		}
	}
	BickMillMaxR_a = MaxR_a;
	BickMillMaxR_b = MaxR_b;
	document.getElementById("input_BM_R2").value = BickMillMaxR = Math.floor(MaxR *100) / 100;
}


function BickmillPrescriptionTable(Mode, SetNum)
{
	BickmillCurrentMode = Mode;
	BickmillCurrentSets = SetNum;
	var xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("div_PrescriptionInfo").innerHTML=xmlhttp.responseText;
			BickmillFactor = document.getElementById("select_BM_Factor").value;
			BickmillPrescriptionAttribute();
			BickmillInitialPrescription();
		}
	}
	xmlhttp.open("GET","Bickmill/Prescription.php?Mode=" + BickmillCurrentMode +"&SetNum=" + BickmillCurrentSets,true);
	xmlhttp.send();
}

function BickmillDefaultAttribute()
{
	if(BickmillCurrentMode == "SingleSet")
	{
		BickmillSingleMode = [3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3];
	}
	else if(BickmillCurrentMode == "Increase")
	{
		if(BickmillFactor == "T_FRate")
		{
			BickmillIncreaseMode_TF = [1, 21, 1, 1, 3, 2, 21, 1, 1, 3, 3, 21, 1, 1, 3, 4, 21, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		}
		else if(BickmillFactor == "T_RRate")
		{
			BickmillIncreaseMode_TR = [3, 5, 1, 10, 3, 3, 5, 2, 10, 3, 3, 5, 3, 10, 3, 3, 5, 4, 10, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		}
		else if(BickmillFactor == "TurnNum")
		{
			BickmillIncreaseMode_TN = [3, 5, 1,  2, 1, 3, 5, 1,  2, 2, 3, 5, 1, 2, 3, 3, 5, 1,  2, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		}
	}
	else if(BickmillCurrentMode == "Decrease")
	{
		if(BickmillFactor == "T_FRate")
		{
			BickmillDecreaseMode_TF = [20, 21, 1, 1, 3, 19, 21, 1, 1, 3, 18, 21, 1, 1, 3, 17, 21, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		}
		else if(BickmillFactor == "T_RRate")
		{
			BickmillDecreaseMode_TR = [3, 5, 10, 5, 3, 3, 5, 7, 5, 3, 3, 5, 5, 5, 3, 3, 5, 3, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		}
		else if(BickmillFactor == "TurnNum")
		{
			BickmillDecreaseMode_TN = [3, 5, 1, 2, 5, 3, 5, 1, 2, 4, 3, 5, 1, 2, 3, 3, 5, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		}
	}
	else if(BickmillCurrentMode == "Wave")
	{
		if(BickmillFactor == "T_FRate")
		{
			BickmillWaveMode_TF = [1, 5, 3, 2, 3, 4, 5, 3, 2, 3, 1, 5, 3, 2, 3, 4, 5, 3, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		}
		else if(BickmillFactor == "T_RRate")
		{
			BickmillWaveMode_TR = [3, 5, 2, 2, 3, 3, 5, 5, 2, 3, 3, 5, 2, 2, 3, 3, 5, 5, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		}
		else if(BickmillFactor == "TurnNum")
		{
			BickmillWaveMode_TN = [3, 5, 3, 2, 2, 3, 5, 3, 2, 4, 3, 5, 3, 2, 2, 3, 5, 3, 2, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		}
	}
	BickmillPrescriptionTable(BickmillCurrentMode, BickmillCurrentSets);
}

function BickmillInitialPrescription()
{
	for(var i = 1; i <= BickmillCurrentSets; i++)
	{
		document.getElementById("select_BM_TStrong_S"+i).setAttribute("value", BickmillBickmillMaxSpeedPercent[i-1]);
		var Strong = document.getElementById("select_BM_TStrong_S"+i).value = BickmillBickmillMaxSpeedPercent[i-1];
		var input_TimePerT_S = (document.getElementById("input_BM_" + Strong + "Time").value * document.getElementById("input_BM_TTime_S" + i).value / document.getElementById("input_BM_FTime_S" + i).value).toFixed(0);
		var input_RelaxPerT_S = (input_TimePerT_S / (document.getElementById("input_BM_TTime2_S" + i).value * document.getElementById("input_BM_RTime_S" + i).value)).toFixed(0);
		var input_TimePerS_S = (( 1 * input_RelaxPerT_S + 1 * input_TimePerT_S) * document.getElementById("input_BM_TNum_S" + i).value).toFixed(0);
		document.getElementById("input_BM_PercentToSpeed" + i).setAttribute("value", document.getElementById("input_BM_"+Strong+"Speed").value);
		//document.getElementById("input_TimePerT_S" + i).value = (document.getElementById("input_" + Strong + "Time").value * document.getElementById("input_BM_TTime_S" + i).value / document.getElementById("input_BM_FTime_S" + i).value).toFixed(0);
		document.getElementById("input_BM_TimePerT_min_S" + i).setAttribute("value", Math.floor(input_TimePerT_S / 60));
		document.getElementById("input_BM_TimePerT_sec_S" + i).setAttribute("value", input_TimePerT_S % 60);
		document.getElementById("input_BM_DistancePerT_S" + i).setAttribute("value", ((document.getElementById("input_BM_" + Strong + "Speed").value * input_TimePerT_S) / 1000).toFixed(1));
		//document.getElementById("input_RelaxPerT_S" + i).value = (input_TimePerT_S / (document.getElementById("input_BM_TTime2_S" + i).value * document.getElementById("input_BM_RTime_S" + i).value)).toFixed(0);
		document.getElementById("input_BM_RelaxPerT_min_S" + i).setAttribute("value", Math.floor(input_RelaxPerT_S / 60));
		document.getElementById("input_BM_RelaxPerT_sec_S" + i).setAttribute("value", input_RelaxPerT_S % 60);
		//document.getElementById("input_TimePerS_S" + i).value = (( 1 * document.getElementById("input_RelaxPerT_S" + i).value + 1 * input_TimePerT_S) * document.getElementById("input_BM_TNum_S" + i).value).toFixed(0);
		document.getElementById("input_BM_TimePerS_min_S" + i).setAttribute("value", Math.floor(input_TimePerS_S / 60));
		document.getElementById("input_BM_TimePerS_sec_S" + i).setAttribute("value", input_TimePerS_S % 60);
		document.getElementById("input_BM_PartT_S" + i).setAttribute("value", (document.getElementById("input_BM_TNum_S" + i).value * input_TimePerT_S / document.getElementById("input_BM_" + Strong + "Time").value + Math.log(input_TimePerS_S / input_RelaxPerT_S / document.getElementById("input_BM_TNum_S" + i).value)).toFixed(2));
	}
	BickmillTotalT();
}

function BickmillCaculatPrescription(SetsIndex, AttValue, AttIndex)
{
	var Strong = BickmillBickmillMaxSpeedPercent[SetsIndex-1] = document.getElementById("select_BM_TStrong_S" + SetsIndex).value;
	var input_TimePerT_S = (document.getElementById("input_BM_" + Strong + "Time").value * document.getElementById("input_BM_TTime_S" + SetsIndex).value / document.getElementById("input_BM_FTime_S" + SetsIndex).value).toFixed(0);
	var input_RelaxPerT_S = ((input_TimePerT_S / document.getElementById("input_BM_TTime2_S" + SetsIndex).value) * document.getElementById("input_BM_RTime_S" + SetsIndex).value).toFixed(0);
	var input_TimePerS_S = (( 1 * input_RelaxPerT_S + 1 * input_TimePerT_S) * document.getElementById("input_BM_TNum_S" + SetsIndex).value).toFixed(0);
	document.getElementById("input_BM_PercentToSpeed" + SetsIndex).value = document.getElementById("input_BM_"+Strong+"Speed").value;
	//document.getElementById("input_TimePerT_S" + SetsIndex).value = (document.getElementById("input_" + Strong + "Time").value * document.getElementById("input_BM_TTime_S" + SetsIndex).value / document.getElementById("input_BM_FTime_S" + SetsIndex).value).toFixed(0);
	document.getElementById("input_BM_TimePerT_min_S" + SetsIndex).value = Math.floor(input_TimePerT_S / 60);
	document.getElementById("input_BM_TimePerT_sec_S" + SetsIndex).value = input_TimePerT_S % 60;
	document.getElementById("input_BM_DistancePerT_S" + SetsIndex).value = ((document.getElementById("input_BM_" + Strong + "Speed").value * input_TimePerT_S) / 1000).toFixed(1);
	//document.getElementById("input_RelaxPerT_S" + SetsIndex).value = (input_TimePerT_S / (document.getElementById("input_BM_TTime2_S" + SetsIndex).value * document.getElementById("input_BM_RTime_S" + SetsIndex).value)).toFixed(0);
	document.getElementById("input_BM_RelaxPerT_min_S" + SetsIndex).value = Math.floor(input_RelaxPerT_S / 60);
	document.getElementById("input_BM_RelaxPerT_sec_S" + SetsIndex).value = input_RelaxPerT_S % 60;
	//document.getElementById("input_TimePerS_S" + SetsIndex).value = (( 1 * document.getElementById("input_RelaxPerT_S" + SetsIndex).value + 1 * input_TimePerT_S) * document.getElementById("input_BM_TNum_S" + SetsIndex).value).toFixed(0);
	document.getElementById("input_BM_TimePerS_min_S" + SetsIndex).value = Math.floor(input_TimePerS_S / 60);
	document.getElementById("input_BM_TimePerS_sec_S" + SetsIndex).value = input_TimePerS_S % 60;
	document.getElementById("input_BM_PartT_S" + SetsIndex).value = (document.getElementById("input_BM_TNum_S" + SetsIndex).value * input_TimePerT_S / document.getElementById("input_BM_" + Strong + "Time").value + Math.log(input_TimePerS_S / input_RelaxPerT_S / document.getElementById("input_BM_TNum_S" + SetsIndex).value)).toFixed(2);
	
	if(AttIndex != 5)
	{
		if(BickmillCurrentMode == "SingleSet")
		{
			BickmillSingleMode[(SetsIndex - 1) * 5 + AttIndex] = AttValue;
		}
		else if(BickmillCurrentMode == "Increase")
		{
			if(BickmillFactor == "T_FRate")
			{
				BickmillIncreaseMode_TF[(SetsIndex - 1) * 5 + AttIndex] = AttValue;
			}
			else if(BickmillFactor == "T_RRate")
			{
				BickmillIncreaseMode_TR[(SetsIndex - 1) * 5 + AttIndex] = AttValue;
			}
			else if(BickmillFactor == "TurnNum")
			{
				BickmillIncreaseMode_TN[(SetsIndex - 1) * 5 + AttIndex] = AttValue;
			}
		}
		else if(BickmillCurrentMode == "Decrease")
		{
			if(BickmillFactor == "T_FRate")
			{
				BickmillDecreaseMode_TF[(SetsIndex - 1) * 5 + AttIndex] = AttValue;
			}
			else if(BickmillFactor == "T_RRate")
			{
				BickmillDecreaseMode_TR[(SetsIndex - 1) * 5 + AttIndex] = AttValue;
			}
			else if(BickmillFactor == "TurnNum")
			{
				BickmillDecreaseMode_TN[(SetsIndex - 1) * 5 + AttIndex] = AttValue;
			}
		}
		else if(BickmillCurrentMode == "Wave")
		{
			if(BickmillFactor == "T_FRate")
			{
				BickmillWaveMode_TF[(SetsIndex - 1) * 5 + AttIndex] = AttValue;
			}
			else if(BickmillFactor == "T_RRate")
			{
				BickmillWaveMode_TR[(SetsIndex - 1) * 5 + AttIndex] = AttValue;
			}
			else if(BickmillFactor == "TurnNum")
			{
				BickmillWaveMode_TN[(SetsIndex - 1) * 5 + AttIndex] = AttValue;
			}
		}
	}
	BickmillTotalT();
}

function BickmillPrescriptionAttribute()
{
	var Attribute;
	//BickmillFactor = document.getElementById("select_BM_Factor").value;
	if(BickmillCurrentMode == "SingleSet")
	{
		Attribute = BickmillSingleMode;
		document.getElementById("select_BM_Factor").disabled = true;
	}
	else if(BickmillCurrentMode == "Increase")
	{
		if(BickmillFactor == "T_FRate")
		{
			Attribute = BickmillIncreaseMode_TF;
		}
		else if(BickmillFactor == "T_RRate")
		{
			Attribute = BickmillIncreaseMode_TR;
		}
		else if(BickmillFactor == "TurnNum")
		{
			Attribute = BickmillIncreaseMode_TN;
		}
		document.getElementById("select_BM_Factor").disabled = false;
	}
	else if(BickmillCurrentMode == "Decrease")
	{
		if(BickmillFactor == "T_FRate")
		{
			Attribute = BickmillDecreaseMode_TF;
		}
		else if(BickmillFactor == "T_RRate")
		{
			Attribute = BickmillDecreaseMode_TR;
		}
		else if(BickmillFactor == "TurnNum")
		{
			Attribute = BickmillDecreaseMode_TN;
		}
		document.getElementById("select_BM_Factor").disabled = false;
	}
	else if(BickmillCurrentMode == "Wave")
	{
		if(BickmillFactor == "T_FRate")
		{
			Attribute = BickmillWaveMode_TF;
		}
		else if(BickmillFactor == "T_RRate")
		{
			Attribute = BickmillWaveMode_TR;
		}
		else if(BickmillFactor == "TurnNum")
		{
			Attribute = BickmillWaveMode_TN;
		}
		document.getElementById("select_BM_Factor").disabled = false;
	}
	
	for(var i = 1; i <= BickmillCurrentSets; i++)
	{
		if(BickmillCurrentMode != "SingleSet")
		{
			if(BickmillFactor == "T_FRate")
			{
				document.getElementById("th_BM_T_FRate" + i).style.color = "#FF0000";
			}
			else if(BickmillFactor == "T_RRate")
			{
				document.getElementById("th_BM_T_RRate" + i).style.color = "#FF0000";
			}
			else if(BickmillFactor == "TurnNum")
			{
				document.getElementById("th_BM_TurnNum" + i).style.color = "#FF0000";
			}
		}
		document.getElementById("input_BM_TTime_S" + i).setAttribute("value", Attribute[(i - 1) * 5]);
		document.getElementById("input_BM_FTime_S" + i).setAttribute("value", Attribute[(i - 1) * 5 + 1]);
		document.getElementById("input_BM_TTime2_S" + i).setAttribute("value", Attribute[(i - 1) * 5 + 2]);
		document.getElementById("input_BM_RTime_S" + i).setAttribute("value", Attribute[(i - 1) * 5 + 3]);
		document.getElementById("input_BM_TNum_S" + i).setAttribute("value", Attribute[(i - 1) * 5 + 4]);
	}
}

function BickmillTotalT()
{
	var TotT = 0;
	for(var i = 1; i <= BickmillCurrentSets; i++)
	{
		TotT = TotT + 1 * document.getElementById("input_BM_PartT_S" + i).value;
	}
	document.getElementById("input_BM_TotT").setAttribute("value", BickmillTotT = TotT.toFixed(2));
}
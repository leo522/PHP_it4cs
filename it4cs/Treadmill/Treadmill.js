var FailureTime95 = 0;
var FailureTime90 = 0;
var FailureTime85 = 0;
var FailureTime80 = 0;
var MaxSpeed = 0;
var TreadmillSingleMode = [3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3];
var TreadmillIncreaseMode_TF = [1, 21, 1, 1, 3, 2, 21, 1, 1, 3, 3, 21, 1, 1, 3, 4, 21, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var TreadmillIncreaseMode_TR = [3, 5, 1, 10, 3, 3, 5, 2, 10, 3, 3, 5, 3, 10, 3, 3, 5, 4, 10, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var TreadmillIncreaseMode_TN = [3, 5, 1,  2, 1, 3, 5, 1,  2, 2, 3, 5, 1, 2, 3, 3, 5, 1,  2, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var TreadmillDecreaseMode_TF = [20, 21, 1, 1, 3, 19, 21, 1, 1, 3, 18, 21, 1, 1, 3, 17, 21, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var TreadmillDecreaseMode_TR = [3, 5, 10, 5, 3, 3, 5, 7, 5, 3, 3, 5, 5, 5, 3, 3, 5, 3, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var TreadmillDecreaseMode_TN = [3, 5, 1, 2, 5, 3, 5, 1, 2, 4, 3, 5, 1, 2, 3, 3, 5, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var TreadmillWaveMode_TF = [1, 5, 3, 2, 3, 4, 5, 3, 2, 3, 1, 5, 3, 2, 3, 4, 5, 3, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var TreadmillWaveMode_TR = [3, 5, 2, 2, 3, 3, 5, 5, 2, 3, 3, 5, 2, 2, 3, 3, 5, 5, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var TreadmillWaveMode_TN = [3, 5, 3, 2, 2, 3, 5, 3, 2, 4, 3, 5, 3, 2, 2, 3, 5, 3, 2, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var TreadmillMaxSpeedPercent = [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80];
var TreadmillCurrentMode = "SingleSet";
var TreadmillCurrentSets = 1;
var TreadmillFactor = "T_FRate";
var TreadmillTotT = 0;
var TreadmillLimitSpeed = 0;
var TreadmillMaxWork = 0;
var TreadMillMaxR = 0;
var TreadMillMaxR_a;
var TreadMillMaxR_b;
var TreadmillDistance95 = 0;
var TreadmillDistance90 = 0;
var TreadmillDistance85 = 0;
var TreadmillDistance80 = 0;

function SetHeartInfo()
{
	BasicHeartbeat = document.getElementById("input_BasicHeartbeat").value;
	MaxHeartbeat = document.getElementById("input_MaxHeartbeat").value;
	ExerciseHeartbeat = document.getElementById("input_ExerciseHeartbeat").value;
	HRR = (((ExerciseHeartbeat - BasicHeartbeat) / (MaxHeartbeat - BasicHeartbeat)) * 100).toFixed(0);
	document.getElementById("input_HRR").value = HRR;
}

function CaculateTreadmillSpeed()
{
	MaxSpeed = document.getElementById("input_MaxSpeed").value;
	for(var i = 0; i < 4; i++)
	{
		var Strong = 95 - (i * 5);
		var SpeedElementName = "input_"+ Strong + "Speed";
		var TimeElementName = "input_"+ Strong + "Time";
		document.getElementById(SpeedElementName).setAttribute("value", (MaxSpeed * ((95 - (i * 5)) / 100)).toFixed(1));
	}
}

function TreadmillPrescription(type)
{
	//type = 0 : 代謝能力
	//type = 1 : 速耐力間歇跑
	
	HeartInfo = false;
	pattern = /^[0-9]+(.[0-9]+)?$/;
	var ErrorMessage = "請檢查以下參數：\n";
	var ErrorFlag = 0;
	if(!pattern.test(MaxSpeed) || MaxSpeed <= 0)
	{
		ErrorMessage += "最大跑速\n";
		ErrorFlag = 1;
	}
	if(!pattern.test(FailureTime95) || FailureTime95 <= 0)
	{
		ErrorMessage += "95%時的力竭時間\n";
		ErrorFlag = 1;
	}
	if(!pattern.test(FailureTime90) || FailureTime90 <= 0)
	{
		ErrorMessage += "90%時的力竭時間\n";
		ErrorFlag = 1;
	}
	if(!pattern.test(FailureTime85) || FailureTime85 <= 0)
	{
		ErrorMessage += "85%時的力竭時間\n";
		ErrorFlag = 1;
	}
	if(!pattern.test(FailureTime80) || FailureTime80 <= 0)
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
				
				document.getElementById("input_95Time").value = FailureTime95;
				document.getElementById("input_90Time").value = FailureTime90;
				document.getElementById("input_85Time").value = FailureTime85;
				document.getElementById("input_80Time").value = FailureTime80;				
					
				for(var i = 0; i < 5; i++)
				{
					var Strong = 100 - (i * 5);
					var SpeedElementName = "input_"+ Strong + "Speed";
					var TimeElementName = "input_"+ Strong + "Time";
					document.getElementById(SpeedElementName).value = (MaxSpeed * ((100 - (i * 5)) / 100)).toFixed(1);
				}

				var MaxSpeedInMS = (MaxSpeed * 1000) / 3600;
				document.getElementById("input_95Distance").value = (FailureTime95 * MaxSpeedInMS * 0.95).toFixed(1);
				document.getElementById("input_90Distance").value = (FailureTime90 * MaxSpeedInMS * 0.90).toFixed(1);
				document.getElementById("input_85Distance").value = (FailureTime85 * MaxSpeedInMS * 0.85).toFixed(1);
				document.getElementById("input_80Distance").value = (FailureTime80 * MaxSpeedInMS * 0.80).toFixed(1);
					
				//Caculate limite speed and max work
				/*var a, b, mxy, xx, yy, x2, x22;
				a = b = mxy = xx = yy = x2 = x22 = 0.0;
					
				mxy = 4 * (FailureTime95 * Distance95 + FailureTime90 * Distance90 + FailureTime85 * Distance85 + FailureTime80 * Distance80);
				xx = 1 * FailureTime95 + 1 * FailureTime90 + 1 * FailureTime85 + 1 * FailureTime80;
				yy = 1 * Distance95 + 1 * Distance90 + 1 * Distance85 + 1 * Distance80;
				x2 = 4 * (FailureTime95 * FailureTime95 + FailureTime90 * FailureTime90 + FailureTime85 * FailureTime85 + FailureTime80 * FailureTime80);
				x22 = 1 * FailureTime95 + 1 * FailureTime90 + 1 * FailureTime85 + 1 * FailureTime80;
					
				b = (mxy - xx * yy) / (x2 - x22 * x22);
				a = yy / 4 - b * xx / 4;*/
				//End of caculate

				//TreadmillCaculateLinearRegression();
				document.getElementById("input_TM_R2").value = TreadMillMaxR;
				TreadmillLimitSpeed = ((TreadMillMaxR_b * 3600) / 1000).toFixed(1);
				
				document.getElementById("input_LimitSpeed").value = ((TreadMillMaxR_b * 3600) / 1000).toFixed(1);
				document.getElementById("input_MaxWork").value = TreadmillMaxWork = TreadMillMaxR_a.toFixed(2);
				document.getElementById("input_MaxSpeedPercentage").value = ((TreadMillMaxR_b / MaxSpeedInMS) * 100).toFixed(0);
				document.getElementById("input_HRR").value = (((ExerciseHeartbeat - BasicHeartbeat) / (MaxHeartbeat - BasicHeartbeat)) * 100).toFixed(0);
						
				document.getElementById("select_Mode").value = TreadmillCurrentMode;
				document.getElementById("select_Sets").value = TreadmillCurrentSets;
				document.getElementById("select_TM_Factor").value = TreadmillFactor;
				TreadmillPrescriptionTable(TreadmillCurrentMode, TreadmillCurrentSets);
			}
		}
		if(type == 1)
		{
			xmlhttp.open("GET","Treadmill/ResultAndPrescription.php",true);
			xmlhttp.send();
		}
		else if(type == 0)
		{
			BasicInfo();
			//var MaxSpeedInMS = (MaxSpeed * 1000) / 3600;

			/*//Caculate limite speed and max work
			var a, b, mxy, xx, yy, x2, x22;
			a = b = mxy = xx = yy = x2 = x22 = 0.0;
					
			mxy = 4 * (FailureTime95 * Distance95 + FailureTime90 * Distance90 + FailureTime85 * Distance85 + FailureTime80 * Distance80);
			xx = 1 * FailureTime95 + 1 * FailureTime90 + 1 * FailureTime85 + 1 * FailureTime80;
			yy = 1 * Distance95 + 1 * Distance90 + 1 * Distance85 + 1 * Distance80;
			x2 = 4 * (FailureTime95 * FailureTime95 + FailureTime90 * FailureTime90 + FailureTime85 * FailureTime85 + FailureTime80 * FailureTime80);
			x22 = 1 * FailureTime95 + 1 * FailureTime90 + 1 * FailureTime85 + 1 * FailureTime80;
					
			b = (mxy - xx * yy) / (x2 - x22 * x22);
			a = yy / 4 - b * xx / 4;
			//End of caculate*/
			
			//TreadmillCaculateLinearRegression();
			TreadmillMaxWork = TreadMillMaxR_a.toFixed(2);
			TreadmillLimitSpeed = ((TreadMillMaxR_b * 3600) / 1000).toFixed(1);
		}			
	}
}

function TreadmillCaculateLinearRegression(Strong)
{
	TreadMillMaxR = 0;
	switch(Strong)
	{
	case 95:
		FailureTime95 = document.getElementById("input_"+ Strong +"Time").value;
		break;
	case 90:
		FailureTime90 = document.getElementById("input_"+ Strong +"Time").value;
		break;
	case 85:
		FailureTime85 = document.getElementById("input_"+ Strong +"Time").value;
		break;
	case 80:
		FailureTime80 = document.getElementById("input_"+ Strong +"Time").value;
		break;
	}
	var MaxSpeedInKMH = (MaxSpeed * 1000) / 3600;
	
	TreadmillDistance95 = (FailureTime95 * MaxSpeedInKMH * 0.95).toFixed(1);
	TreadmillDistance90 = (FailureTime90 * MaxSpeedInKMH * 0.90).toFixed(1);
	TreadmillDistance85 = (FailureTime85 * MaxSpeedInKMH * 0.85).toFixed(1);
	TreadmillDistance80 = (FailureTime80 * MaxSpeedInKMH * 0.80).toFixed(1);
	
	var MaxR = 0;
	var MaxR_a = 0;
	var MaxR_b = 0;
	for(var i = 0; i < 4; i++)
	{
		switch(i)
		{
		case 0:
			var X_1 = FailureTime95;
			var X_2 = FailureTime90;
			var X_3 = FailureTime85;
			var Y_1 = TreadmillDistance95;
			var Y_2 = TreadmillDistance90;
			var Y_3 = TreadmillDistance85;
			break;
		case 1:
			var X_1 = FailureTime95;
			var X_2 = FailureTime85;
			var X_3 = FailureTime80;
			var Y_1 = TreadmillDistance95;
			var Y_2 = TreadmillDistance85;
			var Y_3 = TreadmillDistance80;
			break;
		case 2:
			var X_1 = FailureTime95;
			var X_2 = FailureTime90;
			var X_3 = FailureTime80;
			var Y_1 = TreadmillDistance95;
			var Y_2 = TreadmillDistance90;
			var Y_3 = TreadmillDistance80;
			break;
		case 3:
			var X_1 = FailureTime90;
			var X_2 = FailureTime85;
			var X_3 = FailureTime80;
			var Y_1 = TreadmillDistance90;
			var Y_2 = TreadmillDistance85;
			var Y_3 = TreadmillDistance80;
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
	TreadMillMaxR_a = MaxR_a;
	TreadMillMaxR_b = MaxR_b;
	document.getElementById("input_TM_R2").value = TreadMillMaxR = Math.floor(MaxR *100) / 100;
}


function TreadmillPrescriptionTable(Mode, SetNum)
{
	TreadmillCurrentMode = Mode;
	TreadmillCurrentSets = SetNum;
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
			TreadmillFactor = document.getElementById("select_TM_Factor").value;
			TreadmillPrescriptionAttribute();
			TreadmillInitialPrescription();
		}
	}
	xmlhttp.open("GET","Treadmill/Prescription.php?Mode=" + TreadmillCurrentMode +"&SetNum=" + TreadmillCurrentSets,true);
	xmlhttp.send();
}

function TreadmillDefaultAttribute()
{
	if(TreadmillCurrentMode == "SingleSet")
	{
		TreadmillSingleMode = [3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3];
	}
	else if(TreadmillCurrentMode == "Increase")
	{
		if(TreadmillFactor == "T_FRate")
		{
			TreadmillIncreaseMode_TF = [1, 21, 1, 1, 3, 2, 21, 1, 1, 3, 3, 21, 1, 1, 3, 4, 21, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		}
		else if(TreadmillFactor == "T_RRate")
		{
			TreadmillIncreaseMode_TR = [3, 5, 1, 10, 3, 3, 5, 2, 10, 3, 3, 5, 3, 10, 3, 3, 5, 4, 10, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		}
		else if(TreadmillFactor == "TurnNum")
		{
			TreadmillIncreaseMode_TN = [3, 5, 1,  2, 1, 3, 5, 1,  2, 2, 3, 5, 1, 2, 3, 3, 5, 1,  2, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		}
	}
	else if(TreadmillCurrentMode == "Decrease")
	{
		if(TreadmillFactor == "T_FRate")
		{
			TreadmillDecreaseMode_TF = [20, 21, 1, 1, 3, 19, 21, 1, 1, 3, 18, 21, 1, 1, 3, 17, 21, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		}
		else if(TreadmillFactor == "T_RRate")
		{
			TreadmillDecreaseMode_TR = [3, 5, 10, 5, 3, 3, 5, 7, 5, 3, 3, 5, 5, 5, 3, 3, 5, 3, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		}
		else if(TreadmillFactor == "TurnNum")
		{
			TreadmillDecreaseMode_TN = [3, 5, 1, 2, 5, 3, 5, 1, 2, 4, 3, 5, 1, 2, 3, 3, 5, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		}
	}
	else if(TreadmillCurrentMode == "Wave")
	{
		if(TreadmillFactor == "T_FRate")
		{
			TreadmillWaveMode_TF = [1, 5, 3, 2, 3, 4, 5, 3, 2, 3, 1, 5, 3, 2, 3, 4, 5, 3, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		}
		else if(TreadmillFactor == "T_RRate")
		{
			TreadmillWaveMode_TR = [3, 5, 2, 2, 3, 3, 5, 5, 2, 3, 3, 5, 2, 2, 3, 3, 5, 5, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		}
		else if(TreadmillFactor == "TurnNum")
		{
			TreadmillWaveMode_TN = [3, 5, 3, 2, 2, 3, 5, 3, 2, 4, 3, 5, 3, 2, 2, 3, 5, 3, 2, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		}
	}
	TreadmillPrescriptionTable(TreadmillCurrentMode, TreadmillCurrentSets);
}

function TreadmillInitialPrescription()
{
	for(var i = 1; i <= TreadmillCurrentSets; i++)
	{
		document.getElementById("select_TM_TStrong_S"+i).setAttribute("value", TreadmillMaxSpeedPercent[i-1]);
		var Strong = document.getElementById("select_TM_TStrong_S"+i).value = TreadmillMaxSpeedPercent[i-1];
		var input_TimePerT_S = (document.getElementById("input_" + Strong + "Time").value * document.getElementById("input_TM_TTime_S" + i).value / document.getElementById("input_TM_FTime_S" + i).value).toFixed(0);
		var input_RelaxPerT_S = (input_TimePerT_S / (document.getElementById("input_TM_TTime2_S" + i).value * document.getElementById("input_TM_RTime_S" + i).value)).toFixed(0);
		var input_TimePerS_S = (( 1 * input_RelaxPerT_S + 1 * input_TimePerT_S) * document.getElementById("input_TM_TNum_S" + i).value).toFixed(0);
		document.getElementById("input_TM_PercentToSpeed" + i).setAttribute("value", document.getElementById("input_"+Strong+"Speed").value);
		//document.getElementById("input_TimePerT_S" + i).value = (document.getElementById("input_" + Strong + "Time").value * document.getElementById("input_TM_TTime_S" + i).value / document.getElementById("input_TM_FTime_S" + i).value).toFixed(0);
		document.getElementById("input_TM_TimePerT_min_S" + i).setAttribute("value", Math.floor(input_TimePerT_S / 60));
		document.getElementById("input_TM_TimePerT_sec_S" + i).setAttribute("value", input_TimePerT_S % 60);
		document.getElementById("input_TM_DistancePerT_S" + i).setAttribute("value", (document.getElementById("input_" + Strong + "Speed").value * 5 / 18 * input_TimePerT_S).toFixed(1));
		//document.getElementById("input_RelaxPerT_S" + i).value = (input_TimePerT_S / (document.getElementById("input_TM_TTime2_S" + i).value * document.getElementById("input_TM_RTime_S" + i).value)).toFixed(0);
		document.getElementById("input_TM_RelaxPerT_min_S" + i).setAttribute("value", Math.floor(input_RelaxPerT_S / 60));
		document.getElementById("input_TM_RelaxPerT_sec_S" + i).setAttribute("value", input_RelaxPerT_S % 60);
		//document.getElementById("input_TimePerS_S" + i).value = (( 1 * document.getElementById("input_RelaxPerT_S" + i).value + 1 * input_TimePerT_S) * document.getElementById("input_TM_TNum_S" + i).value).toFixed(0);
		document.getElementById("input_TM_TimePerS_min_S" + i).setAttribute("value", Math.floor(input_TimePerS_S / 60));
		document.getElementById("input_TM_TimePerS_sec_S" + i).setAttribute("value", input_TimePerS_S % 60);
		document.getElementById("input_TM_PartT_S" + i).setAttribute("value", (document.getElementById("input_TM_TNum_S" + i).value * input_TimePerT_S / document.getElementById("input_" + Strong + "Time").value + Math.log(input_TimePerS_S / input_RelaxPerT_S / document.getElementById("input_TM_TNum_S" + i).value)).toFixed(2));
	}
	TreadmillTotalT();
}

function TreadmillCaculatPrescription(SetsIndex, AttValue, AttIndex)
{
	var Strong = TreadmillMaxSpeedPercent[SetsIndex-1] = document.getElementById("select_TM_TStrong_S" + SetsIndex).value;
	var input_TimePerT_S = (document.getElementById("input_" + Strong + "Time").value * document.getElementById("input_TM_TTime_S" + SetsIndex).value / document.getElementById("input_TM_FTime_S" + SetsIndex).value).toFixed(0);
	var input_RelaxPerT_S = ((input_TimePerT_S / document.getElementById("input_TM_TTime2_S" + SetsIndex).value) * document.getElementById("input_TM_RTime_S" + SetsIndex).value).toFixed(0);
	var input_TimePerS_S = (( 1 * input_RelaxPerT_S + 1 * input_TimePerT_S) * document.getElementById("input_TM_TNum_S" + SetsIndex).value).toFixed(0);
	document.getElementById("input_TM_PercentToSpeed" + SetsIndex).value = document.getElementById("input_"+Strong+"Speed").value;
	//document.getElementById("input_TimePerT_S" + SetsIndex).value = (document.getElementById("input_" + Strong + "Time").value * document.getElementById("input_TM_TTime_S" + SetsIndex).value / document.getElementById("input_TM_FTime_S" + SetsIndex).value).toFixed(0);
	document.getElementById("input_TM_TimePerT_min_S" + SetsIndex).value = Math.floor(input_TimePerT_S / 60);
	document.getElementById("input_TM_TimePerT_sec_S" + SetsIndex).value = input_TimePerT_S % 60;
	document.getElementById("input_TM_DistancePerT_S" + SetsIndex).value = (document.getElementById("input_" + Strong + "Speed").value * 5 / 18 * input_TimePerT_S).toFixed(1);
	//document.getElementById("input_RelaxPerT_S" + SetsIndex).value = (input_TimePerT_S / (document.getElementById("input_TM_TTime2_S" + SetsIndex).value * document.getElementById("input_TM_RTime_S" + SetsIndex).value)).toFixed(0);
	document.getElementById("input_TM_RelaxPerT_min_S" + SetsIndex).value = Math.floor(input_RelaxPerT_S / 60);
	document.getElementById("input_TM_RelaxPerT_sec_S" + SetsIndex).value = input_RelaxPerT_S % 60;
	//document.getElementById("input_TimePerS_S" + SetsIndex).value = (( 1 * document.getElementById("input_RelaxPerT_S" + SetsIndex).value + 1 * input_TimePerT_S) * document.getElementById("input_TM_TNum_S" + SetsIndex).value).toFixed(0);
	document.getElementById("input_TM_TimePerS_min_S" + SetsIndex).value = Math.floor(input_TimePerS_S / 60);
	document.getElementById("input_TM_TimePerS_sec_S" + SetsIndex).value = input_TimePerS_S % 60;
	document.getElementById("input_TM_PartT_S" + SetsIndex).value = (document.getElementById("input_TM_TNum_S" + SetsIndex).value * input_TimePerT_S / document.getElementById("input_" + Strong + "Time").value + Math.log(input_TimePerS_S / input_RelaxPerT_S / document.getElementById("input_TM_TNum_S" + SetsIndex).value)).toFixed(2);
	
	if(AttIndex != 5)
	{
		if(TreadmillCurrentMode == "SingleSet")
		{
			TreadmillSingleMode[(SetsIndex - 1) * 5 + AttIndex] = AttValue;
		}
		else if(TreadmillCurrentMode == "Increase")
		{
			if(TreadmillFactor == "T_FRate")
			{
				TreadmillIncreaseMode_TF[(SetsIndex - 1) * 5 + AttIndex] = AttValue;
			}
			else if(TreadmillFactor == "T_RRate")
			{
				TreadmillIncreaseMode_TR[(SetsIndex - 1) * 5 + AttIndex] = AttValue;
			}
			else if(TreadmillFactor == "TurnNum")
			{
				TreadmillIncreaseMode_TN[(SetsIndex - 1) * 5 + AttIndex] = AttValue;
			}
		}
		else if(TreadmillCurrentMode == "Decrease")
		{
			if(TreadmillFactor == "T_FRate")
			{
				TreadmillDecreaseMode_TF[(SetsIndex - 1) * 5 + AttIndex] = AttValue;
			}
			else if(TreadmillFactor == "T_RRate")
			{
				TreadmillDecreaseMode_TR[(SetsIndex - 1) * 5 + AttIndex] = AttValue;
			}
			else if(TreadmillFactor == "TurnNum")
			{
				TreadmillDecreaseMode_TN[(SetsIndex - 1) * 5 + AttIndex] = AttValue;
			}
		}
		else if(TreadmillCurrentMode == "Wave")
		{
			if(TreadmillFactor == "T_FRate")
			{
				TreadmillWaveMode_TF[(SetsIndex - 1) * 5 + AttIndex] = AttValue;
			}
			else if(TreadmillFactor == "T_RRate")
			{
				TreadmillWaveMode_TR[(SetsIndex - 1) * 5 + AttIndex] = AttValue;
			}
			else if(TreadmillFactor == "TurnNum")
			{
				TreadmillWaveMode_TN[(SetsIndex - 1) * 5 + AttIndex] = AttValue;
			}
		}
	}
	TreadmillTotalT();
}

function TreadmillPrescriptionAttribute()
{
	var Attribute;
	//TreadmillFactor = document.getElementById("select_TM_Factor").value;
	if(TreadmillCurrentMode == "SingleSet")
	{
		Attribute = TreadmillSingleMode;
		document.getElementById("select_TM_Factor").disabled = true;
	}
	else if(TreadmillCurrentMode == "Increase")
	{
		if(TreadmillFactor == "T_FRate")
		{
			Attribute = TreadmillIncreaseMode_TF;
		}
		else if(TreadmillFactor == "T_RRate")
		{
			Attribute = TreadmillIncreaseMode_TR;
		}
		else if(TreadmillFactor == "TurnNum")
		{
			Attribute = TreadmillIncreaseMode_TN;
		}
		document.getElementById("select_TM_Factor").disabled = false;
	}
	else if(TreadmillCurrentMode == "Decrease")
	{
		if(TreadmillFactor == "T_FRate")
		{
			Attribute = TreadmillDecreaseMode_TF;
		}
		else if(TreadmillFactor == "T_RRate")
		{
			Attribute = TreadmillDecreaseMode_TR;
		}
		else if(TreadmillFactor == "TurnNum")
		{
			Attribute = TreadmillDecreaseMode_TN;
		}
		document.getElementById("select_TM_Factor").disabled = false;
	}
	else if(TreadmillCurrentMode == "Wave")
	{
		if(TreadmillFactor == "T_FRate")
		{
			Attribute = TreadmillWaveMode_TF;
		}
		else if(TreadmillFactor == "T_RRate")
		{
			Attribute = TreadmillWaveMode_TR;
		}
		else if(TreadmillFactor == "TurnNum")
		{
			Attribute = TreadmillWaveMode_TN;
		}
		document.getElementById("select_TM_Factor").disabled = false;
	}
	
	for(var i = 1; i <= TreadmillCurrentSets; i++)
	{
		if(TreadmillCurrentMode != "SingleSet")
		{
			if(TreadmillFactor == "T_FRate")
			{
				document.getElementById("th_TM_T_FRate" + i).style.color = "#FF0000";
			}
			else if(TreadmillFactor == "T_RRate")
			{
				document.getElementById("th_TM_T_RRate" + i).style.color = "#FF0000";
			}
			else if(TreadmillFactor == "TurnNum")
			{
				document.getElementById("th_TM_TurnNum" + i).style.color = "#FF0000";
			}
		}
		document.getElementById("input_TM_TTime_S" + i).setAttribute("value", Attribute[(i - 1) * 5]);
		document.getElementById("input_TM_FTime_S" + i).setAttribute("value", Attribute[(i - 1) * 5 + 1]);
		document.getElementById("input_TM_TTime2_S" + i).setAttribute("value", Attribute[(i - 1) * 5 + 2]);
		document.getElementById("input_TM_RTime_S" + i).setAttribute("value", Attribute[(i - 1) * 5 + 3]);
		document.getElementById("input_TM_TNum_S" + i).setAttribute("value", Attribute[(i - 1) * 5 + 4]);
	}
}

function TreadmillTotalT()
{
	var TotT = 0;
	for(var i = 1; i <= TreadmillCurrentSets; i++)
	{
		TotT = TotT + 1 * document.getElementById("input_TM_PartT_S" + i).value;
	}
	document.getElementById("input_TM_TotT").setAttribute("value", TreadmillTotT = TotT.toFixed(2));
}
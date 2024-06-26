var FailureTime200 = 0;
var FailureTime400 = 0;
var FailureTime800 = 0;
var FailureTime1200 = 0;
var TrackSingleMode = [400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3];
var TrackIncreaseMode_TR = [400, 1, 3, 120, 3, 400, 3, 3, 120, 3, 400, 5, 3, 120, 3, 400, 7, 3, 120, 3, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0];
var TrackIncreaseMode_TN = [400, 5, 3, 120, 1, 400, 5, 3, 120, 2, 400, 5, 3, 120, 3, 400, 5, 3, 120, 4, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0];
var TrackDecreaseMode_TR = [400, 7, 3, 120, 3, 400, 5, 3, 120, 3, 400, 3, 3, 120, 3, 400, 1, 3, 120, 3, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0];
var TrackDecreaseMode_TN = [400, 5, 3, 120, 4, 400, 5, 3, 120, 3, 400, 5, 3, 120, 2, 400, 5, 3, 120, 1, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0];
var TrackWaveMode_TR = [400, 3, 3, 120, 3, 400, 5, 3, 120, 3, 400, 3, 3, 120, 3, 400, 5, 3, 120, 3, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0];
var TrackWaveMode_TN = [400, 5, 3, 120, 1, 400, 5, 3, 120, 3, 400, 5, 3, 120, 1, 400, 5, 3, 120, 3, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0];
var TrackTotT = 0;
var TrackLimitSpeed = 0;
var TrackMaxWork = 0;
var TrackCurrentMode = "SingleSet";
var TrackCurrentSets = 1;
var TrackCurrentFactor = "T_RRate";
var TrackMaxR = 0;
var TrackMaxR_a;
var TrackMaxR_b;

function CaculateTrackSpeed(distance, failureTime)
{
	switch(distance)
	{
		case 200:
			FailureTime200 = failureTime;
			break;
		case 400:
			FailureTime400 = failureTime;
			break;
		case 800:
			FailureTime800 = failureTime;
			break;
		case 1200:
			FailureTime1200 = failureTime;
			break;
	}
	document.getElementById("input_" + distance + "Speed").setAttribute("value", (distance / document.getElementById("input_" + distance + "Time").value * 3600 / 1000).toFixed(1));
	TrackCaculateLinearRegression();
}

function TrackPrescription(type)
{
	//type = 0: 有氧/無氧代謝能力測定(田徑場法)
	//type = 1: 速耐力間歇跑(田徑場法)
	pattern = /^[0-9]+(.[0-9]+)?$/;
	var ErrorMessage = "請檢查以下參數：\n";
	var ErrorFlag = 0;
	if(!pattern.test(FailureTime200) || FailureTime200 <= 0)
	{
		ErrorMessage += "200m時的力竭時間\n";
		ErrorFlag = 1;
	}
	if(!pattern.test(FailureTime400) || FailureTime400 <= 0)
	{
		ErrorMessage += "400m時的力竭時間\n";
		ErrorFlag = 1;
	}
	if(!pattern.test(FailureTime800) || FailureTime800 <= 0)
	{
		ErrorMessage += "800m時的力竭時間\n";
		ErrorFlag = 1;
	}
	if(!pattern.test(FailureTime1200) || FailureTime1200 <= 0)
	{
		ErrorMessage += "1200m時的力竭時間\n";
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
				
				document.getElementById("input_200Time").value = FailureTime200;
				document.getElementById("input_400Time").value = FailureTime400;
				document.getElementById("input_800Time").value = FailureTime800;
				document.getElementById("input_1200Time").value = FailureTime1200;			
				
				/*//Caculate limite speed and max work
				var a, b, mxy, xx, yy, x2, x22;
				a = b = mxy = xx = yy = x2 = x22 = 0.0;
				
				mxy = 4 * (FailureTime200 * 200 + FailureTime400 * 400 + FailureTime800 * 800 + FailureTime1200 * 1200);
				xx = 1 * FailureTime200 + 1 * FailureTime400 + 1 * FailureTime800 + 1 * FailureTime1200;
				yy = 1 * 200 + 1 * 400 + 1 * 800 + 1 * 1200;
				x2 = 4 * (FailureTime200 * FailureTime200 + FailureTime400 * FailureTime400 + FailureTime800 * FailureTime800 + FailureTime1200 * FailureTime1200);
				x22 = 1 * FailureTime200 + 1 * FailureTime400 + 1 * FailureTime800 + 1 * FailureTime1200;
				
				b = (mxy - xx * yy) / (x2 - x22 * x22);
				a = yy / 4 - b * xx / 4;
				//End of caculate*/
				//TrackCaculateLinearRegression();

				document.getElementById("input_TR_R2").value = TrackMaxR;
				document.getElementById("input_LimitSpeed").value = TrackLimitSpeed = ((TrackMaxR_b * 3600) / 1000).toFixed(1);
				document.getElementById("input_MaxWork").value = TrackMaxWork = TrackMaxR_a.toFixed(2);
				document.getElementById("input_HRR").value = (((ExerciseHeartbeat - BasicHeartbeat) / (MaxHeartbeat - BasicHeartbeat)) * 100).toFixed(0);
				
				
				for(var i = 0; i < 5; i++)
				{
					var distance;
					var time;
					var Speed;
					switch(i)
					{
						case 0:
							distance = 200;
							time = FailureTime200;
							break;
						case 1:
							distance = 400;
							time = FailureTime400;
							break;
						case 2:
							distance = 800;
							time = FailureTime800;
							break;
						case 3:
							distance = 1200;
							time = FailureTime1200;
							break;
					}
					Speed = document.getElementById("input_"+ distance + "Speed").value = (distance / time * 3600 / 1000).toFixed(1);
					document.getElementById("input_"+ distance + "PercentSpeed").value = (Speed / document.getElementById("input_LimitSpeed").value * 100).toFixed(1);
					
				}
				
				document.getElementById("select_TR_Mode").value = TrackCurrentMode;
				document.getElementById("select_TR_Sets").value = TrackCurrentSets;
				document.getElementById("select_TR_Factor").value = TrackCurrentFactor;
				TrackPrescriptionTable(TrackCurrentMode, TrackCurrentSets);
			}
		}
		if(type == 1)
		{
			xmlhttp.open("GET","Track/ResultAndPrescription.php",true);
			xmlhttp.send();
		}
		else if(type == 0)
		{
			BasicInfo();
			
			/*//Caculate limite speed and max work
			var a, b, mxy, xx, yy, x2, x22;
			a = b = mxy = xx = yy = x2 = x22 = 0.0;
				
			mxy = 4 * (FailureTime200 * 200 + FailureTime400 * 400 + FailureTime800 * 800 + FailureTime1200 * 1200);
			xx = 1 * FailureTime200 + 1 * FailureTime400 + 1 * FailureTime800 + 1 * FailureTime1200;
			yy = 1 * 200 + 1 * 400 + 1 * 800 + 1 * 1200;
			x2 = 4 * (FailureTime200 * FailureTime200 + FailureTime400 * FailureTime400 + FailureTime800 * FailureTime800 + FailureTime1200 * FailureTime1200);
			x22 = 1 * FailureTime200 + 1 * FailureTime400 + 1 * FailureTime800 + 1 * FailureTime1200;
				
			b = (mxy - xx * yy) / (x2 - x22 * x22);
			a = yy / 4 - b * xx / 4;
			//End of caculate*/
			//TrackCaculateLinearRegression();
			
			TrackMaxWork = TrackMaxR_a.toFixed(2);
			TrackLimitSpeed = ((TrackMaxR_b * 3600) / 1000).toFixed(1);
		}
	}
}

function TrackCaculateLinearRegression()
{
	TrackMaxR = 0;
	var MaxR = 0;
	var MaxR_a = 0;
	var MaxR_b = 0;
	for(var i = 0; i < 4; i++)
	{
		switch(i)
		{
		case 0:
			var X_1 = FailureTime200;
			var X_2 = FailureTime400;
			var X_3 = FailureTime800;
			var Y_1 = 200;
			var Y_2 = 400;
			var Y_3 = 800;
			break;
		case 1:
			var X_1 = FailureTime200;
			var X_2 = FailureTime400;
			var X_3 = FailureTime1200;
			var Y_1 = 200;
			var Y_2 = 400;
			var Y_3 = 1200;
			break;
		case 2:
			var X_1 = FailureTime200;
			var X_2 = FailureTime800;
			var X_3 = FailureTime1200;
			var Y_1 = 200;
			var Y_2 = 800;
			var Y_3 = 1200;
			break;
		case 3:
			var X_1 = FailureTime400;
			var X_2 = FailureTime800;
			var X_3 = FailureTime1200;
			var Y_1 = 400;
			var Y_2 = 800;
			var Y_3 = 1200;
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
	TrackMaxR_a = MaxR_a;
	TrackMaxR_b = MaxR_b;
	document.getElementById("input_TR_R2").value = TrackMaxR = Math.floor(MaxR *100) / 100;
}

function TrackPrescriptionTable(Mode, SetNum)
{
	TrackCurrentMode = Mode;
	TrackCurrentSets = SetNum;
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
			TrackCurrentFactor = document.getElementById("select_TR_Factor").value;
			TrackPrescriptionAttribute();
			TrackInitialPrescription();
		}
	}
	xmlhttp.open("GET","Track/Prescription.php?Mode=" + TrackCurrentMode +"&SetNum=" + TrackCurrentSets,true);
	xmlhttp.send();
}

function TrackPrescriptionAttribute()
{
	var Attribute;
	//TrackCurrentFactor = document.getElementById("select_TR_Factor").value;
	if(TrackCurrentMode == "SingleSet")
	{
		Attribute = TrackSingleMode;
		document.getElementById("select_TR_Factor").disabled = true;
	}
	else if(TrackCurrentMode == "Increase")
	{
		if(TrackCurrentFactor == "T_RRate")
		{
			Attribute = TrackIncreaseMode_TR;
		}
		else if(TrackCurrentFactor == "TurnNum")
		{
			Attribute = TrackIncreaseMode_TN;
		}
		document.getElementById("select_TR_Factor").disabled = false;
	}
	else if(TrackCurrentMode == "Decrease")
	{
		if(TrackCurrentFactor == "T_RRate")
		{
			Attribute = TrackDecreaseMode_TR;
		}
		else if(TrackCurrentFactor == "TurnNum")
		{
			Attribute = TrackDecreaseMode_TN;
		}
		document.getElementById("select_TR_Factor").disabled = false;
	}
	else if(TrackCurrentMode == "Wave")
	{
		if(TrackCurrentFactor == "T_RRate")
		{
			Attribute = TrackWaveMode_TR;
		}
		else if(TrackCurrentFactor == "TurnNum")
		{
			Attribute = TrackWaveMode_TN;
		}
		document.getElementById("select_TR_Factor").disabled = false;
	}
	
	for(var i = 1; i <= TrackCurrentSets; i++)
	{
		if(TrackCurrentMode != "SingleSet")
		{
			if(TrackCurrentFactor == "T_RRate")
			{
				document.getElementById("th_TR_T_RRate" + i).style.color = "#FF0000";
			}
			else if(TrackCurrentFactor == "TurnNum")
			{
				document.getElementById("th_TR_TurnNum" + i).style.color = "#FF0000";
			}
		}
		document.getElementById("select_TR_TDistance_S" + i).setAttribute("value", Attribute[(i - 1) * 5]);
		document.getElementById("select_TR_TDistance_S" + i).value = Attribute[(i - 1) * 5];
		document.getElementById("input_TR_TTime2_S" + i).setAttribute("value", Attribute[(i - 1) * 5 + 1]);
		document.getElementById("input_TR_RTime_S" + i).setAttribute("value", Attribute[(i - 1) * 5 + 2]);
		document.getElementById("input_TR_TStrong" + i).setAttribute("value", Attribute[(i - 1) * 5 + 3]);
		document.getElementById("input_TR_TNum_S" + i).setAttribute("value", Attribute[(i - 1) * 5 + 4]);
		
	}
}

function TrackDefaultAttribute()
{
	if(TrackCurrentMode == "SingleSet")
	{
		TrackSingleMode = [400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3];
	}
	else if(TrackCurrentMode == "Increase")
	{
		if(TrackCurrentFactor == "T_RRate")
		{
			TrackIncreaseMode_TR = [400, 1, 3, 120, 3, 400, 3, 3, 120, 3, 400, 5, 3, 120, 3, 400, 7, 3, 120, 3, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0];
		}
		else if(TrackCurrentFactor == "TurnNum")
		{
			TrackIncreaseMode_TN = [400, 5, 3, 120, 1, 400, 5, 3, 120, 2, 400, 5, 3, 120, 3, 400, 5, 3, 120, 4, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0];
		}
	}
	else if(TrackCurrentMode == "Decrease")
	{
		if(TrackCurrentFactor == "T_RRate")
		{
			TrackDecreaseMode_TR = [400, 7, 3, 120, 3, 400, 5, 3, 120, 3, 400, 3, 3, 120, 3, 400, 1, 3, 120, 3, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0];
		}
		else if(TrackCurrentFactor == "TurnNum")
		{
			TrackDecreaseMode_TN = [400, 5, 3, 120, 4, 400, 5, 3, 120, 3, 400, 5, 3, 120, 2, 400, 5, 3, 120, 1, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0];
		}
	}
	else if(TrackCurrentMode == "Wave")
	{
		if(TrackCurrentFactor == "T_RRate")
		{
			TrackWaveMode_TR = [400, 3, 3, 120, 3, 400, 5, 3, 120, 3, 400, 3, 3, 120, 3, 400, 5, 3, 120, 3, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0];
		}
		else if(TrackCurrentFactor == "TurnNum")
		{
			TrackWaveMode_TN = [400, 5, 3, 120, 1, 400, 5, 3, 120, 3, 400, 5, 3, 120, 1, 400, 5, 3, 120, 3, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0];
		}
	}
	TrackPrescriptionTable(TrackCurrentMode, TrackCurrentSets);
}

function TrackInitialPrescription()
{
	for(var i = 1; i <= TrackCurrentSets; i++)
	{
		var Distance = document.getElementById("select_TR_TDistance_S"+i).value;
		var input_TimePerT_S = (document.getElementById("select_TR_TDistance_S" + i).value / ((TrackLimitSpeed / 3600 * 1000) * document.getElementById("input_TR_TStrong" + i).value / 100)).toFixed(0);
		var input_RelaxPerT_S = (input_TimePerT_S / (document.getElementById("input_TR_TTime2_S" + i).value / document.getElementById("input_TR_RTime_S" + i).value)).toFixed(0);
		var input_TimePerS_S = (( 1 * input_RelaxPerT_S + 1 * input_TimePerT_S) * document.getElementById("input_TR_TNum_S" + i).value).toFixed(0);
		document.getElementById("input_TR_PercentToSpeed" + i).setAttribute("value", (TrackLimitSpeed * document.getElementById("input_TR_TStrong" + i).value / 100).toFixed(1));
		//document.getElementById("input_TimePerT_S" + i).value = (document.getElementById("select_TR_TDistance_S" + i).value / (document.getElementById("input_LimitSpeed").value / 3600 * 1000) * document.getElementById("input_TR_TStrong" + i).value / 100).toFixed(0);
		document.getElementById("input_TR_TimePerT_min_S" + i).setAttribute("value", Math.floor(input_TimePerT_S / 60));
		document.getElementById("input_TR_TimePerT_sec_S" + i).setAttribute("value", input_TimePerT_S % 60);
		//document.getElementById("input_RelaxPerT_S" + i).value = (document.getElementById("input_TimePerT_S" + i).value / (document.getElementById("input_TR_TTime2_S" + i).value / document.getElementById("input_TR_RTime_S" + i).value)).toFixed(0);
		document.getElementById("input_TR_RelaxPerT_min_S" + i).setAttribute("value", Math.floor(input_RelaxPerT_S / 60));
		document.getElementById("input_TR_RelaxPerT_sec_S" + i).setAttribute("value", input_RelaxPerT_S % 60);
		//document.getElementById("input_TimePerS_S" + i).value = (( 1 * document.getElementById("input_RelaxPerT_S" + i).value + 1 * document.getElementById("input_TimePerT_S" + i).value) * document.getElementById("input_TR_TNum_S" + i).value).toFixed(0);
		document.getElementById("input_TR_TimePerS_min_S" + i).setAttribute("value", Math.floor(input_TimePerS_S / 60));
		document.getElementById("input_TR_TimePerS_sec_S" + i).setAttribute("value", input_TimePerS_S % 60);
		document.getElementById("input_TR_PartT_S" + i).setAttribute("value", (document.getElementById("input_TR_TNum_S" + i).value * input_TimePerT_S / document.getElementById("input_" + Distance + "Time").value + Math.log(input_TimePerS_S / input_RelaxPerT_S / document.getElementById("input_TR_TNum_S" + i).value)).toFixed(2));
	}
	TrackTotalT();
}

function TrackCaculatPrescription(SetsIndex, AttValue, AttIndex)
{	
	var Distance = document.getElementById("select_TR_TDistance_S"+SetsIndex).value;	
	var input_TimePerT_S = (document.getElementById("select_TR_TDistance_S" + SetsIndex).value / ((TrackLimitSpeed / 3600 * 1000) * document.getElementById("input_TR_TStrong" + SetsIndex).value / 100)).toFixed(0);
	var input_RelaxPerT_S = (input_TimePerT_S / (document.getElementById("input_TR_TTime2_S" + SetsIndex).value / document.getElementById("input_TR_RTime_S" + SetsIndex).value)).toFixed(0);
	var input_TimePerS_S = (( 1 * input_RelaxPerT_S + 1 * input_TimePerT_S) * document.getElementById("input_TR_TNum_S" + SetsIndex).value).toFixed(0);
	document.getElementById("input_TR_PercentToSpeed" + SetsIndex).value = (TrackLimitSpeed * document.getElementById("input_TR_TStrong" + SetsIndex).value / 100).toFixed(1);
	//document.getElementById("input_TimePerT_S" + SetsIndex).value = (document.getElementById("select_TR_TDistance_S" + SetsIndex).value / (document.getElementById("input_LimitSpeed").value / 3600 * 1000) * document.getElementById("input_TR_TStrong" + SetsIndex).value / 100).toFixed(0);
	document.getElementById("input_TR_TimePerT_min_S" + SetsIndex).value = Math.floor(input_TimePerT_S / 60);
	document.getElementById("input_TR_TimePerT_sec_S" + SetsIndex).value = input_TimePerT_S % 60;
	//document.getElementById("input_RelaxPerT_S" + SetsIndex).value = (document.getElementById("input_TimePerT_S" + SetsIndex).value / (document.getElementById("input_TR_TTime2_S" + SetsIndex).value / document.getElementById("input_TR_RTime_S" + SetsIndex).value)).toFixed(0);
	document.getElementById("input_TR_RelaxPerT_min_S" + SetsIndex).value = Math.floor(input_RelaxPerT_S / 60);
	document.getElementById("input_TR_RelaxPerT_sec_S" + SetsIndex).value = input_RelaxPerT_S % 60;
	//document.getElementById("input_TimePerS_S" + SetsIndex).value = (( 1 * document.getElementById("input_RelaxPerT_S" + SetsIndex).value + 1 * document.getElementById("input_TimePerT_S" + SetsIndex).value) * document.getElementById("input_TR_TNum_S" + SetsIndex).value).toFixed(0);
	document.getElementById("input_TR_TimePerS_min_S" + SetsIndex).value = Math.floor(input_TimePerS_S / 60);
	document.getElementById("input_TR_TimePerS_sec_S" + SetsIndex).value = input_TimePerS_S % 60;
	document.getElementById("input_TR_PartT_S" + SetsIndex).value = (document.getElementById("input_TR_TNum_S" + SetsIndex).value * input_TimePerT_S / document.getElementById("input_" + Distance + "Time").value + Math.log(input_TimePerS_S / input_RelaxPerT_S / document.getElementById("input_TR_TNum_S" + SetsIndex).value)).toFixed(2);
	
	if(AttIndex != 5)
	{
		if(TrackCurrentMode == "SingleSet")
		{
			TrackSingleMode[(SetsIndex - 1) * 5 + AttIndex] = AttValue;
		}
		else if(TrackCurrentMode == "Increase")
		{
			if(TrackCurrentFactor == "T_RRate")
			{
				TrackIncreaseMode_TR[(SetsIndex - 1) * 5 + AttIndex] = AttValue;
			}
			else if(TrackCurrentFactor == "TurnNum")
			{
				TrackIncreaseMode_TN[(SetsIndex - 1) * 5 + AttIndex] = AttValue;
			}
		}
		else if(TrackCurrentMode == "Decrease")
		{
			if(TrackCurrentFactor == "T_RRate")
			{
				TrackDecreaseMode_TR[(SetsIndex - 1) * 5 + AttIndex] = AttValue;
			}
			else if(TrackCurrentFactor == "TurnNum")
			{
				TrackDecreaseMode_TN[(SetsIndex - 1) * 5 + AttIndex] = AttValue;
			}
		}
		else if(TrackCurrentMode == "Wave")
		{
			if(TrackCurrentFactor == "T_RRate")
			{
				TrackWaveMode_TR[(SetsIndex - 1) * 5 + AttIndex] = AttValue;
			}
			else if(TrackCurrentFactor == "TurnNum")
			{
				TrackWaveMode_TN[(SetsIndex - 1) * 5 + AttIndex] = AttValue;
			}
		}
	}
	TrackTotalT();
}

function TrackTotalT()
{
	var TotT = 0;
	for(var i = 1; i <= TrackCurrentSets; i++)
	{
		TotT = TotT + 1 * document.getElementById("input_TR_PartT_S" + i).value;
	}
	document.getElementById("input_TR_TotT").value = TrackTotT = TotT.toFixed(2);
	document.getElementById("input_TR_TotT").setAttribute("value", TrackTotT);
}
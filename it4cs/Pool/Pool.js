var PoolFailureTime100 = 0;
var PoolFailureTime200 = 0;
var PoolFailureTime400 = 0;
var PoolFailureTime800 = 0;
var PoolSingleMode = [400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3];
var PoolIncreaseMode_TR = [400, 1, 3, 120, 3, 400, 3, 3, 120, 3, 400, 5, 3, 120, 3, 400, 7, 3, 120, 3, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0];
var PoolIncreaseMode_TN = [400, 5, 3, 120, 1, 400, 5, 3, 120, 2, 400, 5, 3, 120, 3, 400, 5, 3, 120, 4, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0];
var PoolDecreaseMode_TR = [400, 7, 3, 120, 3, 400, 5, 3, 120, 3, 400, 3, 3, 120, 3, 400, 1, 3, 120, 3, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0];
var PoolDecreaseMode_TN = [400, 5, 3, 120, 4, 400, 5, 3, 120, 3, 400, 5, 3, 120, 2, 400, 5, 3, 120, 1, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0];
var PoolWaveMode_TR = [400, 3, 3, 120, 3, 400, 5, 3, 120, 3, 400, 3, 3, 120, 3, 400, 5, 3, 120, 3, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0];
var PoolWaveMode_TN = [400, 5, 3, 120, 1, 400, 5, 3, 120, 3, 400, 5, 3, 120, 1, 400, 5, 3, 120, 3, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0];
var PoolTotT = 0;
var PoolLimitSpeed = 0;
var PoolMaxWork = 0;
var PoolCurrentMode = "SingleSet";
var PoolCurrentSets = 1;
var PoolCurrentFactor = "T_RRate";
var PoolMaxR = 0;
var PoolMaxR_a;
var PoolMaxR_b;

function CaculatePoolSpeed(distance, failureTime)
{	
	switch(distance)
	{
		case 100:
			PoolFailureTime100 = failureTime;
			break;
		case 200:
			PoolFailureTime200 = failureTime;
			break;
		case 400:
			PoolFailureTime400 = failureTime;
			break;
		case 800:
			PoolFailureTime800 = failureTime;
			break;
	}
	document.getElementById("input_Pool" + distance + "Speed").setAttribute("value", (distance / document.getElementById("input_Pool" + distance + "Time").value).toFixed(1));
	PoolCaculateLinearRegression();
}

function PoolPrescription(type)
{
	//type = 0: 有氧/無氧代謝能力測定(泳池法)
	//type = 1: 速耐力間歇跑(泳池法)
	pattern = /^[0-9]+(.[0-9]+)?$/;
	var ErrorMessage = "請檢查以下參數：\n";
	var ErrorFlag = 0;
	if(!pattern.test(PoolFailureTime100) || PoolFailureTime100 <= 0)
	{
		ErrorMessage += "100m時的力竭時間\n";
		ErrorFlag = 1;
	}
	if(!pattern.test(PoolFailureTime200) || PoolFailureTime200 <= 0)
	{
		ErrorMessage += "200m時的力竭時間\n";
		ErrorFlag = 1;
	}
	if(!pattern.test(PoolFailureTime400) || PoolFailureTime400 <= 0)
	{
		ErrorMessage += "400m時的力竭時間\n";
		ErrorFlag = 1;
	}
	if(!pattern.test(PoolFailureTime800) || PoolFailureTime800 <= 0)
	{
		ErrorMessage += "800m時的力竭時間\n";
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
				
				document.getElementById("input_Pool100Time").value = PoolFailureTime100;
				document.getElementById("input_Pool200Time").value = PoolFailureTime200;
				document.getElementById("input_Pool400Time").value = PoolFailureTime400;
				document.getElementById("input_Pool800Time").value = PoolFailureTime800;			
				
				/*//Caculate limite speed and max work
				var a, b, mxy, xx, yy, x2, x22;
				a = b = mxy = xx = yy = x2 = x22 = 0.0;
				
				mxy = 4 * (PoolFailureTime100 * 100 + PoolFailureTime200 * 200 + PoolFailureTime400 * 400 + PoolFailureTime800 * 800);
				xx = 1 * PoolFailureTime100 + 1 * PoolFailureTime200 + 1 * PoolFailureTime400 + 1 * PoolFailureTime800;
				yy = 1 * 100 + 1 * 200 + 1 * 400 + 1 * 800;
				x2 = 4 * (PoolFailureTime100 * PoolFailureTime100 + PoolFailureTime200 * PoolFailureTime200 + PoolFailureTime400 * PoolFailureTime400 + PoolFailureTime800 * PoolFailureTime800);
				x22 = 1 * PoolFailureTime100 + 1 * PoolFailureTime200 + 1 * PoolFailureTime400 + 1 * PoolFailureTime800;
				
				b = (mxy - xx * yy) / (x2 - x22 * x22);
				a = yy / 4 - b * xx / 4;
				//End of caculate*/
				//PoolCaculateLinearRegression();
				
				document.getElementById("input_PO_R2").value = PoolMaxR;
				document.getElementById("input_LimitSpeed").value = PoolLimitSpeed = PoolMaxR_b.toFixed(1);
				document.getElementById("input_MaxWork").value = PoolMaxWork = PoolMaxR_a.toFixed(2);
				document.getElementById("input_HRR").value = (((ExerciseHeartbeat - BasicHeartbeat) / (MaxHeartbeat - BasicHeartbeat)) * 100).toFixed(0);
				
				
				for(var i = 0; i < 5; i++)
				{
					var distance;
					var time;
					var Speed;
					switch(i)
					{
						case 0:
							distance = 100;
							time = PoolFailureTime100;
							break;
						case 1:
							distance = 200;
							time = PoolFailureTime200;
							break;
						case 2:
							distance = 400;
							time = PoolFailureTime400;
							break;
						case 3:
							distance = 800;
							time = PoolFailureTime800;
							break;
					}
					Speed = document.getElementById("input_Pool"+ distance + "Speed").value = (distance / time).toFixed(1);
					document.getElementById("input_Pool"+ distance + "PercentSpeed").value = (Speed / document.getElementById("input_LimitSpeed").value * 100).toFixed(1);
					
				}
				
				document.getElementById("select_PO_Mode").value = PoolCurrentMode;
				document.getElementById("select_PO_Sets").value = PoolCurrentSets;
				document.getElementById("select_PO_Factor").value = PoolCurrentFactor;
				PoolPrescriptionTable(PoolCurrentMode, PoolCurrentSets);
			}
		}
		if(type == 1)
		{
			xmlhttp.open("GET","Pool/ResultAndPrescription.php",true);
			xmlhttp.send();
		}
		else if(type == 0)
		{
			BasicInfo();
			
			/*//Caculate limite speed and max work
			var a, b, mxy, xx, yy, x2, x22;
			a = b = mxy = xx = yy = x2 = x22 = 0.0;
				
			mxy = 4 * (PoolFailureTime100 * 100 + PoolFailureTime200 * 200 + PoolFailureTime400 * 400 + PoolFailureTime800 * 800);
			xx = 1 * PoolFailureTime100 + 1 * PoolFailureTime200 + 1 * PoolFailureTime400 + 1 * PoolFailureTime800;
			yy = 1 * 100 + 1 * 200 + 1 * 400 + 1 * 800;
			x2 = 4 * (PoolFailureTime100 * PoolFailureTime100 + PoolFailureTime200 * PoolFailureTime200 + PoolFailureTime400 * PoolFailureTime400 + PoolFailureTime800 * PoolFailureTime800);
			x22 = 1 * PoolFailureTime100 + 1 * PoolFailureTime200 + 1 * PoolFailureTime400 + 1 * PoolFailureTime800;
				
			b = (mxy - xx * yy) / (x2 - x22 * x22);
			a = yy / 4 - b * xx / 4;
			//End of caculate*/
			//PoolCaculateLinearRegression();
			
			PoolMaxWork = PoolMaxR_a.toFixed(2);
			PoolLimitSpeed = PoolMaxR_b.toFixed(1);
		}
	}
}

function PoolCaculateLinearRegression()
{
	PoolMaxR = 0;
	var MaxR = 0;
	var MaxR_a = 0;
	var MaxR_b = 0;
	for(var i = 0; i < 4; i++)
	{
		switch(i)
		{
		case 0:
			var X_1 = PoolFailureTime100;
			var X_2 = PoolFailureTime200;
			var X_3 = PoolFailureTime400;
			var Y_1 = 100;
			var Y_2 = 200;
			var Y_3 = 400;
			break;
		case 1:
			var X_1 = PoolFailureTime100;
			var X_2 = PoolFailureTime200;
			var X_3 = PoolFailureTime800;
			var Y_1 = 100;
			var Y_2 = 200;
			var Y_3 = 800;
			break;
		case 2:
			var X_1 = PoolFailureTime100;
			var X_2 = PoolFailureTime400;
			var X_3 = PoolFailureTime800;
			var Y_1 = 100;
			var Y_2 = 400;
			var Y_3 = 800;
			break;
		case 3:
			var X_1 = PoolFailureTime200;
			var X_2 = PoolFailureTime400;
			var X_3 = PoolFailureTime800;
			var Y_1 = 200;
			var Y_2 = 400;
			var Y_3 = 800;
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
	PoolMaxR_a = MaxR_a;
	PoolMaxR_b = MaxR_b;
	document.getElementById("input_PO_R2").value = PoolMaxR = Math.floor(MaxR *100) / 100;
}

function PoolPrescriptionTable(Mode, SetNum)
{
	PoolCurrentMode = Mode;
	PoolCurrentSets = SetNum;
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
			PoolCurrentFactor = document.getElementById("select_PO_Factor").value;
			PoolPrescriptionAttribute();
			PoolInitialPrescription();
		}
	}
	xmlhttp.open("GET","Pool/Prescription.php?Mode=" + PoolCurrentMode +"&SetNum=" + PoolCurrentSets,true);
	xmlhttp.send();
}

function PoolPrescriptionAttribute()
{
	var Attribute;
	//PoolCurrentFactor = document.getElementById("select_PO_Factor").value;
	if(PoolCurrentMode == "SingleSet")
	{
		Attribute = PoolSingleMode;
		document.getElementById("select_PO_Factor").disabled = true;
	}
	else if(PoolCurrentMode == "Increase")
	{
		if(PoolCurrentFactor == "T_RRate")
		{
			Attribute = PoolIncreaseMode_TR;
		}
		else if(PoolCurrentFactor == "TurnNum")
		{
			Attribute = PoolIncreaseMode_TN;
		}
		document.getElementById("select_PO_Factor").disabled = false;
	}
	else if(PoolCurrentMode == "Decrease")
	{
		if(PoolCurrentFactor == "T_RRate")
		{
			Attribute = PoolDecreaseMode_TR;
		}
		else if(PoolCurrentFactor == "TurnNum")
		{
			Attribute = PoolDecreaseMode_TN;
		}
		document.getElementById("select_PO_Factor").disabled = false;
	}
	else if(PoolCurrentMode == "Wave")
	{
		if(PoolCurrentFactor == "T_RRate")
		{
			Attribute = PoolWaveMode_TR;
		}
		else if(PoolCurrentFactor == "TurnNum")
		{
			Attribute = PoolWaveMode_TN;
		}
		document.getElementById("select_PO_Factor").disabled = false;
	}
	
	for(var i = 1; i <= PoolCurrentSets; i++)
	{
		if(PoolCurrentMode != "SingleSet")
		{
			if(PoolCurrentFactor == "T_RRate")
			{
				document.getElementById("th_PO_T_RRate" + i).style.color = "#FF0000";
			}
			else if(PoolCurrentFactor == "TurnNum")
			{
				document.getElementById("th_PO_TurnNum" + i).style.color = "#FF0000";
			}
		}
		document.getElementById("select_PO_TDistance_S" + i).setAttribute("value", Attribute[(i - 1) * 5]);
		document.getElementById("select_PO_TDistance_S" + i).value = Attribute[(i - 1) * 5];
		document.getElementById("input_PO_TTime2_S" + i).setAttribute("value", Attribute[(i - 1) * 5 + 1]);
		document.getElementById("input_PO_RTime_S" + i).setAttribute("value", Attribute[(i - 1) * 5 + 2]);
		document.getElementById("input_PO_TStrong" + i).setAttribute("value", Attribute[(i - 1) * 5 + 3]);
		document.getElementById("input_PO_TNum_S" + i).setAttribute("value", Attribute[(i - 1) * 5 + 4]);
		
	}
}

function PoolDefaultAttribute()
{
	if(PoolCurrentMode == "SingleSet")
	{
		PoolSingleMode = [400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3, 400, 5, 3, 120, 3];
	}
	else if(PoolCurrentMode == "Increase")
	{
		if(PoolCurrentFactor == "T_RRate")
		{
			PoolIncreaseMode_TR = [400, 1, 3, 120, 3, 400, 3, 3, 120, 3, 400, 5, 3, 120, 3, 400, 7, 3, 120, 3, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0];
		}
		else if(PoolCurrentFactor == "TurnNum")
		{
			PoolIncreaseMode_TN = [400, 5, 3, 120, 1, 400, 5, 3, 120, 2, 400, 5, 3, 120, 3, 400, 5, 3, 120, 4, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0];
		}
	}
	else if(PoolCurrentMode == "Decrease")
	{
		if(PoolCurrentFactor == "T_RRate")
		{
			PoolDecreaseMode_TR = [400, 7, 3, 120, 3, 400, 5, 3, 120, 3, 400, 3, 3, 120, 3, 400, 1, 3, 120, 3, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0];
		}
		else if(PoolCurrentFactor == "TurnNum")
		{
			PoolDecreaseMode_TN = [400, 5, 3, 120, 4, 400, 5, 3, 120, 3, 400, 5, 3, 120, 2, 400, 5, 3, 120, 1, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0];
		}
	}
	else if(PoolCurrentMode == "Wave")
	{
		if(PoolCurrentFactor == "T_RRate")
		{
			PoolWaveMode_TR = [400, 3, 3, 120, 3, 400, 5, 3, 120, 3, 400, 3, 3, 120, 3, 400, 5, 3, 120, 3, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0];
		}
		else if(PoolCurrentFactor == "TurnNum")
		{
			PoolWaveMode_TN = [400, 5, 3, 120, 1, 400, 5, 3, 120, 3, 400, 5, 3, 120, 1, 400, 5, 3, 120, 3, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0, 400, 0, 0, 0, 0];
		}
	}
	PoolPrescriptionTable(PoolCurrentMode, PoolCurrentSets);
}

function PoolInitialPrescription()
{
	for(var i = 1; i <= PoolCurrentSets; i++)
	{
		var Distance = document.getElementById("select_PO_TDistance_S"+i).value;
		var input_TimePerT_S = (document.getElementById("select_PO_TDistance_S" + i).value / (PoolLimitSpeed * document.getElementById("input_PO_TStrong" + i).value / 100)).toFixed(0);
		var input_RelaxPerT_S = (input_TimePerT_S / (document.getElementById("input_PO_TTime2_S" + i).value / document.getElementById("input_PO_RTime_S" + i).value)).toFixed(0);
		var input_TimePerS_S = (( 1 * input_RelaxPerT_S + 1 * input_TimePerT_S) * document.getElementById("input_PO_TNum_S" + i).value).toFixed(0);
		document.getElementById("input_PO_PercentToSpeed" + i).setAttribute("value", (PoolLimitSpeed * document.getElementById("input_PO_TStrong" + i).value / 100).toFixed(1));
		//document.getElementById("input_TimePerT_S" + i).value = (document.getElementById("select_PO_TDistance_S" + i).value / (document.getElementById("input_LimitSpeed").value / 3600 * 1000) * document.getElementById("input_PO_TStrong" + i).value / 100).toFixed(0);
		document.getElementById("input_PO_TimePerT_min_S" + i).setAttribute("value", Math.floor(input_TimePerT_S / 60));
		document.getElementById("input_PO_TimePerT_sec_S" + i).setAttribute("value", input_TimePerT_S % 60);
		//document.getElementById("input_RelaxPerT_S" + i).value = (document.getElementById("input_TimePerT_S" + i).value / (document.getElementById("input_PO_TTime2_S" + i).value / document.getElementById("input_PO_RTime_S" + i).value)).toFixed(0);
		document.getElementById("input_PO_RelaxPerT_min_S" + i).setAttribute("value", Math.floor(input_RelaxPerT_S / 60));
		document.getElementById("input_PO_RelaxPerT_sec_S" + i).setAttribute("value", input_RelaxPerT_S % 60);
		//document.getElementById("input_TimePerS_S" + i).value = (( 1 * document.getElementById("input_RelaxPerT_S" + i).value + 1 * document.getElementById("input_TimePerT_S" + i).value) * document.getElementById("input_PO_TNum_S" + i).value).toFixed(0);
		document.getElementById("input_PO_TimePerS_min_S" + i).setAttribute("value", Math.floor(input_TimePerS_S / 60));
		document.getElementById("input_PO_TimePerS_sec_S" + i).setAttribute("value", input_TimePerS_S % 60);
		document.getElementById("input_PO_PartT_S" + i).setAttribute("value", (document.getElementById("input_PO_TNum_S" + i).value * input_TimePerT_S / document.getElementById("input_Pool" + Distance + "Time").value + Math.log(input_TimePerS_S / input_RelaxPerT_S / document.getElementById("input_PO_TNum_S" + i).value)).toFixed(2));
	}
	PoolTotalT();
}

function PoolCaculatPrescription(SetsIndex, AttValue, AttIndex)
{	
	var Distance = document.getElementById("select_PO_TDistance_S"+SetsIndex).value;	
	var input_TimePerT_S = (document.getElementById("select_PO_TDistance_S" + SetsIndex).value / (PoolLimitSpeed * document.getElementById("input_PO_TStrong" + SetsIndex).value / 100)).toFixed(0);
	var input_RelaxPerT_S = (input_TimePerT_S / (document.getElementById("input_PO_TTime2_S" + SetsIndex).value / document.getElementById("input_PO_RTime_S" + SetsIndex).value)).toFixed(0);
	var input_TimePerS_S = (( 1 * input_RelaxPerT_S + 1 * input_TimePerT_S) * document.getElementById("input_PO_TNum_S" + SetsIndex).value).toFixed(0);
	document.getElementById("input_PO_PercentToSpeed" + SetsIndex).value = (PoolLimitSpeed * document.getElementById("input_PO_TStrong" + SetsIndex).value / 100).toFixed(1);
	//document.getElementById("input_TimePerT_S" + SetsIndex).value = (document.getElementById("select_PO_TDistance_S" + SetsIndex).value / (document.getElementById("input_LimitSpeed").value / 3600 * 1000) * document.getElementById("input_PO_TStrong" + SetsIndex).value / 100).toFixed(0);
	document.getElementById("input_PO_TimePerT_min_S" + SetsIndex).value = Math.floor(input_TimePerT_S / 60);
	document.getElementById("input_PO_TimePerT_sec_S" + SetsIndex).value = input_TimePerT_S % 60;
	//document.getElementById("input_RelaxPerT_S" + SetsIndex).value = (document.getElementById("input_TimePerT_S" + SetsIndex).value / (document.getElementById("input_PO_TTime2_S" + SetsIndex).value / document.getElementById("input_PO_RTime_S" + SetsIndex).value)).toFixed(0);
	document.getElementById("input_PO_RelaxPerT_min_S" + SetsIndex).value = Math.floor(input_RelaxPerT_S / 60);
	document.getElementById("input_PO_RelaxPerT_sec_S" + SetsIndex).value = input_RelaxPerT_S % 60;
	//document.getElementById("input_TimePerS_S" + SetsIndex).value = (( 1 * document.getElementById("input_RelaxPerT_S" + SetsIndex).value + 1 * document.getElementById("input_TimePerT_S" + SetsIndex).value) * document.getElementById("input_PO_TNum_S" + SetsIndex).value).toFixed(0);
	document.getElementById("input_PO_TimePerS_min_S" + SetsIndex).value = Math.floor(input_TimePerS_S / 60);
	document.getElementById("input_PO_TimePerS_sec_S" + SetsIndex).value = input_TimePerS_S % 60;
	document.getElementById("input_PO_PartT_S" + SetsIndex).value = (document.getElementById("input_PO_TNum_S" + SetsIndex).value * input_TimePerT_S / document.getElementById("input_Pool" + Distance + "Time").value + Math.log(input_TimePerS_S / input_RelaxPerT_S / document.getElementById("input_PO_TNum_S" + SetsIndex).value)).toFixed(2);
	
	if(AttIndex != 5)
	{
		if(PoolCurrentMode == "SingleSet")
		{
			PoolSingleMode[(SetsIndex - 1) * 5 + AttIndex] = AttValue;
		}
		else if(PoolCurrentMode == "Increase")
		{
			if(PoolCurrentFactor == "T_RRate")
			{
				PoolIncreaseMode_TR[(SetsIndex - 1) * 5 + AttIndex] = AttValue;
			}
			else if(PoolCurrentFactor == "TurnNum")
			{
				PoolIncreaseMode_TN[(SetsIndex - 1) * 5 + AttIndex] = AttValue;
			}
		}
		else if(PoolCurrentMode == "Decrease")
		{
			if(PoolCurrentFactor == "T_RRate")
			{
				PoolDecreaseMode_TR[(SetsIndex - 1) * 5 + AttIndex] = AttValue;
			}
			else if(PoolCurrentFactor == "TurnNum")
			{
				PoolDecreaseMode_TN[(SetsIndex - 1) * 5 + AttIndex] = AttValue;
			}
		}
		else if(PoolCurrentMode == "Wave")
		{
			if(PoolCurrentFactor == "T_RRate")
			{
				PoolWaveMode_TR[(SetsIndex - 1) * 5 + AttIndex] = AttValue;
			}
			else if(PoolCurrentFactor == "TurnNum")
			{
				PoolWaveMode_TN[(SetsIndex - 1) * 5 + AttIndex] = AttValue;
			}
		}
	}
	PoolTotalT();
}

function PoolTotalT()
{
	var TotT = 0;
	for(var i = 1; i <= PoolCurrentSets; i++)
	{
		TotT = TotT + 1 * document.getElementById("input_PO_PartT_S" + i).value;
	}
	document.getElementById("input_PO_TotT").value = PoolTotT = TotT.toFixed(2);
	document.getElementById("input_PO_TotT").setAttribute("value", PoolTotT);
}
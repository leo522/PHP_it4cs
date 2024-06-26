/*var BickSprintTime50 = 0;
var BickSprintTime60 = 0;
var BickSprintTime70 = 0;
var BickSprintTime80 = 0;
var BickSprintTime90 = 0;
var BickSprintTime100 = 0;*/
var BickSprintDistance = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
/*var BickSprintSpeed50;
var BickSprintSpeed60;
var BickSprintSpeed70;
var BickSprintSpeed80;
var BickSprintSpeed90;
var BickSprintSpeed100;*/
var BickSprintSpeed = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
var BickSprintFailureTime;
var BickSprintAttribute = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var BickSprintAttributeArray = new Array();
var BickSprintMaxSpeedId = 0;
/*BickSprintAttributeArray[SetId][Attribute]
===========================
Attribute
0:TurnTimeArray
1:SetAttributeArray
===========================
AttributeArray
0:input_BS_BestTime_S
1:input_BS_TTime2_S
2:input_BS_RTime_S
3:input_BS_TNum_S

*/
var BickSprintTotT = 0;
var BickSprintCurrentSets = 1;

function CaculateBickSprintSpeed()
{	
	/*document.getElementById("input_BS_50Speed").setAttribute("value", BickSprintSpeed50 = (50 / document.getElementById("input_BS_50Time").value).toFixed(2));
	document.getElementById("input_BS_60Speed").setAttribute("value", BickSprintSpeed60 = (10 / (document.getElementById("input_BS_60Time").value - document.getElementById("input_BS_50Time").value)).toFixed(2));
	document.getElementById("input_BS_70Speed").setAttribute("value", BickSprintSpeed70 = (10 / (document.getElementById("input_BS_70Time").value - document.getElementById("input_BS_60Time").value)).toFixed(2));
	document.getElementById("input_BS_80Speed").setAttribute("value", BickSprintSpeed80 = (10 / (document.getElementById("input_BS_80Time").value - document.getElementById("input_BS_70Time").value)).toFixed(2));
	document.getElementById("input_BS_90Speed").setAttribute("value", BickSprintSpeed90 = (10 / (document.getElementById("input_BS_90Time").value - document.getElementById("input_BS_80Time").value)).toFixed(2));
	document.getElementById("input_BS_100Speed").setAttribute("value", BickSprintSpeed100 = (10 / (document.getElementById("input_BS_100Time").value - document.getElementById("input_BS_90Time").value)).toFixed(2));*/
	document.getElementById("input_BS_0Distance").setAttribute("value", BickSprintDistance[0] = 0);
	for(var i = 1; i < 21; i ++)
	{
		var SumedDistance = 0;
		for(var j = 0; j < i; j++)
		{
			SumedDistance = ((SumedDistance * 1) + ((BickSprintSpeed[j] * 1000) / 3600)).toFixed(2);
		}
		document.getElementById("input_BS_" + i + "Distance").setAttribute("value", BickSprintDistance[i] = SumedDistance);
		document.getElementById("input_BS_" + i + "Distance").value = SumedDistance;
	}
				
	/*document.getElementById("input_BS_60Percent").setAttribute("value", ((BickSprintSpeed50 - BickSprintSpeed60) / BickSprintSpeed50 * 100).toFixed(1));
	document.getElementById("input_BS_70Percent").setAttribute("value", ((BickSprintSpeed50 - BickSprintSpeed70) / BickSprintSpeed50 * 100).toFixed(1));
	document.getElementById("input_BS_80Percent").setAttribute("value", ((BickSprintSpeed50 - BickSprintSpeed80) / BickSprintSpeed50 * 100).toFixed(1));
	document.getElementById("input_BS_90Percent").setAttribute("value", ((BickSprintSpeed50 - BickSprintSpeed90) / BickSprintSpeed50 * 100).toFixed(1));
	document.getElementById("input_BS_100Percent").setAttribute("value", ((BickSprintSpeed50 - BickSprintSpeed100) / BickSprintSpeed50 * 100).toFixed(1));*/
	/*for(var i = 1; i < 21; i++)
	{
		document.getElementById("input_BS_" + i + "Percent").setAttribute("value", ((BickSprintSpeed[0] - BickSprintSpeed[i]) / BickSprintSpeed[0] * 100).toFixed(1));
	}*/
	var tempMaxSpeed = 0;
				for(var i = 0; i < 21; i++)
				{
					if((1 * BickSprintSpeed[i]) > (1 * tempMaxSpeed))
					{
						tempMaxSpeed = BickSprintSpeed[i];
						BickSprintMaxSpeedId = i;
					}
				}
				
				for(var i = 0; i < 21; i++)
				{
					if(i >= BickSprintMaxSpeedId)
					{
						if(BickSprintSpeed[i] != 0)
						{
							document.getElementById("input_BS_" + i + "Percent").setAttribute("value", ((BickSprintSpeed[BickSprintMaxSpeedId] - BickSprintSpeed[i]) / BickSprintSpeed[BickSprintMaxSpeedId] * 100).toFixed(1));
						}
						else
						{
							document.getElementById("input_BS_" + i + "Percent").setAttribute("value", "--");
						}
					}
					else
					{
						document.getElementById("input_BS_" + i + "Percent").setAttribute("value", "--");
					}
				}
}

//function CaculateBickSprintSpeed()

function BickSprintPrescription(type)
{
	pattern = /^[0-9]+(.[0-9]+)?$/;
	var ErrorMessage = "請檢查以下參數：\n";
	var ErrorFlag = 0;
	/*if(!pattern.test(BickSprintSpeed50) || BickSprintSpeed50 <= 0)
	{
		ErrorMessage += "25m時的時間\n";
		ErrorFlag = 1;
	}
	if(!pattern.test(BickSprintSpeed60) || BickSprintSpeed60 <= 0)
	{
		ErrorMessage += "30m時的時間\n";
		ErrorFlag = 1;
	}
	if(!pattern.test(BickSprintSpeed70) || BickSprintSpeed70 <= 0)
	{
		ErrorMessage += "35m時的時間\n";
		ErrorFlag = 1;
	}
	if(!pattern.test(BickSprintSpeed80) || BickSprintSpeed80 <= 0)
	{
		ErrorMessage += "40m時的時間\n";
		ErrorFlag = 1;
	}
	if(!pattern.test(BickSprintSpeed90) || BickSprintSpeed90 <= 0)
	{
		ErrorMessage += "45m時的時間\n";
		ErrorFlag = 1;
	}
	if(!pattern.test(BickSprintSpeed100) || BickSprintSpeed100 <= 0)
	{
		ErrorMessage += "50m時的時間\n";
		ErrorFlag = 1;
	}*/
	for(var  i = 0; i < 21; i++)
	{
		if(!pattern.test(BickSprintSpeed[i]) || BickSprintSpeed[i] < 0)
		{
			ErrorMessage += i + "秒時的速度\n";
			ErrorFlag = 1;
		}
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
				
				/*document.getElementById("input_BS_50Time").value = BickSprintTime50;
				document.getElementById("input_BS_60Time").value = BickSprintTime60;
				document.getElementById("input_BS_70Time").value = BickSprintTime70;
				document.getElementById("input_BS_80Time").value = BickSprintTime80;
				document.getElementById("input_BS_90Time").value = BickSprintTime90;			
				doument.getElementById("input_BS_100Time").value = BickSprintTime100;*/
				for(var i = 0; i < 21; i++)
				{
					document.getElementById("input_BS_" + i +"Distance").value = BickSprintDistance[i];
				}
				
				
				/*document.getElementById("input_BS_50Speed").value = BickSprintSpeed50;	
				document.getElementById("input_BS_60Speed").value = BickSprintSpeed60;
				document.getElementById("input_BS_70Speed").value = BickSprintSpeed70;
				document.getElementById("input_BS_80Speed").value = BickSprintSpeed80;
				document.getElementById("input_BS_90Speed").value = BickSprintSpeed90;
				document.getElementById("input_BS_100Speed").value = BickSprintSpeed100;*/
				for(var i = 0; i < 21; i++)
				{
					document.getElementById("input_BS_" + i +"Speed").value = BickSprintSpeed[i];
				}
				
				
				var tempMaxSpeed = 0;
				for(var i = 0; i < 21; i++)
				{
					if((1 * BickSprintSpeed[i]) > (1 * tempMaxSpeed))
					{
						tempMaxSpeed = BickSprintSpeed[i];
						BickSprintMaxSpeedId = i;
					}
				}
				
				for(var i = 0; i < 21; i++)
				{
					if(i >= BickSprintMaxSpeedId)
					{
						if(BickSprintSpeed[i] != 0)
						{
							document.getElementById("input_BS_" + i + "Percent").setAttribute("value", ((BickSprintSpeed[BickSprintMaxSpeedId] - BickSprintSpeed[i]) / BickSprintSpeed[BickSprintMaxSpeedId] * 100).toFixed(1));
						}
						else
						{
							document.getElementById("input_BS_" + i + "Percent").setAttribute("value", "--");
						}
					}
					else
					{
						document.getElementById("input_BS_" + i + "Percent").setAttribute("value", "--");
					}
				}
				
				var min = 100;
				for(var i = BickSprintMaxSpeedId; i < 21; i++)
				{
					var Temp = document.getElementById("input_BS_" + i + "Percent").value - 5;
					if(Temp < min && Temp >= 0)
					{
						BickSprintFailureTime = i;
						min = Temp;
					}
				}
				/*for(var i = 1; i < 21; i++)
				{
					document.getElementById("input_BS_" + i + "Percent").value = ((BickSprintSpeed[0] - BickSprintSpeed[i]) / BickSprintSpeed[0] * 100).toFixed(1);
				}
				
				var min = 100;
				for(var i = 0; i < 21; i++)
				{
					var Temp = document.getElementById("input_BS_" + i + "Percent").value - 5;
					if(Temp < min && Temp >= 0)
					{
						BickSprintFailureTime = i;
						min = Temp;
					}
				}*/
				
				 document.getElementById("select_Sets").value = BickSprintCurrentSets;
				BickSprintPrescriptionTable(BickSprintCurrentSets);
			}
		}
		if(type == 1)
		{
			xmlhttp.open("GET","BickSprint/ResultAndPrescription.php",true);
			xmlhttp.send();
		}
		else if(type == 0)
		{
			BasicInfo();
		}
	}
}

function BickSprintPrescriptionTable(SetNum)
{
	BickSprintCurrentSets = SetNum;
	if(BickSprintCurrentSets > BickSprintAttributeArray.length)
	{
		do
		{
			var temp = new Array();
			temp[0] = new Array();
			temp[1] = [1, 4, 0, 0];
			BickSprintAttributeArray.push(temp);
		}while(BickSprintAttributeArray.length < BickSprintCurrentSets);
	}
	else if(BickSprintCurrentSets < BickSprintAttributeArray.length)
	{
		do
		{
			BickSprintAttributeArray.pop();
		}while(BickSprintAttributeArray.length > BickSprintCurrentSets);
	}
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
			BickSprintPrescriptionAttribute();
			BickSprintInitialPrescription();
		}
	}
	xmlhttp.open("GET","BickSprint/Prescription.php?SetNum=" + BickSprintCurrentSets,true);
	xmlhttp.send();
}

function BickSprintPrescriptionAttribute()
{
	for(var i = 1; i <= BickSprintCurrentSets; i++)
	{
		document.getElementById("input_BS_BestTime_S" + i).setAttribute("value", BickSprintAttributeArray[i-1][1][3]);
		document.getElementById("input_BS_TTime2_S" + i).setAttribute("value", BickSprintAttributeArray[i-1][1][0]);
		document.getElementById("input_BS_RTime_S" + i).setAttribute("value", BickSprintAttributeArray[i-1][1][1]);
		document.getElementById("input_BS_TNum_S" + i).setAttribute("value", BickSprintAttributeArray[i-1][1][2]);
	}
}

function BickSprintInitialPrescription()
{
	for(var i = 1; i <= BickSprintCurrentSets; i++)
	{
		document.getElementById("input_BS_RelaxPerT_S" + i).setAttribute("value", (document.getElementById("input_BS_BestTime_S" + i).value / (document.getElementById("input_BS_TTime2_S" + i).value / document.getElementById("input_BS_RTime_S" + i).value)).toFixed(0));
		document.getElementById("input_BS_RelaxTime_S" + i).setAttribute("value", (document.getElementById("input_BS_RelaxPerT_S" + i).value * document.getElementById("input_BS_TNum_S" + i).value).toFixed(0));
		
		BickCreateTrainingTimeTable(i, document.getElementById("input_BS_TNum_S" + i).value);
		document.getElementById("input_BS_TotalTime_S" + i).setAttribute("value", (( 1 * document.getElementById("input_BS_RelaxTime_S" + i).value + 1 * document.getElementById("input_BS_TTime_S" + i).value)).toFixed(0));
		document.getElementById("input_BS_PartT_S" + i).setAttribute("value", ((document.getElementById("input_BS_TTime_S" + i).value / BickSprintFailureTime) + Math.log(document.getElementById("input_BS_TotalTime_S" + i).value / document.getElementById("input_BS_RelaxTime_S" + i).value)).toFixed(2));
	}
	BickSprintTotalT();
}

function BickSprintCaculatPrescription(SetsIndex, AttValue, AttIndex)
{
	document.getElementById("input_BS_RelaxPerT_S" + SetsIndex).value = (document.getElementById("input_BS_BestTime_S" + SetsIndex).value / (document.getElementById("input_BS_TTime2_S" + SetsIndex).value / document.getElementById("input_BS_RTime_S" + SetsIndex).value)).toFixed(0);
	document.getElementById("input_BS_RelaxTime_S" + SetsIndex).value = (document.getElementById("input_BS_RelaxPerT_S" + SetsIndex).value * document.getElementById("input_BS_TNum_S" + SetsIndex).value).toFixed(0);
	
	if(AttIndex == 3)
	{
		if(AttValue > BickSprintAttributeArray[SetsIndex-1][0].length)
		{
			do
			{
				var temp = 0;
				BickSprintAttributeArray[SetsIndex-1][0].push(temp);
			}while(BickSprintAttributeArray[SetsIndex-1][0].length < AttValue);
		}
		else if(AttValue < BickSprintAttributeArray[SetsIndex-1][0].length)
		{
			do
			{
				BickSprintAttributeArray[SetsIndex-1][0].pop();
			}while(BickSprintAttributeArray[SetsIndex-1][0].length > AttValue);
		}
		BickCreateTrainingTimeTable(SetsIndex, document.getElementById("input_BS_TNum_S" + SetsIndex).value);
	}
	document.getElementById("input_BS_TotalTime_S" + SetsIndex).value = ( 1 * document.getElementById("input_BS_RelaxTime_S" + SetsIndex).value + 1 * document.getElementById("input_BS_TTime_S" + SetsIndex).value).toFixed(0);
	document.getElementById("input_BS_PartT_S" + SetsIndex).value = ((document.getElementById("input_BS_TTime_S" + SetsIndex).value / BickSprintFailureTime) + Math.log(document.getElementById("input_BS_TotalTime_S" + SetsIndex).value / document.getElementById("input_BS_RelaxTime_S" + SetsIndex).value)).toFixed(2);
	BickSprintAttributeArray[SetsIndex-1][1][AttIndex-1] = AttValue;
	BickSprintTotalT();
}

function BickCreateTrainingTimeTable(SetsIndex, TurnNum)
{
		if(TurnNum == 0)
		{
			document.getElementById("input_BS_TTime_S" + SetsIndex).setAttribute("value", 0);
			document.getElementById("div_BS_TrainingTimeTable" + SetsIndex).innerHTML = "<table border = \"1\" style=\"text-align:left\"> <tr><th>趟次</th></tr><tr><th>時間(s)</th></tr></table>";
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
					document.getElementById("div_BS_TrainingTimeTable" + SetsIndex).innerHTML=xmlhttp.responseText;
					for(var i = 1; i <= TurnNum; i++)
					{
						document.getElementById("input_BS_Time_S" + SetsIndex + "_T" + i).setAttribute("value", BickSprintAttributeArray[SetsIndex-1][0][i-1]);
					}
					BickCaculateTrainingTime(SetsIndex, TurnNum);
				}
			}
			xmlhttp.open("GET","BickSprint/TrainingTimeTable.php?TurnNum=" + TurnNum + "&SetsIndex=" + SetsIndex,true);
			xmlhttp.send();
		}
}

function BickCaculateTrainingTime(SetsIndex, TurnNum)
{
	var temp = 0;
	var tempMin = 9999;
	for(var i = 1; i <= TurnNum; i++)
	{
		if(document.getElementById("input_BS_Time_S" + SetsIndex + "_T" + i).value * 1 < tempMin * 1)
		{
			tempMin = document.getElementById("input_BS_Time_S" + SetsIndex + "_T" + i).value;
		}
		BickSprintAttributeArray[SetsIndex-1][0][i-1] = document.getElementById("input_BS_Time_S" + SetsIndex + "_T" + i).value;
		temp = 1 * temp + 1 * document.getElementById("input_BS_Time_S" + SetsIndex + "_T" + i).value;
	}
	document.getElementById("input_BS_BestTime_S" + SetsIndex).setAttribute("value", tempMin);
	document.getElementById("input_BS_RelaxPerT_S" + SetsIndex).setAttribute("value", (document.getElementById("input_BS_BestTime_S" + SetsIndex).value / (document.getElementById("input_BS_TTime2_S" + SetsIndex).value / document.getElementById("input_BS_RTime_S" + SetsIndex).value)).toFixed(0));
	document.getElementById("input_BS_RelaxPerT_S" + SetsIndex).value = (document.getElementById("input_BS_BestTime_S" + SetsIndex).value / (document.getElementById("input_BS_TTime2_S" + SetsIndex).value / document.getElementById("input_BS_RTime_S" + SetsIndex).value)).toFixed(0);
	document.getElementById("input_BS_RelaxTime_S" + SetsIndex).setAttribute("value", (document.getElementById("input_BS_RelaxPerT_S" + SetsIndex).value * document.getElementById("input_BS_TNum_S" + SetsIndex).value).toFixed(0));
	document.getElementById("input_BS_RelaxTime_S" + SetsIndex).value = (document.getElementById("input_BS_RelaxPerT_S" + SetsIndex).value * document.getElementById("input_BS_TNum_S" + SetsIndex).value).toFixed(0);
	document.getElementById("input_BS_TTime_S" + SetsIndex).setAttribute("value", (temp).toFixed(0));
	document.getElementById("input_BS_TTime_S" + SetsIndex).value = (temp).toFixed(0);
	document.getElementById("input_BS_TotalTime_S" + SetsIndex).setAttribute("value", ( 1 * document.getElementById("input_BS_RelaxTime_S" + SetsIndex).value + 1 * document.getElementById("input_BS_TTime_S" + SetsIndex).value).toFixed(0));
	document.getElementById("input_BS_TotalTime_S" + SetsIndex).value = ( 1 * document.getElementById("input_BS_RelaxTime_S" + SetsIndex).value + 1 * document.getElementById("input_BS_TTime_S" + SetsIndex).value).toFixed(0);
	document.getElementById("input_BS_PartT_S" + SetsIndex).setAttribute("value", ((document.getElementById("input_BS_TTime_S" + SetsIndex).value / BickSprintFailureTime) + Math.log(document.getElementById("input_BS_TotalTime_S" + SetsIndex).value / document.getElementById("input_BS_RelaxTime_S" + SetsIndex).value)).toFixed(2));
	document.getElementById("input_BS_PartT_S" + SetsIndex).value = ((document.getElementById("input_BS_TTime_S" + SetsIndex).value / BickSprintFailureTime) + Math.log(document.getElementById("input_BS_TotalTime_S" + SetsIndex).value / document.getElementById("input_BS_RelaxTime_S" + SetsIndex).value)).toFixed(2);
	/*alert("input_BS_TTime_S:" + document.getElementById("input_BS_TTime_S" + SetsIndex).value);
	alert(BickSprintFailureTime);
	alert("input_BS_TotalTime_S:" + document.getElementById("input_BS_TotalTime_S" + SetsIndex).value);
	alert("input_BS_RelaxTime_S" + document.getElementById("input_BS_RelaxTime_S" + SetsIndex).value);
	alert("input_BS_RelaxPerT_S:" + document.getElementById("input_BS_RelaxPerT_S" + SetsIndex).value);
	alert("input_BS_TNum_S:" + document.getElementById("input_BS_TNum_S" + SetsIndex).value);
	alert("input_BS_BestTime_S" + document.getElementById("input_BS_BestTime_S" + SetsIndex).value);
	alert("input_BS_TTime2_S" + document.getElementById("input_BS_TTime2_S" + SetsIndex).value);
	alert("input_BS_RTime_S" + document.getElementById("input_BS_RTime_S" + SetsIndex).value);*/
	BickSprintTotalT();
}

function BickSprintTotalT()
{
	var TotT = 0;
	for(var i = 1; i <= BickSprintCurrentSets; i++)
	{
		TotT = TotT + 1 * document.getElementById("input_BS_PartT_S" + i).value;
	}
	document.getElementById("input_BS_TotT").setAttribute("value", BickSprintTotT = TotT.toFixed(2));
}
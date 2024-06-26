var SprintTime50 = 0;
var SprintTime60 = 0;
var SprintTime70 = 0;
var SprintTime80 = 0;
var SprintTime90 = 0;
var SprintTime100 = 0;
var SprintSpeed50;
var SprintSpeed60;
var SprintSpeed70;
var SprintSpeed80;
var SprintSpeed90;
var SprintSpeed100;
var SprintFailureTime;
var SprintAttribute = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var SprintAttributeArray = new Array();
/*SprintAttributeArray[SetId][Attribute]
===========================
Attribute
0:TurnTimeArray
1:SetAttributeArray
===========================
AttributeArray
0:input_SP_BestTime_S
1:input_SP_TTime2_S
2:input_SP_RTime_S
3:input_SP_TNum_S

*/
var SprintTotT = 0;
var SprintCurrentSets = 1;

function CaculateSprintSpeed()
{
	document.getElementById("input_SP_50Speed").setAttribute("value", SprintSpeed50 = (50 / document.getElementById("input_SP_50Time").value).toFixed(2));
	document.getElementById("input_SP_60Speed").setAttribute("value", SprintSpeed60 = (10 / (document.getElementById("input_SP_60Time").value - document.getElementById("input_SP_50Time").value)).toFixed(2));
	document.getElementById("input_SP_70Speed").setAttribute("value", SprintSpeed70 = (10 / (document.getElementById("input_SP_70Time").value - document.getElementById("input_SP_60Time").value)).toFixed(2));
	document.getElementById("input_SP_80Speed").setAttribute("value", SprintSpeed80 = (10 / (document.getElementById("input_SP_80Time").value - document.getElementById("input_SP_70Time").value)).toFixed(2));
	document.getElementById("input_SP_90Speed").setAttribute("value", SprintSpeed90 = (10 / (document.getElementById("input_SP_90Time").value - document.getElementById("input_SP_80Time").value)).toFixed(2));
	document.getElementById("input_SP_100Speed").setAttribute("value", SprintSpeed100 = (10 / (document.getElementById("input_SP_100Time").value - document.getElementById("input_SP_90Time").value)).toFixed(2));
				
	document.getElementById("input_SP_60Percent").setAttribute("value", ((SprintSpeed50 - SprintSpeed60) / SprintSpeed50 * 100).toFixed(1));
	document.getElementById("input_SP_70Percent").setAttribute("value", ((SprintSpeed50 - SprintSpeed70) / SprintSpeed50 * 100).toFixed(1));
	document.getElementById("input_SP_80Percent").setAttribute("value", ((SprintSpeed50 - SprintSpeed80) / SprintSpeed50 * 100).toFixed(1));
	document.getElementById("input_SP_90Percent").setAttribute("value", ((SprintSpeed50 - SprintSpeed90) / SprintSpeed50 * 100).toFixed(1));
	document.getElementById("input_SP_100Percent").setAttribute("value", ((SprintSpeed50 - SprintSpeed100) / SprintSpeed50 * 100).toFixed(1));
}

function SprintPrescription(type)
{
	pattern = /^[0-9]+(.[0-9]+)?$/;
	var ErrorMessage = "請檢查以下參數：\n";
	var ErrorFlag = 0;
	if(!pattern.test(SprintSpeed50) || SprintSpeed50 <= 0)
	{
		ErrorMessage += "50m時的時間\n";
		ErrorFlag = 1;
	}
	if(!pattern.test(SprintSpeed60) || SprintSpeed60 <= 0)
	{
		ErrorMessage += "60m時的時間\n";
		ErrorFlag = 1;
	}
	if(!pattern.test(SprintSpeed70) || SprintSpeed70 <= 0)
	{
		ErrorMessage += "70m時的時間\n";
		ErrorFlag = 1;
	}
	if(!pattern.test(SprintSpeed80) || SprintSpeed80 <= 0)
	{
		ErrorMessage += "80m時的時間\n";
		ErrorFlag = 1;
	}
	if(!pattern.test(SprintSpeed90) || SprintSpeed90 <= 0)
	{
		ErrorMessage += "90m時的時間\n";
		ErrorFlag = 1;
	}
	if(!pattern.test(SprintSpeed100) || SprintSpeed100 <= 0)
	{
		ErrorMessage += "100m時的時間\n";
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
				
				document.getElementById("input_SP_50Time").value = SprintTime50;
				document.getElementById("input_SP_60Time").value = SprintTime60;
				document.getElementById("input_SP_70Time").value = SprintTime70;
				document.getElementById("input_SP_80Time").value = SprintTime80;
				document.getElementById("input_SP_90Time").value = SprintTime90;			
				document.getElementById("input_SP_100Time").value = SprintTime100;
				
				document.getElementById("input_SP_50Speed").value = SprintSpeed50;	
				document.getElementById("input_SP_60Speed").value = SprintSpeed60;
				document.getElementById("input_SP_70Speed").value = SprintSpeed70;
				document.getElementById("input_SP_80Speed").value = SprintSpeed80;
				document.getElementById("input_SP_90Speed").value = SprintSpeed90;
				document.getElementById("input_SP_100Speed").value = SprintSpeed100;
				
				document.getElementById("input_SP_60Percent").value = ((SprintSpeed50 - SprintSpeed60) / SprintSpeed50 * 100).toFixed(1);
				document.getElementById("input_SP_70Percent").value = ((SprintSpeed50 - SprintSpeed70) / SprintSpeed50 * 100).toFixed(1);
				document.getElementById("input_SP_80Percent").value = ((SprintSpeed50 - SprintSpeed80) / SprintSpeed50 * 100).toFixed(1);
				document.getElementById("input_SP_90Percent").value = ((SprintSpeed50 - SprintSpeed90) / SprintSpeed50 * 100).toFixed(1);
				document.getElementById("input_SP_100Percent").value = ((SprintSpeed50 - SprintSpeed100) / SprintSpeed50 * 100).toFixed(1);
				
				var min = 100;
				for(var i = 0; i < 5; i++)
				{
					var Temp = document.getElementById("input_SP_" + (60 + (10 * i)) + "Percent").value - 5;
					if(Temp < min && Temp >= 0)
					{
						SprintFailureTime = document.getElementById("input_SP_" + (60 + (10 * i)) + "Time").value;
						min = Temp;
					}
				}
				
				 document.getElementById("select_Sets").value = SprintCurrentSets;
				SprintPrescriptionTable(SprintCurrentSets);
			}
		}
		if(type == 1)
		{
			xmlhttp.open("GET","Sprint/ResultAndPrescription.php",true);
			xmlhttp.send();
		}
		else if(type == 0)
		{
			BasicInfo();
		}
	}
}

function SprintPrescriptionTable(SetNum)
{
	SprintCurrentSets = SetNum;
	if(SprintCurrentSets > SprintAttributeArray.length)
	{
		do
		{
			var temp = new Array();
			temp[0] = new Array();
			temp[1] = [1, 4, 0, 0];
			SprintAttributeArray.push(temp);
		}while(SprintAttributeArray.length < SprintCurrentSets);
	}
	else if(SprintCurrentSets < SprintAttributeArray.length)
	{
		do
		{
			SprintAttributeArray.pop();
		}while(SprintAttributeArray.length > SprintCurrentSets);
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
			SprintPrescriptionAttribute();
			SprintInitialPrescription();
		}
	}
	xmlhttp.open("GET","Sprint/Prescription.php?SetNum=" + SprintCurrentSets,true);
	xmlhttp.send();
}

function SprintPrescriptionAttribute()
{
	for(var i = 1; i <= SprintCurrentSets; i++)
	{
		document.getElementById("input_SP_BestTime_S" + i).setAttribute("value", SprintAttributeArray[i-1][1][3]);
		document.getElementById("input_SP_TTime2_S" + i).setAttribute("value", SprintAttributeArray[i-1][1][0]);
		document.getElementById("input_SP_RTime_S" + i).setAttribute("value", SprintAttributeArray[i-1][1][1]);
		document.getElementById("input_SP_TNum_S" + i).setAttribute("value", SprintAttributeArray[i-1][1][2]);
	}
}

function SprintInitialPrescription()
{
	for(var i = 1; i <= SprintCurrentSets; i++)
	{
		document.getElementById("input_SP_RelaxPerT_S" + i).setAttribute("value", (document.getElementById("input_SP_BestTime_S" + i).value / (document.getElementById("input_SP_TTime2_S" + i).value / document.getElementById("input_SP_RTime_S" + i).value)).toFixed(0));
		document.getElementById("input_SP_RelaxTime_S" + i).setAttribute("value", (document.getElementById("input_SP_RelaxPerT_S" + i).value * document.getElementById("input_SP_TNum_S" + i).value).toFixed(0));
		
		SprintCreateTrainingTimeTable(i, document.getElementById("input_SP_TNum_S" + i).value);
		document.getElementById("input_SP_TotalTime_S" + i).setAttribute("value", (( 1 * document.getElementById("input_SP_RelaxTime_S" + i).value + 1 * document.getElementById("input_SP_TTime_S" + i).value)).toFixed(0));
		document.getElementById("input_SP_PartT_S" + i).setAttribute("value", ((document.getElementById("input_SP_TTime_S" + i).value / SprintFailureTime) + Math.log(document.getElementById("input_SP_TotalTime_S" + i).value / document.getElementById("input_SP_RelaxTime_S" + i).value)).toFixed(2));
	}
	SprintTotalT();
}

function SprintCaculatPrescription(SetsIndex, AttValue, AttIndex)
{
	document.getElementById("input_SP_RelaxPerT_S" + SetsIndex).value = (document.getElementById("input_SP_BestTime_S" + SetsIndex).value / (document.getElementById("input_SP_TTime2_S" + SetsIndex).value / document.getElementById("input_SP_RTime_S" + SetsIndex).value)).toFixed(0);
	document.getElementById("input_SP_RelaxTime_S" + SetsIndex).value = (document.getElementById("input_SP_RelaxPerT_S" + SetsIndex).value * document.getElementById("input_SP_TNum_S" + SetsIndex).value).toFixed(0);
	
	if(AttIndex == 3)
	{
		if(AttValue > SprintAttributeArray[SetsIndex-1][0].length)
		{
			do
			{
				var temp = 0;
				SprintAttributeArray[SetsIndex-1][0].push(temp);
			}while(SprintAttributeArray[SetsIndex-1][0].length < AttValue);
		}
		else if(AttValue < SprintAttributeArray[SetsIndex-1][0].length)
		{
			do
			{
				SprintAttributeArray[SetsIndex-1][0].pop();
			}while(SprintAttributeArray[SetsIndex-1][0].length > AttValue);
		}
		SprintCreateTrainingTimeTable(SetsIndex, document.getElementById("input_SP_TNum_S" + SetsIndex).value);
	}
	document.getElementById("input_SP_TotalTime_S" + SetsIndex).value = ( 1 * document.getElementById("input_SP_RelaxTime_S" + SetsIndex).value + 1 * document.getElementById("input_SP_TTime_S" + SetsIndex).value).toFixed(0);
	document.getElementById("input_SP_PartT_S" + SetsIndex).value = ((document.getElementById("input_SP_TTime_S" + SetsIndex).value / SprintFailureTime) + Math.log(document.getElementById("input_SP_TotalTime_S" + SetsIndex).value / document.getElementById("input_SP_RelaxTime_S" + SetsIndex).value)).toFixed(2);
	SprintAttributeArray[SetsIndex-1][1][AttIndex-1] = AttValue;
	SprintTotalT();
}

function SprintCreateTrainingTimeTable(SetsIndex, TurnNum)
{
		if(TurnNum == 0)
		{
			document.getElementById("input_SP_TTime_S" + SetsIndex).setAttribute("value", 0);
			document.getElementById("div_SP_TrainingTimeTable" + SetsIndex).innerHTML = "<table border = \"1\" style=\"text-align:left\"> <tr><th>趟次</th></tr><tr><th>時間(s)</th></tr></table>";
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
					document.getElementById("div_SP_TrainingTimeTable" + SetsIndex).innerHTML=xmlhttp.responseText;
					for(var i = 1; i <= TurnNum; i++)
					{
						document.getElementById("input_SP_Time_S" + SetsIndex + "_T" + i).setAttribute("value", SprintAttributeArray[SetsIndex-1][0][i-1]);
					}
					SprintCaculateTrainingTime(SetsIndex, TurnNum);
				}
			}
			xmlhttp.open("GET","Sprint/TrainingTimeTable.php?TurnNum=" + TurnNum + "&SetsIndex=" + SetsIndex,true);
			xmlhttp.send();
		}
}

function SprintCaculateTrainingTime(SetsIndex, TurnNum)
{
	var temp = 0;
	var tempMin = 9999;
	for(var i = 1; i <= TurnNum; i++)
	{
		if(document.getElementById("input_SP_Time_S" + SetsIndex + "_T" + i).value * 1 < tempMin * 1)
		{
			tempMin = document.getElementById("input_SP_Time_S" + SetsIndex + "_T" + i).value;
		}
		SprintAttributeArray[SetsIndex-1][0][i-1] = document.getElementById("input_SP_Time_S" + SetsIndex + "_T" + i).value;
		temp = 1 * temp + 1 * document.getElementById("input_SP_Time_S" + SetsIndex + "_T" + i).value;
	}
	document.getElementById("input_SP_BestTime_S" + SetsIndex).setAttribute("value", tempMin);
	document.getElementById("input_SP_RelaxPerT_S" + SetsIndex).setAttribute("value", (document.getElementById("input_SP_BestTime_S" + SetsIndex).value / (document.getElementById("input_SP_TTime2_S" + SetsIndex).value / document.getElementById("input_SP_RTime_S" + SetsIndex).value)).toFixed(0));
	document.getElementById("input_SP_RelaxPerT_S" + SetsIndex).value = (document.getElementById("input_SP_BestTime_S" + SetsIndex).value / (document.getElementById("input_SP_TTime2_S" + SetsIndex).value / document.getElementById("input_SP_RTime_S" + SetsIndex).value)).toFixed(0);
	document.getElementById("input_SP_RelaxTime_S" + SetsIndex).setAttribute("value", (document.getElementById("input_SP_RelaxPerT_S" + SetsIndex).value * document.getElementById("input_SP_TNum_S" + SetsIndex).value).toFixed(0));
	document.getElementById("input_SP_RelaxTime_S" + SetsIndex).value = (document.getElementById("input_SP_RelaxPerT_S" + SetsIndex).value * document.getElementById("input_SP_TNum_S" + SetsIndex).value).toFixed(0);
	document.getElementById("input_SP_TTime_S" + SetsIndex).setAttribute("value", (temp).toFixed(0));
	document.getElementById("input_SP_TTime_S" + SetsIndex).value = (temp).toFixed(0);
	document.getElementById("input_SP_TotalTime_S" + SetsIndex).setAttribute("value", ( 1 * document.getElementById("input_SP_RelaxTime_S" + SetsIndex).value + 1 * document.getElementById("input_SP_TTime_S" + SetsIndex).value).toFixed(0));
	document.getElementById("input_SP_TotalTime_S" + SetsIndex).value = ( 1 * document.getElementById("input_SP_RelaxTime_S" + SetsIndex).value + 1 * document.getElementById("input_SP_TTime_S" + SetsIndex).value).toFixed(0);
	document.getElementById("input_SP_PartT_S" + SetsIndex).setAttribute("value", ((document.getElementById("input_SP_TTime_S" + SetsIndex).value / SprintFailureTime) + Math.log(document.getElementById("input_SP_TotalTime_S" + SetsIndex).value / document.getElementById("input_SP_RelaxTime_S" + SetsIndex).value)).toFixed(2));
	document.getElementById("input_SP_PartT_S" + SetsIndex).value = ((document.getElementById("input_SP_TTime_S" + SetsIndex).value / SprintFailureTime) + Math.log(document.getElementById("input_SP_TotalTime_S" + SetsIndex).value / document.getElementById("input_SP_RelaxTime_S" + SetsIndex).value)).toFixed(2);
	/*alert("input_SP_TTime_S:" + document.getElementById("input_SP_TTime_S" + SetsIndex).value);
	alert(SprintFailureTime);
	alert("input_SP_TotalTime_S:" + document.getElementById("input_SP_TotalTime_S" + SetsIndex).value);
	alert("input_SP_RelaxTime_S" + document.getElementById("input_SP_RelaxTime_S" + SetsIndex).value);
	alert("input_SP_RelaxPerT_S:" + document.getElementById("input_SP_RelaxPerT_S" + SetsIndex).value);
	alert("input_SP_TNum_S:" + document.getElementById("input_SP_TNum_S" + SetsIndex).value);
	alert("input_SP_BestTime_S" + document.getElementById("input_SP_BestTime_S" + SetsIndex).value);
	alert("input_SP_TTime2_S" + document.getElementById("input_SP_TTime2_S" + SetsIndex).value);
	alert("input_SP_RTime_S" + document.getElementById("input_SP_RTime_S" + SetsIndex).value);*/
	SprintTotalT();
}

function SprintTotalT()
{
	var TotT = 0;
	for(var i = 1; i <= SprintCurrentSets; i++)
	{
		TotT = TotT + 1 * document.getElementById("input_SP_PartT_S" + i).value;
	}
	document.getElementById("input_SP_TotT").setAttribute("value", SprintTotT = TotT.toFixed(2));
}
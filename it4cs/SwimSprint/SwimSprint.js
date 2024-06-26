var SwimSprintTime25 = 0;
var SwimSprintTime30 = 0;
var SwimSprintTime35 = 0;
var SwimSprintTime40 = 0;
var SwimSprintTime45 = 0;
var SwimSprintTime50 = 0;
var SwimSprintSpeed25;
var SwimSprintSpeed30;
var SwimSprintSpeed35;
var SwimSprintSpeed40;
var SwimSprintSpeed45;
var SwimSprintSpeed50;
var SwimSprintFailureTime;
var SwimSprintAttribute = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var SwimSprintAttributeArray = new Array();
/*SwimSprintAttributeArray[SetId][Attribute]
===========================
Attribute
0:TurnTimeArray
1:SetAttributeArray
===========================
AttributeArray
0:input_SS_BestTime_S
1:input_SS_TTime2_S
2:input_SS_RTime_S
3:input_SS_TNum_S

*/
var SwimSprintTotT = 0;
var SwimSprintCurrentSets = 1;

function CaculateSwimSprintSpeed()
{
	document.getElementById("input_SS_25Speed").setAttribute("value", SwimSprintSpeed25 = (25 / document.getElementById("input_SS_25Time").value).toFixed(2));
	document.getElementById("input_SS_30Speed").setAttribute("value", SwimSprintSpeed30 = (5 / (document.getElementById("input_SS_30Time").value - document.getElementById("input_SS_25Time").value)).toFixed(2));
	document.getElementById("input_SS_35Speed").setAttribute("value", SwimSprintSpeed35 = (5 / (document.getElementById("input_SS_35Time").value - document.getElementById("input_SS_30Time").value)).toFixed(2));
	document.getElementById("input_SS_40Speed").setAttribute("value", SwimSprintSpeed40 = (5 / (document.getElementById("input_SS_40Time").value - document.getElementById("input_SS_35Time").value)).toFixed(2));
	document.getElementById("input_SS_45Speed").setAttribute("value", SwimSprintSpeed45 = (5 / (document.getElementById("input_SS_45Time").value - document.getElementById("input_SS_40Time").value)).toFixed(2));
	document.getElementById("input_SS_50Speed").setAttribute("value", SwimSprintSpeed50 = (5 / (document.getElementById("input_SS_50Time").value - document.getElementById("input_SS_45Time").value)).toFixed(2));
				
	document.getElementById("input_SS_30Percent").setAttribute("value", ((SwimSprintSpeed25 - SwimSprintSpeed30) / SwimSprintSpeed25 * 100).toFixed(1));
	document.getElementById("input_SS_35Percent").setAttribute("value", ((SwimSprintSpeed25 - SwimSprintSpeed35) / SwimSprintSpeed25 * 100).toFixed(1));
	document.getElementById("input_SS_40Percent").setAttribute("value", ((SwimSprintSpeed25 - SwimSprintSpeed40) / SwimSprintSpeed25 * 100).toFixed(1));
	document.getElementById("input_SS_45Percent").setAttribute("value", ((SwimSprintSpeed25 - SwimSprintSpeed45) / SwimSprintSpeed25 * 100).toFixed(1));
	document.getElementById("input_SS_50Percent").setAttribute("value", ((SwimSprintSpeed25 - SwimSprintSpeed50) / SwimSprintSpeed25 * 100).toFixed(1));
}

function SwimSprintPrescription(type)
{
	pattern = /^[0-9]+(.[0-9]+)?$/;
	var ErrorMessage = "請檢查以下參數：\n";
	var ErrorFlag = 0;
	if(!pattern.test(SwimSprintSpeed25) || SwimSprintSpeed25 <= 0)
	{
		ErrorMessage += "25m時的時間\n";
		ErrorFlag = 1;
	}
	if(!pattern.test(SwimSprintSpeed30) || SwimSprintSpeed30 <= 0)
	{
		ErrorMessage += "30m時的時間\n";
		ErrorFlag = 1;
	}
	if(!pattern.test(SwimSprintSpeed35) || SwimSprintSpeed35 <= 0)
	{
		ErrorMessage += "35m時的時間\n";
		ErrorFlag = 1;
	}
	if(!pattern.test(SwimSprintSpeed40) || SwimSprintSpeed40 <= 0)
	{
		ErrorMessage += "40m時的時間\n";
		ErrorFlag = 1;
	}
	if(!pattern.test(SwimSprintSpeed45) || SwimSprintSpeed45 <= 0)
	{
		ErrorMessage += "45m時的時間\n";
		ErrorFlag = 1;
	}
	if(!pattern.test(SwimSprintSpeed50) || SwimSprintSpeed50 <= 0)
	{
		ErrorMessage += "50m時的時間\n";
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
				
				document.getElementById("input_SS_25Time").value = SwimSprintTime25;
				document.getElementById("input_SS_30Time").value = SwimSprintTime30;
				document.getElementById("input_SS_35Time").value = SwimSprintTime35;
				document.getElementById("input_SS_40Time").value = SwimSprintTime40;
				document.getElementById("input_SS_45Time").value = SwimSprintTime45;			
				document.getElementById("input_SS_50Time").value = SwimSprintTime50;
				
				document.getElementById("input_SS_25Speed").value = SwimSprintSpeed25;	
				document.getElementById("input_SS_30Speed").value = SwimSprintSpeed30;
				document.getElementById("input_SS_35Speed").value = SwimSprintSpeed35;
				document.getElementById("input_SS_40Speed").value = SwimSprintSpeed40;
				document.getElementById("input_SS_45Speed").value = SwimSprintSpeed45;
				document.getElementById("input_SS_50Speed").value = SwimSprintSpeed50;
				
				document.getElementById("input_SS_30Percent").value = ((SwimSprintSpeed25 - SwimSprintSpeed30) / SwimSprintSpeed25 * 100).toFixed(1);
				document.getElementById("input_SS_35Percent").value = ((SwimSprintSpeed25 - SwimSprintSpeed35) / SwimSprintSpeed25 * 100).toFixed(1);
				document.getElementById("input_SS_40Percent").value = ((SwimSprintSpeed25 - SwimSprintSpeed40) / SwimSprintSpeed25 * 100).toFixed(1);
				document.getElementById("input_SS_45Percent").value = ((SwimSprintSpeed25 - SwimSprintSpeed45) / SwimSprintSpeed25 * 100).toFixed(1);
				document.getElementById("input_SS_50Percent").value = ((SwimSprintSpeed25 - SwimSprintSpeed50) / SwimSprintSpeed25 * 100).toFixed(1);
				
				var min = 100;
				for(var i = 0; i < 5; i++)
				{
					var Temp = document.getElementById("input_SS_" + (30 + (5 * i)) + "Percent").value - 5;
					if(Temp < min && Temp >= 0)
					{
						SwimSprintFailureTime = document.getElementById("input_SS_" + (30 + (5 * i)) + "Time").value;
						min = Temp;
					}
				}
				
				 document.getElementById("select_Sets").value = SwimSprintCurrentSets;
				SwimSprintPrescriptionTable(SwimSprintCurrentSets);
			}
		}
		if(type == 1)
		{
			xmlhttp.open("GET","SwimSprint/ResultAndPrescription.php",true);
			xmlhttp.send();
		}
		else if(type == 0)
		{
			BasicInfo();
		}
	}
}

function SwimSprintPrescriptionTable(SetNum)
{
	SwimSprintCurrentSets = SetNum;
	if(SwimSprintCurrentSets > SwimSprintAttributeArray.length)
	{
		do
		{
			var temp = new Array();
			temp[0] = new Array();
			temp[1] = [1, 4, 0, 0];
			SwimSprintAttributeArray.push(temp);
		}while(SwimSprintAttributeArray.length < SwimSprintCurrentSets);
	}
	else if(SwimSprintCurrentSets < SwimSprintAttributeArray.length)
	{
		do
		{
			SwimSprintAttributeArray.pop();
		}while(SwimSprintAttributeArray.length > SwimSprintCurrentSets);
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
			SwimSprintPrescriptionAttribute();
			SwimSprintInitialPrescription();
		}
	}
	xmlhttp.open("GET","SwimSprint/Prescription.php?SetNum=" + SwimSprintCurrentSets,true);
	xmlhttp.send();
}

function SwimSprintPrescriptionAttribute()
{
	for(var i = 1; i <= SwimSprintCurrentSets; i++)
	{
		document.getElementById("input_SS_BestTime_S" + i).setAttribute("value", SwimSprintAttributeArray[i-1][1][3]);
		document.getElementById("input_SS_TTime2_S" + i).setAttribute("value", SwimSprintAttributeArray[i-1][1][0]);
		document.getElementById("input_SS_RTime_S" + i).setAttribute("value", SwimSprintAttributeArray[i-1][1][1]);
		document.getElementById("input_SS_TNum_S" + i).setAttribute("value", SwimSprintAttributeArray[i-1][1][2]);
	}
}

function SwimSprintInitialPrescription()
{
	for(var i = 1; i <= SwimSprintCurrentSets; i++)
	{
		document.getElementById("input_SS_RelaxPerT_S" + i).setAttribute("value", (document.getElementById("input_SS_BestTime_S" + i).value / (document.getElementById("input_SS_TTime2_S" + i).value / document.getElementById("input_SS_RTime_S" + i).value)).toFixed(0));
		document.getElementById("input_SS_RelaxTime_S" + i).setAttribute("value", (document.getElementById("input_SS_RelaxPerT_S" + i).value * document.getElementById("input_SS_TNum_S" + i).value).toFixed(0));
		
		SwimCreateTrainingTimeTable(i, document.getElementById("input_SS_TNum_S" + i).value);
		document.getElementById("input_SS_TotalTime_S" + i).setAttribute("value", (( 1 * document.getElementById("input_SS_RelaxTime_S" + i).value + 1 * document.getElementById("input_SS_TTime_S" + i).value)).toFixed(0));
		document.getElementById("input_SS_PartT_S" + i).setAttribute("value", ((document.getElementById("input_SS_TTime_S" + i).value / SwimSprintFailureTime) + Math.log(document.getElementById("input_SS_TotalTime_S" + i).value / document.getElementById("input_SS_RelaxTime_S" + i).value)).toFixed(2));
	}
	SwimSprintTotalT();
}

function SwimSprintCaculatPrescription(SetsIndex, AttValue, AttIndex)
{
	document.getElementById("input_SS_RelaxPerT_S" + SetsIndex).value = (document.getElementById("input_SS_BestTime_S" + SetsIndex).value / (document.getElementById("input_SS_TTime2_S" + SetsIndex).value / document.getElementById("input_SS_RTime_S" + SetsIndex).value)).toFixed(0);
	document.getElementById("input_SS_RelaxTime_S" + SetsIndex).value = (document.getElementById("input_SS_RelaxPerT_S" + SetsIndex).value * document.getElementById("input_SS_TNum_S" + SetsIndex).value).toFixed(0);
	
	if(AttIndex == 3)
	{
		if(AttValue > SwimSprintAttributeArray[SetsIndex-1][0].length)
		{
			do
			{
				var temp = 0;
				SwimSprintAttributeArray[SetsIndex-1][0].push(temp);
			}while(SwimSprintAttributeArray[SetsIndex-1][0].length < AttValue);
		}
		else if(AttValue < SwimSprintAttributeArray[SetsIndex-1][0].length)
		{
			do
			{
				SwimSprintAttributeArray[SetsIndex-1][0].pop();
			}while(SwimSprintAttributeArray[SetsIndex-1][0].length > AttValue);
		}
		SwimCreateTrainingTimeTable(SetsIndex, document.getElementById("input_SS_TNum_S" + SetsIndex).value);
	}
	document.getElementById("input_SS_TotalTime_S" + SetsIndex).value = ( 1 * document.getElementById("input_SS_RelaxTime_S" + SetsIndex).value + 1 * document.getElementById("input_SS_TTime_S" + SetsIndex).value).toFixed(0);
	document.getElementById("input_SS_PartT_S" + SetsIndex).value = ((document.getElementById("input_SS_TTime_S" + SetsIndex).value / SwimSprintFailureTime) + Math.log(document.getElementById("input_SS_TotalTime_S" + SetsIndex).value / document.getElementById("input_SS_RelaxTime_S" + SetsIndex).value)).toFixed(2);
	SwimSprintAttributeArray[SetsIndex-1][1][AttIndex-1] = AttValue;
	SwimSprintTotalT();
}

function SwimCreateTrainingTimeTable(SetsIndex, TurnNum)
{
		if(TurnNum == 0)
		{
			document.getElementById("input_SS_TTime_S" + SetsIndex).setAttribute("value", 0);
			document.getElementById("div_SS_TrainingTimeTable" + SetsIndex).innerHTML = "<table border = \"1\" style=\"text-align:left\"> <tr><th>趟次</th></tr><tr><th>時間(s)</th></tr></table>";
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
					document.getElementById("div_SS_TrainingTimeTable" + SetsIndex).innerHTML=xmlhttp.responseText;
					for(var i = 1; i <= TurnNum; i++)
					{
						document.getElementById("input_SS_Time_S" + SetsIndex + "_T" + i).setAttribute("value", SwimSprintAttributeArray[SetsIndex-1][0][i-1]);
					}
					SwimCaculateTrainingTime(SetsIndex, TurnNum);
				}
			}
			xmlhttp.open("GET","SwimSprint/TrainingTimeTable.php?TurnNum=" + TurnNum + "&SetsIndex=" + SetsIndex,true);
			xmlhttp.send();
		}
}

function SwimCaculateTrainingTime(SetsIndex, TurnNum)
{
	var temp = 0;
	var tempMin = 9999;
	for(var i = 1; i <= TurnNum; i++)
	{
		if(document.getElementById("input_SS_Time_S" + SetsIndex + "_T" + i).value * 1 < tempMin * 1)
		{
			tempMin = document.getElementById("input_SS_Time_S" + SetsIndex + "_T" + i).value;
		}
		SwimSprintAttributeArray[SetsIndex-1][0][i-1] = document.getElementById("input_SS_Time_S" + SetsIndex + "_T" + i).value;
		temp = 1 * temp + 1 * document.getElementById("input_SS_Time_S" + SetsIndex + "_T" + i).value;
	}
	document.getElementById("input_SS_BestTime_S" + SetsIndex).setAttribute("value", tempMin);
	document.getElementById("input_SS_RelaxPerT_S" + SetsIndex).setAttribute("value", (document.getElementById("input_SS_BestTime_S" + SetsIndex).value / (document.getElementById("input_SS_TTime2_S" + SetsIndex).value / document.getElementById("input_SS_RTime_S" + SetsIndex).value)).toFixed(0));
	document.getElementById("input_SS_RelaxPerT_S" + SetsIndex).value = (document.getElementById("input_SS_BestTime_S" + SetsIndex).value / (document.getElementById("input_SS_TTime2_S" + SetsIndex).value / document.getElementById("input_SS_RTime_S" + SetsIndex).value)).toFixed(0);
	document.getElementById("input_SS_RelaxTime_S" + SetsIndex).setAttribute("value", (document.getElementById("input_SS_RelaxPerT_S" + SetsIndex).value * document.getElementById("input_SS_TNum_S" + SetsIndex).value).toFixed(0));
	document.getElementById("input_SS_RelaxTime_S" + SetsIndex).value = (document.getElementById("input_SS_RelaxPerT_S" + SetsIndex).value * document.getElementById("input_SS_TNum_S" + SetsIndex).value).toFixed(0);
	document.getElementById("input_SS_TTime_S" + SetsIndex).setAttribute("value", (temp).toFixed(0));
	document.getElementById("input_SS_TTime_S" + SetsIndex).value = (temp).toFixed(0);
	document.getElementById("input_SS_TotalTime_S" + SetsIndex).setAttribute("value", ( 1 * document.getElementById("input_SS_RelaxTime_S" + SetsIndex).value + 1 * document.getElementById("input_SS_TTime_S" + SetsIndex).value).toFixed(0));
	document.getElementById("input_SS_TotalTime_S" + SetsIndex).value = ( 1 * document.getElementById("input_SS_RelaxTime_S" + SetsIndex).value + 1 * document.getElementById("input_SS_TTime_S" + SetsIndex).value).toFixed(0);
	document.getElementById("input_SS_PartT_S" + SetsIndex).setAttribute("value", ((document.getElementById("input_SS_TTime_S" + SetsIndex).value / SwimSprintFailureTime) + Math.log(document.getElementById("input_SS_TotalTime_S" + SetsIndex).value / document.getElementById("input_SS_RelaxTime_S" + SetsIndex).value)).toFixed(2));
	document.getElementById("input_SS_PartT_S" + SetsIndex).value = ((document.getElementById("input_SS_TTime_S" + SetsIndex).value / SwimSprintFailureTime) + Math.log(document.getElementById("input_SS_TotalTime_S" + SetsIndex).value / document.getElementById("input_SS_RelaxTime_S" + SetsIndex).value)).toFixed(2);
	/*alert("input_SS_TTime_S:" + document.getElementById("input_SS_TTime_S" + SetsIndex).value);
	alert(SwimSprintFailureTime);
	alert("input_SS_TotalTime_S:" + document.getElementById("input_SS_TotalTime_S" + SetsIndex).value);
	alert("input_SS_RelaxTime_S" + document.getElementById("input_SS_RelaxTime_S" + SetsIndex).value);
	alert("input_SS_RelaxPerT_S:" + document.getElementById("input_SS_RelaxPerT_S" + SetsIndex).value);
	alert("input_SS_TNum_S:" + document.getElementById("input_SS_TNum_S" + SetsIndex).value);
	alert("input_SS_BestTime_S" + document.getElementById("input_SS_BestTime_S" + SetsIndex).value);
	alert("input_SS_TTime2_S" + document.getElementById("input_SS_TTime2_S" + SetsIndex).value);
	alert("input_SS_RTime_S" + document.getElementById("input_SS_RTime_S" + SetsIndex).value);*/
	SwimSprintTotalT();
}

function SwimSprintTotalT()
{
	var TotT = 0;
	for(var i = 1; i <= SwimSprintCurrentSets; i++)
	{
		TotT = TotT + 1 * document.getElementById("input_SS_PartT_S" + i).value;
	}
	document.getElementById("input_SS_TotT").setAttribute("value", SwimSprintTotT = TotT.toFixed(2));
}
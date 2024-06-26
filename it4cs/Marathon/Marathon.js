var MarathonTurnNum = 0;
var MarathonTotT = 0;
var FailureTime = 0;
var MarathonAttribute = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function MarathonResetTurnNum(TurnNum)
{
	if(TurnNum == "¿ï¾Ü½ë¼Æ")
		TurnNum = 0;
	
	MarathonTurnNum = TurnNum;
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
			document.getElementById("input_FailureTimeLimite_min_T").setAttribute("value", Math.floor(FailureTime / 60));
			document.getElementById("input_FailureTimeLimite_sec_T").setAttribute("value", FailureTime % 60);
			for(var i = 1; i <= TurnNum; i++)
			{
				document.getElementById("input_Distance_T" + i).setAttribute("value", MarathonAttribute[(i * 1 - 1) * 3 + 0]);
				document.getElementById("input_TrainingTime_T" + i).setAttribute("value", MarathonAttribute[(i * 1 - 1) * 3 + 1]);
				//document.getElementById("input_RelaxTime_T" + i).setAttribute("value", MarathonAttribute[(i * 1 - 1) * 3 + 2]);
				document.getElementById("input_RelaxTime_T_Min" + i).setAttribute("value", Math.floor(MarathonAttribute[(i * 1 - 1) * 3 + 2]));
				document.getElementById("input_RelaxTime_T_Sec" + i).setAttribute("value", ((MarathonAttribute[(i * 1 - 1) * 3 + 2] - Math.floor(MarathonAttribute[(i * 1 - 1) * 3 + 2])) * 60).toFixed(0));
				MarathonCalculateAverageSpeed(i);
			}
		}
	}
	xmlhttp.open("GET","Marathon/TrainingTable.php?TurnNum=" + TurnNum,true);
	xmlhttp.send();
}

function MarathonCalculateAverageSpeed(TurnID)
{
	MarathonAttribute[(TurnID * 1 - 1) * 3 + 0] = document.getElementById("input_Distance_T" + TurnID).value;
	MarathonAttribute[(TurnID * 1 - 1) * 3 + 1] = document.getElementById("input_TrainingTime_T" + TurnID).value;
	MarathonAttribute[(TurnID * 1 - 1) * 3 + 2] = (document.getElementById("input_RelaxTime_T_Min" + TurnID).value * 1) + (document.getElementById("input_RelaxTime_T_Sec" + TurnID).value / 60);
	//document.getElementById("input_AverageSpeed_T" + TurnID).setAttribute("value", (document.getElementById("input_Distance_T" + TurnID).value / (document.getElementById("input_TrainingTime_T" + TurnID).value / 60)).toFixed(2));
	document.getElementById("input_AverageSpeed_T" + TurnID).setAttribute("value", (MarathonAttribute[(TurnID * 1 - 1) * 3 + 0] / (MarathonAttribute[(TurnID * 1 - 1) * 3 + 1] / 60)).toFixed(2));
	MarathonCalculatePartT(TurnID);
}

function MarathonCalculatePartT(TurnID)
{
	var FailureTimeInMin = (FailureTime / 60).toFixed(2);
	document.getElementById("input_PartT_T" + TurnID).setAttribute("value", ((MarathonAttribute[(TurnID * 1 - 1) * 3 + 1] / FailureTimeInMin) + Math.log((MarathonAttribute[(TurnID * 1 - 1) * 3 + 1] * 1 + MarathonAttribute[(TurnID * 1 - 1) * 3 + 2] * 1) / MarathonAttribute[(TurnID * 1 - 1) * 3 + 2])).toFixed(2));
	document.getElementById("input_PartT_T" + TurnID).value = ((MarathonAttribute[(TurnID * 1 - 1) * 3 + 1] / FailureTimeInMin) + Math.log((MarathonAttribute[(TurnID * 1 - 1) * 3 + 1] * 1 + MarathonAttribute[(TurnID * 1 - 1) * 3 + 2] * 1) / MarathonAttribute[(TurnID * 1 - 1) * 3 + 2])).toFixed(2);
	MarathonTotalT();
}

function MarathonRefreshPartT()
{
	FailureTime = (document.getElementById("input_FailureTimeLimite_min_T").value * 60) + (document.getElementById("input_FailureTimeLimite_sec_T").value * 1);
	var FailureTimeInMin = (FailureTime / 60).toFixed(2);
	for(var TurnID = 1; TurnID <= MarathonTurnNum; TurnID++)
	{
		document.getElementById("input_PartT_T" + TurnID).setAttribute("value", ((MarathonAttribute[(TurnID * 1 - 1) * 3 + 1] / FailureTimeInMin) + Math.log((MarathonAttribute[(TurnID * 1 - 1) * 3 + 1] * 1 + MarathonAttribute[(TurnID * 1 - 1) * 3 + 2] * 1) / MarathonAttribute[(TurnID * 1 - 1) * 3 + 2])).toFixed(2));
		document.getElementById("input_PartT_T" + TurnID).value = ((MarathonAttribute[(TurnID * 1 - 1) * 3 + 1] / FailureTimeInMin) + Math.log((MarathonAttribute[(TurnID * 1 - 1) * 3 + 1] * 1 + MarathonAttribute[(TurnID * 1 - 1) * 3 + 2] * 1) / MarathonAttribute[(TurnID * 1 - 1) * 3 + 2])).toFixed(2);
	}
	MarathonTotalT();
}

function MarathonTotalT()
{
	var TotT = 0;
	for(var i = 1; i <= MarathonTurnNum; i++)
	{
		TotT = TotT + 1 * document.getElementById("input_PartT_T" + i).value;
	}
	MarathonTotT = TotT.toFixed(2);
	document.getElementById("input_TotT").setAttribute("value", MarathonTotT);
}
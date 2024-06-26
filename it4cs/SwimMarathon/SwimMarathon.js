var SwimMarathonTurnNum = 0;
var SwimMarathonTotT = 0;
var SwimMarathonFailureTime = 0;
var SwimMarathonAttribute = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function SwimMarathonResetTurnNum(TurnNum)
{
	if(TurnNum == "¿ï¾Ü½ë¼Æ")
		TurnNum = 0;
	
	SwimMarathonTurnNum = TurnNum;
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
			document.getElementById("div_SM_PrescriptionInfo").innerHTML=xmlhttp.responseText;
			document.getElementById("input_SM_FailureTimeLimite_min_T").setAttribute("value", Math.floor(SwimMarathonFailureTime / 60));
			document.getElementById("input_SM_FailureTimeLimite_sec_T").setAttribute("value", SwimMarathonFailureTime % 60);
			for(var i = 1; i <= TurnNum; i++)
			{
				document.getElementById("input_SM_Distance_T" + i).setAttribute("value", SwimMarathonAttribute[(i * 1 - 1) * 3 + 0]);
				document.getElementById("input_SM_TrainingTime_T" + i).setAttribute("value", SwimMarathonAttribute[(i * 1 - 1) * 3 + 1]);
				//document.getElementById("input_SM_RelaxTime_T" + i).setAttribute("value", SwimMarathonAttribute[(i * 1 - 1) * 3 + 2]);
				document.getElementById("input_SM_RelaxTime_T_Min" + i).setAttribute("value", Math.floor(SwimMarathonAttribute[(i * 1 - 1) * 3 + 2]));
				document.getElementById("input_SM_RelaxTime_T_Sec" + i).setAttribute("value", ((SwimMarathonAttribute[(i * 1 - 1) * 3 + 2] - Math.floor(SwimMarathonAttribute[(i * 1 - 1) * 3 + 2])) * 60).toFixed(0));
				SwimMarathonCalculateAverageSpeed(i);
			}
		}
	}
	xmlhttp.open("GET","SwimMarathon/TrainingTable.php?TurnNum=" + TurnNum,true);
	xmlhttp.send();
}

function SwimMarathonCalculateAverageSpeed(TurnID)
{
	SwimMarathonAttribute[(TurnID * 1 - 1) * 3 + 0] = document.getElementById("input_SM_Distance_T" + TurnID).value;
	SwimMarathonAttribute[(TurnID * 1 - 1) * 3 + 1] = document.getElementById("input_SM_TrainingTime_T" + TurnID).value;
	SwimMarathonAttribute[(TurnID * 1 - 1) * 3 + 2] = (document.getElementById("input_SM_RelaxTime_T_Min" + TurnID).value * 1) + (document.getElementById("input_SM_RelaxTime_T_Sec" + TurnID).value / 60);
	//document.getElementById("input_SM_AverageSpeed_T" + TurnID).setAttribute("value", (document.getElementById("input_SM_Distance_T" + TurnID).value / (document.getElementById("input_SM_TrainingTime_T" + TurnID).value / 60)).toFixed(2));
	document.getElementById("input_SM_AverageSpeed_T" + TurnID).setAttribute("value", ((SwimMarathonAttribute[(TurnID * 1 - 1) * 3 + 0] * 1000) / (SwimMarathonAttribute[(TurnID * 1 - 1) * 3 + 1] * 60)).toFixed(2));
	SwimMarathonCalculatePartT(TurnID);
}

function SwimMarathonCalculatePartT(TurnID)
{
	var SwimMarathonFailureTimeInMin = (SwimMarathonFailureTime / 60).toFixed(2);
	document.getElementById("input_SM_PartT_T" + TurnID).setAttribute("value", ((SwimMarathonAttribute[(TurnID * 1 - 1) * 3 + 1] / SwimMarathonFailureTimeInMin) + Math.log((SwimMarathonAttribute[(TurnID * 1 - 1) * 3 + 1] * 1 + SwimMarathonAttribute[(TurnID * 1 - 1) * 3 + 2] * 1) / SwimMarathonAttribute[(TurnID * 1 - 1) * 3 + 2])).toFixed(2));
	document.getElementById("input_SM_PartT_T" + TurnID).value = ((SwimMarathonAttribute[(TurnID * 1 - 1) * 3 + 1] / SwimMarathonFailureTimeInMin) + Math.log((SwimMarathonAttribute[(TurnID * 1 - 1) * 3 + 1] * 1 + SwimMarathonAttribute[(TurnID * 1 - 1) * 3 + 2] * 1) / SwimMarathonAttribute[(TurnID * 1 - 1) * 3 + 2])).toFixed(2);
	SwimMarathonTotalT();
}

function SwimMarathonRefreshPartT()
{
	SwimMarathonFailureTime = (document.getElementById("input_SM_FailureTimeLimite_min_T").value * 60) + (document.getElementById("input_SM_FailureTimeLimite_sec_T").value * 1);
	var SwimMarathonFailureTimeInMin = (SwimMarathonFailureTime / 60).toFixed(2);
	for(var TurnID = 1; TurnID <= SwimMarathonTurnNum; TurnID++)
	{
		document.getElementById("input_SM_PartT_T" + TurnID).setAttribute("value", ((SwimMarathonAttribute[(TurnID * 1 - 1) * 3 + 1] / SwimMarathonFailureTimeInMin) + Math.log((SwimMarathonAttribute[(TurnID * 1 - 1) * 3 + 1] * 1 + SwimMarathonAttribute[(TurnID * 1 - 1) * 3 + 2] * 1) / SwimMarathonAttribute[(TurnID * 1 - 1) * 3 + 2])).toFixed(2));
		document.getElementById("input_SM_PartT_T" + TurnID).value = ((SwimMarathonAttribute[(TurnID * 1 - 1) * 3 + 1] / SwimMarathonFailureTimeInMin) + Math.log((SwimMarathonAttribute[(TurnID * 1 - 1) * 3 + 1] * 1 + SwimMarathonAttribute[(TurnID * 1 - 1) * 3 + 2] * 1) / SwimMarathonAttribute[(TurnID * 1 - 1) * 3 + 2])).toFixed(2);
	}
	SwimMarathonTotalT();
}

function SwimMarathonTotalT()
{
	var TotT = 0;
	for(var i = 1; i <= SwimMarathonTurnNum; i++)
	{
		TotT = TotT + 1 * document.getElementById("input_SM_PartT_T" + i).value;
	}
	SwimMarathonTotT = TotT.toFixed(2);
	document.getElementById("input_SM_TotT").setAttribute("value", SwimMarathonTotT);
}
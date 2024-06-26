var BickMarathonTurnNum = 0;
var BickMarathonTotT = 0;
var BickMarathonFailureTime = 0;
var BickMarathonAttribute = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var BickLimitePower = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function BickMarathonResetTurnNum(TurnNum)
{
	if(TurnNum == "¿ï¾Ü½ë¼Æ")
		TurnNum = 0;
	
	BickMarathonTurnNum = TurnNum;
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
			document.getElementById("div_BMar_PrescriptionInfo").innerHTML=xmlhttp.responseText;
			document.getElementById("input_BMar_FailureTimeLimite_min_T").setAttribute("value", Math.floor(BickMarathonFailureTime / 60));
			document.getElementById("input_BMar_FailureTimeLimite_sec_T").setAttribute("value", BickMarathonFailureTime % 60);
			for(var i = 1; i <= TurnNum; i++)
			{
				document.getElementById("input_BMar_Distance_T" + i).setAttribute("value", BickMarathonAttribute[(i * 1 - 1) * 3 + 0]);
				document.getElementById("input_BMar_TrainingTime_T" + i).setAttribute("value", BickMarathonAttribute[(i * 1 - 1) * 3 + 1]);
				//document.getElementById("input_BMar_RelaxTime_T" + i).setAttribute("value", BickMarathonAttribute[(i * 1 - 1) * 3 + 2]);
				document.getElementById("input_BMar_AverageLimitPower_T" + i).setAttribute("value", BickLimitePower[i-1]);
				document.getElementById("input_BMar_RelaxTime_T_Min" + i).setAttribute("value", Math.floor(BickMarathonAttribute[(i * 1 - 1) * 3 + 2]));
				document.getElementById("input_BMar_RelaxTime_T_Sec" + i).setAttribute("value", ((BickMarathonAttribute[(i * 1 - 1) * 3 + 2] - Math.floor(BickMarathonAttribute[(i * 1 - 1) * 3 + 2])) * 60).toFixed(0));
				BickMarathonCalculateAverageSpeed(i);
			}
		}
	}
	xmlhttp.open("GET","BickMarathon/TrainingTable.php?TurnNum=" + TurnNum,true);
	xmlhttp.send();
}

function BickMarathonCalculateAverageSpeed(TurnID)
{
	BickMarathonAttribute[(TurnID * 1 - 1) * 3 + 0] = document.getElementById("input_BMar_Distance_T" + TurnID).value;
	BickMarathonAttribute[(TurnID * 1 - 1) * 3 + 1] = document.getElementById("input_BMar_TrainingTime_T" + TurnID).value;
	BickMarathonAttribute[(TurnID * 1 - 1) * 3 + 2] = (document.getElementById("input_BMar_RelaxTime_T_Min" + TurnID).value * 1) + (document.getElementById("input_BMar_RelaxTime_T_Sec" + TurnID).value / 60);
	//document.getElementById("input_BMar_AverageSpeed_T" + TurnID).setAttribute("value", (document.getElementById("input_BMar_Distance_T" + TurnID).value / (document.getElementById("input_BMar_TrainingTime_T" + TurnID).value / 60)).toFixed(2));
	document.getElementById("input_BMar_AverageSpeed_T" + TurnID).setAttribute("value", (BickMarathonAttribute[(TurnID * 1 - 1) * 3 + 0] / (BickMarathonAttribute[(TurnID * 1 - 1) * 3 + 1] / 60)).toFixed(2));
	BickMarathonCalculatePartT(TurnID);
}

function BickMarathonCalculatePartT(TurnID)
{
	var BickMarathonFailureTimeInMin = (BickMarathonFailureTime / 60).toFixed(2);
	document.getElementById("input_BMar_PartT_T" + TurnID).setAttribute("value", ((BickMarathonAttribute[(TurnID * 1 - 1) * 3 + 1] / BickMarathonFailureTimeInMin) + Math.log((BickMarathonAttribute[(TurnID * 1 - 1) * 3 + 1] * 1 + BickMarathonAttribute[(TurnID * 1 - 1) * 3 + 2] * 1) / BickMarathonAttribute[(TurnID * 1 - 1) * 3 + 2])).toFixed(2));
	document.getElementById("input_BMar_PartT_T" + TurnID).value = ((BickMarathonAttribute[(TurnID * 1 - 1) * 3 + 1] / BickMarathonFailureTimeInMin) + Math.log((BickMarathonAttribute[(TurnID * 1 - 1) * 3 + 1] * 1 + BickMarathonAttribute[(TurnID * 1 - 1) * 3 + 2] * 1) / BickMarathonAttribute[(TurnID * 1 - 1) * 3 + 2])).toFixed(2);
	BickMarathonTotalT();
}

function BickMarathonRefreshPartT()
{
	BickMarathonFailureTime = (document.getElementById("input_BMar_FailureTimeLimite_min_T").value * 60) + (document.getElementById("input_BMar_FailureTimeLimite_sec_T").value * 1);
	var BickMarathonFailureTimeInMin = (BickMarathonFailureTime / 60).toFixed(2);
	for(var TurnID = 1; TurnID <= BickMarathonTurnNum; TurnID++)
	{
		document.getElementById("input_BMar_PartT_T" + TurnID).setAttribute("value", ((BickMarathonAttribute[(TurnID * 1 - 1) * 3 + 1] / BickMarathonFailureTimeInMin) + Math.log((BickMarathonAttribute[(TurnID * 1 - 1) * 3 + 1] * 1 + BickMarathonAttribute[(TurnID * 1 - 1) * 3 + 2] * 1) / BickMarathonAttribute[(TurnID * 1 - 1) * 3 + 2])).toFixed(2));
		document.getElementById("input_BMar_PartT_T" + TurnID).value = ((BickMarathonAttribute[(TurnID * 1 - 1) * 3 + 1] / BickMarathonFailureTimeInMin) + Math.log((BickMarathonAttribute[(TurnID * 1 - 1) * 3 + 1] * 1 + BickMarathonAttribute[(TurnID * 1 - 1) * 3 + 2] * 1) / BickMarathonAttribute[(TurnID * 1 - 1) * 3 + 2])).toFixed(2);
	}
	BickMarathonTotalT();
}

function BickMarathonTotalT()
{
	var TotT = 0;
	for(var i = 1; i <= BickMarathonTurnNum; i++)
	{
		TotT = TotT + 1 * document.getElementById("input_BMar_PartT_T" + i).value;
	}
	BickMarathonTotT = TotT.toFixed(2);
	document.getElementById("input_BMar_TotT").setAttribute("value", BickMarathonTotT);
}
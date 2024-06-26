var HeartInfo = false;
var BasicHeartbeat = 0;
var MaxHeartbeat = 0;
var ExerciseHeartbeat = 0;
var MethodType;
var Method = "請選擇能力測定方法";
var Date_Year;
var Date_Month;
var Date_Day;
var Stage = "訓練前規劃";
var HRR = 0;
var MailItem = new Array(18);

window.onbeforeunload = function()
{
    return "離開此網頁後，填入的資料將不再保留";
}

window.onunloadcancel = function()
{
    alert("取消離開");
}

function Load(flag)
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
			var Today = new Date();
			Date_Year = Today.getFullYear();
			Date_Month = (Today.getMonth() * 1) + (1 * 1);
			Date_Day = Today.getDate();
			document.getElementById("div_MainDiv").innerHTML=xmlhttp.responseText;
			
			if(flag == 0)
				UserCounter()
		}
	}
	xmlhttp.open("GET","main.php",true);
	xmlhttp.send();
}

function SetYear(value)
{
	Date_Year = value;
}

function SetMonth(value)
{
	Date_Month = value;
}

function SetDay(value)
{
	Date_Day = value;
}

function SetStage(value)
{
	Stage = value;
}

function UserCounter()
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
			document.getElementById("div_UserCounter").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","Counter.php",true);
	xmlhttp.send();
}

function BasicInfo()
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
			document.getElementById("div_UserCounter").style.visibility = "visible";
			document.getElementById("div_MainDiv").innerHTML=xmlhttp.responseText;
			
			/*var Today = new Date();
			document.getElementById("select_Date_Year").value = Today.getFullYear();
			document.getElementById("select_Date_Month").value = Today.getMonth();
			document.getElementById("select_Date_Day").value = Today.getDate();
			document.getElementById("Year" + Today.getFullYear()).selected = true;
			document.getElementById("Month" + Today.getMonth()).selected = true;
			document.getElementById("Day" + Today.getDate()).selected = true;*/
			
			document.getElementById("input_Item_1").value = TreadmillTotT;
			document.getElementById("input_Item_2").value = TrackTotT;
			document.getElementById("input_Item_3").value = SprintTotT;
			document.getElementById("input_Item_4").value = MarathonTotT;
			document.getElementById("input_Item_5").value = MuscleTotT;
			document.getElementById("input_Item_6").value = PoolTotT;
			document.getElementById("input_Item_7").value = SwimSprintTotT;
			document.getElementById("input_Item_8").value = SwimMarathonTotT;
			document.getElementById("input_Item_9").value = BickmillTotT;
			document.getElementById("input_Item_10").value = BickSprintTotT;
			document.getElementById("input_Item_11").value = BickMarathonTotT;
			document.getElementById("input_Treadmill_LimitSpeed").value = TreadmillLimitSpeed;
			document.getElementById("input_Bickmill_LimitSpeed").value = BickmillLimitSpeed;
			document.getElementById("input_Track_LimitSpeed").value = TrackLimitSpeed;
			document.getElementById("input_Treadmill_MaxWork").value = TreadmillMaxWork;
			document.getElementById("input_Bickmill_MaxWork").value = BickmillMaxWork;
			document.getElementById("input_Track_MaxWork").value = TrackMaxWork;
			document.getElementById("input_Pool_MaxWork").value = PoolMaxWork;
			document.getElementById("input_Pool_LimitSpeed").value = PoolLimitSpeed;
			document.getElementById("select_Date_Year").value = Date_Year;
			document.getElementById("select_Date_Month").value = Date_Month;
			document.getElementById("select_Date_Day").value = Date_Day;
			document.getElementById("select_Stage").value = Stage;
			CalculateTotalTraining();
		}
	  }
	xmlhttp.open("GET","BasicInformation.php",true);
	xmlhttp.send();
}

function BasicInfoCheck(Type)
{
	/*var MethodIndex = document.getElementById("select_Method").selectedIndex;
	MethodType = document.getElementById("select_Method").options[MethodIndex].text;*/
	MethodType = Type;
	
	if(MethodType == "請選擇能力測定方法")
	{
		alert("請選擇能力測定方法");
	}
	else if(MethodType == "請選擇訓練處方")
	{
		alert("請選擇訓練處方");
	}
	
	else
	{
		document.getElementById("div_UserCounter").style.visibility = "hidden";
		BasicExaminationInfo();
	}
}

function EnableHeartInfo()
{
	var isChecked = document.getElementById("HeartInfo").checked;
	if(!isChecked)
	{
		HeartInfo = false;
		document.getElementById("input_BasicHeartbeat").disabled = true;
		document.getElementById("input_MaxHeartbeat").disabled = true;
		document.getElementById("input_ExerciseHeartbeat").disabled = true;
	}
	else
	{
		HeartInfo = true;
		document.getElementById("input_BasicHeartbeat").disabled = false;
		document.getElementById("input_MaxHeartbeat").disabled = false;
		document.getElementById("input_ExerciseHeartbeat").disabled = false;
	}
	HRR = (((ExerciseHeartbeat - BasicHeartbeat) / (MaxHeartbeat - BasicHeartbeat)) * 100).toFixed(0);
	document.getElementById("input_HRR").value = HRR;
}

function TotalTrainingSummary()
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
			document.getElementById("input_Item_1").value = TreadmillTotT;
			document.getElementById("input_Item_2").value = TrackTotT;
			document.getElementById("input_Item_3").value = SprintTotT;
			document.getElementById("input_Item_4").value = MarathonTotT;
			document.getElementById("input_Item_5").value = MuscleTotT;
			document.getElementById("input_Item_6").value = PoolTotT;
			document.getElementById("input_Item_7").value = SwimSprintTotT;
			document.getElementById("input_Item_8").value = SwimMarathonTotT;
			document.getElementById("input_Item_9").value = BickmillTotT;
			document.getElementById("input_Item_10").value = BickSprintTotT;
			document.getElementById("input_Item_11").value = BickMarathonTotT;
			document.getElementById("input_Treadmill_LimitSpeed").value = TreadmillLimitSpeed;
			document.getElementById("input_Bickmill_LimitSpeed").value = BickmillLimitSpeed;
			document.getElementById("input_Track_LimitSpeed").value = TrackLimitSpeed;
			document.getElementById("input_Pool_LimitSpeed").value = PoolLimitSpeed;
			CalculateTotalTraining();
		}
	  }
	xmlhttp.open("GET","TotleTrainingSummary.php",true);
	xmlhttp.send();
}

function CalculateTotalTraining()
{
	var TotalTraining = 0;
	pattern = /^[0-9]+(.[0-9]+)?$/;
	for(var i = 1; i <= 11; i++)
	{
		if(document.getElementById("check_Item_" + i).checked)
		{
			var tempValue = document.getElementById("input_Item_" + i).value;
			if(pattern.test(tempValue) && tempValue >= 0)
			{
				TotalTraining = (1*TotalTraining + 1*tempValue).toFixed(2);
			}
		}
	}
	
	document.getElementById("input_TotleTraining").value = TotalTraining;
}

function BasicExaminationInfo()
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
			if(MethodType == "心率資訊")
			{
				document.getElementById("input_BasicHeartbeat").value = BasicHeartbeat;
				document.getElementById("input_MaxHeartbeat").value = MaxHeartbeat;
				document.getElementById("input_ExerciseHeartbeat").value = ExerciseHeartbeat;
				HRR = (((ExerciseHeartbeat - BasicHeartbeat) / (MaxHeartbeat - BasicHeartbeat)) * 100).toFixed(0);
				document.getElementById("input_HRR").value = HRR;
			}
			else if(MethodType == "速耐力間歇跑(跑台法)" || MethodType == "有氧/無氧代謝能力測定(跑台法)")
			{
				document.getElementById("input_MaxSpeed").value = MaxSpeed;
				document.getElementById("input_95Time").value = FailureTime95;
				document.getElementById("input_90Time").value = FailureTime90;
				document.getElementById("input_85Time").value = FailureTime85;
				document.getElementById("input_80Time").value = FailureTime80;
				document.getElementById("input_TM_R2").value = TreadMillMaxR;
				CaculateTreadmillSpeed();
			}
			else if(MethodType == "速耐力間歇騎(公路/滾筒訓練台法)" || MethodType == "有氧/無氧代謝能力測定(滾筒訓練台法)")
			{
				document.getElementById("input_BM_MaxSpeed").value = BickmillMaxSpeed;
				document.getElementById("input_BM_95Time").value = BickmillFailureTime95;
				document.getElementById("input_BM_90Time").value = BickmillFailureTime90;
				document.getElementById("input_BM_85Time").value = BickmillFailureTime85;
				document.getElementById("input_BM_80Time").value = BickmillFailureTime80;
				document.getElementById("input_BM_R2").value = BickMillMaxR;
				CaculateBickmillSpeed();
			}
			else if(MethodType == "速耐力間歇跑(田徑場法)" || MethodType == "有氧/無氧代謝能力測定(田徑場法)")
			{
				document.getElementById("input_200Time").value = FailureTime200;
				document.getElementById("input_400Time").value = FailureTime400;
				document.getElementById("input_800Time").value = FailureTime800;
				document.getElementById("input_1200Time").value = FailureTime1200;
				CaculateTrackSpeed(200, FailureTime200);
				CaculateTrackSpeed(400, FailureTime400);
				CaculateTrackSpeed(800, FailureTime800);
				CaculateTrackSpeed(1200, FailureTime1200);
			}
			else if (MethodType == "速耐力間歇泳(泳池法)" || MethodType == "有氧/無氧代謝能力測定(泳池法)")
			{
				document.getElementById("input_Pool100Time").value = PoolFailureTime100;
				document.getElementById("input_Pool200Time").value = PoolFailureTime200;
				document.getElementById("input_Pool400Time").value = PoolFailureTime400;
				document.getElementById("input_Pool800Time").value = PoolFailureTime800;
				CaculatePoolSpeed(100, PoolFailureTime100);
				CaculatePoolSpeed(200, PoolFailureTime200);
				CaculatePoolSpeed(400, PoolFailureTime400);
				CaculatePoolSpeed(800, PoolFailureTime800);
			}
			else if(MethodType == "50m衝刺泳" || MethodType == "50m衝刺泳最大速力竭時間")
			{
				document.getElementById("input_SS_25Time").value = SwimSprintTime25;
				document.getElementById("input_SS_30Time").value = SwimSprintTime30;
				document.getElementById("input_SS_35Time").value = SwimSprintTime35;
				document.getElementById("input_SS_40Time").value = SwimSprintTime40;
				document.getElementById("input_SS_45Time").value = SwimSprintTime45;
				document.getElementById("input_SS_50Time").value = SwimSprintTime50;
				CaculateSwimSprintSpeed();
			}
			else if(MethodType == "200m衝刺騎" || MethodType == "200m衝刺騎最大速力竭時間")
			{
				for(var i = 0; i < 21; i++)
				{
					document.getElementById("input_BS_"+ i + "Speed").value = BickSprintSpeed[i];
				}
				CaculateBickSprintSpeed();
			}
			else if(MethodType == "100m衝刺跑" || MethodType == "100m衝刺跑最大速力竭時間")
			{
				document.getElementById("input_SP_50Time").value = SprintTime50;
				document.getElementById("input_SP_60Time").value = SprintTime60;
				document.getElementById("input_SP_70Time").value = SprintTime70;
				document.getElementById("input_SP_80Time").value = SprintTime80;
				document.getElementById("input_SP_90Time").value = SprintTime90;
				document.getElementById("input_SP_100Time").value = SprintTime100;
				CaculateSprintSpeed();
			}
			else if(MethodType == "長距離耐力跑")
			{
				document.getElementById("select_TurnNum").value = MarathonTurnNum;
				MarathonResetTurnNum(MarathonTurnNum);
			}
			else if(MethodType == "長距離耐力泳")
			{
				document.getElementById("select_TurnNum").value = SwimMarathonTurnNum;
				SwimMarathonResetTurnNum(SwimMarathonTurnNum);
			}
			else if(MethodType == "長距離耐力騎")
			{
				document.getElementById("select_TurnNum").value = BickMarathonTurnNum;
				BickMarathonResetTurnNum(BickMarathonTurnNum);
			}
			else if(MethodType == "肌力訓練")
			{
				if(!MuscleIsInitial)
				{
					MuscleInitial();
				}
				else
				{
					MuscleResume(0);
				}
				MuscleTotT = 0;
				for(var i = 0; i < 7; i++)
				{
					var tempTraining = 0;
					for(var j = 0; j < MusclePrescriptionAttribute[i].length; j++)
					{
						for(var k = 0; k < MusclePrescriptionAttribute[i][j][8].length; k++)
						{
							tempTraining = (1 * tempTraining) + (1 * MusclePrescriptionAttribute[i][j][8][k][8]);
						}
					}
					document.getElementById("input_DayT_" + i).value = tempTraining;
					MuscleTotT = ((1 * MuscleTotT) + (1 * tempTraining)).toFixed(2);
				}
			}
		}
	}
	xmlhttp.open("GET","MetabolismExamination.php?Method=" + encodeURIComponent(MethodType),true);
	xmlhttp.send();
}

function PlanContent()
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
			for(var i = 0; i < MailItem.length; i++)
			{
				MailItem[i] = 0;
			}
		}
	}
	xmlhttp.open("GET","MailContent.php",true);
	xmlhttp.send();
}

function SetSelected(item)
{
	if(document.getElementById("check_Prescription_" + item).checked)
	{
		switch(item)
		{
			case 0:
			case 1:
			case 2:
				MailItem[item] = 1;
				break;
			case 3:
				MailItem[item] = TreadmillCurrentSets;
				MailItem[0] = 1;
				document.getElementById("check_Prescription_0").checked = true;
				break;
			case 4:
				MailItem[item] = TrackCurrentSets;
				MailItem[1] = 1;
				document.getElementById("check_Prescription_1").checked = true;
				break;
			case 5:
				MailItem[item] = SprintCurrentSets;
				MailItem[2] = 1;
				document.getElementById("check_Prescription_2").checked = true;
				break;
			case 6:
				MailItem[item] = MarathonTurnNum;
				break;
			case 7:
				MailItem[item] = 1;
				break;
			case 8:
				MailItem[item] = 1;
				break;
			case 9:
				MailItem[item] = PoolCurrentSets;
				MailItem[8] = 1;
				document.getElementById("check_Prescription_8").checked = true;
				break;
			case 10:
				MailItem[item] = 1;
				break
			case 11:
				MailItem[item] = SwimSprintCurrentSets;
				MailItem[10] = 1;
				document.getElementById("check_Prescription_10").checked = true;
				break;
			case 12:
				MailItem[item] = SwimMarathonTurnNum;
				break;
			case 13:
				MailItemp[item] = 1;
				break;
			case 14:
				MailItem[item] = BickmillCurrentSets;
				MailItem[13] = 1;
				document.getElementById("check_Prescription_13").checked = true;
				break;
			case 15:
				MailItem[item] = 1;
				break;
			case 16:
				MailItem[item] = BickSprintCurrentSets;
				MailItem[15] = 1;
				document.getElementById("check_Prescription_15").checked = true;
				break;
			case 17:
				MailItem[item] = BickMarathonTurnNum;
				break;
		}
	}
	else
	{
		switch(item)
		{
			case 0:
				MailItem[3] = 0;
				document.getElementById("check_Prescription_3").checked = false;
				break;
			case 1:
				MailItem[4] = 0;
				document.getElementById("check_Prescription_4").checked = false;
				break;
			case 2:
				MailItem[5] = 0;
				document.getElementById("check_Prescription_5").checked = false;
				break;
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
				break;
			case 8:
				MailItem[9] = 0;
				document.getElementById("check_Prescription_9").checked = false;
				break;
			case 9:
				break;
			case 10:
				MailItem[11] = 0;
				document.getElementById("check_Prescription_11").checked = false;
			case 11:
				break;
			case 12:
				break;
			case 13:
				MailItem[14] = 0;
				document.getElementById("check_Prescription_14").checked = false;
				break;
			case 14:
				break;
			case 15:
				MailItem[16] = 0;
				document.getElementById("check_Prescription_16").checked = false;
				break;
			case 16:
				break;
			case 17:
				break;
		}
		MailItem[item] = 0;
	}
}

function PreviewEmail()
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
	
	var MainAttribute = "&TreadmillTest=" + MailItem[0] +
						"&TrackTest=" + MailItem[1] + 
						"&SprintTest=" + MailItem[2] + 
						"&TreadmillPrescription=" + MailItem[3] +
						"&TrackPrescription=" + MailItem[4] +
						"&SprintPrescription=" + MailItem[5] +
						"&MarathonPrescription=" + MailItem[6] + 
						"&MusclePrescription=" + MailItem[7] + 
						"&PoolTest=" + MailItem[8] + 
						"&PoolPrescription=" + MailItem[9] + 
						"&SwimSprintTest=" + MailItem[10] + 
						"&SwimSprintPrescription=" + MailItem[11] + 
						"&SwimMarathonPrescription=" + MailItem[12] + 
						"&BickmillTest=" + MailItem[13] +
						"&BickmillPrescription=" + MailItem[14]+
						"&BickSprintTest=" + MailItem[15] +
						"&BickSprintPrescription=" + MailItem[16] + 
						"&BickMarathonPrescription=" + MailItem[17];
						
	var SPAttribute = "";
	var SSAttribute = "";
	var MSAttribute = "";
	
	if(MailItem[7]!= 0)
	{		
		if(IsWeekAbled[0])
		{
			MSAttribute = MSAttribute + "&TaskNum_Sun=" + CurrentTask_Sun.length;
			for(var i = 0; i < CurrentTask_Sun.length; i++)
			{
				MSAttribute = MSAttribute + "&Task_0_" + i + "=" + CurrentTask_Sun[i];
				MSAttribute = MSAttribute + "&Task_SetNum_0_" + i + "=" + MusclePrescriptionAttribute[0][i][10];
			}
		}
		else
		{
			MSAttribute = MSAttribute + "&TaskNum_Sun=" + 0;
		}
		if(IsWeekAbled[1])
		{
			MSAttribute = MSAttribute + "&TaskNum_Mon=" + CurrentTask_Mon.length;
			for(var i = 0; i < CurrentTask_Mon.length; i++)
			{
				MSAttribute = MSAttribute + "&Task_1_" + i + "=" + CurrentTask_Mon[i];
				MSAttribute = MSAttribute + "&Task_SetNum_1_" + i + "=" + MusclePrescriptionAttribute[1][i][10];
			}
		}
		else
		{
			MSAttribute = MSAttribute + "&TaskNum_Mon=" + 0;
		}
		if(IsWeekAbled[2])
		{
			MSAttribute = MSAttribute + "&TaskNum_Tue=" + CurrentTask_Tue.length;
			for(var i = 0; i < CurrentTask_Tue.length; i++)
			{
				MSAttribute = MSAttribute + "&Task_2_" + i + "=" + CurrentTask_Tue[i];
				MSAttribute = MSAttribute + "&Task_SetNum_2_" + i + "=" + MusclePrescriptionAttribute[2][i][10];
			}
		}
		else
		{
			MSAttribute = MSAttribute + "&TaskNum_Tue=" + 0;
		}
		if(IsWeekAbled[3])
		{
			MSAttribute = MSAttribute + "&TaskNum_Wen=" + CurrentTask_Wen.length;
			for(var i = 0; i < CurrentTask_Wen.length; i++)
			{
				MSAttribute = MSAttribute + "&Task_3_" + i + "=" + CurrentTask_Wen[i];
				MSAttribute = MSAttribute + "&Task_SetNum_3_" + i + "=" + MusclePrescriptionAttribute[3][i][10];
			}
		}
		else
		{
			MSAttribute = MSAttribute + "&TaskNum_Wen=" + 0;
		}
		if(IsWeekAbled[4])
		{
			MSAttribute = MSAttribute + "&TaskNum_Thr=" + CurrentTask_Thr.length;
			for(var i = 0; i < CurrentTask_Thr.length; i++)
			{
				MSAttribute = MSAttribute + "&Task_4_" + i + "=" + CurrentTask_Thr[i];
				MSAttribute = MSAttribute + "&Task_SetNum_4_" + i + "=" + MusclePrescriptionAttribute[4][i][10];
			}
		}
		else
		{
			MSAttribute = MSAttribute + "&TaskNum_Thr=" + 0;
		}
		if(IsWeekAbled[5])
		{
			MSAttribute = MSAttribute + "&TaskNum_Fri=" + CurrentTask_Fri.length;
			for(var i = 0; i < CurrentTask_Fri.length; i++)
			{
				MSAttribute = MSAttribute + "&Task_5_" + i + "=" + CurrentTask_Fri[i];
				MSAttribute = MSAttribute + "&Task_SetNum_5_" + i + "=" + MusclePrescriptionAttribute[5][i][10];
			}
		}
		else
		{
			MSAttribute = MSAttribute + "&TaskNum_Fri=" + 0;
		}
		if(IsWeekAbled[6])
		{
			MSAttribute = MSAttribute + "&TaskNum_Sat=" + CurrentTask_Sat.length;
			for(var i = 0; i < CurrentTask_Sat.length; i++)
			{
				MSAttribute = MSAttribute + "&Task_6_" + i + "=" + CurrentTask_Sat[i];
				MSAttribute = MSAttribute + "&Task_SetNum_6_" + i + "=" + MusclePrescriptionAttribute[6][i][10];
			}
		}
		else
		{
			MSAttribute = MSAttribute + "&TaskNum_Sat=" + 0;
		}
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("div_EmailContent").innerHTML = xmlhttp.responseText;
			document.getElementById("button_Send").disabled = false;
			document.getElementById("input_Date_Year").setAttribute("value", Date_Year);
			document.getElementById("input_Date_Month").setAttribute("value", Date_Month);
			document.getElementById("input_Date_Day").setAttribute("value", Date_Day);
			document.getElementById("input_Stage").setAttribute("value", Stage);
			if(MailItem[0] != 0)
			{
				document.getElementById("input_MaxSpeed").setAttribute("value", MaxSpeed);
				document.getElementById("input_Treadmill_MaxWork").setAttribute("value", TreadmillMaxWork);
				document.getElementById("input_95Time").setAttribute("value", FailureTime95);
				document.getElementById("input_90Time").setAttribute("value", FailureTime90);
				document.getElementById("input_85Time").setAttribute("value", FailureTime85);
				document.getElementById("input_80Time").setAttribute("value", FailureTime80);
				document.getElementById("input_Treadmill_LimitSpeed").setAttribute("value", TreadmillLimitSpeed);
				document.getElementById("input_TM_R2").setAttribute("value", TreadMillMaxR);
				CaculateTreadmillSpeed();
			}
			if(MailItem[1] != 0)
			{
				document.getElementById("input_200Time").setAttribute("value", FailureTime200);
				document.getElementById("input_400Time").setAttribute("value", FailureTime400);
				document.getElementById("input_800Time").setAttribute("value", FailureTime800);
				document.getElementById("input_1200Time").setAttribute("value", FailureTime1200);
				document.getElementById("input_200Speed").setAttribute("value", (200 / document.getElementById("input_200Time").value * 3600 / 1000).toFixed(1));
				document.getElementById("input_400Speed").setAttribute("value", (400 / document.getElementById("input_400Time").value * 3600 / 1000).toFixed(1));
				document.getElementById("input_800Speed").setAttribute("value", (800 / document.getElementById("input_800Time").value * 3600 / 1000).toFixed(1));
				document.getElementById("input_1200Speed").setAttribute("value", (1200 / document.getElementById("input_1200Time").value * 3600 / 1000).toFixed(1));
				document.getElementById("input_Track_LimitSpeed").setAttribute("value", TrackLimitSpeed);
				document.getElementById("input_Track_MaxWork").setAttribute("value", TrackMaxWork);
				document.getElementById("input_TR_R2").setAttribute("value", TrackMaxR);
			}
			if(MailItem[2] != 0)
			{
				document.getElementById("input_SP_50Time").setAttribute("value", SprintTime50);
				document.getElementById("input_SP_60Time").setAttribute("value", SprintTime60);
				document.getElementById("input_SP_70Time").setAttribute("value", SprintTime70);
				document.getElementById("input_SP_80Time").setAttribute("value", SprintTime80);
				document.getElementById("input_SP_90Time").setAttribute("value", SprintTime90);
				document.getElementById("input_SP_100Time").setAttribute("value", SprintTime100);
				CaculateSprintSpeed();
				
			}
			if(MailItem[3] != 0)
			{
				if(TreadmillFactor == "T_FRate")
				{
					document.getElementById("select_TM_Factor").setAttribute("value", "訓練-力竭比例");
				}
				else if(TreadmillFactor == "T_RRate")
				{
					document.getElementById("select_TM_Factor").setAttribute("value", "訓練-休息比例");
				}
				else if(TreadmillFactor == "TurnNum")
				{
					document.getElementById("select_TM_Factor").setAttribute("value", "趟數");
				}
				TreadmillPrescriptionAttribute();
				TreadmillInitialPrescription();
			}
			if(MailItem[4] != 0)
			{
				if(TrackCurrentFactor == "T_RRate")
				{
					document.getElementById("select_TR_Factor").setAttribute("value", "訓練-休息比例");
				}
				else if(TrackCurrentFactor == "TurnNum")
				{
					document.getElementById("select_TR_Factor").setAttribute("value", "趟數");
				}
				TrackPrescriptionAttribute();
				TrackInitialPrescription();
			}
			if(MailItem[5] != 0)
			{
				SprintPrescriptionAttribute();
				SprintInitialPrescription();
			}
			if(MailItem[6] != 0)
			{
				MarathonResetTurnNum(MailItem[6]);
			}
			if(MailItem[7] != 0)
			{
				for(var week = 0; week < 7; week++)//week
				{
					for(var j = 0; j < MusclePrescriptionAttribute[week].length; j++)//taskId
					{
						if(MusclePrescriptionAttribute[week][j][0] > 0)
						{
							//1RM table
							ClearMusclePointer();
							document.getElementById("input_MS_100RM_Weight_" + week + "_" + j).setAttribute("value", (((MusclePrescriptionAttribute[week][j][1] / 30) + 1) * MusclePrescriptionAttribute[week][j][0]).toFixed(2));
							//document.getElementById("input_MS_100RM_Times_" + week + "_" + j).setAttribute("value", MusclePrescriptionAttribute[week][j][1]);
							for(var k = 1; k <=6; k++)//percent of 1RM
							{
								document.getElementById("input_MS_" + (100 - (5 * k)) + "RM_Weight_" + week + "_" + j).setAttribute("value", ((((MusclePrescriptionAttribute[week][j][1] / 30) + 1) * MusclePrescriptionAttribute[week][j][0]) * (100 - (5 * k)) / 100).toFixed(2));
								document.getElementById("input_MS_" + (100 - (5 * k)) + "RM_Times_" + week + "_" + j).setAttribute("value", MusclePrescriptionAttribute[week][j][k+1]);
							}
							switch(week)
							{
							case 0: 
								TaskList = CurrentTask_Sun;
								break;
							case 1: 
								TaskList = CurrentTask_Mon;
								break;
							case 2: 
								TaskList = CurrentTask_Tue;
								break;
							case 3: 
								TaskList = CurrentTask_Wen;
								break;
							case 4: 
								TaskList = CurrentTask_Thr;
								break;
							case 5: 
								TaskList = CurrentTask_Fri;
								break;
							case 6: 
								TaskList = CurrentTask_Sat;
								break;
							}
							SetMuscleShowed(TaskList[j], 1);
							var MSList = "";
							for(var l = 0; l < 74; l++)
							{
								if(MusclePointer[l])
								{
									MSList = MSList + MuscleIndexNameMapping(l) + "  ";
								}
							}
							document.getElementById("input_MuscelGroup_" + week + "_" + j).setAttribute("value", MSList);
							document.getElementById("input_MuscelGroup_" + week + "_" + j).value = MSList;
							
							
							//PrescriptionTable
							for(var k = 0; k < MusclePrescriptionAttribute[week][j][10]; k++)
							{
								document.getElementById("input_MS_TrainingMode_" + week + "_" + j + "_" + k).setAttribute("value", MusclePrescriptionAttribute[week][j][8][k][7]);
								document.getElementById("input_MS_ActionTimeRate_" + week + "_" + j + "_" + k).setAttribute("value", MusclePrescriptionAttribute[week][j][8][k][0]);
								document.getElementById("input_MS_RelaxTimeRate_" + week + "_" + j + "_" + k).setAttribute("value", MusclePrescriptionAttribute[week][j][8][k][1]);
								document.getElementById("input_MS_StrongPercent_" + week + "_" + j + "_" + k).setAttribute("value", MusclePrescriptionAttribute[week][j][8][k][2]);
								document.getElementById("input_MS_NumOfSet_" + week + "_" + j + "_" + k).setAttribute("value", MusclePrescriptionAttribute[week][j][8][k][3]);
								document.getElementById("input_MS_RepeatTime_" + week + "_" + j + "_" + k).setAttribute("value", MusclePrescriptionAttribute[week][j][8][k][4]);
								document.getElementById("input_MS_ActionTime_" + week + "_" + j + "_" + k).setAttribute("value", MusclePrescriptionAttribute[week][j][8][k][5]);
								document.getElementById("input_MS_RelaxTime_Set_" + week + "_" + j + "_" + k).setAttribute("value", MusclePrescriptionAttribute[week][j][8][k][6]);
								document.getElementById("input_MS_SumOfTraining_" + week + "_" + j + "_" + k).setAttribute("value", MusclePrescriptionAttribute[week][j][8][k][8]);
								document.getElementById("input_MS_RelaxTime_Time_" + week + "_" + j + "_" + k).setAttribute("value", (MusclePrescriptionAttribute[week][j][8][k][5] / (MusclePrescriptionAttribute[week][j][8][k][0] / MusclePrescriptionAttribute[week][j][8][k][1])).toFixed(0));
								document.getElementById("input_MS_SetTime_" + week + "_" + j + "_" + k).setAttribute("value", ((((document.getElementById("input_MS_RelaxTime_Time_" + week + "_" + j + "_" + k).value)*1 + 1*MusclePrescriptionAttribute[week][j][8][k][5]) * MusclePrescriptionAttribute[week][j][8][k][4] * MusclePrescriptionAttribute[week][j][8][k][3]) + (MusclePrescriptionAttribute[week][j][8][k][3] * MusclePrescriptionAttribute[week][j][8][k][6])).toFixed(0));
								document.getElementById("input_MS_SumOfWeight_" + week + "_" + j + "_" + k).setAttribute("value", ((((MusclePrescriptionAttribute[week][j][1] / 30) + 1) * MusclePrescriptionAttribute[week][j][0]) * (MusclePrescriptionAttribute[week][j][8][k][2] / 100) * MusclePrescriptionAttribute[week][j][8][k][3] * MusclePrescriptionAttribute[week][j][8][k][4]).toFixed(2));
							}
						}
					}
				}
			}
			if(MailItem[8] != 0)
			{
				document.getElementById("input_Pool100Time").setAttribute("value", PoolFailureTime100);
				document.getElementById("input_Pool200Time").setAttribute("value", PoolFailureTime200);
				document.getElementById("input_Pool400Time").setAttribute("value", PoolFailureTime400);
				document.getElementById("input_Pool800Time").setAttribute("value", PoolFailureTime800);
				document.getElementById("input_Pool100Speed").setAttribute("value", (100 / document.getElementById("input_Pool100Time").value).toFixed(1));
				document.getElementById("input_Pool200Speed").setAttribute("value", (200 / document.getElementById("input_Pool200Time").value).toFixed(1));
				document.getElementById("input_Pool400Speed").setAttribute("value", (400 / document.getElementById("input_Pool400Time").value).toFixed(1));
				document.getElementById("input_Pool800Speed").setAttribute("value", (800 / document.getElementById("input_Pool800Time").value).toFixed(1));
				document.getElementById("input_Pool_LimitSpeed").setAttribute("value", PoolLimitSpeed);
				document.getElementById("input_Pool_MaxWork").setAttribute("value", PoolMaxWork);
				document.getElementById("input_PO_R2").setAttribute("value", PoolMaxR);
			}
			if(MailItem[9] != 0)
			{
				if(PoolCurrentFactor == "T_RRate")
				{
					document.getElementById("select_PO_Factor").setAttribute("value", "訓練-休息比例");
				}
				else if(PoolCurrentFactor == "TurnNum")
				{
					document.getElementById("select_PO_Factor").setAttribute("value", "趟數");
				}
				PoolPrescriptionAttribute();
				PoolInitialPrescription();
			}
			if(MailItem[10] != 0)
			{
				document.getElementById("input_SS_25Time").setAttribute("value", SwimSprintTime25);
				document.getElementById("input_SS_30Time").setAttribute("value", SwimSprintTime30);
				document.getElementById("input_SS_35Time").setAttribute("value", SwimSprintTime35);
				document.getElementById("input_SS_40Time").setAttribute("value", SwimSprintTime40);
				document.getElementById("input_SS_45Time").setAttribute("value", SwimSprintTime45);
				document.getElementById("input_SS_50Time").setAttribute("value", SwimSprintTime50);
				CaculateSwimSprintSpeed();
				
			}
			if(MailItem[11] != 0)
			{
				SwimSprintPrescriptionAttribute();
				SwimSprintInitialPrescription();
			}
			if(MailItem[12] != 0)
			{
				SwimMarathonResetTurnNum(MailItem[12]);
			}
			if(MailItem[13] != 0)
			{
				document.getElementById("input_BM_MaxSpeed").setAttribute("value", BickmillMaxSpeed);
				document.getElementById("input_Bickmill_MaxWork").setAttribute("value", BickmillMaxWork);
				document.getElementById("input_BM_95Time").setAttribute("value", BickmillFailureTime95);
				document.getElementById("input_BM_90Time").setAttribute("value", BickmillFailureTime90);
				document.getElementById("input_BM_85Time").setAttribute("value", BickmillFailureTime85);
				document.getElementById("input_BM_80Time").setAttribute("value", BickmillFailureTime80);
				document.getElementById("input_Bickmill_LimitSpeed").setAttribute("value", BickmillLimitSpeed);
				document.getElementById("input_BM_R2").setAttribute("value", BickMillMaxR);
				CaculateBickmillSpeed();
			}
			if(MailItem[14] != 0)
			{
				if(BickmillFactor == "T_FRate")
				{
					document.getElementById("select_BM_Factor").setAttribute("value", "訓練-力竭比例");
				}
				else if(BickmillFactor == "T_RRate")
				{
					document.getElementById("select_BM_Factor").setAttribute("value", "訓練-休息比例");
				}
				else if(BickmillFactor == "TurnNum")
				{
					document.getElementById("select_BM_Factor").setAttribute("value", "趟數");
				}
				BickmillPrescriptionAttribute();
				BickmillInitialPrescription();
			}
			if(MailItem[15] != 0)
			{
				for(var i = 0; i < 21; i++)
				{
					document.getElementById("input_BS_"+ i + "Speed").setAttribute("value", BickSprintSpeed[i]);
				}
				CaculateBickSprintSpeed();
			}
			if(MailItem[16] != 0)
			{
				BickSprintPrescriptionAttribute();
				BickSprintInitialPrescription();
			}
			if(MailItem[17] != 0)
			{
				BickMarathonResetTurnNum(MailItem[17]);
			}
		}
	}
	/*xmlhttp.open("GET","MailPreview.php?TreadmillTest=" + MailItem[0] +
									"&TrackTest=" + MailItem[1] + 
									"&SprintTest=" + MailItem[2] + 
									"&TreadmillPrescription=" + MailItem[3] +
									"&TrackPrescription=" + MailItem[4] +
									"&SprintPrescription=" + MailItem[5] +
									"&MarathonPrescription=" + MailItem[6] + 
									"&MusclePrescription=" + MailItem[7],true);*/
	/*xmlhttp.open("POST","MailPreview.php?TreadmillTest=" + MailItem[0] +
									"&TrackTest=" + MailItem[1] + 
									"&SprintTest=" + MailItem[2] + 
									"&TreadmillPrescription=" + MailItem[3] +
									"&TrackPrescription=" + MailItem[4] +
									"&SprintPrescription=" + MailItem[5] +
									"&MarathonPrescription=" + MailItem[6] + 
									"&MusclePrescription=" + MailItem[7],true);*/
	xmlhttp.open("POST","MailPreview.php", true);
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlhttp.send(MainAttribute+SPAttribute+MSAttribute);
}

function SendEmail()
{
	var MailAddress = document.getElementById("input_Email").value;
	var MailContent = document.getElementById("div_EmailContent").innerHTML;
	
	if(MailAddress == "")
	{
		alert("送出前請先填入E-mail");
	}
	else
	{
		//for test
		//alert("第一次進來");
		var xmlhttp;
		var body = "Address=" + MailAddress + "&Content=" + MailContent;
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
				alert(xmlhttp.responseText);
			}
		}
		/*xmlhttp.open("POST","SendMail.php?Address=" + MailAddress +
										"&Content=" + MailContent,true);
		xmlhttp.send();*/
		
		xmlhttp.open("POST","SendMail.php", true);//?Address=" + MailAddress + "&Content=" + MailContent,true);
		//if( xmlhttp.status == 200)
		//{
			//alert("打開XMLHTTP");
			xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			//alert("設定HEADER");
			xmlhttp.send(body);
		//}
		//else
		//{
		//alert(xmlhttp.statusText);
		//}
		//xmlhttp.send();
	}
}

function MailSelectAll()
{
	for(var i = 0; i <= 7; i++)
	{
		document.getElementById("check_Prescription_" + i).checked = true;
		SetSelected(i);
	}
}
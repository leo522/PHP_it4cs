var ParentPart_Sun = new Array();
var ParentPart_Mon = new Array();
var ParentPart_Tue = new Array();
var ParentPart_Wen = new Array();
var ParentPart_Thr = new Array();
var ParentPart_Fri = new Array();
var ParentPart_Sat = new Array();
var CurrentTask_Sun = new Array();
var CurrentTask_Mon = new Array();
var CurrentTask_Tue = new Array();
var CurrentTask_Wen = new Array();
var CurrentTask_Thr = new Array();
var CurrentTask_Fri = new Array();
var CurrentTask_Sat = new Array();
var IsWeekAbled = new Array();
var MuscleIsInitial = false;
var MusclePointer = new Array(74);
var MuscleTotT = 0;


var MusclePrescriptionAttribute = new Array(7);
//MusclePrescriptionAttribute[week][taskID][task_attribute][sets][set_attribute]
/*task_attribute
0: Weight
1: RepeatTimes
2: FailTimes95
3: FailTimes90
4: FailTimes85
5: FailTimes80
6: FailTimes75
7: FailTimes70
8: SetsNumArray
9: TrainingOfAction
10: SetsNum
=======================
set_attribute
0: ActionTimeRate
1: RelaxTimeRate
2: StrongPercent
3: NumOfSet
4: RepeatTime
5: ActionTime
6: RelaxTime_Set
7: Mode
8: SumOfTraining
*/

function MuscleInitial()
{
	ParentPart_Sun[0] = new Array();
	ParentPart_Mon[0] = new Array();
	ParentPart_Tue[0] = new Array();
	ParentPart_Wen[0] = new Array();
	ParentPart_Thr[0] = new Array();
	ParentPart_Fri[0] = new Array();
	ParentPart_Sat[0] = new Array();
	CurrentTask_Sun[0] = "";
	CurrentTask_Mon[0] = "";
	CurrentTask_Tue[0] = "";
	CurrentTask_Wen[0] = "";
	CurrentTask_Thr[0] = "";
	CurrentTask_Fri[0] = "";
	CurrentTask_Sat[0] = "";
	ParentPart_Sun[0][0] = "初始頁";
	ParentPart_Mon[0][0] = "初始頁";
	ParentPart_Tue[0][0] = "初始頁";
	ParentPart_Wen[0][0] = "初始頁";
	ParentPart_Thr[0][0] = "初始頁";
	ParentPart_Fri[0][0] = "初始頁";
	ParentPart_Sat[0][0] = "初始頁";
	MuscleIsInitial = true;
	for(var i = 0; i < 7; i++)
	{
		IsWeekAbled[i] = false;
		MusclePrescriptionAttribute[i] = new Array();
		MusclePrescriptionAttribute[i][0] = new Array();
		MusclePrescriptionAttribute[i][0][8] = new Array();
		for(var j = 0; j < 8; j++)
		{
			MusclePrescriptionAttribute[i][0][j] = 0;
		}
		MusclePrescriptionAttribute[i][0][9] = 0;
		MusclePrescriptionAttribute[i][0][10] = 1;
	}
	for(var i = 0; i < 74; i++)
	{
		MusclePointer[i] = 0;
	}
}

function MuscleResume(week)
{
	var TaskNum;
	switch(week)
	{
	case 0:
		TaskNum = ParentPart_Sun.length;
		break;
	case 1:
		TaskNum = ParentPart_Mon.length;
		break;	
	case 2:
		TaskNum = ParentPart_Tue.length;
		break;	
	case 3:
		TaskNum = ParentPart_Wen.length;
		break;	
	case 4:
		TaskNum = ParentPart_Thr.length;
		break;	
	case 5:
		TaskNum = ParentPart_Fri.length;
		break;	
	case 6:
		TaskNum = ParentPart_Sat.length;
		break;	
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
			document.getElementById("div_TaskList"+week).innerHTML = "";
			document.getElementById("div_TaskList"+week).innerHTML+=xmlhttp.responseText;
			document.getElementById("check_Week_" + week).checked = IsWeekAbled[week];
			for(var i = 0; i < TaskNum; i++)
			{
				document.getElementById("select_WeekDay" + week + "_" + i).disabled = !IsWeekAbled[week];				
				ResumeTask(week, i);
			}
			week++;
			if(week < 7)
			{
				MuscleResume(week);
			}
		}
	 }
	xmlhttp.open("GET","Muscle/ReDrawTask.php?week=" + week + "&taskNum=" + TaskNum,true);
	xmlhttp.send();
}

function EnableScheduale(week)
{
	switch(week)
	{
		case 0:
			for(var i = 0; i < ParentPart_Sun.length; i++)
			{
				document.getElementById("select_WeekDay0_" + i).disabled = !document.getElementById("check_Week_0").checked;
			}
			IsWeekAbled[0] = document.getElementById("check_Week_0").checked;
			break;
			
		case 1:
			for(var i = 0; i < ParentPart_Mon.length; i++)
			{
				document.getElementById("select_WeekDay1_" + i).disabled = !document.getElementById("check_Week_1").checked;
			}
			IsWeekAbled[1] = document.getElementById("check_Week_1").checked;
			break;
			
		case 2:
			for(var i = 0; i < ParentPart_Tue.length; i++)
			{
				document.getElementById("select_WeekDay2_" + i).disabled = !document.getElementById("check_Week_2").checked;
			}
			IsWeekAbled[2] = document.getElementById("check_Week_2").checked;
			break;
		
		case 3:
			for(var i = 0; i < ParentPart_Wen.length; i++)
			{
				document.getElementById("select_WeekDay3_" + i).disabled = !document.getElementById("check_Week_3").checked;
			}
			IsWeekAbled[3] = document.getElementById("check_Week_3").checked;
			break;
		
		case 4:
			for(var i = 0; i < ParentPart_Thr.length; i++)
			{
				document.getElementById("select_WeekDay4_" + i).disabled = !document.getElementById("check_Week_4").checked;
			}
			IsWeekAbled[4] = document.getElementById("check_Week_4").checked;
			break;
			
		case 5:
			for(var i = 0; i < ParentPart_Fri.length; i++)
			{
				document.getElementById("select_WeekDay5_" + i).disabled = !document.getElementById("check_Week_5").checked;
			}
			IsWeekAbled[5] = document.getElementById("check_Week_5").checked;
			break;
			
		case 6:
			for(var i = 0; i < ParentPart_Sat.length; i++)
			{
				document.getElementById("select_WeekDay6_" + i).disabled = !document.getElementById("check_Week_6").checked;
			}
			IsWeekAbled[6] = document.getElementById("check_Week_6").checked;
			break;
	}
}

function SetMusclePart(value, week, taskNum)
{
	var LastPageFlag = false;
	if(value == "回上層選單")
	{
		switch(week)
		{
		case 0:
			value = ParentPart_Sun[taskNum][ParentPart_Sun[taskNum].length - 2];
			CurrentTask_Sun[taskNum] = "";
			ParentPart_Sun[taskNum].pop();
			break;
		case 1:
			value = ParentPart_Mon[taskNum][ParentPart_Mon[taskNum].length - 2];
			CurrentTask_Mon[taskNum] = "";
			ParentPart_Mon[taskNum].pop();
			break;
		case 2:
			value = ParentPart_Tue[taskNum][ParentPart_Tue[taskNum].length - 2];
			CurrentTask_Tue[taskNum] = "";
			ParentPart_Tue[taskNum].pop();
			break;
		case 3:
			value = ParentPart_Wen[taskNum][ParentPart_Wen[taskNum].length - 2];
			CurrentTask_Wen[taskNum] = "";
			ParentPart_Wen[taskNum].pop();
			break;
		case 4:
			value = ParentPart_Thr[taskNum][ParentPart_Thr[taskNum].length - 2];
			CurrentTask_Thr[taskNum] = "";
			ParentPart_Thr[taskNum].pop();
			break;
		case 5:
			value = ParentPart_Fri[taskNum][ParentPart_Fri[taskNum].length - 2];
			CurrentTask_Fri[taskNum] = "";
			ParentPart_Fri[taskNum].pop();
			break;
		case 6:
			value = ParentPart_Sat[taskNum][ParentPart_Sat[taskNum].length - 2];
			CurrentTask_Sat[taskNum] = "";
			ParentPart_Sat[taskNum].pop();
			break;
		}
		LastPageFlag = true;
	}
	
	if(!(value == "選擇動作" ||
			value == "選擇部位" ||
			value == "選擇半身" ||
			value == "抓舉" ||
			value == "上搏" ||
			value == "提挺" ||
			value == "推舉" ||
			value == "休息" ||
			value == "水平胸前推舉槓鈴" ||
			value == "上傾胸前推舉槓鈴" ||
			value == "仰臥胸前推舉啞鈴" ||
			value == "上傾胸前推舉啞鈴" ||
			value == "仰臥胸前推舉 (史密斯訓練器)" ||
			value == "坐姿胸前推舉 (訓練器)" ||
			value == "助力式撐體 (訓練器)" ||
			value == "坐姿闊背肌下拉 (訓練器)" ||
			value == "俯身槓鈴划船" ||
			value == "單臂啞鈴划船" ||
			value == "低拉滑輪坐姿划船 (訓練器)" ||
			value == "坐姿划船 (訓練器)" ||
			value == "肩上推舉 (訓練器)" ||
			value == "坐姿槓鈴肩上推舉" ||
			value == "坐姿啞鈴肩上推舉" ||
			value == "直立划船" ||
			value == "前跨蹲" ||
			value == "背跨蹲" ||
			value == "斜背式跨蹲" ||
			value == "硬舉" ||
			value == "斜躺式推蹬" ||
			value == "水平式推蹬" ||
			value == "登階" ||
			value == "前跨步下蹲" ||
			value == "蝴蝶訓練器" ||
			value == "仰臥啞鈴飛鳥" ||
			value == "上傾啞鈴飛鳥" ||
			value == "仰臥槓鈴過頭上拉" ||
			value == "肩前平舉" ||
			value == "肩側平舉" ||
			value == "肩側平舉 (訓練器)" ||
			value == "俯身肩平舉" ||
			value == "槓鈴聳肩" ||
			value == "槓鈴二頭肌彎舉" ||
			value == "啞鈴二頭肌彎舉" ||
			value == "錘式彎舉" ||
			value == "低拉滑輪二頭肌彎舉" ||
			value == "二頭肌彎舉 (訓練器)" ||
			value == "仰臥槓鈴三頭肌伸展" ||
			value == "坐姿過頭槓鈴三頭肌伸展" ||
			value == "三頭肌下拉 (訓練器)" ||
			value == "直腿硬舉" ||
			value == "早安" ||
			value == "伸膝" ||
			value == "俯臥屈腿" ||
			value == "坐式屈腿" ||
			value == "坐式舉踵" ||
			value == "站式舉踵" ||
			value == "腕彎舉" ||
			value == "腕伸展"
			)) 
	{
		if(!LastPageFlag)
		{
			switch(week)
			{
			case 0:
				ParentPart_Sun[taskNum].push(value);
				break;
			case 1:
				ParentPart_Mon[taskNum].push(value);
				break;
			case 2:
				ParentPart_Tue[taskNum].push(value);
				break;
			case 3:
				ParentPart_Wen[taskNum].push(value);
				break;
			case 4:
				ParentPart_Thr[taskNum].push(value);
				break;
			case 5:
				ParentPart_Fri[taskNum].push(value);
				break;
			case 6:
				ParentPart_Sat[taskNum].push(value);
				break;
			}
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
				document.getElementById("select_WeekDay"+week+"_"+ taskNum).innerHTML=xmlhttp.responseText;
			}
		}
		switch(week)
		{
		case 0:
			xmlhttp.open("GET","Muscle/MusclePart.php?value=" + encodeURIComponent(value) + "&parent=" + encodeURIComponent(ParentPart_Sun[taskNum][1]),true);
			xmlhttp.send();
			break;
		case 1:
			xmlhttp.open("GET","Muscle/MusclePart.php?value=" + encodeURIComponent(value) + "&parent=" + encodeURIComponent(ParentPart_Mon[taskNum][1]),true);
			xmlhttp.send();
			break;
		case 2:
			xmlhttp.open("GET","Muscle/MusclePart.php?value=" + encodeURIComponent(value) + "&parent=" + encodeURIComponent(ParentPart_Tue[taskNum][1]),true);
			xmlhttp.send();
			break;
		case 3:
			xmlhttp.open("GET","Muscle/MusclePart.php?value=" + encodeURIComponent(value) + "&parent=" + encodeURIComponent(ParentPart_Wen[taskNum][1]),true);
			xmlhttp.send();
			break;
		case 4:
			xmlhttp.open("GET","Muscle/MusclePart.php?value=" + encodeURIComponent(value) + "&parent=" + encodeURIComponent(ParentPart_Thr[taskNum][1]),true);
			xmlhttp.send();
			break;
		case 5:
			xmlhttp.open("GET","Muscle/MusclePart.php?value=" + encodeURIComponent(value) + "&parent=" + encodeURIComponent(ParentPart_Fri[taskNum][1]),true);
			xmlhttp.send();
			break;
		case 6:
			xmlhttp.open("GET","Muscle/MusclePart.php?value=" + encodeURIComponent(value) + "&parent=" + encodeURIComponent(ParentPart_Sat[taskNum][1]),true);
			xmlhttp.send();
			break;
		} 
	}
	else if(value == "選擇動作" ||
			value == "選擇部位" ||
			value == "選擇半身" ||
			value == "休息")
	{
		switch(week)
		{
		case 0:
			CurrentTask_Sun[taskNum] = "";
			break;
		case 1:
			CurrentTask_Mon[taskNum] = "";
			break;
		case 2:
			CurrentTask_Tue[taskNum] = "";
			break;
		case 3:
			CurrentTask_Wen[taskNum] = "";
			break;
		case 4:
			CurrentTask_Thr[taskNum] = "";
			break;
		case 5:
			CurrentTask_Fri[taskNum] = "";
			break;
		case 6:
			CurrentTask_Sat[taskNum] = "";
			break;
		}
	}
	else
	{
		switch(week)
		{
		case 0:
			CurrentTask_Sun[taskNum] = value;
			//document.getElementById("select_ShowDay").value = "星期日";
			break;
		case 1:
			CurrentTask_Mon[taskNum] = value;
			//document.getElementById("select_ShowDay").value = "星期一";
			break;
		case 2:
			CurrentTask_Tue[taskNum] = value;
			//document.getElementById("select_ShowDay").value = "星期二";
			break;
		case 3:
			CurrentTask_Wen[taskNum] = value;
			//document.getElementById("select_ShowDay").value = "星期三";
			break;
		case 4:
			CurrentTask_Thr[taskNum] = value;
			//document.getElementById("select_ShowDay").value = "星期四";
			break;
		case 5:
			CurrentTask_Fri[taskNum] = value;
			//document.getElementById("select_ShowDay").value = "星期五";
			break;
		case 6:
			CurrentTask_Sat[taskNum] = value;
			//document.getElementById("select_ShowDay").value = "星期六";
			break;
		}
		ShowOneTaskMuscle(value, 1);
		//SetMuscleShowed(value, 2);
	}
}

function AddTask(week)
{
	var TaskNum;
	switch(week)
	{
	case 0:
		CurrentTask_Sun.push("");
		TaskNum = ParentPart_Sun.length;
		ParentPart_Sun[TaskNum] = new Array();
		ParentPart_Sun[TaskNum].push("初始頁")
		TaskNum = ParentPart_Sun.length;
		break;
	case 1:
		CurrentTask_Mon.push("");
		TaskNum = ParentPart_Mon.length;
		ParentPart_Mon[TaskNum] = new Array();
		ParentPart_Mon[TaskNum].push("初始頁")
		TaskNum = ParentPart_Mon.length;
		break;
	case 2:
		CurrentTask_Tue.push("");
		TaskNum = ParentPart_Tue.length;
		ParentPart_Tue[TaskNum] = new Array();
		ParentPart_Tue[TaskNum].push("初始頁")
		TaskNum = ParentPart_Tue.length;
		break;
	case 3:
		CurrentTask_Wen.push("");
		TaskNum = ParentPart_Wen.length;
		ParentPart_Wen[TaskNum] = new Array();
		ParentPart_Wen[TaskNum].push("初始頁")
		TaskNum = ParentPart_Wen.length;
		break;
	case 4:
		CurrentTask_Thr.push("");
		TaskNum = ParentPart_Thr.length;
		ParentPart_Thr[TaskNum] = new Array();
		ParentPart_Thr[TaskNum].push("初始頁")
		TaskNum = ParentPart_Thr.length;
		break;
	case 5:
		CurrentTask_Fri.push("");
		TaskNum = ParentPart_Fri.length;
		ParentPart_Fri[TaskNum] = new Array();
		ParentPart_Fri[TaskNum].push("初始頁")
		TaskNum = ParentPart_Fri.length;
		break;
	case 6:
		CurrentTask_Sat.push("");
		TaskNum = ParentPart_Sat.length;
		ParentPart_Sat[TaskNum] = new Array();
		ParentPart_Sat[TaskNum].push("初始頁")
		TaskNum = ParentPart_Sat.length;
		break;
	}
	
	MusclePrescriptionAttribute[week][TaskNum - 1] = new Array();
	MusclePrescriptionAttribute[week][TaskNum - 1][8] = new Array();
	for(var j = 0; j < 8; j++)
	{
		MusclePrescriptionAttribute[week][TaskNum - 1][j] = 0;
	}
	MusclePrescriptionAttribute[week][TaskNum - 1][9] = 0;
	MusclePrescriptionAttribute[week][TaskNum - 1][10] = 1;
	
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
			document.getElementById("div_TaskList"+week).innerHTML+=xmlhttp.responseText;
			document.getElementById("select_WeekDay" + week + "_" + (TaskNum - 1)).disabled = !document.getElementById("check_Week_" + week).checked;
			for(var i = 0; i < TaskNum - 1; i++)
			{
				ResumeTask(week, i);
			}
		}
	 }
	xmlhttp.open("GET","Muscle/AddTask.php?week=" + week + "&taskNum=" + (TaskNum - 1),true);
	xmlhttp.send();
}

function DelTask(week)
{
	var TaskNum;
	switch(week)
	{
	case 0:
		TaskNum = ParentPart_Sun.length;
		if(TaskNum == 1)
		{
			break;
		}
		ParentPart_Sun.pop();	
		CurrentTask_Sun.pop();
		break;
	case 1:
		TaskNum = ParentPart_Mon.length;
		if(TaskNum == 1)
		{
			break;
		}
		ParentPart_Mon.pop();
		CurrentTask_Mon.pop();
		break;
	case 2:
		TaskNum = ParentPart_Tue.length;
		if(TaskNum == 1)
		{
			break;
		}
		ParentPart_Tue.pop();
		CurrentTask_Tue.pop();
		break;
	case 3:
		TaskNum = ParentPart_Wen.length;
		if(TaskNum == 1)
		{
			break;
		}
		ParentPart_Wen.pop();
		CurrentTask_Wen.pop();
		break;
	case 4:
		TaskNum = ParentPart_Thr.length;
		if(TaskNum == 1)
		{
			break;
		}
		ParentPart_Thr.pop();
		CurrentTask_Thr.pop();
		break;
	case 5:
		TaskNum = ParentPart_Fri.length;
		if(TaskNum == 1)
		{
			break;
		}
		ParentPart_Fri.pop();
		CurrentTask_Fri.pop();
		break;
	case 6:
		TaskNum = ParentPart_Sat.length;
		if(TaskNum == 1)
		{
			break;
		}
		ParentPart_Sat.pop();
		CurrentTask_Sat.pop();
		break;
	}
	if(TaskNum > 1)
	{
		MusclePrescriptionAttribute[week].pop();
		TaskNum--;
		document.getElementById("div_TaskList"+week).innerHTML = "";
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
				document.getElementById("div_TaskList"+week).innerHTML+=xmlhttp.responseText;
				for(var i = 0; i < TaskNum; i++)
				{
					document.getElementById("select_WeekDay" + week + "_" + i).disabled = !document.getElementById("check_Week_" + week).checked;				
					ResumeTask(week, i);
				}
			}
		 }
		xmlhttp.open("GET","Muscle/ReDrawTask.php?week=" + week + "&taskNum=" + TaskNum,true);
		xmlhttp.send();
	}
}

function ResumeTask(week, taskNum)
{
	var CTask;
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
			document.getElementById("select_WeekDay"+week+"_"+ taskNum).innerHTML=xmlhttp.responseText;
			
			if(CTask != "")
			{
				document.getElementById("select_WeekDay"+week+"_"+ taskNum).value = CTask;
			}
		}
	}
	switch(week)
	{
	case 0:
		value = ParentPart_Sun[taskNum][ParentPart_Sun[taskNum].length -1];
		CTask = CurrentTask_Sun[taskNum];
		xmlhttp.open("GET","Muscle/MusclePart.php?value=" + encodeURIComponent(value) + "&parent=" + encodeURIComponent(ParentPart_Sun[taskNum][1]),true);
		xmlhttp.send();
		break;
	case 1:
		value = ParentPart_Mon[taskNum][ParentPart_Mon[taskNum].length -1];
		CTask = CurrentTask_Mon[taskNum];
		xmlhttp.open("GET","Muscle/MusclePart.php?value=" + encodeURIComponent(value) + "&parent=" + encodeURIComponent(ParentPart_Mon[taskNum][1]),true);
		xmlhttp.send();
		break;
	case 2:
		value = ParentPart_Tue[taskNum][ParentPart_Tue[taskNum].length -1];
		CTask = CurrentTask_Tue[taskNum];
		xmlhttp.open("GET","Muscle/MusclePart.php?value=" + encodeURIComponent(value) + "&parent=" + encodeURIComponent(ParentPart_Tue[taskNum][1]),true);
		xmlhttp.send();
		break;
	case 3:
		value = ParentPart_Wen[taskNum][ParentPart_Wen[taskNum].length -1];
		CTask = CurrentTask_Wen[taskNum];
		xmlhttp.open("GET","Muscle/MusclePart.php?value=" + encodeURIComponent(value) + "&parent=" + encodeURIComponent(ParentPart_Wen[taskNum][1]),true);
		xmlhttp.send();
		break;
	case 4:
		value = ParentPart_Thr[taskNum][ParentPart_Thr[taskNum].length -1];
		CTask = CurrentTask_Thr[taskNum];
		xmlhttp.open("GET","Muscle/MusclePart.php?value=" + encodeURIComponent(value) + "&parent=" + encodeURIComponent(ParentPart_Thr[taskNum][1]),true);
		xmlhttp.send();
		break;
	case 5:
		value = ParentPart_Fri[taskNum][ParentPart_Fri[taskNum].length -1];
		CTask = CurrentTask_Fri[taskNum];
		xmlhttp.open("GET","Muscle/MusclePart.php?value=" + encodeURIComponent(value) + "&parent=" + encodeURIComponent(ParentPart_Fri[taskNum][1]),true);
		xmlhttp.send();
		break;
	case 6:
		value = ParentPart_Sat[taskNum][ParentPart_Sat[taskNum].length -1];
		CTask = CurrentTask_Sat[taskNum];
		xmlhttp.open("GET","Muscle/MusclePart.php?value=" + encodeURIComponent(value) + "&parent=" + encodeURIComponent(ParentPart_Sat[taskNum][1]),true);
		xmlhttp.send();
		break;
	} 
}

function SetMuscleShowed(Action, ShowType)
{
	if( Action == "抓舉" ||
		Action == "上搏" ||
		Action == "推舉")
	{
		MusclePointer[23] = ShowType;	//H169
		MusclePointer[41] = ShowType;	//D172
		MusclePointer[40] = ShowType;	//C172
		MusclePointer[39] = ShowType;	//J171
		MusclePointer[35] = ShowType;	//F171
		MusclePointer[33] = ShowType;	//D171
		MusclePointer[36] = ShowType;	//G171
		MusclePointer[34] = ShowType;	//E171
		MusclePointer[46] = ShowType;	//I172
		MusclePointer[44] = ShowType;	//G172
		MusclePointer[0] = ShowType;	//C163
		MusclePointer[1] = ShowType;	//D163
		MusclePointer[2] = ShowType;	//E163
		MusclePointer[62] = ShowType;	//E181
		MusclePointer[63] = ShowType;	//F181
	}
	else if(Action == "提挺")
	{
		MusclePointer[0] = ShowType;	//C163
		MusclePointer[1] = ShowType;	//D163
		MusclePointer[2] = ShowType;	//E163
		MusclePointer[62] = ShowType;	//E181
		MusclePointer[63] = ShowType;	//F181
	}
	else if(Action == "前跨蹲" ||
			Action == "背跨蹲" ||
			Action == "斜背式跨蹲" ||
			Action == "硬舉" ||
			Action == "斜躺式推蹬" ||
			Action == "水平式推蹬" ||
			Action == "登階")
	{
		MusclePointer[23] = ShowType;	//H169
		MusclePointer[41] = ShowType;	//D172
		MusclePointer[40] = ShowType;	//C172
		MusclePointer[39] = ShowType;	//J171
		MusclePointer[35] = ShowType;	//F171
		MusclePointer[33] = ShowType;	//D171
		MusclePointer[36] = ShowType;	//G171
		MusclePointer[34] = ShowType;	//E171
	}
	else if(Action == "前跨步下蹲")
	{
		MusclePointer[23] = ShowType;	//H169
		MusclePointer[41] = ShowType;	//D172
		MusclePointer[40] = ShowType;	//C172
		MusclePointer[39] = ShowType;	//J171
		MusclePointer[35] = ShowType;	//F171
		MusclePointer[33] = ShowType;	//D171
		MusclePointer[36] = ShowType;	//G171
		MusclePointer[40] = ShowType;	//E171
		MusclePointer[18] = ShowType;	//C169
	}
	else if(Action == "直腿硬舉" ||
			Action == "早安")
	{
		MusclePointer[23] = ShowType;	//H169
		MusclePointer[41] = ShowType;	//D172
		MusclePointer[40] = ShowType;	//C172
		MusclePointer[39] = ShowType;	//J171
		MusclePointer[71] = ShowType;	//F182
	}
	else if(Action == "俯臥屈腿" ||
			Action == "坐式屈腿")
	{
		MusclePointer[41] = ShowType;	//D172
		MusclePointer[40] = ShowType;	//C172
		MusclePointer[39] = ShowType;	//J171
	}
	else if(Action == "坐式舉踵" ||
			Action == "站式舉踵")
	{
		MusclePointer[44] = ShowType;	//G172
		MusclePointer[46] = ShowType;	//I172
	}
	else if(Action == "水平胸前推舉槓鈴" ||
			Action == "上傾胸前推舉槓鈴" ||
			Action == "仰臥胸前推舉 (史密斯訓練器)" ||
			Action == "坐姿胸前推舉 (訓練器)")
	{
		MusclePointer[53] = ShowType;	//C180
		MusclePointer[0] = ShowType;	//C163
		MusclePointer[6] = ShowType;	//I163
	}
	else if(Action == "仰臥胸前推舉啞鈴" ||
			Action == "上傾胸前推舉啞鈴" ||
			Action == "蝴蝶訓練器" ||
			Action == "仰臥啞鈴飛鳥" ||
			Action == "上傾啞鈴飛鳥")
	{
		MusclePointer[53] = ShowType;	//C180
		MusclePointer[0] = ShowType;	//C163
	}
	else if(Action == "助力式撐體 (訓練器)")
	{
		MusclePointer[0] = ShowType;	//C163
		MusclePointer[53] = ShowType;	//C180
		MusclePointer[55] = ShowType;	//E180
		MusclePointer[6] = ShowType;	//I163		
	}
	else if(Action == "坐姿闊背肌下拉 (訓練器)" ||
			Action == "俯身槓鈴划船" ||
			Action == "低拉滑輪坐姿划船 (訓練器)" ||
			Action == "坐姿划船 (訓練器)")
	{
		MusclePointer[70] = ShowType;	//E182
		MusclePointer[69] = ShowType;	//D182
		MusclePointer[62] = ShowType;	//E181
		MusclePointer[65] = ShowType;	//H181
		MusclePointer[2] = ShowType;	//E163
	}
	else if(Action == "單臂啞鈴划船")
	{
		MusclePointer[70] = ShowType;	//E182
		MusclePointer[62] = ShowType;	//E181
		MusclePointer[63] = ShowType;	//F181
		MusclePointer[2] = ShowType;	//E163
		MusclePointer[69] = ShowType;	//D182		
		MusclePointer[68] = ShowType;	//C182
		MusclePointer[4] = ShowType;	//G163
		MusclePointer[3] = ShowType;	//F163		
		MusclePointer[16] = ShowType;	//J164
	}
	else if(Action == "仰臥槓鈴過頭上拉")
	{
		MusclePointer[70] = ShowType;	//E182
		MusclePointer[53] = ShowType;	//C180
		MusclePointer[55] = ShowType;	//E180
		MusclePointer[69] = ShowType;	//D182
		MusclePointer[6] = ShowType;	//I163
	}
	else if(Action == "肩上推舉 (訓練器)" ||
			Action == "坐姿槓鈴肩上推舉" ||
			Action == "坐姿啞鈴肩上推舉")
	{
		MusclePointer[0] = ShowType;	//C163
		MusclePointer[1] = ShowType;	//D163
		MusclePointer[6] = ShowType;	//I163
	}
	else if(Action == "直立划船")
	{
		MusclePointer[0] = ShowType;	//C163
		MusclePointer[1] = ShowType;	//D163
		MusclePointer[2] = ShowType;	//E163
		MusclePointer[63] = ShowType;	//F181
	}
	else if(Action == "肩前平舉" ||
			Action == "肩側平舉" ||
			Action == "肩側平舉 (訓練器)")
	{
		MusclePointer[0] = ShowType;	//C163
		MusclePointer[1] = ShowType;	//D163
		MusclePointer[2] = ShowType;	//E163
	}
	else if(Action == "俯身肩平舉")
	{
		MusclePointer[0] = ShowType;	//C163
		MusclePointer[1] = ShowType;	//D163
		MusclePointer[2] = ShowType;	//E163
		MusclePointer[65] = ShowType;	//H181
		MusclePointer[62] = ShowType;	//E181
		MusclePointer[63] = ShowType;	//F181
		MusclePointer[6] = ShowType;	//I163
	}
	else if(Action == "槓鈴聳肩")
	{
		MusclePointer[64] = ShowType;	//G181
		MusclePointer[65] = ShowType;	//H181
		MusclePointer[62] = ShowType;	//E181
		MusclePointer[63] = ShowType;	//F181
	}
	else if(Action == "槓鈴二頭肌彎舉" ||
			Action == "啞鈴二頭肌彎舉" ||
			Action == "錘式彎舉" ||
			Action == "低拉滑輪二頭肌彎舉" ||
			Action == "二頭肌彎舉 (訓練器)")
	{
		MusclePointer[3] = ShowType;	//F163
		MusclePointer[4] = ShowType;	//G163
		MusclePointer[5] = ShowType;	//H163
	}
	else if(Action == "仰臥槓鈴三頭肌伸展" ||
			Action == "坐姿過頭槓鈴三頭肌伸展" ||
			Action == "三頭肌下拉 (訓練器)")
	{
		MusclePointer[6] = ShowType;	//I163
	}
	else if(Action == "腕彎舉")
	{
		MusclePointer[14] = ShowType;	//H164
		MusclePointer[12] = ShowType;	//F164
		MusclePointer[8] = ShowType;	//K163
	}
	else if(Action == "腕伸展")
	{
		MusclePointer[9] = ShowType;	//E164
		MusclePointer[10] = ShowType;	//C164
		MusclePointer[11] = ShowType;	//D164
	}
	else if(Action == "腹部訓練")
	{
		MusclePointer[56] = ShowType;	//F180
	}
	else if(Action == "伸膝")
	{
		MusclePointer[35] = ShowType;	//F171
		MusclePointer[33] = ShowType;	//D171
		MusclePointer[36] = ShowType;	//G171
		MusclePointer[34] = ShowType;	//E171
	}
}

function DrawMusclePointer()
{
	for(var i = 0; i < 74; i++)
	{
		if(MusclePointer[i] == 1)
		{
			document.getElementById("img_MusclePointer_" + i).hidden = false;
		}
		else
		{
			document.getElementById("img_MusclePointer_" + i).hidden = true;
		}
	}
}

function TaskScanner(week)
{
	ClearMusclePointer();
	
	for(var i = 0; i < 7; i++)
	{
		switch(i)
		{
		case 0:
			var tempLength = CurrentTask_Sun.length;
			for(var j = 0; j < tempLength; j++)
			{
				document.getElementById("img_eye_" + i + "_" + j).src = "Muscle\\eye.jpg";
			}
			break;
		case 1:
			var tempLength = CurrentTask_Mon.length;
			for(var j = 0; j < tempLength; j++)
			{
				document.getElementById("img_eye_" + i + "_" + j).src = "Muscle\\eye.jpg";
			}
			break;
		case 2:
			var tempLength = CurrentTask_Tue.length;
			for(var j = 0; j < tempLength; j++)
			{
				document.getElementById("img_eye_" + i + "_" + j).src = "Muscle\\eye.jpg";
			}
			break;
		case 3:
			var tempLength = CurrentTask_Wen.length;
			for(var j = 0; j < tempLength; j++)
			{
				document.getElementById("img_eye_" + i + "_" + j).src = "Muscle\\eye.jpg";
			}
			break;
		case 4:
			var tempLength = CurrentTask_Thr.length;
			for(var j = 0; j < tempLength; j++)
			{
				document.getElementById("img_eye_" + i + "_" + j).src = "Muscle\\eye.jpg";
			}
			break;
		case 5:
			var tempLength = CurrentTask_Fri.length;
			for(var j = 0; j < tempLength; j++)
			{
				document.getElementById("img_eye_" + i + "_" + j).src = "Muscle\\eye.jpg";
			}
			break;
		case 6:
			var tempLength = CurrentTask_Sat.length;
			for(var j = 0; j < tempLength; j++)
			{
				document.getElementById("img_eye_" + i + "_" + j).src = "Muscle\\eye.jpg";
			}
			break;
		}
	}
	
	var TaskCounter;
	if(week == "星期日")
	{
		TaskCounter = CurrentTask_Sun.length;
		for(var i = 0; i < TaskCounter; i++)
		{
			SetMuscleShowed(CurrentTask_Sun[i], 1);
			document.getElementById("img_eye_" + 0 + "_" + i).src = "Muscle\\eye_viewing.jpg";
		}
	}
	else if(week == "星期一")
	{
		TaskCounter = CurrentTask_Mon.length;
		for(var i = 0; i < TaskCounter; i++)
		{
			SetMuscleShowed(CurrentTask_Mon[i], 1);
			document.getElementById("img_eye_" + 1 + "_" + i).src = "Muscle\\eye_viewing.jpg";
		}
	}
	else if(week == "星期二")
	{
		TaskCounter = CurrentTask_Tue.length;
		for(var i = 0; i < TaskCounter; i++)
		{
			SetMuscleShowed(CurrentTask_Tue[i], 1);
			document.getElementById("img_eye_" + 2 + "_" + i).src = "Muscle\\eye_viewing.jpg";
		}
	}
	else if(week == "星期三")
	{
		TaskCounter = CurrentTask_Wen.length;
		for(var i = 0; i < TaskCounter; i++)
		{
			SetMuscleShowed(CurrentTask_Wen[i], 1);
			document.getElementById("img_eye_" + 3 + "_" + i).src = "Muscle\\eye_viewing.jpg";
		}
	}
	else if(week == "星期四")
	{
		TaskCounter = CurrentTask_Thr.length;
		for(var i = 0; i < TaskCounter; i++)
		{
			SetMuscleShowed(CurrentTask_Thr[i], 1);
			document.getElementById("img_eye_" + 4 + "_" + i).src = "Muscle\\eye_viewing.jpg";
		}
	}
	else if(week == "星期五")
	{
		TaskCounter = CurrentTask_Fri.length;
		for(var i = 0; i < TaskCounter; i++)
		{
			SetMuscleShowed(CurrentTask_Fri[i], 1);
			document.getElementById("img_eye_" + 5 + "_" + i).src = "Muscle\\eye_viewing.jpg";
		}
	}
	else if(week == "星期六")
	{
		TaskCounter = CurrentTask_Sat.length;
		for(var i = 0; i < TaskCounter; i++)
		{
			SetMuscleShowed(CurrentTask_Sat[i], 1);
			document.getElementById("img_eye_" + 6 + "_" + i).src = "Muscle\\eye_viewing.jpg";
		}
	}
	DrawMusclePointer();
}

function ClearMusclePointer()
{
	for(var i = 0; i < 74; i++)
	{
		MusclePointer[i] = 0;
	}
}

function ShowOneTaskMuscle(Action, ShowType)
{
	ClearMusclePointer();
	SetMuscleShowed(Action, ShowType);
	DrawMusclePointer();
}

function MuscleEyeView(taskNum, week, Action, ShowType)
{
	for(var i = 0; i < 7; i++)
	{
		switch(i)
		{
		case 0:
			var tempLength = CurrentTask_Sun.length;
			for(var j = 0; j < tempLength; j++)
			{
				document.getElementById("img_eye_" + i + "_" + j).src = "Muscle\\eye.jpg";
			}
			break;
		case 1:
			var tempLength = CurrentTask_Mon.length;
			for(var j = 0; j < tempLength; j++)
			{
				document.getElementById("img_eye_" + i + "_" + j).src = "Muscle\\eye.jpg";
			}
			break;
		case 2:
			var tempLength = CurrentTask_Tue.length;
			for(var j = 0; j < tempLength; j++)
			{
				document.getElementById("img_eye_" + i + "_" + j).src = "Muscle\\eye.jpg";
			}
			break;
		case 3:
			var tempLength = CurrentTask_Wen.length;
			for(var j = 0; j < tempLength; j++)
			{
				document.getElementById("img_eye_" + i + "_" + j).src = "Muscle\\eye.jpg";
			}
			break;
		case 4:
			var tempLength = CurrentTask_Thr.length;
			for(var j = 0; j < tempLength; j++)
			{
				document.getElementById("img_eye_" + i + "_" + j).src = "Muscle\\eye.jpg";
			}
			break;
		case 5:
			var tempLength = CurrentTask_Fri.length;
			for(var j = 0; j < tempLength; j++)
			{
				document.getElementById("img_eye_" + i + "_" + j).src = "Muscle\\eye.jpg";
			}
			break;
		case 6:
			var tempLength = CurrentTask_Sat.length;
			for(var j = 0; j < tempLength; j++)
			{
				document.getElementById("img_eye_" + i + "_" + j).src = "Muscle\\eye.jpg";
			}
			break;
		}
	}
	document.getElementById("img_eye_" + week + "_" + taskNum).src = "Muscle\\eye_viewing.jpg";
	ShowOneTaskMuscle(Action, ShowType);
}

function MuscleOneRM(week, taskNum)
{
	var CTask;
	switch(week)
	{
	case 0:
		CTask = CurrentTask_Sun[taskNum];
		break;
	case 1:		
		CTask = CurrentTask_Mon[taskNum];
		break;
	case 2:
		CTask = CurrentTask_Tue[taskNum];
		break;
	case 3:
		CTask = CurrentTask_Wen[taskNum];
		break;
	case 4:
		CTask = CurrentTask_Thr[taskNum];
		break;
	case 5:
		CTask = CurrentTask_Fri[taskNum];
		break;
	case 6:
		CTask = CurrentTask_Sat[taskNum];
		break;
	} 
	if(CTask == "")
	{
		alert("請選擇動作");
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
				document.getElementById("input_ActionName").value = CTask;
				document.getElementById("input_Weight").value = MusclePrescriptionAttribute[week][taskNum][0];
				document.getElementById("input_RepeatTimes").value = MusclePrescriptionAttribute[week][taskNum][1];
				ShowOneTaskMuscle(CTask, 1);
				MuscleCalculateMaxPower(week, taskNum);
				for(var i = 0; i < 7; i++)
				{
					document.getElementById("input_WeightPercent"+(100-(i*5))).value = (document.getElementById("input_MaxPower").value * ((100-(i*5)) / 100)).toFixed(2);
					if(i > 0)
					{
						document.getElementById("input_FailTimes" + (100-(i*5))).value = MusclePrescriptionAttribute[week][taskNum][i+1];
					}
				}
				
			}
		}
		xmlhttp.open("GET","Muscle/MuscleOneRM.php?week=" + week + "&taskID=" + taskNum,true);
		xmlhttp.send();
	}
}

function MuscleCalculateMaxPower(week, taskNum)
{
	MusclePrescriptionAttribute[week][taskNum][0] = document.getElementById("input_Weight").value;
	MusclePrescriptionAttribute[week][taskNum][1] = document.getElementById("input_RepeatTimes").value;
	document.getElementById("input_MaxPower").value = (((document.getElementById("input_RepeatTimes").value / 30) + 1) * document.getElementById("input_Weight").value).toFixed(2);
	for(var i = 0; i < 7; i++)
	{
		document.getElementById("input_WeightPercent"+(100-(i*5))).value = (document.getElementById("input_MaxPower").value * ((100-(i*5)) / 100)).toFixed(2);
	}
}

function MuscleSetFaileTime(week, taskNum, FailIndex)
{
	MusclePrescriptionAttribute[week][taskNum][FailIndex+1] = document.getElementById("input_FailTimes" + (100-(FailIndex*5))).value;
}

function MusclePrescription(week, taskNum)
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
			var MaxPower = (((MusclePrescriptionAttribute[week][taskNum][1] / 30) + 1) * MusclePrescriptionAttribute[week][taskNum][0]).toFixed(2);
			for(var i = 0; i < 7; i++)
			{
				document.getElementById("input_WeightPercent"+(100-(i*5))).value = (MaxPower * ((100-(i*5)) / 100)).toFixed(2);
				if(i > 0)
				{
					document.getElementById("input_FailTimes" + (100-(i*5))).value = MusclePrescriptionAttribute[week][taskNum][i+1];
				}
				//var SetsNum = document.getElementById("select_Sets").value;
			}
			MusclePrescriptionTable(week, taskNum);
		}
	}
	xmlhttp.open("GET","Muscle/ResultAndPrescription.php?week=" + week + "&taskID=" + taskNum,true);
	xmlhttp.send();
}

function MuscleSetSetNum(week, taskNum)
{
	MusclePrescriptionAttribute[week][taskNum][10] = document.getElementById("select_Sets").value;
	MusclePrescriptionTable(week, taskNum);
}

function MusclePrescriptionTable(week, taskNum)
{
	var SetsNum = document.getElementById("select_Sets").value = MusclePrescriptionAttribute[week][taskNum][10];
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
			var CurrentSetsNum = MusclePrescriptionAttribute[week][taskNum][8].length;
			if(CurrentSetsNum > SetsNum)
			{
				for(var i = 0; i < (CurrentSetsNum - SetsNum); i++)
				{
					MusclePrescriptionAttribute[week][taskNum][8].pop();
				}
			}
			else if(CurrentSetsNum < SetsNum)
			{
				for(var i = 0; i < (SetsNum - CurrentSetsNum); i++)
				{
					var tempArray = new Array(8);
					tempArray[0] = 3;
					tempArray[1] = 2;
					tempArray[2] = 85;
					tempArray[3] = 2;
					tempArray[4] = 6;
					tempArray[5] = 3;
					tempArray[6] = 300;
					tempArray[7] = "最大肌力模式";
					MusclePrescriptionAttribute[week][taskNum][8].push(tempArray);
				}
			}
			for(var i = 0; i < MusclePrescriptionAttribute[week][taskNum][8].length; i++)
			{
				var RTime = 0;
				document.getElementById("input_ActionTimeRate_" + i).value = MusclePrescriptionAttribute[week][taskNum][8][i][0];
				document.getElementById("input_RelaxTimeRate_" + i).value = MusclePrescriptionAttribute[week][taskNum][8][i][1];
				document.getElementById("input_StrongPercent_" + i).value = MusclePrescriptionAttribute[week][taskNum][8][i][2];
				document.getElementById("input_NumOfSet_" + i).value = MusclePrescriptionAttribute[week][taskNum][8][i][3];
				document.getElementById("input_RepeatTime_" + i).value = MusclePrescriptionAttribute[week][taskNum][8][i][4];
				document.getElementById("input_ActionTime_" + i).value = MusclePrescriptionAttribute[week][taskNum][8][i][5];
				document.getElementById("input_RelaxTime_Set_" + i).value = MusclePrescriptionAttribute[week][taskNum][8][i][6];
				document.getElementById("select_TrainingMode_" + i).value = MusclePrescriptionAttribute[week][taskNum][8][i][7];
				document.getElementById("input_RelaxTime_Time_" + i).value = RTime = (MusclePrescriptionAttribute[week][taskNum][8][i][5] / (MusclePrescriptionAttribute[week][taskNum][8][i][0] / MusclePrescriptionAttribute[week][taskNum][8][i][1])).toFixed(0);
				document.getElementById("input_SetTime_" + i).value = (((RTime*1 + 1*MusclePrescriptionAttribute[week][taskNum][8][i][5]) * MusclePrescriptionAttribute[week][taskNum][8][i][4] * MusclePrescriptionAttribute[week][taskNum][8][i][3]) + (MusclePrescriptionAttribute[week][taskNum][8][i][3] * MusclePrescriptionAttribute[week][taskNum][8][i][6])).toFixed(0);
				document.getElementById("input_SumOfWeight_" + i).value = (document.getElementById("input_WeightPercent100").value * (MusclePrescriptionAttribute[week][taskNum][8][i][2] / 100) * MusclePrescriptionAttribute[week][taskNum][8][i][3] * MusclePrescriptionAttribute[week][taskNum][8][i][4]).toFixed(2);
				
				var FileTime = 0;
				if(MusclePrescriptionAttribute[week][taskNum][8][i][2] <= 70)
				{
					FileTime = document.getElementById("input_FailTimes70").value;
				}
				else if(MusclePrescriptionAttribute[week][taskNum][8][i][2] > 70 && MusclePrescriptionAttribute[week][taskNum][8][i][2] <= 75)
				{
					FileTime = document.getElementById("input_FailTimes75").value;
				}
				else if(MusclePrescriptionAttribute[week][taskNum][8][i][2] > 75 && MusclePrescriptionAttribute[week][taskNum][8][i][2] <= 80)
				{
					FileTime = document.getElementById("input_FailTimes80").value;
				}
				else if(MusclePrescriptionAttribute[week][taskNum][8][i][2] > 80 && MusclePrescriptionAttribute[week][taskNum][8][i][2] <= 85)
				{
					FileTime = document.getElementById("input_FailTimes85").value;
				}
				else if(MusclePrescriptionAttribute[week][taskNum][8][i][2] > 85 && MusclePrescriptionAttribute[week][taskNum][8][i][2] <= 90)
				{
					FileTime = document.getElementById("input_FailTimes90").value;
				}
				else if(MusclePrescriptionAttribute[week][taskNum][8][i][2] > 90)
				{
					FileTime = document.getElementById("input_FailTimes95").value;
				}
				MuscleSetTitleAttribute(week, taskNum, i);
				document.getElementById("input_SumOfTraining_" + i).value = MusclePrescriptionAttribute[week][taskNum][8][i][8] = ((MusclePrescriptionAttribute[week][taskNum][8][i][3] * MusclePrescriptionAttribute[week][taskNum][8][i][4] / FileTime) + Math.log(document.getElementById("input_SetTime_" + i).value / (document.getElementById("input_RelaxTime_Time_" + i).value * document.getElementById("input_NumOfSet_" + i).value * document.getElementById("input_RepeatTime_" + i).value + (180 * document.getElementById("input_NumOfSet_" + i).value)))).toFixed(2);
			}
			MuscleActionTraining(week, taskNum);
		}
	}
	xmlhttp.open("GET","Muscle/Prescription.php?SetNum=" + SetsNum + "&week=" + week + "&taskNum=" + taskNum,true);
	xmlhttp.send();
}

function MscleChangeMode(week, taskNum, SetsId)
{
	var CMode = document.getElementById("select_TrainingMode_" + SetsId).value;
	if(CMode == "最大肌力模式")
	{
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][0] = 3;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][1] = 2;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][2] = 85;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][3] = 2;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][4] = 6;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][5] = 3;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][6] = 300;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][7] = "最大肌力模式";
	}
	else if(CMode == "瞬發力I模式")
	{
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][0] = 3;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][1] = 2;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][2] = 80;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][3] = 3;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][4] = 2;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][5] = 3;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][6] = 300;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][7] = "瞬發力I模式";
	}
	else if(CMode == "瞬發力II模式")
	{
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][0] = 3;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][1] = 2;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][2] = 75;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][3] = 3;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][4] = 5;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][5] = 3;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][6] = 300;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][7] = "瞬發力II模式";
	}
	else if(CMode == "肌肥大模式")
	{
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][0] = 3;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][1] = 2;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][2] = 75;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][3] = 3;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][4] = 6;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][5] = 3;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][6] = 30;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][7] = "肌肥大模式";
	}
	else if(CMode == "肌耐力模式")
	{
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][0] = 3;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][1] = 2;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][2] = 70;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][3] = 2;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][4] = 12;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][5] = 3;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][6] = 30;
		MusclePrescriptionAttribute[week][taskNum][8][SetsId][7] = "肌耐力模式";
	}
	var RTime = 0;
	document.getElementById("input_ActionTimeRate_" + SetsId).value = MusclePrescriptionAttribute[week][taskNum][8][SetsId][0];
	document.getElementById("input_RelaxTimeRate_" + SetsId).value = MusclePrescriptionAttribute[week][taskNum][8][SetsId][1];
	document.getElementById("input_StrongPercent_" + SetsId).value = MusclePrescriptionAttribute[week][taskNum][8][SetsId][2];
	document.getElementById("input_NumOfSet_" + SetsId).value = MusclePrescriptionAttribute[week][taskNum][8][SetsId][3];
	document.getElementById("input_RepeatTime_" + SetsId).value = MusclePrescriptionAttribute[week][taskNum][8][SetsId][4];
	document.getElementById("input_ActionTime_" + SetsId).value = MusclePrescriptionAttribute[week][taskNum][8][SetsId][5];
	document.getElementById("input_RelaxTime_Set_" + SetsId).value = MusclePrescriptionAttribute[week][taskNum][8][SetsId][6];
	document.getElementById("select_TrainingMode_" + SetsId).value = MusclePrescriptionAttribute[week][taskNum][8][SetsId][7];
	document.getElementById("input_RelaxTime_Time_" + SetsId).value = RTime = (MusclePrescriptionAttribute[week][taskNum][8][SetsId][5] / (MusclePrescriptionAttribute[week][taskNum][8][SetsId][0] / MusclePrescriptionAttribute[week][taskNum][8][SetsId][1])).toFixed(0);
	document.getElementById("input_SetTime_" + SetsId).value = (((RTime*1 + 1*MusclePrescriptionAttribute[week][taskNum][8][SetsId][5]) * MusclePrescriptionAttribute[week][taskNum][8][SetsId][4] * MusclePrescriptionAttribute[week][taskNum][8][SetsId][3]) + (MusclePrescriptionAttribute[week][taskNum][8][SetsId][3] * MusclePrescriptionAttribute[week][taskNum][8][SetsId][6])).toFixed(0);
	document.getElementById("input_SumOfWeight_" + SetsId).value = (document.getElementById("input_WeightPercent100").value * (MusclePrescriptionAttribute[week][taskNum][8][SetsId][2] / 100) * MusclePrescriptionAttribute[week][taskNum][8][SetsId][3] * MusclePrescriptionAttribute[week][taskNum][8][SetsId][4]).toFixed(2);
	
	var FileTime = 0;
	if(MusclePrescriptionAttribute[week][taskNum][8][SetsId][2] <= 70)
	{
		FileTime = document.getElementById("input_FailTimes70").value;
	}
	else if(MusclePrescriptionAttribute[week][taskNum][8][SetsId][2] > 70 && MusclePrescriptionAttribute[week][taskNum][8][SetsId][2] <= 75)
	{
		FileTime = document.getElementById("input_FailTimes75").value;
	}
	else if(MusclePrescriptionAttribute[week][taskNum][8][SetsId][2] > 75 && MusclePrescriptionAttribute[week][taskNum][8][SetsId][2] <= 80)
	{
		FileTime = document.getElementById("input_FailTimes80").value;
	}
	else if(MusclePrescriptionAttribute[week][taskNum][8][SetsId][2] > 80 && MusclePrescriptionAttribute[week][taskNum][8][SetsId][2] <= 85)
	{
		FileTime = document.getElementById("input_FailTimes85").value;
	}
	else if(MusclePrescriptionAttribute[week][taskNum][8][SetsId][2] > 85 && MusclePrescriptionAttribute[week][taskNum][8][SetsId][2] <= 90)
	{
		FileTime = document.getElementById("input_FailTimes90").value;
	}
	else if(MusclePrescriptionAttribute[week][taskNum][8][SetsId][2] > 90)
	{
		FileTime = document.getElementById("input_FailTimes95").value;
	}

	MuscleSetTitleAttribute(week, taskNum, SetsId);
	document.getElementById("input_SumOfTraining_" + SetsId).value = MusclePrescriptionAttribute[week][taskNum][8][SetsId][8] = ((MusclePrescriptionAttribute[week][taskNum][8][SetsId][3] * MusclePrescriptionAttribute[week][taskNum][8][SetsId][4] / FileTime) + Math.log(document.getElementById("input_SetTime_" + SetsId).value / (document.getElementById("input_RelaxTime_Time_" + SetsId).value * document.getElementById("input_NumOfSet_" + SetsId).value * document.getElementById("input_RepeatTime_" + SetsId).value + (180 * document.getElementById("input_NumOfSet_" + SetsId).value)))).toFixed(2);
	MuscleActionTraining(week, taskNum);
}

function MuscleSetTitleAttribute(week, taskNum, SetsId)
{
	if(MusclePrescriptionAttribute[week][taskNum][8][SetsId][7] == "最大肌力模式")
	{
		document.getElementById("td_StrongPercentage_" + SetsId).title = "> or = 85%1RM";
		document.getElementById("td_NumOfSet_" + SetsId).title = "2~6";
		document.getElementById("td_RepeatTime_" + SetsId).title = "< or = 6";
		document.getElementById("td_RelaxTime_Set_" + SetsId).title = "120~300sec";
	}
	
	else if(MusclePrescriptionAttribute[week][taskNum][8][SetsId][7] == "瞬發力I模式")
	{
		document.getElementById("td_StrongPercentage_" + SetsId).title = "80%~90%1RM";
		document.getElementById("td_NumOfSet_" + SetsId).title = "3~5";
		document.getElementById("td_RepeatTime_" + SetsId).title = "1~2";
		document.getElementById("td_RelaxTime_Set_" + SetsId).title = "120~300sec";
	}
	
	else if(MusclePrescriptionAttribute[week][taskNum][8][SetsId][7] == "瞬發力II模式")
	{
		document.getElementById("td_StrongPercentage_" + SetsId).title = "75%~85%1RM";
		document.getElementById("td_NumOfSet_" + SetsId).title = "3~5";
		document.getElementById("td_RepeatTime_" + SetsId).title = "3~5";
		document.getElementById("td_RelaxTime_Set_" + SetsId).title = "120~300sec";
	}
	
	else if(MusclePrescriptionAttribute[week][taskNum][8][SetsId][7] == "肌肥大模式")
	{
		document.getElementById("td_StrongPercentage_" + SetsId).title = "67%~85%1RM";
		document.getElementById("td_NumOfSet_" + SetsId).title = "3~6";
		document.getElementById("td_RepeatTime_" + SetsId).title = "6~12";
		document.getElementById("td_RelaxTime_Set_" + SetsId).title = "30~90sec";
	}
	
	else if(MusclePrescriptionAttribute[week][taskNum][8][SetsId][7] == "肌耐力模式")
	{
		document.getElementById("td_StrongPercentage_" + SetsId).title = "< or = 67%1RM";
		document.getElementById("td_NumOfSet_" + SetsId).title = "2~3";
		document.getElementById("td_RepeatTime_" + SetsId).title = "> or = 12";
		document.getElementById("td_RelaxTime_Set_" + SetsId).title = "< or = 30sec";
	}
}

function MuscleActionTraining(week, taskNum)
{
	var TempTraining = 0;
	for(var i = 0; i < MusclePrescriptionAttribute[week][taskNum][8].length; i++)
	{
		TempTraining = (1 * TempTraining )+ (1 * MusclePrescriptionAttribute[week][taskNum][8][i][8]);
	}
	MusclePrescriptionAttribute[week][taskNum][9] = document.getElementById("input_ActionTraining").value = TempTraining.toFixed(2);
}

function MuscleApplyAll(week, taskNum, mode)
{
	if(mode == "最大肌力模式")
	{
		for(var i = 0; i < MusclePrescriptionAttribute[week][taskNum][8].length; i++)
		{
			MusclePrescriptionAttribute[week][taskNum][8][i][0] = 3;
			MusclePrescriptionAttribute[week][taskNum][8][i][1] = 2;
			MusclePrescriptionAttribute[week][taskNum][8][i][2] = 85;
			MusclePrescriptionAttribute[week][taskNum][8][i][3] = 2;
			MusclePrescriptionAttribute[week][taskNum][8][i][4] = 6;
			MusclePrescriptionAttribute[week][taskNum][8][i][5] = 3;
			MusclePrescriptionAttribute[week][taskNum][8][i][6] = 300;
			MusclePrescriptionAttribute[week][taskNum][8][i][7] = "最大肌力模式";
		}
	}
	else if(mode == "瞬發力I模式")
	{
		for(var i = 0; i < MusclePrescriptionAttribute[week][taskNum][8].length; i++)
		{
			MusclePrescriptionAttribute[week][taskNum][8][i][0] = 3;
			MusclePrescriptionAttribute[week][taskNum][8][i][1] = 2;
			MusclePrescriptionAttribute[week][taskNum][8][i][2] = 80;
			MusclePrescriptionAttribute[week][taskNum][8][i][3] = 3;
			MusclePrescriptionAttribute[week][taskNum][8][i][4] = 2;
			MusclePrescriptionAttribute[week][taskNum][8][i][5] = 3;
			MusclePrescriptionAttribute[week][taskNum][8][i][6] = 300;
			MusclePrescriptionAttribute[week][taskNum][8][i][7] = "瞬發力I模式";
		}
	}
	else if(mode == "瞬發力II模式")
	{
		for(var i = 0; i < MusclePrescriptionAttribute[week][taskNum][8].length; i++)
		{
			MusclePrescriptionAttribute[week][taskNum][8][i][0] = 3;
			MusclePrescriptionAttribute[week][taskNum][8][i][1] = 2;
			MusclePrescriptionAttribute[week][taskNum][8][i][2] = 75;
			MusclePrescriptionAttribute[week][taskNum][8][i][3] = 3;
			MusclePrescriptionAttribute[week][taskNum][8][i][4] = 5;
			MusclePrescriptionAttribute[week][taskNum][8][i][5] = 3;
			MusclePrescriptionAttribute[week][taskNum][8][i][6] = 300;
			MusclePrescriptionAttribute[week][taskNum][8][i][7] = "瞬發力II模式";
		}
	}
	else if(mode == "肌肥大模式")
	{
		for(var i = 0; i < MusclePrescriptionAttribute[week][taskNum][8].length; i++)
		{
			MusclePrescriptionAttribute[week][taskNum][8][i][0] = 3;
			MusclePrescriptionAttribute[week][taskNum][8][i][1] = 2;
			MusclePrescriptionAttribute[week][taskNum][8][i][2] = 75;
			MusclePrescriptionAttribute[week][taskNum][8][i][3] = 3;
			MusclePrescriptionAttribute[week][taskNum][8][i][4] = 6;
			MusclePrescriptionAttribute[week][taskNum][8][i][5] = 3;
			MusclePrescriptionAttribute[week][taskNum][8][i][6] = 30;
			MusclePrescriptionAttribute[week][taskNum][8][i][7] = "肌肥大模式";
		}
	}
	else if(mode == "肌耐力模式")
	{
		for(var i = 0; i < MusclePrescriptionAttribute[week][taskNum][8].length; i++)
		{
			MusclePrescriptionAttribute[week][taskNum][8][i][0] = 3;
			MusclePrescriptionAttribute[week][taskNum][8][i][1] = 2;
			MusclePrescriptionAttribute[week][taskNum][8][i][2] = 67;
			MusclePrescriptionAttribute[week][taskNum][8][i][3] = 2;
			MusclePrescriptionAttribute[week][taskNum][8][i][4] = 12;
			MusclePrescriptionAttribute[week][taskNum][8][i][5] = 3;
			MusclePrescriptionAttribute[week][taskNum][8][i][6] = 30;
			MusclePrescriptionAttribute[week][taskNum][8][i][7] = "肌耐力模式";
		}
	}
	MusclePrescriptionTable(week, taskNum);
}

function MuscleCalculatePrescription(week, taskNum, AttributeId, SetsId, value)
{
	var RTime = 0;
	MusclePrescriptionAttribute[week][taskNum][8][SetsId][AttributeId] = value;
	document.getElementById("input_RelaxTime_Time_" + SetsId).value = RTime = (MusclePrescriptionAttribute[week][taskNum][8][SetsId][5] / (MusclePrescriptionAttribute[week][taskNum][8][SetsId][0] / MusclePrescriptionAttribute[week][taskNum][8][SetsId][1])).toFixed(0);
	document.getElementById("input_SetTime_" + SetsId).value = (((RTime*1 + 1*MusclePrescriptionAttribute[week][taskNum][8][SetsId][5]) * MusclePrescriptionAttribute[week][taskNum][8][SetsId][4] * MusclePrescriptionAttribute[week][taskNum][8][SetsId][3]) + (MusclePrescriptionAttribute[week][taskNum][8][SetsId][3] * MusclePrescriptionAttribute[week][taskNum][8][SetsId][6])).toFixed(0);
	document.getElementById("input_SumOfWeight_" + SetsId).value = (document.getElementById("input_WeightPercent100").value * (MusclePrescriptionAttribute[week][taskNum][8][SetsId][2] / 100) * MusclePrescriptionAttribute[week][taskNum][8][SetsId][3] * MusclePrescriptionAttribute[week][taskNum][8][SetsId][4]).toFixed(2);
	
	var FileTime = 0;
	if(MusclePrescriptionAttribute[week][taskNum][8][SetsId][2] <= 70)
	{
		FileTime = document.getElementById("input_FailTimes70").value;
	}
	else if(MusclePrescriptionAttribute[week][taskNum][8][SetsId][2] > 70 && MusclePrescriptionAttribute[week][taskNum][8][SetsId][2] <= 75)
	{
		FileTime = document.getElementById("input_FailTimes75").value;
	}
	else if(MusclePrescriptionAttribute[week][taskNum][8][SetsId][2] > 75 && MusclePrescriptionAttribute[week][taskNum][8][SetsId][2] <= 80)
	{
		FileTime = document.getElementById("input_FailTimes80").value;
	}
	else if(MusclePrescriptionAttribute[week][taskNum][8][SetsId][2] > 80 && MusclePrescriptionAttribute[week][taskNum][8][SetsId][2] <= 85)
	{
		FileTime = document.getElementById("input_FailTimes85").value;
	}
	else if(MusclePrescriptionAttribute[week][taskNum][8][SetsId][2] > 85 && MusclePrescriptionAttribute[week][taskNum][8][SetsId][2] <= 90)
	{
		FileTime = document.getElementById("input_FailTimes90").value;
	}
	else if(MusclePrescriptionAttribute[week][taskNum][8][SetsId][2] > 90)
	{
		FileTime = document.getElementById("input_FailTimes95").value;
	}
				
	document.getElementById("input_SumOfTraining_" + SetsId).value = MusclePrescriptionAttribute[week][taskNum][8][SetsId][8] = ((MusclePrescriptionAttribute[week][taskNum][8][SetsId][3] * MusclePrescriptionAttribute[week][taskNum][8][SetsId][4] / FileTime) + Math.log(document.getElementById("input_SetTime_" + SetsId).value / (document.getElementById("input_RelaxTime_Time_" + SetsId).value * document.getElementById("input_NumOfSet_" + SetsId).value * document.getElementById("input_RepeatTime_" + SetsId).value + (180 * document.getElementById("input_NumOfSet_" + SetsId).value)))).toFixed(2);
	MuscleActionTraining(week, taskNum);
}

function MuscleShowDetail(Day)
{
	var MuscleList = new Array();
	var TaskList = new Array();
	var Week = "";
	switch(Day)
	{
	case 0: 
		TaskList = CurrentTask_Sun;
		Week = "星期日";
		break;
	case 1: 
		TaskList = CurrentTask_Mon;
		Week = "星期一";
		break;
	case 2: 
		TaskList = CurrentTask_Tue;
		Week = "星期二";
		break;
	case 3: 
		TaskList = CurrentTask_Wen;
		Week = "星期三";
		break;
	case 4: 
		TaskList = CurrentTask_Thr;
		Week = "星期四";
		break;
	case 5: 
		TaskList = CurrentTask_Fri;
		Week = "星期五";
		break;
	case 6: 
		TaskList = CurrentTask_Sat;
		Week = "星期六";
		break;
	}
	
	for(var i = 0; i < TaskList.length; i++)
	{
		ClearMusclePointer();
		
		if(TaskList[i] != "")
		{
			SetMuscleShowed(TaskList[i] ,1);
			var MuscleCounter = 0;
			
			for(var j = 0; j < MusclePointer.length; j++)
			{
				if(MusclePointer[j] == 1)
				{
					MuscleCounter++;
				}
			}
			
			for(var k = 0; k < MusclePointer.length; k++)
			{
				if(MusclePointer[k] == 1)
				{
					var tempPos = -1;
					for(var l = 0; l < MuscleList.length; l++)
					{
						if(MuscleList[l][0] == k)
						{
							tempPos = l;
							break;
						}
					}
					//var tempPos = MuscleList.indexOf(k);
					if(tempPos == -1)
					{
						var temp = new Array();
						temp[0] = k;
						temp[1] = (MusclePrescriptionAttribute[Day][i][9] / MuscleCounter).toFixed(2);
						MuscleList.push(temp);
					}
					else
					{
						MuscleList[tempPos][1] = (1 * MuscleList[tempPos][1] + (MusclePrescriptionAttribute[Day][i][9] / MuscleCounter)).toFixed(2);
					}
				}
			}
		}
	}
	
	var MuscleDetaile = "";
	for(var i = 0; i < MuscleList.length; i++)
	{
		MuscleDetaile = MuscleDetaile + MuscleIndexNameMapping(MuscleList[i][0]) + " = " + MuscleList[i][1] + "\n";
	}
	TaskScanner(Week);
	alert(MuscleDetaile);
}

/*function MuscleCaculateTotT()
{
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
		MuscleTotT = (1 * MuscleTotT) + (1 * tempTraining);
	}
}*/

function MuscleIndexNameMapping(Index)
{
	var MuscleName = "";
	switch(Index)
	{
		case 0:
			MuscleName = "前三角肌";
			break;
		case 1:
			MuscleName = "中三角肌";
			break;
		case 2:
			MuscleName = "後三角肌";
			break;
		case 3:
			MuscleName = "肱二頭肌";
			break;
		case 4:
			MuscleName = "肱肌";
			break;
		case 5:
			MuscleName = "肱橈肌";
			break;
		case 6:
			MuscleName = "肱三頭肌";
			break;
		case 7:
			MuscleName = "旋前圓肌";
			break;
		case 8:
			MuscleName = "掌長肌";
			break;
		case 9:
			MuscleName = "橈側伸腕短肌";
			break;
		case 10:
			MuscleName = "橈側伸腕長肌";
			break;
		case 11:
			MuscleName = "尺側伸腕肌";
			break;
		case 12:
			MuscleName = "橈側屈腕肌";
			break;
		case 13:
			MuscleName = "屈姆長肌";
			break;
		case 14:
			MuscleName = "尺側屈腕肌";
			break;
		case 15:
			MuscleName = "屈指肌";
			break;
		case 16:
			MuscleName = "喙肱肌";
			break;
		case 17:
			MuscleName = "三角肌";
			break;
		case 18:
			MuscleName = "髂腰肌";
			break;
		case 19:
			MuscleName = "髂肌";
			break;
		case 20:
			MuscleName = "恥骨肌";
			break;
		case 21:
			MuscleName = "臀中肌";
			break;
		case 22:
			MuscleName = "梨狀肌";
			break;
		case 23:
			MuscleName = "臀大肌";
			break;
		case 24:
			MuscleName = "上孖肌";
			break;
		case 25:
			MuscleName = "股方肌";
			break;
		case 26:
			MuscleName = "下孖肌";
			break;
		case 27:
			MuscleName = "閉孔外肌";
			break;
		case 28:
			MuscleName = "闊筋膜張肌";
			break;
		case 29:
			MuscleName = "髂脛束";
			break;
		case 30:
			MuscleName = "閉孔內肌";
			break;
		case 31:
			MuscleName = "內收長肌";
			break;
		case 32:
			MuscleName = "縫匠肌";
			break;
		case 33:
			MuscleName = "股中間肌";
			break;
		case 34:
			MuscleName = "股直肌";
			break;
		case 35:
			MuscleName = "股外側肌";
			break;
		case 36:
			MuscleName = "股內側肌";
			break;
		case 37:
			MuscleName = "股薄肌";
			break;
		case 38:
			MuscleName = "內收大肌";
			break;
		case 39:
			MuscleName = "股二頭肌";
			break;
		case 40:
			MuscleName = "半腱肌";
			break;
		case 41:
			MuscleName = "半膜肌";
			break;
		case 42:
			MuscleName = "脛前肌";
			break;
		case 43:
			MuscleName = "蹠肌";
			break;
		case 44:
			MuscleName = "腓腸肌";
			break;
		case 45:
			MuscleName = "脛後肌";
			break;
		case 46:
			MuscleName = "比目魚肌";
			break;
		case 47:
			MuscleName = "屈姆肌";
			break;
		case 48:
			MuscleName = "伸指肌";
			break;
		case 49:
			MuscleName = "伸姆肌";
			break;
		case 50:
			MuscleName = "內收姆肌";
			break;
		case 51:
			MuscleName = "屈趾肌";
			break;
		case 52:
			MuscleName = "內收小趾肌";
			break;
		case 53:
			MuscleName = "胸大肌";
			break;
		case 54:
			MuscleName = "胸小肌";
			break;
		case 55:
			MuscleName = "前鋸肌";
			break;
		case 56:
			MuscleName = "腹直肌";
			break;
		case 57:
			MuscleName = "腹外斜肌";
			break;
		case 58:
			MuscleName = "腹內斜肌";
			break;
		case 59:
			MuscleName = "腹橫肌";
			break;
		case 60:
			MuscleName = "內脊肌";
			break;
		case 61:
			MuscleName = "頸夾肌";
			break;
		case 62:
			MuscleName = "中斜方肌";
			break;
		case 63:
			MuscleName = "上斜方肌";
			break;
		case 64:
			MuscleName = "提肩胛肌";
			break;
		case 65:
			MuscleName = "菱形肌";
			break;
		case 66:
			MuscleName = "棘上肌";
			break;
		case 67:
			MuscleName = "棘下肌";
			break;
		case 68:
			MuscleName = "小圓肌";
			break;
		case 69:
			MuscleName = "大圓肌";
			break;
		case 70:
			MuscleName = "闊背肌";
			break;
		case 71:
			MuscleName = "豎脊肌";
			break;
		case 72:
			MuscleName = "多裂肌";
			break;
		case 73:
			MuscleName = "腰方肌";
			break;
		case 74:
			MuscleName = "斜方肌";
			break;
	}
	
	return MuscleName;
}
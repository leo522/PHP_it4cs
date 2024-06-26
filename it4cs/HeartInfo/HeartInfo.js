var HRR = 0;

function SetHeartInfo()
{
	BasicHeartbeat = document.getElementById("input_BasicHeartbeat").value;
	MaxHeartbeat = document.getElementById("input_MaxHeartbeat").value;
	ExerciseHeartbeat = document.getElementById("input_ExerciseHeartbeat").value;
	HRR = (((ExerciseHeartbeat - BasicHeartbeat) / (MaxHeartbeat - BasicHeartbeat)) * 100).toFixed(2);
	document.getElementById("input_HRR").value = HRR;
}
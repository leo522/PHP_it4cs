<?php
	echo "<select id = \"select_WeekDay".$_GET["week"]."_0\" onchange = \"SetMusclePart(this.value, ".$_GET["week"].", 0)\" disabled = \"disabled\">
			<option>選擇類型</option>
			<option>整體瞬發力</option>
			<option>多關節</option>
			<option>單關節</option>
			<option>休息</option>
		</select>
		<img id = \"img_eye_".$_GET["week"]."_0\" src = \"Muscle\eye.jpg\" height=\"22\" width=\"22\" onclick = \"MuscleEyeView(0, ".$_GET["week"].", select_WeekDay".$_GET["week"]."_0.value, 1)\"/>
		<img src = \"Muscle\EditT.png\" height=\"20\" width=\"20\" onclick = \"MuscleOneRM(".$_GET["week"].", 0)\"/>";
	for($i = 1; $i < $_GET["taskNum"]; $i++)
	{
		echo"</br><select id = \"select_WeekDay".$_GET["week"]."_".$i."\" onchange = \"SetMusclePart(this.value, ".$_GET["week"].",".$i.")\">
					<option>選擇類型</option>
					<option>整體瞬發力</option>
					<option>多關節</option>
					<option>單關節</option>
					<option>休息</option>
				</select>
				<img id = \"img_eye_".$_GET["week"]."_".$i."\" src = \"Muscle\eye.jpg\" height=\"22\" width=\"22\" onclick = \"MuscleEyeView(".$i.", ".$_GET["week"].", select_WeekDay".$_GET["week"]."_".$i.".value, 1)\"/>
				<img src = \"Muscle\EditT.png\" height=\"20\" width=\"20\" onclick = \"MuscleOneRM(".$_GET["week"].", ".$i.")\"/>";
	}
?>
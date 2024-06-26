<?php
	echo"</br><select id = \"select_WeekDay".$_GET["week"]."_".$_GET["taskNum"]."\" onchange = \"SetMusclePart(this.value, ".$_GET["week"].",".$_GET["taskNum"].")\">
			<option>選擇類型</option>
			<option>整體瞬發力</option>
			<option>多關節</option>
			<option>單關節</option>
			<option>休息</option>
		</select>
		<img id = \"img_eye_".$_GET["week"]."_".$_GET["taskNum"]."\" src = \"Muscle\eye.jpg\" height=\"22\" width=\"22\" onclick = \"MuscleEyeView(".$_GET["taskNum"].", ".$_GET["week"].", select_WeekDay".$_GET["week"]."_".$_GET["taskNum"].".value, 1)\"/>
		<img src = \"Muscle\EditT.png\" height=\"20\" width=\"20\" onclick = \"MuscleOneRM(".$_GET["week"].", ".$_GET["taskNum"].")\"/>";
?>
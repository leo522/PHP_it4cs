<?php
	echo"</br><select id = \"select_WeekDay".$_GET["week"]."_".$_GET["taskNum"]."\" onchange = \"SetMusclePart(this.value, ".$_GET["week"].",".$_GET["taskNum"].")\" disabled = \"disabled\">
			<option>選擇類型</option>
			<option>整體瞬發力</option>
			<option>多關節</option>
			<option>單關節</option>
			<option>休息</option>
		</select>";
?>
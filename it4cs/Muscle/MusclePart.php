<?php
	if($_GET["value"] == "初始頁")
	{
		echo "	<option>選擇類型</option>
				<option>整體瞬發力</option>
				<option>多關節</option>
				<option>單關節</option>
				<option>休息</option>";
	}
	
	else if($_GET["value"] == "整體瞬發力")
	{
		echo "	<option>選擇動作</option>
				<option>回上層選單</option>
				<option>抓舉</option>
				<option>上搏</option>
				<option>提挺</option>
				<option>推舉</option>";
	}
	
	else if($_GET["value"] == "多關節")
	{
		echo "	<option>選擇半身</option>
				<option>回上層選單</option>
				<option>上半身</option>
				<option>下半身</option>";
	}
	
	else if($_GET["value"] == "單關節")
	{
		echo "	<option>選擇半身</option>
				<option>回上層選單</option>
				<option>上半身</option>
				<option>下半身</option>";
	}
	
	else if($_GET["value"] == "上半身")
	{
		if($_GET["parent"] == "多關節")
		{
			echo "	<option>選擇部位</option>
					<option>回上層選單</option>
					<option>胸</option>
					<option>背</option>
					<option>肩</option>";
		}
		else if($_GET["parent"] == "單關節")
		{
			echo "	<option>選擇部位</option>
					<option>回上層選單</option>
					<option>胸</option>
					<option>背</option>
					<option>肩</option>
					<option>上臂</option>
					<option>前臂</option>";
		}
	}
	
	else if($_GET["value"] == "下半身")
	{
		if($_GET["parent"] == "多關節")
		{
			echo "	<option>選擇部位</option>
					<option>回上層選單</option>
					<option>髖及大腿</option>";
		}
		else if($_GET["parent"] == "單關節")
		{
			echo "	<option>選擇部位</option>
					<option>回上層選單</option>
					<option>髖及大腿</option>
					<option>小腿</option>";
		}
	}
	
	else if($_GET["value"] == "胸")
	{
		if($_GET["parent"] == "多關節")
		{
			echo "	<option>選擇動作</option>
					<option>回上層選單</option>
					<option>水平胸前推舉槓鈴</option>
					<option>上傾胸前推舉槓鈴</option>
					<option>仰臥胸前推舉啞鈴</option>
					<option>上傾胸前推舉啞鈴</option>
					<option>仰臥胸前推舉 (史密斯訓練器)</option>
					<option>坐姿胸前推舉 (訓練器)</option>
					<option>助力式撐體 (訓練器)</option>";
		}
		else if($_GET["parent"] == "單關節")
		{
			echo "	<option>選擇動作</option>
					<option>回上層選單</option>
					<option>蝴蝶訓練器</option>
					<option>仰臥啞鈴飛鳥</option>
					<option>上傾啞鈴飛鳥</option>";
		}
	}
	
	else if($_GET["value"] == "背")
	{
		if($_GET["parent"] == "多關節")
		{
			echo "	<option>選擇動作</option>
					<option>回上層選單</option>
					<option>坐姿闊背肌下拉 (訓練器)</option>
					<option>俯身槓鈴划船</option>
					<option>單臂啞鈴划船</option>
					<option>低拉滑輪坐姿划船 (訓練器)</option>
					<option>坐姿划船 (訓練器)</option>";
		}
		else if($_GET["parent"] == "單關節")
		{
			echo "	<option>選擇動作</option>
					<option>回上層選單</option>
					<option>仰臥槓鈴過頭上拉</option>";
		}
	}
	
	else if($_GET["value"] == "肩")
	{
		if($_GET["parent"] == "多關節")
		{
			echo "	<option>選擇動作</option>
					<option>回上層選單</option>
					<option>肩上推舉 (訓練器)</option>
					<option>坐姿槓鈴肩上推舉</option>
					<option>坐姿啞鈴肩上推舉</option>
					<option>直立划船</option>";
		}
		else if($_GET["parent"] == "單關節")
		{
			echo "	<option>選擇動作</option>
					<option>回上層選單</option>
					<option>肩前平舉</option>
					<option>肩側平舉</option>
					<option>肩側平舉 (訓練器)</option>
					<option>俯身肩平舉</option>
					<option>槓鈴聳肩</option>";
		}
	}
	
	else if($_GET["value"] == "上臂")
	{
		echo "	<option>選擇動作</option>
				<option>回上層選單</option>
				<option>槓鈴二頭肌彎舉</option>
				<option>啞鈴二頭肌彎舉</option>
				<option>錘式彎舉</option>
				<option>低拉滑輪二頭肌彎舉</option>
				<option>二頭肌彎舉 (訓練器)</option>
				<option>仰臥槓鈴三頭肌伸展</option>
				<option>坐姿過頭槓鈴三頭肌伸展</option>
				<option>三頭肌下拉 (訓練器)</option>";
	}
	
	else if($_GET["value"] == "前臂")
	{
		echo "	<option>選擇動作</option>
				<option>回上層選單</option>
				<option>腕彎舉</option>
				<option>腕伸展</option>";
	}
	
	else if($_GET["value"] == "髖及大腿")
	{
		if($_GET["parent"] == "多關節")
		{
			echo "	<option>選擇動作</option>
					<option>回上層選單</option>
					<option>前跨蹲</option>
					<option>背跨蹲</option>
					<option>斜背式跨蹲</option>
					<option>硬舉</option>
					<option>斜躺式推蹬</option>
					<option>水平式推蹬</option>
					<option>登階</option>
					<option>前跨步下蹲</option>";
		}
		else if($_GET["parent"] == "單關節")
		{
			echo "	<option>選擇動作</option>
					<option>回上層選單</option>
					<option>直腿硬舉</option>
					<option>早安</option>
					<option>伸膝</option>
					<option>俯臥屈腿</option>
					<option>坐式屈腿</option>";
		}
	}
	
	else if($_GET["value"] == "小腿")
	{
		echo "	<option>選擇動作</option>
				<option>回上層選單</option>
				<option>坐式舉踵</option>
				<option>站式舉踵</option>";
	}
?>
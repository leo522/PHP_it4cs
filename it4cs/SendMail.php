<?php
	//echo "into php";
	require("./phpmailer/class.phpmailer.php");
	mb_internal_encoding('UTF-8');
	$mail = new PHPMailer();
	$mail->IsSMTP();
	$mail->SMTPAuth = true; // turn on SMTP authentication              // enable SMTP authentication
	//$mail->SMTPSecure = "ssl";
	//$mail->Host       = "email-smtp.us-east-1.amazonaws.com";
	//這幾行是必須的

	$mail->Username = "iex2win1.0@gmail.com";
	//$mail->Username = "AKIAJFFPAHXUUSZGRQIQ";
	$mail->Password = "iEx2Win!@#";
	//$mail->Password = "AhR5EmtSUh6C/n7iZw2mL7nGHD4q62nWZZJ6Wlf78os2";
	//這邊是你的gmail帳號和密碼
	$mail->CharSet = "utf-8";

	$mail->FromName = "iEx2win";
	// 寄件者名稱(你自己要顯示的名稱)
	$webmaster_email = "iex2win1.0@gmail.com";
	//回覆信件至此信箱


	//$email=$_GET["Address"];
	$email=$_POST["Address"];
	// 收件者信箱
	$name="";
	// 收件者的名稱or暱稱
	$mail->From = $webmaster_email;

	$mail->AddAddress($email,$name);
	//$mail->AddReplyTo($webmaster_email,"Squall.f");
	//這不用改

	$mail->WordWrap = 50;
	//每50行斷一次行

	//$mail->AddAttachment("/XXX.rar");
	// 附加檔案可以用這種語法(記得把上一行的//去掉)

	$mail->IsHTML(true); // send as HTML

	$subject = "測定與訓練處方";
	$subject = mb_encode_mimeheader($subject, "uft-8");
	$mail->Subject = $subject;
	// 信件標題
	$mail->Body = stripslashes($_POST["Content"]);
	//信件內容(html版，就是可以有html標籤的如粗體、斜體之類)
	//$mail->AltBody = "信件內容";
	//信件內容(純文字版)
	//die($_GET["Content"]);
	if($mail->Send())
	{
		echo "成功送出您的處方。";
	}
	else
	{
		echo $mail->ErrorInfo;
	}
?>
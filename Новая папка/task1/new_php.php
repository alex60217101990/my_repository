<?php 
$Pass=1;
setcookie ("TestCookie", $Pass++ ,time()+3600);/* период действия - 1 час */
 ?>
<!DOCTYPE html>
<html lang="ru">
<head>
<title>PHP</title>
<meta charset='utf-8'>
</head>
<body>
Baw IP-адресс: <?= $_SERVER['RE.MOTE_ADDR'] ?><br/>
Baw Opaузер: <?= $_SERVER['HTTP_USER_AGENT'] ?>
<?php
define(Email, "alex602@rambler.ru");
define(Pass, "17101990");
define(ERROR, "404");

	if (isset($_REQUEST['Password']) && $_REQUEST['Password']===Pass && isset($_REQUEST['email']) &&
		$_REQUEST['email']===Email && isset($_REQUEST['Password_Confirmation']) && isset($_REQUEST['Phone'])) {
		echo '<br><span style="color: grey; text-align: center; margin: auto; width: 100%;">CONGRATULATION!!!</span>';
	}
	else{ echo '<p style="margin: auto; background: grey; text-align: center; color: #D3D3D3; margin-top: 5%;"> ';
		  echo ERROR;
		  echo "</p>";};
	if (isset($_REQUEST['/param1/'])&& isset($_REQUEST['param2/'])) {
		echo '{[one: "first", two: "second"]}';
	}
	$_COOKIE['TestCookie']=$_REQUEST['Password'];
?>
<pre>
<?php 
print_r($GLOBALS); 

?>
</pre>
</body>
</html>
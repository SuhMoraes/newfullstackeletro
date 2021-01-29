<?php

class Connection 
{
  public static function getDb(){
    $connection = new PDO('mysql:host=localhost;dbname=newfullstackeletro;charset=utf8','root','');

    if($connection){
      return $connection;
    }else {
      echo '<h1> Não foi possível realizar a conexão</h1>';
    }
  }
}

   

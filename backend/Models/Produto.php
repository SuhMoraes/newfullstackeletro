<?php

require 'Connection.php';

class Produto{
  public static function getAll(){
    $connection = Connection::getDb();

    $produtos = $connection->query('Select * from produtos');

    return $produtos->fetchAll(PDO::FETCH_ASSOC);
  }
}
<?php

require 'Connection.php';

class Pedido{
  public static function getPedidosComProdutos(){
    $connection = Connection::getDb();

    $pedidos = $connection->query('SELECT * from pedidos join produtos on pedidos.id_produtos = produtos.id' );

    return $pedidos->fetchAll(PDO::FETCH_ASSOC);
  }
}
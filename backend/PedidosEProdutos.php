<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api //  
header("Content-type: application/json"); //Indicação de arquivo JSON 

require './Models/Pedido.php';

$pedidos= Pedido::getPedidosComProdutos();

print_r(json_encode($pedidos));

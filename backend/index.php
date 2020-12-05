<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api //  
header("Content-type: application/json"); //Indicação de arquivo JSON 

require './Models/Produto.php';

$produtos = Produto::getAll();

print_r(json_encode($produtos));

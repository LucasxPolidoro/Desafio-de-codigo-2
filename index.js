// TODO: Crie a Função calcularFrete()
function calcularFrete() {
  // Lê o valor total da compra usando "gets"
  let valorCompra = parseFloat(gets().trim());

  // TODO: Crie a condição para verificar se o valor total ultrapassou R$ 150.00:
  if (valorCompra > 150.00) {
    console.log("Você ganhou frete grátis!");
  } else {
    console.log("Frete não incluso.");
  }
}

// Chama a função para calcular o frete
calcularFrete();

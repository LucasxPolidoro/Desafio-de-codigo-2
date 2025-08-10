function verificarFrete(valorCompra) {
  if (valorCompra > 150.00) {
    return "Você ganhou frete grátis!";
  } else {
    return "Frete não incluso.";
  }
}

// 🧪 Exemplos de teste
console.log(verificarFrete(150.01)); // Você ganhou frete grátis!

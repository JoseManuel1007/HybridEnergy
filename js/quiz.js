function calificar() {
  const respuestas = {
    q1: "B",
    q2: "C",
    q3: "C",
    q4: "C",
    q5: "F",
    q6: "V",
    q7: "F",
    q8: "V"
  };

  let correctas = 0;

  for (let key in respuestas) {
    const seleccionada = document.querySelector(`input[name="${key}"]:checked`);
    if (seleccionada && seleccionada.value === respuestas[key]) {
      correctas++;
    }
  }

  const resultado = document.getElementById("resultadoquiz");
  resultado.innerHTML = `Tuviste ${correctas} de 8 respuestas correctas.`;
}

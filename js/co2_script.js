document.getElementById('form-carbono').addEventListener('submit', function(e) {
  e.preventDefault();

  let total = 0;

  const luces = parseInt(document.querySelector('input[name="luces"]:checked')?.value || 0);
  const cocina = parseInt(document.querySelector('select[name="cocina"]').value);
  const transporte = parseInt(document.querySelector('select[name="transporte"]').value);
  const avion = parseInt(document.querySelector('select[name="avion"]').value);
  const carne = parseInt(document.querySelector('input[name="carne"]:checked')?.value || 0);
  const reciclaje = parseInt(document.querySelector('input[name="reciclaje"]:checked')?.value || 0);

  total = luces + cocina + transporte + avion + carne + reciclaje;

  const resultado = document.getElementById('resultado1');
  resultado.style.display = 'block';

  if (total <= 4) {
    resultado.innerHTML = "🌱 <strong>Huella baja:</strong> ¡Muy bien! Tu estilo de vida tiene un impacto ambiental bajo. Sigue así.";
  } else if (total <= 8) {
    resultado.innerHTML = "♻️ <strong>Huella media:</strong> Vas por buen camino, pero puedes mejorar algunos hábitos para reducir tu impacto.";
  } else {
    resultado.innerHTML = "🔥 <strong>Huella alta:</strong> Tu estilo de vida genera un alto impacto ambiental. ¡Revisa tus hábitos y actúa!";
  }
});

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

  document.getElementById("resultado").innerHTML =
    `Tuviste ${correctas} de 8 respuestas correctas.`;
}
function calcular() {
    const personas = parseInt(document.getElementById("personas").value);
    const consumo = parseFloat(document.getElementById("consumo").value);

    // Datos de basura
    const basuraPorPersonaPorDia = 1; // kg/día
    const porcentajeOrganico = 0.6; // 60% de la basura es orgánica
    // Datos de biogás
    const biogasPorKg = 0.076; // m³ por kg orgánico
    const energiaPorMetroCubicoBiogas = 10.55; // kWh
    const horasCocinaPorMetroCubico = 0.7; // horas de cocina por m³
    const costoPorKWh = 737.6; // COP

    // Cálculos
    const basuraMensual = personas * basuraPorPersonaPorDia * 30;
    const basuraOrganica = basuraMensual * porcentajeOrganico;
    const biogasProducido = basuraOrganica * biogasPorKg; // m³
    const energiaDesdeBiogas = biogasProducido * energiaPorMetroCubicoBiogas; // kWh
    const porcentajeCubierto = (energiaDesdeBiogas / consumo) * 100;

    // Horas de uso en cocina
    const horasCocina = biogasProducido * horasCocinaPorMetroCubico;

    // Ahorro estimado en la factura eléctrica
    const ahorroCOP = energiaDesdeBiogas * costoPorKWh;

    const resultado = `
    <strong>Resultados:</strong><br>
    ✅ Consumo mensual de energía: <strong>${consumo.toFixed(2)} kWh</strong><br>
    ♻️ Basura generada al mes: <strong>${basuraMensual.toFixed(1)} kg</strong><br>
    🌿 Porción orgánica: <strong>${basuraOrganica.toFixed(1)} kg</strong><br>
    🔋 Biogás potencial producido: <strong>${biogasProducido.toFixed(2)} m³</strong><br>
    ⚡ Energía equivalente del biogás: <strong>${energiaDesdeBiogas.toFixed(2)} kWh</strong><br>
    📊 Porcentaje del consumo eléctrico que se puede sustituir con biogás: <strong>${porcentajeCubierto.toFixed(1)}%</strong><br><br>
    
    🕒 <strong>El biogás producido permitiría cocinar aproximadamente ${horasCocina.toFixed(1)} horas al mes.</strong><br>
    💰 <strong>Ahorro estimado en la factura eléctrica: $${ahorroCOP.toLocaleString("es-CO")} COP</strong><br><br>

    <em>Nota: El ahorro y las horas pueden variar según hábitos y eficiencia del sistema de biogás.</em>
  `;

    document.getElementById("resultado").innerHTML = resultado;
}

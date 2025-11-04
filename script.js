console.log("script.js cargado");

const btn = document.getElementById("btn-frase");
const fraseP = document.getElementById("frase");

if (!btn) {
  console.error("No se encontró el botón.");
} else {
  const frases = [
    "Si la vida te da alopecicos, hazte una limonada.",
    "Mas tonto es ximo que el que ve.",
    "Si rabbit te da zanahorias, hazte un estofado de conejo.",
    "Nunca es tarde para atrapar chochitos.",
    "Menos mal que eres la representacion de DisneyLand.",
    "2 + 2 son 4 menos para los dementores que es 10000."
  ];

 
  const obtenerFechaHoy = () => {
    const hoy = new Date();
    return hoy.toISOString().split("T")[0]; // 
  };

  const guardado = JSON.parse(localStorage.getItem("fraseDelDia"));
  const hoy = obtenerFechaHoy();

  if (guardado && guardado.fecha === hoy) {
    fraseP.textContent = guardado.frase;
  }

  btn.addEventListener("click", () => {
    const guardado = JSON.parse(localStorage.getItem("fraseDelDia"));
    const hoy = obtenerFechaHoy();

    if (!guardado || guardado.fecha !== hoy) {
      const randomIndex = Math.floor(Math.random() * frases.length);
      const frase = frases[randomIndex];

      localStorage.setItem("fraseDelDia", JSON.stringify({ frase, fecha: hoy }));
      fraseP.textContent = frase;
    } else {
      fraseP.textContent = guardado.frase;
    }
  });
}

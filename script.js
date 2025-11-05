function initMap() {
  const centro = { lat: -23.56318, lng: -46.51327 };
  const mapa = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: centro,
  });

  const locais = [
    {
      nome: "Ecoponto Aricanduva",
      posicao: { lat: -23.5615, lng: -46.5120 },
      info: "Coleta seletiva e descarte de eletrônicos. Funcionamento: 8h às 17h.",
    },
    {
      nome: "Horta Comunitária da Rua X",
      posicao: { lat: -23.5642, lng: -46.5145 },
      info: "Horta urbana mantida por moradores. Visitação: livre aos sábados.",
    },
    {
      nome: "Oficina EcoFlorescer",
      posicao: { lat: -23.5620, lng: -46.5108 },
      info: "Oficinas de reciclagem e compostagem. Inscrições abertas.",
    }
  ];

  locais.forEach(local => {
    const marcador = new google.maps.Marker({
      position: local.posicao,
      map: mapa,
      title: local.nome,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `<h3>${local.nome}</h3><p>${local.info}</p>`,
    });

    marcador.addListener("click", () => {
      infoWindow.open(mapa, marcador);
    });
  });
}

window.initMap = initMap;

document.addEventListener("DOMContentLoaded", () => {
  const quizData = [
    {
      pergunta: "Qual destes materiais pode ser reciclado?",
      opcoes: ["Guardanapo engordurado", "Isopor sujo", "Papelão limpo", "Papel higiênico usado"],
      resposta: 2,
      explicacao: "Papelão limpo é reciclável. Materiais sujos ou contaminados não devem ir para a reciclagem."
    },
    {
      pergunta: "O que é compostagem?",
      opcoes: ["Transformação de resíduos orgânicos em adubo", "Uso de sacolas biodegradáveis", "Separação de recicláveis", "Processo de queima de lixo"],
      resposta: 0,
      explicacao: "Compostagem é o processo de decomposição de resíduos orgânicos para virar adubo natural."
    },
    {
      pergunta: "Qual atitude ajuda a economizar água?",
      opcoes: ["Reutilizar água da máquina de lavar", "Tomar banhos longos", "Deixar torneira pingando", "Lavar calçada com mangueira"],
      resposta: 0,
      explicacao: "Reutilizar água da máquina de lavar é uma forma eficiente de reduzir o consumo."
    },
    {
      pergunta: "Qual é o benefício das hortas urbanas?",
      opcoes: ["Consomem muita energia", "Poluem o solo", "Produzem alimentos saudáveis", "Aumentam o lixo orgânico"],
      resposta: 2,
      explicacao: "Hortas urbanas produzem alimentos saudáveis e ajudam a revitalizar espaços urbanos."
    },
    {
      pergunta: "O que significa consumo consciente?",
      opcoes: ["Evitar reutilização", "Refletir antes de consumir", "Desperdiçar recursos", "Comprar sem pensar"],
      resposta: 1,
      explicacao: "Consumo consciente é refletir antes de comprar, evitando desperdícios e impactos ambientais."
    }
  ];

  const container = document.getElementById("quiz-container");

  quizData.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "question";

    const title = document.createElement("h3");
    title.textContent = `Pergunta ${index + 1}: ${q.pergunta}`;
    div.appendChild(title);

    const optionsDiv = document.createElement("div");
    optionsDiv.className = "options";

    q.opcoes.forEach((opcao, i) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `pergunta${index}`;
      input.value = i;
      label.appendChild(input);
      label.append(` ${opcao}`);
      optionsDiv.appendChild(label);
    });

    const feedback = document.createElement("div");
    feedback.className = "feedback";

    optionsDiv.addEventListener("change", (e) => {
      const selecionado = parseInt(e.target.value);
      if (selecionado === q.resposta) {
        feedback.textContent = `✅ Correto! ${q.explicacao}`;
      } else {
        feedback.textContent = `❌ Incorreto. ${q.explicacao}`;
      }
    });

    div.appendChild(optionsDiv);
    div.appendChild(feedback);
    container.appendChild(div);
  });
});
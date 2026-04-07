const data = [
  {
    semestre: "1º Semestre (2022.1)",
    materias: [
      { id: "IMD0017", nome: "Práticas de Leitura e Escrita em Português", carga: "30h", tipo: "Obrigatória" },
      { id: "IMD1004", nome: "Pensamento Computacional", carga: "60h", tipo: "Obrigatória" },
      { id: "IMD1003", nome: "Geometria Euclidiana", carga: "30h", tipo: "Obrigatória" },
      { id: "IMD1002", nome: "Análise Combinatória", carga: "30h", tipo: "Obrigatória" },
      { id: "IMD0020", nome: "Tecnologia da Informação e Sociedade", carga: "30h", tipo: "Obrigatória" }
    ]
  },
  {
    semestre: "2º Semestre (2022.2)",
    materias: [
      { id: "IMD1112", nome: "Ética e Dados", carga: "60h", tipo: "Optativa" },
      { id: "IMD0027", nome: "Práticas de Leitura e Escrita em Português II", carga: "30h", tipo: "Obrigatória" },
      { id: "IMD1012", nome: "Introdução às Técnicas de Programação", carga: "60h", tipo: "Obrigatória" },
      { id: "IMD0018", nome: "Práticas de Leitura em Inglês", carga: "30h", tipo: "Obrigatória" }
    ]
  },
  {
    semestre: "3º Semestre (2023.1)",
    materias: [
      { id: "IMD1024", nome: "Arquitetura de Computadores", carga: "60h", tipo: "Obrigatória" },
      { id: "IMD0030", nome: "Linguagem de Programação I", carga: "60h", tipo: "Obrigatória" },
      { id: "IMD0405", nome: "Fundamentos de Sistemas", carga: "60h", tipo: "Optativa" },
    ]
  },
  {
    semestre: "4º Semestre (2023.2)",
    materias: [
      { id: "IMD1001", nome: "Matemática Elementar", carga: "60h", tipo: "Obrigatória" },
      { id: "IMD0036", nome: "Sistemas Operacionais", carga: "60h", tipo: "Obrigatória" },
      { id: "IMD0043", nome: "Redes de Computadores", carga: "60h", tipo: "Obrigatória" },
      { id: "IMD0030B", nome: "Linguagem de Programação II", carga: "60h", tipo: "Obrigatória" },
    ]
  },
  {
    semestre: "5º Semestre (2024.1)",
    materias: [
      { id: "IMD0510", nome: "Acessibilidade Digital", carga: "60h", tipo: "Optativa" },
      { id: "IMD0940", nome: "Banco de Dados", carga: "60h", tipo: "Obrigatória" },
      { id: "IMD0415", nome: "Gestão de Infraestrutura de TI", carga: "60h", tipo: "Optativa" },
    ]
  },
  {
    semestre: "6º Semestre (2024.2)",
    materias: [
      { id: "IMD1029", nome: "Estruturas de Dados Básicas I", carga: "60h", tipo: "Obrigatória" },
      { id: "DIM0524", nome: "DESENVOLVIMENTO DE SISTEMAS PARA DISPOSITIVOS MÓVEIS", carga: "60h", tipo: "Optativa" },
      { id: "IMD0404", nome: "DESENVOLVIMENTO DE SISTEMAS WEB I", carga: "60h", tipo: "Optativa" },
      { id: "IMD0409", nome: "DESENVOLVIMENTO DE SISTEMAS WEB II", carga: "60h", tipo: "Optativa" },
    ]
  },
  {
    semestre: "7º Semestre (2025.1)",
    materias: [
      { id: "IMD0036B", nome: "Estruturas de Dados Básicas II", carga: "60h", tipo: "Obrigatória" },
      { id: "IMD0024", nome: "Cálculo Diferencial e Integral I", carga: "90h", tipo: "Obrigatória" },
    ]
  },
  {
    semestre: "Optativas",
    materias: [
      { id: "IMD0028", nome: "Fundamentos Matemáticos da Computação I", carga: "90h", tipo: "Obrigatória" },
      { id: "IMD0038", nome: "Fundamentos Matemáticos da Computação II", carga: "90h", tipo: "Obrigatória" },
      { id: "IMD0044", nome: "Vetores e Geometria Analítica", carga: "60h", tipo: "Obrigatória" },
      { id: "IMD0033", nome: "Probabilidade", carga: "60h", tipo: "Obrigatória" },
      { id: "OPT003", nome: "A preencher", carga: "60h", tipo: "Optativa" },
      { id: "OPT004", nome: "A preencher", carga: "60h", tipo: "Optativa" },
      { id: "OPT004", nome: "A preencher", carga: "60h", tipo: "Optativa" },
      { id: "OPT001", nome: "A preencher", carga: "60h", tipo: "Optativa" },
      { id: "OPT002", nome: "A preencher", carga: "60h", tipo: "Optativa" },
      { id: "OPT003", nome: "A preencher", carga: "60h", tipo: "Optativa" },
      { id: "OPT004", nome: "A preencher", carga: "60h", tipo: "Optativa" },
      { id: "OPT004", nome: "A preencher", carga: "60h", tipo: "Optativa" },
      { id: "OPT001", nome: "A preencher", carga: "60h", tipo: "Optativa" },
      { id: "OPT002", nome: "A preencher", carga: "60h", tipo: "Optativa" },
      { id: "OPT003", nome: "A preencher", carga: "60h", tipo: "Optativa" },
      { id: "OPT004", nome: "A preencher", carga: "60h", tipo: "Optativa" },
      { id: "OPT004", nome: "A preencher", carga: "60h", tipo: "Optativa" },
      { id: "OPT001", nome: "A preencher", carga: "60h", tipo: "Optativa" },
      { id: "OPT002", nome: "A preencher", carga: "60h", tipo: "Optativa" },
      { id: "OPT003", nome: "A preencher", carga: "60h", tipo: "Optativa" }
    ]
  }
];

const STORAGE_KEY = "materias_concluidas";

function getConcluidas() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
}

function saveConcluidas(map) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
}

function toggleMateria(id) {
  const concluidas = getConcluidas();
  concluidas[id] = !concluidas[id];
  saveConcluidas(concluidas);
  render();
}

function updateDashboard() {
  const concluidas = getConcluidas();

  let total = 0;
  let feitas = 0;

  data.forEach(sem => {
    sem.materias.forEach(mat => {
      total++;
      if (concluidas[mat.id]) feitas++;
    });
  });

  const faltam = total - feitas;

  document.getElementById("total").textContent = total;
  document.getElementById("concluidas").textContent = feitas;
  document.getElementById("faltam").textContent = faltam;
}

function render() {
  const app = document.getElementById("app");
  app.innerHTML = "";

  const concluidas = getConcluidas();

  data.forEach(sem => {
    const container = document.createElement("div");
    container.className = "semestre";

    const title = document.createElement("h2");
    title.textContent = sem.semestre;

    const grid = document.createElement("div");
    grid.className = "grid";

    sem.materias.forEach(mat => {
      const card = document.createElement("div");
      card.className = "card";

      if (concluidas[mat.id]) {
        card.classList.add("concluida");
      }

      card.onclick = () => toggleMateria(mat.id);

      card.innerHTML = `
        <div>${mat.nome}</div>
        <div class="carga">${mat.tipo}</div>
        <div class="carga">${mat.carga}</div>
        <div class="check">${concluidas[mat.id] ? "✔" : ""}</div>
      `;

      grid.appendChild(card);
    });

    container.appendChild(title);
    container.appendChild(grid);
    app.appendChild(container);
    updateDashboard();
  });
}

render();
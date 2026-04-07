# 📚 Grade Curricular Interativa

Aplicação web simples para visualização e acompanhamento de progresso em uma grade curricular. Permite marcar disciplinas como concluídas, visualizar progresso geral e organizar matérias por semestre.

Acessível em: https://github.com/WanCarvalho/gestao-materias-faculdade.git

---

## 🚀 Funcionalidades

<!-- * 📌 Listagem de disciplinas por semestre (via JSON) -->
* ✅ Marcar/desmarcar disciplinas como concluídas
* 💾 Persistência automática no `localStorage`
* 📊 Dashboard com:

  * Total de disciplinas
  * Quantidade concluída
  * Quantidade restante
<!-- * 🎨 Diferenciação visual:

  * Obrigatórias (verde)
  * Optativas (laranja) -->
* 📱 Layout responsivo (mobile/tablet/desktop)

---

## 🧠 Funcionamento

* O estado das disciplinas concluídas é salvo no `localStorage` usando a chave:

```
materias_concluidas
```

* Cada disciplina é identificada por um `id` único
* O dashboard é recalculado a cada renderização

---

## 🔧 Possíveis Melhorias

* 🔒 Controle de pré-requisitos entre disciplinas
* 📈 Barra de progresso por semestre
* 📊 Gráficos (ex: Chart.js)
* ☁️ Persistência em backend (API/Laravel)
* 👤 Multiusuário
* 📤 Exportação de progresso

---

## 📝 Licença

Uso livre para fins educacionais e pessoais.

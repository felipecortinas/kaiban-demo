# 🧠 Demo KaibanJS – Agentes de IA para Planejamento de Projetos

Este repositório demonstra o uso do **KaibanJS** na criação de uma equipe de agentes de IA especializados em planejamento e gerenciamento de projetos.

---

## ✅ Pré-requisitos

- Node.js (versão 16 ou superior)  
- Git instalado  
- Chave de API da OpenAI válida

---

## ⚡ Instalação Rápida (via Fork)

1. Faça um fork deste repositório clicando em **“Fork”** no canto superior direito

2. Clone o repositório forkado:
```bash
git clone https://github.com/seu-usuario/kaiban-demo
cd kaiban-demo
````

3. Instale as dependências:

```bash
npm install
```

4. Copie o arquivo de ambiente e adicione sua API Key:

```bash
cp .env.example .env
```

Abra o arquivo `.env` e insira sua chave da OpenAI.

5. Inicie o servidor:

```bash
npm run kaiban
```

6. Acesse no navegador:

```
http://localhost:5174
```

---

## 🛠️ Instalação Manual (Criando do Zero)

1. Crie a pasta do projeto:

```bash
mkdir meu-projeto-kaiban
cd meu-projeto-kaiban
```

2. Inicie um projeto Vite com React:

```bash
npx create-vite@latest . --template react
```

3. Instale as dependências do projeto:

```bash
npm install
```

4. Adicione o KaibanJS:

```bash
npm install kaibanjs
```

5. Inicialize o KaibanJS:

```bash
npx kaibanjs@latest init
```

6. Copie o arquivo `team.kban.js` deste repositório para a raiz do seu projeto.

7. Crie o arquivo `.env` e insira sua chave da OpenAI:

```
VITE_OPENAI_API_KEY=sua-chave-api-aqui
```

8. Execute o servidor:

```bash
npm run kaiban
```

---

## 🗂️ Estrutura do Projeto

* `.env` – Chave de API e configurações
* `team.kban.js` – Definições dos agentes e tarefas
* `.kaiban/` – Configurações internas do KaibanJS

---

## 🤖 Agentes Inteligentes

1. **Lucas Carvalho** – Planejador de Projetos

   * Cria planos detalhados e orientados por entregas
   * Expertise em metodologias ágeis (Scrum, Kanban)

2. **Marina Souza** – Analista de Riscos

   * Avalia riscos operacionais e legais
   * Foco em conformidade com LGPD

---

## ▶️ Como Usar

1. Acesse a aplicação no navegador
2. Clique em **“Start Workflow”**
3. Acompanhe os agentes em tempo real
4. Veja o resultado final na seção de resultados

---

## ⚠️ Notas Importantes

* Nunca compartilhe sua chave da OpenAI publicamente
* O primeiro processamento pode demorar alguns segundos
* Os agentes executam as tarefas em sequência
* Após qualquer edição no `team.kban.js`, reinicie o servidor

---

## ✏️ Personalização de Agentes

Para personalizar seus agentes, edite o arquivo `team.kban.js`:

* Defina claramente o papel de cada agente
* Especifique as tarefas atribuídas a cada um
* Forneça instruções e contextos relevantes
* Reinicie o servidor após as alterações

---

## 📚 Suporte

Para mais informações sobre o KaibanJS, visite:
🔗 [https://kaibanjs.com](https://kaibanjs.com)

```

---

Se quiser, posso também criar uma **versão em inglês** ou adicionar **badges como `build passing`, `MIT license`, `OpenAI powered`**, etc. Me avisa que eu te mando na hora.
```

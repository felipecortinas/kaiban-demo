# Demo KaibanJS - Agentes de IA para Planejamento de Projetos

Este é um projeto demonstrativo que utiliza KaibanJS para criar uma equipe de agentes de IA especializados em planejamento de projetos.

## Pré-requisitos

- Node.js instalado (versão 16 ou superior)
- Uma chave de API da OpenAI
- Git instalado

## Instalação Rápida (Via Fork)

1. Faça um fork deste repositório clicando no botão "Fork" no canto superior direito

2. Clone seu fork:
```bash
git clone https://github.com/seu-usuario/kaiban-demo
cd kaiban-demo
```

3. Instale as dependências:
```bash
npm install
```

4. Copie o arquivo de ambiente e configure sua chave API:
```bash
cp .env.example .env
```
Edite o arquivo `.env` e adicione sua chave API da OpenAI

5. Inicie o servidor:
```bash
npm run kaiban
```

6. Acesse a aplicação no navegador:
```
http://localhost:5174
```

## Instalação Manual (Criando do Zero)

Se preferir criar o projeto do zero:

1. Crie uma nova pasta para o projeto e acesse ela:
```bash
mkdir meu-projeto-kaiban
cd meu-projeto-kaiban
```

2. Inicialize um novo projeto Vite com React:
```bash
npx create-vite@latest . --template react
```

3. Instale as dependências:
```bash
npm install
```

4. Instale o KaibanJS:
```bash
npm install kaibanjs
```

5. Inicialize o KaibanJS:
```bash
npx kaibanjs@latest init
```

6. Copie o arquivo `team.kban.js` deste repositório para a raiz do seu projeto

7. Crie um arquivo `.env` na raiz do projeto e adicione sua chave da OpenAI:
```
VITE_OPENAI_API_KEY=sua-chave-api-aqui
```

8. Inicie o servidor:
```bash
npm run kaiban
```

## Estrutura do Projeto

- `.env` - Arquivo com as variáveis de ambiente (chave da API)
- `team.kban.js` - Definição dos agentes e suas tarefas
- `.kaiban/` - Diretório com as configurações do KaibanJS

## Agentes Disponíveis

1. **Lucas Carvalho (Planejador de Projetos)**
   - Responsável por criar planos detalhados de projeto
   - Experiência em gerenciamento de projetos ágeis

2. **Marina Souza (Analista de Riscos)**
   - Especialista em avaliação de riscos
   - Foco em conformidade legal e LGPD

## Como Usar

1. Acesse a aplicação no navegador
2. Clique em "Start Workflow"
3. Acompanhe o trabalho dos agentes em tempo real
4. Veja o resultado final na seção de resultados

## Observações Importantes

- Mantenha sua chave API segura e nunca a compartilhe
- O primeiro processamento pode levar alguns segundos
- Os agentes trabalham de forma sequencial, um após o outro
- Sempre que fizer alterações no arquivo `team.kban.js`, reinicie o servidor

## Personalizando os Agentes

Você pode personalizar os agentes editando o arquivo `team.kban.js`. Lembre-se de:
1. Definir claramente o papel e objetivo de cada agente
2. Especificar as tarefas que cada agente deve realizar
3. Fornecer inputs relevantes para as tarefas
4. Reiniciar o servidor após as alterações

## Suporte

Para mais informações sobre o KaibanJS, visite:
https://kaibanjs.com

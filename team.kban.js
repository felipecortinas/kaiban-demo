import { Agent, Task, Team } from 'kaibanjs';

// Define agents
const projectPlanner = new Agent({
    name: 'Lucas Carvalho',
    role: 'Planejador de Projetos',
    goal: 'Criar um plano detalhado para o desenvolvimento e implementação de agentes de IA.',
    background: 'Especialista em gerenciamento de projetos ágeis e integração de sistemas de IA.',
    tools: [] // Ferramentas podem ser adicionadas conforme necessário
});

const riskAnalyst = new Agent({
    name: 'Marina Souza',
    role: 'Analista de Riscos',
    goal: `Identificar possíveis riscos técnicos, organizacionais e legais no projeto 
           e propor estratégias para mitigá-los.`,
    background: 'Especialista em avaliação de riscos para projetos de tecnologia e conformidade legal (LGPD).',
    tools: []
});

// Define tasks
const projectPlanningTask = new Task({
    description: `Criar um plano detalhado do projeto com etapas, cronograma e entregáveis, 
                  baseado no input do cliente.
                  inputDoCliente: {inputDoCliente}`,
    expectedOutput: 'Plano de projeto completo com etapas, prazos e marcos definidos.',
    agent: projectPlanner
});

const riskAssessmentTask = new Task({
    description: `Analisar o plano de projeto e identificar possíveis riscos. 
                  Sugerir estratégias de mitigação para minimizar os impactos.
                  planoDeProjeto: {planoDeProjeto}`,
    expectedOutput: 'Relatório de avaliação de riscos com recomendações de mitigação.',
    agent: riskAnalyst
});

// Define team
const team = new Team({
    name: 'Equipe de Implementação de Agentes de IA',
    agents: [projectPlanner, riskAnalyst],
    tasks: [projectPlanningTask, riskAssessmentTask],
    inputs: {
        inputDoCliente: `Nome do Projeto: Implementação de um Sistema de Agentes de IA para Atendimento ao Cliente. 
Objetivos: 
- Desenvolver e implementar agentes de IA capazes de responder a dúvidas comuns de clientes, processar solicitações de suporte e realizar escalonamentos para equipes humanas, quando necessário. 
- Reduzir o tempo médio de resposta no atendimento ao cliente em 30%. 
- Garantir integração com o sistema de CRM existente.

Cronograma: 6 meses.

Orçamento: R$ 150.000.

Entregáveis Principais: 
- Protótipo funcional de agente de IA treinado com dados históricos de atendimento ao cliente. 
- Sistema de integração com o CRM (HubSpot). 
- Interface administrativa para monitorar e ajustar as interações do agente. 
- Relatórios mensais automatizados sobre desempenho do agente (taxa de resolução, feedback dos clientes, etc.).

Restrições: 
- Garantir que o agente opere em múltiplos canais (chat no site, WhatsApp e e-mail). 
- Treinamento inicial do modelo de IA deve ser feito com os dados fornecidos pelo departamento de atendimento ao cliente, respeitando as leis de privacidade (LGPD). 
- O sistema precisa estar preparado para atender uma média de 1.000 interações simultâneas.

Recursos: 
- Equipe de Machine Learning composta por 2 desenvolvedores e 1 especialista em IA. 
- Consultor externo para integração com CRM. 
- Banco de dados histórico de 2 anos de interações com clientes.

Stakeholders: 
- Ana Martins (Gerente de Atendimento ao Cliente). 
- Rafael Oliveira (Gerente de TI). 
- Pedro Mendes (Analista de Negócios).

Requisitos Especiais: 
- O agente deve ser capaz de lidar com linguagem coloquial e possíveis erros gramaticais. 
- Feedback dos clientes deve ser coletado após cada interação para aprimoramento contínuo do modelo.

Riscos e Considerações: 
- Risco de inconsistências nos dados históricos utilizados para treinamento do modelo. 
- Possíveis atrasos devido à integração com o CRM. 
- Necessidade de ajustes contínuos durante os primeiros 3 meses após o lançamento.`
    },
    env: {
        OPENAI_API_KEY: import.meta.env.VITE_OPENAI_API_KEY || 'YOUR_OPENAI_API_KEY_HERE'
    }
});

export default team;

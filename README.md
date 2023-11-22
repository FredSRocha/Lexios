![Orientador](https://img.shields.io/badge/Orientador-José_Humberto_Cruvinel_Resende_Júnior-ff6a2c)
![Squad LegalLab-UNIBH](https://img.shields.io/badge/Squad-LegalLab_UNIBH-362185)
![Ânima Educação](https://img.shields.io/badge/Ânima_Educação-2023-248fd1)
[![Linkedin](https://img.shields.io/badge/Author-fredsrocha-yellow?style=&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/fredsrocha/)
![Assistente Virtual Jurídico](https://img.shields.io/badge/Assistente_Virtual-Jurídico-df2a2a)
[![Demo Público Interno](https://img.shields.io/badge/Demo_Público_Interno-Aqui-royalblue)](https://lexios.jusblog.com/)
[![Demo Público Externo](https://img.shields.io/badge/Demo_Público_Externo-Aqui-lightgreen)](https://web-chat.global.assistant.watson.appdomain.cloud/preview.html?backgroundImageURL=https%3A%2F%2Fus-south.assistant.watson.cloud.ibm.com%2Fpublic%2Fimages%2Fupx-b63014ca-b1d6-4e71-aca8-9b2ec1601c61%3A%3Ad25b661e-4879-4bd6-b530-4e301aed2bef&integrationID=a715c8a6-ca0d-4519-a67f-48b657fd9d75&region=us-south&serviceInstanceID=b63014ca-b1d6-4e71-aca8-9b2ec1601c61)
![Versãon](https://img.shields.io/badge/Versão-1.0-black)
[![Licença MIT](https://img.shields.io/badge/Licença-MIT-success)](https://github.com/FredSRocha/Lexios/blob/main/LICENSE)

[![Pitch](https://lexios.jusblog.com/assets/share/poster.png)](https://youtu.be/4t6Mq7rlKk4)

👀 Assista Lexios [Vídeo](https://youtu.be/4t6Mq7rlKk4)

# LEXIOS: A Lei Ao Seu Alcance

**EQUIPE**
*Antônio Mosquera*
*Frederico Stefano Rocha*
*Hugo Ferreira Menezes*
*João Pedro Santos Regis Teixeira*
*Nayara dos Anjos Nicacio*
*Vinicius Sanches Weber Brandão*

**ORIENTADOR**: *José Humberto Cruvinel Resende Júnior*

**RESUMO:** A proposta da Squad LegalLab-UNIBH visa um canal único de triagem, para esclarecimentos de dúvidas jurídicas do Público Interno (docentes e gestores do Grupo Ânima) e para seleção de demandas por serviços no NPJ do Público Externo (comunidade). Utilizou-se o WatsonX Assistant da IBM para integrar um Chatbot híbrido, isto é, baseado em regras e também Inteligência Artificial. Por fim, foi feito um WebApp responsivo para interpretar dúvidas imediatas do Público Interno, a fim de auxiliar o monitoramento das informações que serão cadastradas no sistema NetLex, visando registros mais assertivos das demandas. No futuro, espera-se que o próprio assistente virtual faça o monitoramento das informações recebidas do caso integrado ao registro no NetLex.

![Watson Legal NPJ UNI-BH](https://lexios.jusblog.com/assets/share/ibm-watson-legal-npj-unibh.png)

# Atividades Desenvolvidas

## Pesquisa e Planejamento

- Participação em todas as reuniões de planejamento.
- Estudo profundo da documentação do IBM Watson. **Disponível em:**  https://cloud.ibm.com/developer/watson/documentation
- Definição de funcionalidades do chatbot (IBM Cloud Functions e integrações).

## Actions do IBM Cloud Functions by Node.js 20
![Logo Lexios](https://lexios.jusblog.com/assets/share/ibm-cloud-functions-is-deprecated.png)
**Visão geral da depreciação**: https://cloud.ibm.com/docs/openwhisk?topic=openwhisk-dep-overview

### CreateDatabaseAndDocument

```sh
/**
  *
  * main() será executado quando você chamar essa ação
  *
  * @param As ações do Cloud Functions aceitam um único parâmetro, que deve ser um objeto JSON.
  *
  * @return A saída dessa ação, que deve ser um objeto JSON.
  *
  */
const { CloudantV1 } = require('@ibm-cloud/cloudant');
const { IamAuthenticator } = require('ibm-cloud-sdk-core');

const authenticator = new IamAuthenticator({
  apikey: '<API_KEY>'
});

const cloudant = CloudantV1.newInstance({
  authenticator: authenticator
});

cloudant.setServiceUrl('<CLOUDANT_URL>');

const dbName = '<DB_NAME>';

async function createDatabase() {
  try {
    await cloudant.putDatabase({ db: dbName });
    console.log(`Database ${dbName} created.`);
  } catch (error) {
    if (error.status === 412) {
      console.log(`Database ${dbName} already exists.`);
    } else {
      throw error;
    }
  }
}

async function createDocument(doc) {
  try {
    let response = await cloudant.postDocument({
      db: dbName,
      document: doc,
    });
    console.log('Document created with id:', response.result.id);
    return response.result;
  } catch (error) {
    throw error;
  }
}

async function main({full_name, personal_id, identity_number, address, home_phone, cell_phone, cell_phone_whatsApp, date_of_birth, genre, profession, monthly_income, client_unibh_npj, about_unibh_npj, partner_gender, type_relationship, date_relationship_start, date_relationship_end, children_partner, number_children_partner, partner_name, partner_address, partner_date_of_birth, partner_cpf, partner_identity_number, partner_email, partner_telephone, partner_deceased, partner_date_of_death, children_another_partner, consensual_end, children_live_with, partner_monthly_income, been_victim_aggression, detail_aggression}) {
  await createDatabase();
  const newDoc = {
    _id: personal_id,
    name: full_name,
    cpf: personal_id,
    identity_number: identity_number,
    address: address,
    home_phone: home_phone,
    cell_phone: cell_phone,
    cell_phone_whatsApp: cell_phone_whatsApp,
    date_of_birth: date_of_birth,
    genre: genre,
    profession: profession,
    monthly_income: monthly_income,
    client_unibh_npj: client_unibh_npj,
    about_unibh_npj: about_unibh_npj,
    partner_gender: partner_gender,
    type_relationship: type_relationship,
    date_relationship_start: date_relationship_start,
    date_relationship_end: date_relationship_end,
    children_partner: children_partner,
    number_children_partner: number_children_partner,
    partner_name: partner_name,
    partner_address: partner_address,
    partner_date_of_birth: partner_date_of_birth,
    partner_cpf: partner_cpf,
    partner_identity_number: partner_identity_number,
    partner_email: partner_email,
    partner_telephone: partner_telephone,
    partner_deceased: partner_deceased,
    partner_date_of_death: partner_date_of_death,
    children_another_partner: children_another_partner,
    consensual_end: consensual_end,
    children_live_with: children_live_with,
    partner_monthly_income: partner_monthly_income,
    been_victim_aggression: been_victim_aggression,
    detail_aggression: detail_aggression
  };
  const createdDoc = await createDocument(newDoc);
}
```

**RESULTADO**: Registra as informações da conversa no banco de dados Cloudant NoSQL.



### CustomerConsultationTJMG

```sh
/**
  *
  * main() será executado quando você chamar essa ação
  *
  * @param As ações do Cloud Functions aceitam um único parâmetro, que deve ser um objeto JSON.
  *
  * @return A saída dessa ação, que deve ser um objeto JSON.
  *
  */
function main({ name, district }) {
	let comrCodigo = district;
	switch (comrCodigo) {
		case 'Belo Horizonte':
			comrCodigo = 24
			break;
		case 'Contagem':
			comrCodigo = 79
			break;
		// ...
		default:
			comrCodigo = 24
	}
	if (name) {
	  return { body: `<div style="text-align:center;"><p><b>ATENÇÃO! Este link carregará uma nova página. Clique-o para continuar.</b></p><a href="https://www4.tjmg.jus.br/juridico/sf/proc_resultado_nome.jsp?nomePessoa=${name}&comrCodigo=${comrCodigo}&numero=1" style="color:#1a73e8;text-decoration:none;font-weight:700;font-size:16px">Abrir todos os pocessos de ${name}</a></div>` }
	} 
}
```

**RESULTADO**: Redireciona o usuário não advogado para a consulta de um processo na página ofical do TJMG pelo seu nome.

### LayerConsultationTJMG

```sh
/**
  *
  * main() será executado quando você chamar essa ação
  *
  * @param As ações do Cloud Functions aceitam um único parâmetro, que deve ser um objeto JSON.
  *
  * @return A saída dessa ação, que deve ser um objeto JSON.
  *
  */
function main({ name, district, oab_number, oab_type, oab_uf }) {
    let comrCodigo = district;
    switch (comrCodigo) {
      case 'Belo Horizonte':
        comrCodigo = 24
        break;
      case 'Contagem':
        comrCodigo = 79
        break;
      default:
        comrCodigo = 24
    }
    if (name) {
        return { body: `<div style="text-align:center;"><p><b>ATENÇÃO! Este link carregará uma nova página. Clique-o para continuar.</b></p><a href="https://www4.tjmg.jus.br/juridico/sf/proc_resultado_nome_advogado.jsp?nomeAdvogado=${name}&comrCodigo=${comrCodigo}&numero=1" style="color:#1a73e8;text-decoration:none;font-weight:700;font-size:16px">Abrir todos os pocessos de ${name}</a></div>` }
    } else if (oab_number && oab_type && oab_uf) {
       return { body: `<div style="text-align:center;"><p><b>ATENÇÃO! Este link carregará uma nova página. Clique-o para continuar.</b></p><a href="https://www4.tjmg.jus.br/juridico/sf/proc_resultado_oab.jsp?codigoOAB=${oab_number}&tipoOAB=${oab_type}&ufOAB=${oab_uf}&comrCodigo=${comrCodigo}&numero=1" style="color:#1a73e8;text-decoration:none;font-weight:700;font-size:16px">Abrir o pocessos da OAB: ${oab_number}${oab_type}/${oab_uf.toUpperCase()}</a></div>` }
    }
}
```

**RESULTADO**: Faz uma consulta como advogado(a) usando o seu nome ou suas credenciais da OAB na página ofical do TJMG.

### ProcessConsultationTJMG

```sh
/**
  *
  * main() será executado quando você chamar essa ação
  *
  * @param As ações do Cloud Functions aceitam um único parâmetro, que deve ser um objeto JSON.
  *
  * @return A saída dessa ação, que deve ser um objeto JSON.
  *
  */
function main({ district, process_number }) {
    let comrCodigo = district;
    switch (comrCodigo) {
      case 'Belo Horizonte':
        comrCodigo = 24
        break;
      case 'Contagem':
        comrCodigo = 79
        break;
      default:
        comrCodigo = 24
    }
   return { body: `<div style="text-align:center;"><p><b>ATENÇÃO! Este link carregará uma nova página. Clique-o para continuar.</b></p><a href="https://www4.tjmg.jus.br/juridico/sf/proc_resultado.jsp?comrCodigo=${comrCodigo}&numero=1&listaProcessos=${process_number}" style="color:#1a73e8;text-decoration:none;font-weight:700;font-size:16px">Abrir o pocesso de nº ${process_number}</a></div>` } 
}
```

**RESULTADO**: Redireciona o usuário, advogado(a) ou não, para uma consulta pelo número de um processo na página ofical do TJMG.

### IdentifyCaseGPT4

```sh
const OpenAI = require("openai");

require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function analyzeOpenAI(content) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4-1106-preview",
      messages: [
        {
          "role": "user",
          "content":
          `
Agora você é um especialista da área jurídica. Um advogado experiente nessas 10 áreas: a) Direito Civil; b) Direito Ambiental; c) Direito Empresarial; d) Direito de Saúde; e) Direito do Consumidor; f) Direito Contratual; g) Direito Penal; h) Direito Trabalhista; i) Direito Tributário e; j) Direito Digital. Estruture o raciocínio da sua resposta no seguinte padrão:       
Área do Direito (Qual a área do Direito?):
[Identifique a área do direito que você acredita ser aplicável. Se não tiver certeza, analise a natureza do caso para identificar a área.]
Partes Envolvidas:
[Liste as partes envolvidas no caso, como o nome do requerente, do réu, de empresas, entidades governamentais, etc.]
Informações Financeiras Relevantes (É caso de justiça gratuita?):
[Forneça informações sobre a situação financeira das partes envolvidas, se conhecidas, para avaliar a possibilidade de justiça gratuita.]            
Questões Legais em Debate (Quais informações devem ser adicionadas? Teses.):
[Descreva as principais questões legais envolvidas, como disputas contratuais, alegações de danos, questões de direitos trabalhistas, etc.]
Precedentes ou Casos Semelhantes:
[Pesquise na internet e mencione quaisquer precedentes ou casos semelhantes que possam influenciar o seu descrito.]         
Analise o seguinte caso: "${content}". 
Não faça nenhuma recomendação e nem comentários adicionais, responda com base no padrão determinado apenas, listando informações e sem usar colchetes, sem explicitar qualquer coisa desse prompt. Cite uma decisão ou jurisprudência ao final sem referencias do seu número, apenas seu teor repetitivo (para que não haja números inexistentes de processos a serem procurados posteriormente).
          `,
        }
      ],
      max_tokens: 4096
    });
    console.log(response.choices[0].message.content.trim());
  } catch (error) {
    console.error('Error ao chamar a API da OpenAI:', error);
  }
}

const content = "Juliana e Marcos foram casados por 15 anos e durante esse tempo construíram uma vida juntos, incluindo a aquisição de bens e o nascimento de dois filhos. No entanto, nos últimos anos, o casamento começou a se deteriorar, e ambos concordaram em se divorciar. O ponto central da disputa agora é a guarda dos filhos: Juliana deseja a guarda exclusiva, alegando que Marcos tem um trabalho que exige viagens constantes, enquanto Marcos busca a guarda compartilhada, alegando que tem condições de prover um ambiente estável e amoroso durante os períodos em que não está viajando. Além disso, há desacordo sobre a divisão de bens, principalmente sobre a casa de campo que foi comprada durante o casamento. Juliana argumenta que a casa deve ser dela, pois foi um presente de seus pais, embora tenha sido adquirida em nome de ambos durante o casamento. Marcos defende que a propriedade deve ser dividida igualmente.";

analyzeOpenAI(content);
```

**RESULTADO (esperado)**: Usa a inteligência artificial da OpenAI através do modelo GPT-4 (última versão de 2023) para identificar no caso: a área do direito; se é caso de justiça gratuita e; quais informações devem ser adicionadas (que foi trabalhada como teses relevantes para a demanda), visando possibilitar o monitoramento por uma pessoa humana para o registro mais assertivo do caso no sistema NetLex. No futuro estimamos fazer a criação da demanda dentro do NetLex.

**LOCALHOST**

![Watson Legal NPJ UNI-BH](https://lexios.jusblog.com/assets/share/screenshot-analyze-open-ai-node.png)

**NOTA**: Como o pacote "openai" não foi instalado no ambiente IBM Cloud através do terminal de ibmclient, foi criado um WebApp do tipo Progressive Web App (PWA) para testar a integração ([Demo](https://lexios.jusblog.com/)) a fim de validar a utilidade da IA generativa como auxiliar de docentes, gestores e da área administrativa na análise de casos para melhor resultado dos registros no sistema NetLex.

## Desenvolvimento

- Configuração do ambiente de desenvolvimento.
- Programação do Fluxo de Conversação baseado no documento oficial da
primeira fase do projeto (Squad anterior).
- Programação de interações do chatbot com o IBM Cloud Functions e Cloudant Database.
- Integração com sistemas externos (WhatsApp) pelo IBM Cloud através da **TWILIO**: https://pages.twilio.com/messaging-sales-pt-latam-1
- Testes e atualizações.

### Fluxo de Conversação

**PERGUNTA BASE**

A pergunta base ativa a "action" do assistente virtual treinado para realizar uma triagem específica em uma área do Direito.

**Direito de Família**

- "Quero me divorciar"
- "Gostaria de ajuda com um caso de família"
- "Tenho problema com o meu ex-parceiro"
- "Quero me separar e tenho filhos"

**Direito do Consumidor**

- "Comprei um produto e parou de funcioar"
- "Comprei um produto e ele não foi entregue"
- "O meu nome foi negativado no SERASA"

**Direito Penal**

- "Fui vítima de furto"
- "Fui vítima de roubo"
- "sofri agressão física"
- "sofri violência"

**Direito do Trabalho**
- "Sou vítima de assédio moral no trabalho"
- "Quero receber horas extras"
- "Fui demitido injustamente"
- "Não tiro férias há anos"

___

**Estudo de Caso: Divórcio (Direito de Família - Fluxo de Conversação)**
Nome completo: ...
CPF: ...
Identidade: ...
Endereço completo: ...
Telefone residencial: ...
Telefone Celular: ...
Possui WhatsApp? ...
Data de nascimento: ...
Gênero do usuário: ...
Profissão: ...
Renda: ...
Já foi cliente do NPJ do UniBH? ...
Como teve conhecimento do Núcleo de Prática Jurídica do Unibh? Se indicação, informar nome de quem indiciou e se aluno, funcionário ou cliente: ...
Gênero do parceiro: ...
Qual o tipo de relação? ...
Quando teve início a relação? ...
Quando terminou a relação? ...
Possuem filhos juntos? ...
Quantos filhos? ...
Dados gerais da pessoa que pretende processar:
Nome completo: ...
Endereço completo: ...
Data de Nascimento: ...
CPF: ...
RG: ...
Email: ...
Telefone: ...
A pessoa é falecida? ...
Data do óbito (se falecida): ...
Alguém possui filhos com outro parceiro? ...
A relação foi desfeita de modo amigável? ...
Com quem moram os filhos? ...
Qual o valor médio da renda mensal do seu parceiro? ...
Você já foi vítima de agressão física, moral ou psicológica? ...
Descreva com detalhes a agressão sofrida (se houve agressão): ...

### Cloudant Database

**Document.json**: o assistente virtual faz perguntas e registra as informações de cada demanda no banco de dados para posterior análise de docentes, gestores e da àrea administrativa do Grupo Ânima Educação.

```sh
{
 "id": "97387003964",
 "key": "97387003964",
 "value": {
  "rev": "1-8424321514048413225597bb6dc28f69"
 },
 "doc": {
  "_id": "97387003964",
  "_rev": "1-8424321514048413225597bb6dc28f69",
  "name": "Lucy Fernandes Maciel",
  "cpf": "97387003964",
  "identity_number": "480262494",
  "address": "Avenida Professor Mário Werneck, 1685, Estoril, Belo Horizonte, MG, 30455-610",
  "home_phone": "2426446330",
  "cell_phone": "24997502716",
  "cell_phone_whatsApp": "Sim",
  "date_of_birth": "1994/05/20",
  "genre": "Feminino",
  "profession": "Gerente de Vendas",
  "monthly_income": "5000",
  "client_unibh_npj": "Sim",
  "about_unibh_npj": "Conheci o NPJ pelo Instagram e o Lucas me indicou",
  "partner_gender": "Masculino",
  "type_relationship": "Noivos",
  "date_relationship_start": "5/20/2000",
  "date_relationship_end": "1/13/2023",
  "children_partner": "Sim",
  "number_children_partner": "3",
  "partner_name": "Victor Yago Monteiro",
  "partner_address": "Av. Afonso Vaz de Melo, 465, Barreiro, Belo Horizonte, MG, 30640070",
  "partner_date_of_birth": "9/13/1958",
  "partner_cpf": "44993808208",
  "partner_identity_number": "399349789",
  "partner_email": "yago.monteiro@gmail.com",
  "partner_telephone": "81997983612",
  "partner_deceased": "Não",
  "partner_date_of_death": "Não se aplica",
  "children_another_partner": "Não",
  "consensual_end": "Sim",
  "children_live_with": "Lucy Fernandes Maciel",
  "partner_monthly_income": "8.000",
  "been_victim_aggression": "Sim",
  "detail_aggression": "Ele me xingava alto ao acordar e todos os vizinhos escutavam"
 }
}
```

## Soluções

### Público interno (docentes, gestores e área administrativa)

**Necessidades:** Durante o uso do NetLex, o público possui dificuldades de definir: a área do direito; se é caso de justiça gratuita e; quais informações devem ser adicionadas (teses elaboradas). É importante que a solução faça a triagem, ajudando a definir o direcionamento correto da demanda para o sistema NetLex. No futuro estimamos fazer a criação da demanda dentro do NetLex.

![Chatbot Ânima Educação](https://lexios.jusblog.com/assets/share/screenshot-chatbot-anima-desktop.png)

Resultado do prompt para definir a: a) área do direito; b) se é caso de justiça gratuita e; c) informações relevantes acerca do caso (como as teses recorrentes em demandas de sucesso).

![Chatbot Ânima Educação](https://lexios.jusblog.com/assets/share/chatbot-anima-mobile-use.gif)

**Teste o WebApp com integração GPT-4 da OpenIA**

📱 [Demo - Público Interno](https://lexios.jusblog.com/) 📱

### Público externo (atendimento à sociedade - NPJ)

O WatsonX Assistant da IBM é usado para garantir que o acionamento do NPJ seja mais célere e automatizado, possibilitando assim o encaminhamento mais rápido e ordenado da demanda na instituição. Além disso, o assistente virtual faz a triagem da demanda a partir de perguntas, registrando informações do demandante para garantir que o preparo do caso seja iniciado antes mesmo da visita presencial do requerente ao NPJ.

![Chatbot NPJ](https://lexios.jusblog.com/assets/share/screenshot-chatbot-npj-desktop.png)

![Chatbot NPJ](https://lexios.jusblog.com/assets/share/screenshot-chatbot-npj-mobile.png)

**Teste o Lexios com o IBM WatsonX Assistant**

📱 [Demo - Público Externo](https://web-chat.global.assistant.watson.appdomain.cloud/preview.html?backgroundImageURL=https%3A%2F%2Fus-south.assistant.watson.cloud.ibm.com%2Fpublic%2Fimages%2Fupx-b63014ca-b1d6-4e71-aca8-9b2ec1601c61%3A%3Ad25b661e-4879-4bd6-b530-4e301aed2bef&integrationID=a715c8a6-ca0d-4519-a67f-48b657fd9d75&region=us-south&serviceInstanceID=b63014ca-b1d6-4e71-aca8-9b2ec1601c61) 📱

### WhatsApp

![Chatbot NPJ WhatsApp](https://lexios.jusblog.com/assets/share/chatbot-npj-whatsapp.gif)

### Conclusão

Olhando para trás, para o período de início dessa grande jornada, sinto uma
profunda sensação de realização e gratidão. Fazer parte do time LegalLab-UNIBH e trabalhar no desenvolvimento de um assistente virtual para o Grupo Ânima foi uma experiência que transcendeu o mero aspecto profissional, tocando um acorde
pessoal significativo em minha vida.

O desafio de estabelecer um canal único de triagem para questões jurídicas e
gerenciamento de demandas externas no Núcleo de Práticas Jurídicas e ainda
contribuir para o gerenciamento das demandas internas do Grupo Ânima foi tanto
um teste técnico quanto uma aventura intelectual. Professor Cruvinel, você é incrível, e sou eternamente grato por tudo!

Estou vibrando de empolgação para levar adiante cada lição aprendida neste projeto para a minha carreira futura como Bacharel em Direito, pois este projeto não foi apenas um marco acadêmico; foi um salto gigantesco na minha jornada pessoal e profissional, eu sinto a energia disso.

### Anexos

Todos os arquivos da entrega do Sprint 02 (15/11/23), como: MVP, logomarca, Canvas atualizado e pitch (video e apresentacao) encontram-se disponíveis no link abaixo:

https://drive.google.com/drive/folders/1ZzFNYlSysNyGMcHCQdmToBRceQI3afYr?usp=drive_link

---

![Logo](https://lexios.jusblog.com/assets/share/logo-black-croped.png)

![Chatbot NPJ](https://lexios.jusblog.com/assets/share/screenshot-chatbot-npj-desktop.png)

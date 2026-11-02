// What the "Ask about me" assistant knows. Each fact is one retrievable card: the search picks the best few for a
// question and only those go to the model, so keep each one self-contained and factual.
export const FACTS = [
  {
    id: 'summary',
    title: 'Summary',
    text: 'Abinesh Subramani is a senior backend engineer in Bengaluru, India, with 8+ years of experience building Java and Spring Boot microservices and Apache Spark pipelines on Azure, Kubernetes and Docker, mostly for fintech reconciliation and identity platforms. He works at Societe Generale and is the founder and sole engineer of RefinePoint, a reconciliation SaaS with agentic AI features.',
    tags: 'who about overview background profile experience years engineer role',
  },
  {
    id: 'socgen',
    title: 'Societe Generale (Nov 2022 – present)',
    text: 'Since November 2022 Abinesh has been a Specialist Software Engineer at Societe Generale Global Solutions Centre in Bengaluru. He led the design and delivery of a reconciliation platform (Java 17, Spring Boot, Apache Spark) that processes over 1.5 billion financial records a month at 99.9% availability, and owned it from architecture to production rollout and monitoring.',
    tags: 'current job employer company societe generale socgen bank work now built led',
  },
  {
    id: 'spark',
    title: 'Spark performance work',
    text: 'At Societe Generale Abinesh re-engineered Spark batch and streaming jobs, raising transformation throughput by 60% and cutting processing from hours to minutes. Multi-key matching of 7 million+ records completes in about 40 minutes.',
    tags: 'societe generale socgen bank spark performance optimization optimisation throughput big data batch streaming speed',
  },
  {
    id: 'orbiter',
    title: 'Orbiter: replacing Airflow',
    text: 'Abinesh built Orbiter, an in-house workflow orchestrator at Societe Generale that replaced Apache Airflow. It runs configurable multi-step pipelines, submitting each Spark job to Kubernetes as a SparkApplication (Spark Operator) when the previous step completes.',
    tags: 'societe generale socgen bank built orbiter airflow orchestrator orchestration workflow scheduler pipeline kubernetes spark operator',
  },
  {
    id: 'socgen-services',
    title: 'Microservices, APIs and events',
    text: 'At Societe Generale Abinesh built 10+ Spring Boot microservices for financial data onboarding, file routing and reconciliation; designed configuration-driven REST APIs that onboard new data sources without code changes, cutting onboarding time by 40%; and built event-driven flows on Azure Event Hub with end-to-end latency under 3 seconds, running on Kubernetes with autoscaling and zero-downtime deployments.',
    tags: 'societe generale socgen bank built microservices spring boot rest api event hub kafka events latency kubernetes azure onboarding',
  },
  {
    id: 'awards',
    title: 'Awards',
    text: 'Abinesh received the Pinnacle Performer Award in 2024 for owning the Spark reconciliation pipelines, and his team won Team of the Year 2024 for the front-office/back-office (FOBO) reconciliation platform, where he built the core matching and break management.',
    tags: 'societe generale socgen awards recognition achievements prize pinnacle performer team of the year',
  },
  {
    id: 'publicis',
    title: 'Publicis Sapient (Jul – Nov 2022)',
    text: 'From July to November 2022 Abinesh was a Software Engineer at Publicis Sapient, building Spring Boot microservices, CI/CD pipelines (Jenkins, GitLab CI, Azure DevOps) and Docker images for Kubernetes deployment.',
    tags: 'publicis sapient previous job ci cd devops docker jenkins',
  },
  {
    id: 'tcs',
    title: 'Tata Consultancy Services (Jul 2018 – Jul 2022)',
    text: 'From July 2018 to July 2022 Abinesh was an IT Analyst at Tata Consultancy Services. He built backend services and REST APIs in Java and Spring Boot for an authentication and access platform serving 300,000+ users, integrating Okta, OpenLDAP and CA Directory; built integrations for Ping Federate, Okta and CA Identity Manager (single sign-on, roles, access requests); and migrated legacy identity applications to Spring Boot microservices on Azure Kubernetes Service.',
    tags: 'tcs tata previous job first job identity iam sso okta ldap ping security authentication',
  },
  {
    id: 'refinepoint',
    title: 'RefinePoint (founder)',
    text: 'Abinesh is the founder and sole engineer of RefinePoint (refinepoint.com), a reconciliation SaaS for finance teams that still reconcile in spreadsheets. He built it end to end: 14 Spring Boot microservices behind Spring Cloud Gateway, Kafka events, PostgreSQL with a schema per service, Keycloak single sign-on and a React + TypeScript front end. It is live with Paddle subscription billing.',
    tags: 'refinepoint startup founder company product saas side project own business',
  },
  {
    id: 'engine',
    title: 'RefinePoint matching engine',
    text: 'Abinesh wrote RefinePoint\'s matching engine: multi-pass two-, three- and four-way matching, with data preparation pushed down to DuckDB SQL so it scales with volume, plus a custom expression language and plugin API so customers can define their own matching rules.',
    tags: 'matching engine reconciliation algorithm duckdb rules expression language',
  },
  {
    id: 'ai',
    title: 'AI in RefinePoint',
    text: 'RefinePoint\'s AI service runs on a provider-agnostic LLM layer (Anthropic Claude, OpenAI-compatible APIs and local models). It drafts reconciliations from plain English, suggests field mappings, triages exceptions, flags unusual runs and reads bank statements from PDFs and images. Every answer is validated against real workspace data, behind prompt-injection guards and rate limits.',
    tags: 'ai llm claude genai generative machine learning features artificial intelligence',
  },
  {
    id: 'agentic',
    title: 'Agentic AI',
    text: 'Abinesh built agentic AI in RefinePoint: a rule-builder agent that writes matching rules in a custom language by calling tools (validate a draft, test it on sample records, inspect lookup tables) for up to 8 steps, accepting an answer only once it validates; and an MCP server with 22 tools that lets external AI agents such as Claude Desktop design and run reconciliations under the user\'s own permissions.',
    tags: 'agentic agent agents tools tool calling mcp model context protocol autonomous',
  },
  {
    id: 'assistants',
    title: 'RAG chat assistants',
    text: 'RefinePoint has two chat assistants built by Abinesh: a RAG help bot that ranks 73 help articles with BM25 and answers only from the best sections with source links, skipping the model when nothing matches; and a results assistant that turns questions like "unmatched items over 10,000 from vendor X" into a validated filter, so the model never writes SQL.',
    tags: 'rag retrieval chatbot chat assistant help bot bm25 search sql',
  },
  {
    id: 'spring-ai',
    title: 'Spring AI docs assistant',
    text: 'Abinesh built a Spring AI docs assistant (Spring Boot 3.5, Java 21, Spring AI 1.1): retrieval-augmented question answering over Markdown documents with a vector store (file-based or PostgreSQL pgvector), tool calling and structured, sourced answers. It runs on Claude or, with one profile switch, on a local GGUF model through llama.cpp.',
    tags: 'spring ai project demo docs assistant pgvector vector store embeddings local model gguf llama',
  },
  {
    id: 'this-site',
    title: 'This chat',
    text: 'This assistant runs entirely in the visitor\'s browser: a small open model in GGUF format runs through llama.cpp compiled to WebAssembly (wllama), and a keyword search picks which facts about Abinesh to give it. Nothing is sent to a server.',
    tags: 'how does this work chat site website browser webassembly wasm gguf model privacy',
  },
  {
    id: 'skills',
    title: 'Skills',
    text: 'Languages and backend: Java (8 to 21), SQL, TypeScript, Spring Boot, Spring Cloud Gateway, Kafka, Azure Event Hub, Service Bus. Data: Apache Spark (on Kubernetes), PostgreSQL, MySQL, DuckDB, Airflow. AI: agentic AI, MCP, Spring AI, LLM integration, RAG, structured output, prompt-injection defence. Cloud and DevOps: Azure, Kubernetes (AKS), Docker, Jenkins, Azure DevOps, GitLab CI, Terraform, ELK, Prometheus, Grafana. Identity: OAuth 2.0, OIDC, SAML, Keycloak, Okta, Ping Federate.',
    tags: 'skills tech stack technologies languages tools java cloud azure kubernetes programming',
  },
  {
    id: 'education',
    title: 'Education and certification',
    text: 'Abinesh has a B.E. in Electrical and Electronics Engineering from RMK Engineering College (2014–2018) and is a Microsoft Certified Azure Administrator Associate (AZ-104).',
    tags: 'education degree college university study certification certificate azure az-104',
  },
  {
    id: 'contact',
    title: 'Contact',
    text: 'You can reach Abinesh by email at abineshsiva191@gmail.com, on LinkedIn at linkedin.com/in/abineshsubramani, or on GitHub at github.com/abinesh1006.',
    tags: 'contact email reach hire hiring linkedin github connect talk meet',
  },
];

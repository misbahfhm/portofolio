const projectsData = [

    /* ══════════════════════════════════════════
       COMPANY PROJECTS
    ══════════════════════════════════════════ */
    {
        type: "company",
        title: "Voyager",
        overview: `
Overview:
Voyager is an AI-driven internal platform developed to enhance operational efficiency within XLSmart by automating analytical workflows and integrating machine learning systems into production environments.

Problem:
Operational tasks and analytical processes were partially manual, creating bottlenecks and limiting scalability of ML initiatives.

Delivered Solution:
Designed and implemented end-to-end MLOps pipelines, including automated CI/CD workflows, containerized deployment, infrastructure as code, event-driven orchestration across AWS services, and built end-to-end custom AI Agent Builder platform that deployed in AWS Ecosystem.

Impact:
Improved deployment reliability, reduced manual intervention, and enabled scalable AI-driven automation aligned with enterprise operational standards.
        `,
        role: "MLOps Engineer",
        field: "Telecommunications",
        duration: "September 2025 - January 2026",
        responsibilities: "Built CI/CD pipelines for ML models, containerized services with Docker, managed infrastructure via Terraform and CloudFormation, implemented event-driven orchestration using AWS EventBridge and Lambda.",
        skills: "MLOps, Automation, Machine Learning Productionization, Cloud Architecture, CI/CD, Infrastructure as Code",
        tools: "Python, Docker, AWS (Bedrock, SageMaker GroundTruth, ECS, Lambda, API Gateway, EventBridge, S3, Transcribe, Polly), Terraform, CloudFormation, GitLab CI/CD",
        evidence: [
            "assets/company/xquisite_analitika_indonesia/Telecommunications/auto-labeling-job_architecture.png",
            "assets/company/xquisite_analitika_indonesia/Telecommunications/auto-labeling-job_initial-ui.png",
            "assets/company/xquisite_analitika_indonesia/Telecommunications/auto-labeling-job_review-ui.png",
            "assets/company/xquisite_analitika_indonesia/Telecommunications/auto-labeling-job_adjustment-ui.png",
            "assets/company/xquisite_analitika_indonesia/Telecommunications/auto-transcribe-job_aws-cloudformation-stack.png",
            "assets/company/xquisite_analitika_indonesia/Telecommunications/auto-transcribe-job_architecture.png",
            "assets/company/xquisite_analitika_indonesia/Telecommunications/ai-agent-builder_architecture.png",
            "assets/company/xquisite_analitika_indonesia/Telecommunications/ai-agent-builder-platform_ui.png",
            "assets/company/xquisite_analitika_indonesia/Telecommunications/ai-agent-builder-platform_monitoring.png",
        ]
    },

    {
        type: "company",
        title: "Medical Journal AI Chatbot",
        overview: `
Overview:
Medical Journal AI Chatbot is an AI-powered assistant designed to support medical doctors in conducting genetic research using an internal collection of scientific journals.
The system combines structured document processing, intelligent retrieval, and Generative AI to deliver accurate, context-aware, and reference-backed answers from medical literature.

Problem:
Large volumes of complex medical journals in unstructured PDF format, Time-consuming manual literature review, Difficulty extracting precise, context-specific insights, Lack of an internal intelligent system for structured knowledge retrieval, Risk of missing relevant references during research exploration

Delivered Solution:
Designed and implemented a PDF-to-structured-data ingestion pipeline to transform medical journals into AI-ready indexed data, Built an AI-powered chatbot service integrating Generative AI with document retrieval mechanisms (RAG-based architecture), Structured and optimized the database layer for efficient indexing and semantic search, Developed backend APIs to enable seamless chatbot interaction and system integration, Engineered and optimized prompts to improve response accuracy, contextual reasoning, and reference grounding for genetic research queries.

Impact:
Reduced manual literature review time significantly, Enabled faster discovery of relevant genetic research insights, Improved accuracy and contextual relevance of research answers, Provided reference-backed responses to support evidence-based medical decision-making, Enhanced research efficiency for medical professionals.
        `,
        role: "AI Engineer",
        field: "Biotechnology",
        duration: "April 2025 - May 2025",
        responsibilities: "Designed and developed an end-to-end AI chatbot system by building a medical journal PDF ingestion pipeline, structuring and optimizing the database for retrieval, integrating Generative AI models with backend APIs, and engineering prompts to ensure accurate medical and genetic question answering.",
        skills: "Generative AI, Retrieval-Augmented Generation (RAG), AI Engineering, Prompt Engineering, Data Engineering, Domain Knowledge Awareness",
        tools: "AWS Bedrock, AWS S3, LangChain, Qdrant, FastAPI, MySQL, Python, pdfplumber",
        evidence: [
            "assets/company/xquisite_analitika_indonesia/Biotechnology/chatbot.png",
            "assets/company/xquisite_analitika_indonesia/Biotechnology/knowledge_repository.png",
        ]
    },

    {
        type: "company",
        title: "Customer Service AI Chatbot",
        overview: `
Overview:
Customer Service AI Chatbot is an AI-powered assistant designed to provide accurate and timely company information through automated, scalable conversational support across web and messaging platforms.

Problem:
Customers required fast and consistent access to company information, while manual customer service processes limited scalability and response efficiency.

Delivered Solution:
Developed an end-to-end AI chatbot system by building automated web crawling and data ingestion pipelines, structuring and optimizing a PostgreSQL knowledge base, integrating Generative AI with backend APIs, refining prompt engineering for accurate retrieval, and deploying the solution across web and WhatsApp platforms.

Impact:
Enabled scalable, 24/7 automated customer support, improved response consistency and accuracy, and reduced dependency on manual customer service operations.        
        `,
        role: "AI Engineer",
        field: "Information Technology & Services",
        duration: "December 2024 – February 2025",
        responsibilities: "Developed a scalable AI chatbot by building automated data pipelines, optimizing database retrieval, integrating Generative AI with backend services, and deploying across web and WhatsApp channels.",
        skills: "Generative AI, Retrieval-Augmented Generation (RAG), AI Engineering, Prompt Engineering, Data Engineering, Database Management, Information Extraction from Web Sources",
        tools: "AWS Bedrock, AWS S3, AWS EventBridge, pgvector PostgreSQL, LangChain, Python, HTML Parser",
        evidence: [
            "assets/company/xquisite_analitika_indonesia/Information_Technology_&_Services/teddy_chatbot.png",
            "assets/company/xquisite_analitika_indonesia/Information_Technology_&_Services/teddy_chatbot-test.png",
        ]
    },

    {
        type: "poc",
        title: "Generative Avatar AI",
        overview: `
verview:
Generative Avatar AI is a multimodal AI-powered finance assistant that delivers domain-specific knowledge through a realistic digital avatar, combining Generative AI, voice modeling, and video synthesis for interactive user experiences.

Problem:
Traditional finance information systems lack engaging, human-like interaction and struggle to deliver domain-specific knowledge in a conversational and immersive format.

Delivered Solution:
Built an end-to-end multimodal AI system by developing automated data crawlers and ingestion pipelines for finance knowledge, fine-tuning avatar video generation and voice encoder models in an on-premise environment, and designing a pipeline that transforms user audio or audio-video input into synchronized AI-generated spoken and visual responses.

Impact:
Enabled an interactive, human-like AI finance assistant capable of delivering accurate domain knowledge with synchronized voice and video output, enhancing user engagement and modernizing digital customer interaction.        
        `,
        role: "AI Engineer",
        field: "Finance",
        duration: "February 2025 – March 2025",
        responsibilities: "...",
        skills: "Generative AI, Multimodal LLMs, AI Engineering, Prompt Engineering, Data Engineering, Model Fine-Tuning, Speech Processing",
        tools: "Azure OpenAI, LangChain, Transformers, PyTorch, F5-TTS, Qdrant, PostgreSQL, Python, MuseTalk, FastAPI",
        evidence: [
            "assets/company/xquisite_analitika_indonesia/Finance/avatar.png",
        ]
    },

    // {
    //     type: "company",
    //     title: "Nama Project",
    //     overview: `...`,
    //     role: "...",
    //     field: "...",
    //     role_description: "...",
    //     responsibilities: "...",
    //     skills: "...",
    //     tools: "...",
    //     evidence: []
    // },


    /* ══════════════════════════════════════════
       COMPETITIONS
    ══════════════════════════════════════════ */
    {
        type: "competition",
        title: "Big Data Hackathon BPS 2021",
        overview: "Participated in the Big Data Hackathon organized by BPS, a national-level competition focusing on the utilization of big data and data science to address real-world public and internal BPS challenges. Achieved the Favorite Winner award for proposing an innovative and well-structured research-based solution.",
        duration: "August 2021 - September 2021",
        achievement: "Favorite Winner",
        proposal: "Fraud Detection Pada Job Vacancy Menggunakan Imbalance Resampling Classification Models",
        held_by: "Badan Pusat Statistik (BPS)",
        responsibilities: "Led data preprocessing, feature engineering, and model development. Authored the research proposal and presented the solution to the judging panel.",
        methods: "Supervised Machine Learning, Feature Engineering, Exploratory Data Analysis, Model Evaluation & Validation",
        skills: "Data Science, Machine Learning, Research & Scientific Writing, Problem Framing, Analytical Thinking, Model Evaluation",
        tools: "Scikit-Learn, Pandas, Python",
        evidence: [
            "assets/competition/big_data_hackathon_bps_2021/1.png",
            "assets/competition/big_data_hackathon_bps_2021/2.png",
            "assets/competition/big_data_hackathon_bps_2021/hackathon_proposal.png",
        ]
    },


    /* ══════════════════════════════════════════
       THESIS RESEARCH
    ══════════════════════════════════════════ */
    {
        type: "thesis",
        title: "Metode DBSCAN Clustering Untuk Analisis Pola Penyebaran Petir di Pasuruan",
        year: "2020",
        level: "Undergraduate (S1)",
        institution: "Universitas Islam Negeri Maulana Malik Ibrahim Malang",
        objectives: "Analyze the spatial distribution of lightning strike data in Pasuruan, Identify lightning hotspot areas using density-based clustering, Handle noise and outliers in real-world geospatial lightning data, Provide insights into lightning distribution patterns for environmental analysis.",
        skills: "Clustering, Unsupervised Learning, Geospatial Data Analysis, Data Science",
        tools: "Scikit-Learn, Boltek, Google Earth, ArcGIS, Python",
        evidence: [
            "assets/thesis/undergraduate/1.png"
        ]
    },


    /* ══════════════════════════════════════════
       ACADEMY / BOOTCAMP
    ══════════════════════════════════════════ */
    {
        type: "academy",
        title: "Fresh Graduate Academy 2020",
        overview: "Successfully completed the Fresh Graduate Academy (FGA) 2020 – Data Science, an intensive national training program designed to equip participants with strong theoretical foundations and practical skills in data science. The program emphasized hands-on learning, real-world case studies, and end-to-end data analysis workflows.",
        duration: "210 hours",
        role: "Data Scientist",
        held_by: "Ministry of Communication and Information Technology (Kominfo) Indonesia",
        highlights: "Completed 210 hours of structured training, combining theory, practical exercises, and project-based learning. Gained comprehensive exposure to the data science lifecycle, from data collection and preprocessing to modeling and evaluation. Worked with real-world datasets to solve analytical and predictive problems. Strengthened analytical thinking and problem-solving skills through continuous assessments and assignments.",
        evidence: [
            "assets/academy/fresh_graduate_academy_2020.png",
        ]
    },


    /* ══════════════════════════════════════════
       CERTIFICATIONS
    ══════════════════════════════════════════ */
    {
        type: "certification",
        evidence: [
            "assets/certifications/certification_azure_ai-engineer.png",
            "assets/certifications/certification_huawei.jpeg",
            "assets/certifications/udemy_computer-cision.png",
            "assets/certifications/udemy_kivy.png",
        ]
    },

];
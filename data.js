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
Overview:
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
        responsibilities: "Designed and implemented the full lifecycle of the Generative Avatar AI system, including automated data crawling, end-to-end data pipeline development, model fine-tuning for video and voice generation in on-premise environments, and orchestration of a multimodal pipeline transforming user input into synchronized AI-driven avatar responses.",
        skills: "Generative AI, Multimodal LLMs, AI Engineering, Prompt Engineering, Data Engineering, Model Fine-Tuning, Speech Processing",
        tools: "Azure OpenAI, LangChain, Transformers, PyTorch, F5-TTS, Qdrant, PostgreSQL, Python, MuseTalk, FastAPI",
        evidence: [
            "assets/company/xquisite_analitika_indonesia/Finance/avatar.png",
        ]
    },

    {
        type: "poc",
        title: "Liveness Detection",
        overview: `
Overview:
Computer vision–based liveness detection system to determine whether a person in a video frame is real or a spoof attempt.

Problem:
Authentication systems were vulnerable to spoofing methods such as printed photos, replay attacks, and deepfake videos, increasing fraud risk.

Delivered Solution:
Developed an end-to-end liveness detection solution including a trained detection model, inference engine, backend APIs, and user interface, fully deployed in an on-premise environment.

Impact:
Improved authentication security and fraud prevention by reliably detecting spoofing attempts in real-time application scenarios.        
        `,
        role: "AI Engineer",
        field: "Security",
        duration: "January 2025 - February 2025",
        responsibilities: "Led the end-to-end development and deployment of a liveness detection system, covering model development, inference engine implementation, UI design, backend API integration, and full on-premise deployment.",
        skills: "Computer Vision, Data Science, Machine Learning, Frontend & Backend Development",
        tools: "OpenCV, Python, FastAPI",
        evidence: []
    },

    {
        type: "company",
        title: "Generative AI Detection Optimization",
        overview: `
Overview:
Optimization project aimed at improving the accuracy, reliability, and production readiness of Generative AI detection models.

Problem:
Detection outputs from Generative AI models showed performance inconsistencies due to data quality issues, suboptimal fine-tuning, and limited production optimization.

Delivered Solution:
Built an automated data pipeline, performed structured data analysis and cleaning, fine-tuned a Small Language Model (SLM) using distributed multi-node multi-GPU training, and deployed the optimized model into production.

Impact:
Enhanced detection accuracy, improved training efficiency, and ensured stable, scalable model performance in real-world deployment environments.
        `,
        role: "AI Engineer",
        field: "Media Intelligence",
        duration: "October 2024 - November 2024",
        responsibilities: "Led the end-to-end optimization lifecycle, including automated data collection, EDA and data preparation, distributed SLM fine-tuning in on-premise multi-GPU environments, performance evaluation, and production deployment.",
        skills: "Generative AI, Model Fine-Tuning, Data Science, Data Engineering, Distributed Training, Deep Learning, Production Deployment",
        tools: "PyTorch, Python, Qwen, vLLM, MLFlow, Pandas",
        evidence: [
            "assets/company/ebdesk_teknologi/Media_Intelligence/5w1h.png",
            "assets/company/ebdesk_teknologi/Media_Intelligence/ner.png",
        ]
    },

    {
        type: "company",
        title: "Dynamic-Class Classification",
        overview: `
Overview:
Zero-Shot Text Classification system enabling scalable text categorization without heavy reliance on labeled datasets.

Problem:
Traditional text classification required extensive labeled data, limiting scalability and adaptability to new categories.

Delivered Solution:
Built an end-to-end pipeline covering automated data collection, data analysis and preparation, NLI-based zero-shot model fine-tuning, evaluation, and production deployment.

Impact:
Enabled flexible and scalable text classification with reduced labeling dependency while maintaining reliable performance in real-world applications.
        `,
        role: "AI Engineer",
        field: "Media Intelligence",
        duration: "September 2024 - September 2024",
        responsibilities: "Executed the full ML lifecycle for a Zero-Shot Text Classification system, including automated data pipeline development, EDA and preprocessing, NLI-based model fine-tuning, performance evaluation, monitoring, and production deployment.",
        skills: "Zero-Shot Text Classification, Natural Language Processing, Natural Language Inference, Model Fine-Tuning, Deep Learning",
        tools: "PyTorch, Transformers, Pandas, MLFlow, FastAPI",
        evidence: [
            "assets/company/ebdesk_teknologi/Media_Intelligence/zero-shot.png",
        ]
    },

    {
        type: "company",
        title: "Youtube News Realtime AI Extraction",
        overview: `
OOverview:
Real-time AI-powered data pipeline for processing YouTube news videos and extracting structured information from streaming media content.

Problem:
News videos on YouTube are unstructured and lengthy, making it difficult to automatically identify relevant segments and extract actionable insights at scale.

Delivered Solution:
Built an end-to-end pipeline combining video parsing, scene classification fine-tuning, LLM-based information extraction, workflow orchestration with Airflow, and Elasticsearch indexing for scalable news intelligence.

Impact:
Enabled near real-time segmentation and structured extraction of news content from YouTube, improving media monitoring efficiency and searchability.
        `,
        role: "AI Engineer",
        field: "Media Intelligence",
        duration: "June 2024 - August 2024",
        responsibilities: "Designed, fine-tuned, and deployed an end-to-end AI pipeline for YouTube news processing, including scene classification modeling, LLM-based information extraction, Airflow-based ingestion scheduling, Elasticsearch integration, and full production deployment.",
        skills: "AI Engineering, Speech-to-Text, Data Enginering, Data Science, Deep Learning, LLM Integration, Pipeline Integration",
        tools: "Whisper, LLM, Airflow, ElasticSearch, FastAPI, Kafka, MLFlow, Python.",
        evidence: [
            "assets/company/ebdesk_teknologi/Media_Intelligence/youtube-news.png"
        ]
    },
    
    {
        type: "company",
        title: "News Extraction Automation Tools",
        overview: `
Overview:
End-to-end AI automation platform for large-scale media processing, covering scanned newspapers and TV broadcast news using computer vision, OCR, speech-to-text, and scalable data pipelines.

Problem:
Manual processing of printed and broadcast media was time-consuming, unstructured, and difficult to scale for real-time ingestion, search, and analytics.

Delivered Solution:
Built and deployed production-grade pipelines for layout detection, OCR-based text extraction, automated region cropping, and speech-to-text transcription, fully integrated with backend APIs, logging systems, and search infrastructure.

Impact:
Enabled near real-time media processing, structured content extraction, searchable indexing, and scalable automation across print and broadcast news workflows.
        `,
        role: "AI Engineer",
        field: "Media Intelligence",
        duration: "January 2024 - May 2024",
        responsibilities: "Led the end-to-end development and production deployment of AI-driven media automation systems, including dataset engineering, layout detection fine-tuning, OCR and auto-cropping integration, speech-to-text deployment, backend API development, and scalable data pipeline orchestration with MongoDB, Kafka, and Elasticsearch.",
        skills: "Computer Vision, AI Engineering, Speech-to-Text, Data Engineering, Image Processing, Audio Processing, Model Training, Model Fine-Tuning, AI Annotation Platform Engineering, Pipeline Integration.",
        tools: "LabelStudio, Whisper, YOLO, ElasticSearch, Airflow, OCR, Docker, Kafka, MongoDB, MLFlow, OpenCV, FastAPI, Python",
        evidence: [
            "assets/company/ebdesk_teknologi/Media_Intelligence/newspaper-extraction.png",
            "assets/company/ebdesk_teknologi/Media_Intelligence/newspaper-elasticsearch.png",
        ]
    },

    {
        type: "company",
        title: "Multi-Task Model Classification",
        overview: `
Overview:
Research and development project to build a transformer-based multi-task classification model capable of handling multiple classification objectives within a single unified architecture.

Problem:
Maintaining separate models for different classification tasks led to redundancy, higher resource consumption, and inconsistent representations across tasks.

Delivered Solution:
Designed a shared-encoder transformer architecture with task-specific output heads, supported by curated multi-source datasets and aligned preprocessing pipelines.

Impact:
Improved efficiency, reduced model redundancy, and enabled scalable multi-task learning with consistent shared representations across classification tasks.
        `,
        role: "AI Engineer",
        field: "Media Intelligence",
        duration: "January 2023 - April 2023",
        responsibilities: "Led dataset curation and alignment, conducted EDA and preprocessing, and designed and implemented a transformer-based multi-task classification architecture with shared representations and task-specific outputs.",
        skills: "Natural Language Processing, Transformers & Encoder Models, AI Engineering, Data Science, Model Architecture Design.",
        tools: "Transformers, PyTorch, Pandas, Airflow, ElasticSearch, Kafka, MLFlow, FastAPI, Python",
        evidence: [
            "assets/company/ebdesk_teknologi/Media_Intelligence/multi-task-model-classification.png"
        ]
    },

    {
        type: "company",
        title: "Computer Vision Smart Crawler",
        overview: `
Overview:
Research-driven AI web crawling system leveraging Computer Vision and Document Layout Analysis to automatically extract structured information from diverse and dynamic websites.

Problem:
Websites across domains have heterogeneous and complex layouts, making rule-based scraping brittle, non-scalable, and difficult to generalize.

Delivered Solution:
Designed an AI-based crawling architecture combining adaptive screenshot capture, layout detection fine-tuning, OCR integration, and structured JSON extraction pipelines, supported by curated multi-domain datasets.

Impact:
Enabled scalable, layout-aware web data extraction across news, ticketing, and e-commerce platforms with improved robustness and automation compared to traditional scraping methods.
        `,
        role: "AI Engineer",
        field: "Media Intelligence",
        duration: "August 2022 - December 2022",
        responsibilities: "Led the end-to-end research and development of an AI-powered web crawling system, including architecture design, dataset engineering, CV model fine-tuning for layout detection, OCR integration, structured data parsing, and UI development for result visualization.",
        skills: "Computer Vision, Document Layout Analysis, Text Recognition (OCR), AI Engineering, Data Science, Automated Screenshot Crawling, Data Parsing",
        tools: "YOLO, Detectron2, Selenium, Tesseract, Regex, PyTorch, OpenCV, MLFlow, FastAPI, Python, Streamlit",
        evidence: [
            "assets/company/ebdesk_teknologi/Media_Intelligence/computer-vision-smart-crawler.png"
        ]
    },

    {
        type: "company",
        title: "Computer Vision Smart Crawler",
        overview: `
Overview:
Mobile-accessible OCR application enabling users to capture images via mobile devices and extract text through an AI-powered backend service.

Problem:
Users required a lightweight and accessible solution to perform OCR directly from mobile devices without relying on third-party cloud services.

Delivered Solution:
Designed and implemented a mobile-to-backend OCR architecture, including an on-premise OCR API, real-time image processing pipeline, and a Kivy-based mobile application.

Impact:
Delivered a portable and self-hosted OCR solution with real-time text extraction capabilities suitable for practical, on-device usage scenarios.
        `,
        role: "AI Engineer",
        field: "Media Intelligence",
        duration: "March 2022 - July 2022",
        responsibilities: "Designed and developed the end-to-end OCR system, covering system architecture, on-premise API deployment, Kivy-based mobile UI development, backend integration, and mobile application packaging for production use.",
        skills: "Computer Vision, Optical Character Recognition (OCR), Mobile Application Development, API Development, Data Science",
        tools: "FastAPI, Tesseract, Buildozer, Kivy, KivyMD, Python",
        evidence: [
            "assets/company/ebdesk_teknologi/Media_Intelligence/mobile-ocr_capture.png",
            "assets/company/ebdesk_teknologi/Media_Intelligence/mobile-ocr_result.png",
        ]
    },


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
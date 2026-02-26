const projectsData = [

    /* ══════════════════════════════════════════
       COMPANY PROJECTS
    ══════════════════════════════════════════ */
    {
        type: "company",
        title: "Voyager",
        overview: `
Voyager is an AI-driven internal platform developed to enhance operational efficiency within XLSmart by automating analytical workflows and integrating machine learning systems into production environments.

Problem:
Operational tasks and analytical processes were partially manual, creating bottlenecks and limiting scalability of ML initiatives.

Solution:
Designed and implemented end-to-end MLOps pipelines, including automated CI/CD workflows, containerized deployment, infrastructure as code, and event-driven orchestration across AWS services.

Impact:
Improved deployment reliability, reduced manual intervention, and enabled scalable AI-driven automation aligned with enterprise operational standards.
        `,
        role: "MLOps Engineer",
        organization: "XLSmart Telecom Sejahtera Tbk",
        role_description: "Responsible for designing and maintaining the MLOps infrastructure powering the Voyager platform.",
        responsibilities: "Built CI/CD pipelines for ML models, containerized services with Docker, managed infrastructure via Terraform and CloudFormation, implemented event-driven orchestration using AWS EventBridge and Lambda.",
        skills: "MLOps, Automation, Machine Learning Productionization, Cloud Architecture, CI/CD, Infrastructure as Code",
        tools: "Python, Docker, AWS (ECS, Lambda, API Gateway, EventBridge, S3), Terraform, CloudFormation, GitLab CI/CD, AWS Bedrock",
        evidence: [
            "assets/company/xquisite_analitika_indonesia/voyager/1.png",
            "assets/company/xquisite_analitika_indonesia/voyager/2.png",
            "assets/company/xquisite_analitika_indonesia/voyager/3.png",
            "assets/company/xquisite_analitika_indonesia/voyager/4.png",
            "assets/company/xquisite_analitika_indonesia/voyager/5.png",
            "assets/company/xquisite_analitika_indonesia/voyager/6.png",
            "assets/company/xquisite_analitika_indonesia/voyager/7.png",
            "assets/company/xquisite_analitika_indonesia/voyager/8.png"
        ]
    },

    // ── Tambah project company lain di sini ──
    // {
    //     type: "company",
    //     title: "Nama Project",
    //     overview: `...`,
    //     role: "...",
    //     organization: "...",
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
        duration: "2021",
        achievement: "Favorite Winner",
        proposal: "Predictive analytics solution for socioeconomic indicators using publicly available big data sources.",
        held_by: "Badan Pusat Statistik (BPS)",
        responsibilities: "Led data preprocessing, feature engineering, and model development. Authored the research proposal and presented the solution to the judging panel.",
        methods: "Supervised Machine Learning, Feature Engineering, Exploratory Data Analysis, Model Evaluation & Validation",
        skills: "Data Science, Machine Learning, Research & Scientific Writing, Problem Framing, Analytical Thinking, Model Evaluation",
        tools: "Scikit-Learn, Pandas, Python",
        evidence: [
            "assets/competition/big_data_hackathon_bps_2021/1.png",
            "assets/competition/big_data_hackathon_bps_2021/2.png"
        ]
    },

    // ── Tambah competition lain di sini ──
    // {
    //     type: "competition",
    //     title: "Nama Kompetisi",
    //     overview: "...",
    //     duration: "...",
    //     achievement: "...",
    //     proposal: "...",
    //     held_by: "...",
    //     responsibilities: "...",
    //     methods: "...",
    //     skills: "...",
    //     tools: "...",
    //     evidence: []
    // },


    /* ══════════════════════════════════════════
       THESIS RESEARCH
    ══════════════════════════════════════════ */
    {
        type: "thesis",
        title: "Metode DBSCAN Clustering Untuk Analisis Pola Penyebaran Petir di Pasuruan",
        year: "2020",
        level: "Undergraduate (S1)",
        organization: "Universitas Islam Negeri Maulana Malik Ibrahim Malang",
        objectives: "Mengidentifikasi pola spasial penyebaran petir di wilayah Pasuruan menggunakan algoritma DBSCAN clustering untuk mendukung mitigasi bencana dan perencanaan infrastruktur.",
        skills: "Clustering, Unsupervised Learning, Geospatial Data Analysis, Data Science",
        tools: "Scikit-Learn, Boltek, Google Earth, ArcGIS, Python",
        evidence: [
            "assets/thesis/undergraduate/1.png"
        ]
    },

    // ── Tambah thesis lain di sini ──
    // {
    //     type: "thesis",
    //     title: "...",
    //     year: "...",
    //     level: "...",
    //     organization: "...",
    //     objectives: "...",
    //     skills: "...",
    //     tools: "...",
    //     evidence: []
    // },


    /* ══════════════════════════════════════════
       ACADEMY / BOOTCAMP
    ══════════════════════════════════════════ */

    // ── Contoh template academy ──
    // {
    //     type: "academy",
    //     title: "Nama Program / Bootcamp",
    //     overview: "Deskripsi singkat tentang program ini dan fokus utamanya.",
    //     duration: "Jan 2023 – Mar 2023 (3 Months)",
    //     role: "Participant / Student",
    //     held_by: "Nama Penyelenggara",
    //     highlights: "Highlight 1, Highlight 2, Highlight 3",
    //     evidence: []
    // },


    /* ══════════════════════════════════════════
       CERTIFICATIONS
    ══════════════════════════════════════════ */

    // Masukkan semua screenshot sertifikasi ke dalam satu entry ini,
    // atau pecah jadi beberapa entry — semuanya akan digabung di halaman Certifications.
    {
        type: "certification",
        evidence: [
            // "assets/certifications/aws_ml_specialty.png",
            // "assets/certifications/tensorflow_developer.png",
            // "assets/certifications/gcp_professional_ml.png",
            // Tambah path screenshot sertifikasi kamu di sini
        ]
    },

];
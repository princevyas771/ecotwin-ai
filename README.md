# 🌱 EcoTwin AI

> **AI-powered digital twin for smarter, more sustainable campuses.**

EcoTwin AI is an AI-powered campus sustainability intelligence platform that helps institutions understand resource consumption, detect unusual patterns, identify potential problems, and discover actionable opportunities to improve efficiency.

## 🚀 What It Does

EcoTwin AI creates a digital representation of campus buildings and monitors simulated sustainability data such as:

* ⚡ Electricity consumption
* 💧 Water usage
* ♻️ Waste generation
* 📊 Historical resource trends
* 🚨 Anomaly detection
* 🤖 AI-powered insights and recommendations
* 🔮 What-if sustainability simulations

Example insight:

> **Building A electricity usage is 31% above its normal pattern.**

The system analyzes the abnormal period and provides an actionable recommendation for investigation.

## 🎯 Hackathon Category

**App Category:** Social Good
**Focus Track:** Community

## ✨ Key Features

### 🏢 Campus Digital Twin

Visualize multiple campus buildings and their sustainability metrics.

### 📊 Sustainability Dashboard

Track electricity, water, and waste consumption through interactive dashboards and charts.

### 🚨 Anomaly Detection

Uses deterministic statistical analysis to identify unusual consumption patterns.

The system does **not** rely on an LLM to calculate numerical anomalies.

### 🤖 AI Insights

AI-generated explanations and recommendations are designed to help users understand detected sustainability issues and decide what action to investigate.

### 🔬 What-If Simulator

Experiment with potential electricity reductions and view estimated changes in:

* Energy consumption
* Cost
* CO₂ impact

All simulation outputs are clearly treated as estimates.

## 🧠 Technology

* React
* TypeScript
* Vite
* JavaScript
* AWS
* Amazon S3
* Amazon CloudFront
* AWS Bedrock integration planned for AI insights
* Statistical anomaly detection
* Simulated sustainability datasets

## 🏗️ Architecture

```text
User
  │
  ▼
React + TypeScript Frontend
  │
  ├── Campus Dashboard
  ├── Building Digital Twin
  ├── Resource Analytics
  ├── Anomaly Detection
  └── What-If Simulator
  │
  ▼
AWS Infrastructure
  │
  ├── Amazon S3
  └── Amazon CloudFront
```

Future AWS services planned for deeper integration include Lambda, API Gateway, DynamoDB, EventBridge, and Amazon Bedrock.

## 📈 Data

The current version uses **simulated sustainability sensor data** representing campus buildings and resource consumption.

This allows the platform to demonstrate the complete sustainability intelligence workflow without requiring physical IoT hardware.

## 🧪 Development Approach

EcoTwin AI was developed using an AI-assisted coding workflow.

The development process included:

1. Repository exploration and project planning
2. React + TypeScript application scaffolding
3. Creation of typed sustainability domain models
4. Generation of simulated multi-building resource data
5. Deterministic anomaly detection
6. Sustainability alerts
7. What-if impact simulation
8. Reusable dashboard UI components
9. Production build verification
10. Deployment of the frontend to AWS

## 🤖 Coding Agent Usage

AI-assisted coding was used during development to accelerate:

* Repository exploration
* Project scaffolding
* Component development
* TypeScript implementation
* Data modelling
* Analytics logic
* UI structure
* Documentation

The coding-agent workflow is being documented separately as part of the AWS Zero to Shipped hackathon submission requirements.

## ☁️ AWS Deployment

The production frontend is deployed using AWS infrastructure.

Current deployment:

**Amazon S3 → Amazon CloudFront**

The S3 bucket contains the production Vite build output, while CloudFront is being configured to provide public HTTPS delivery.

## 🔐 Responsible AI & Transparency

EcoTwin AI is designed to distinguish between:

* **Calculated results** — produced using deterministic statistical logic
* **AI-generated explanations** — produced by an AI model
* **Estimated impact** — clearly identified as potential/estimated rather than guaranteed savings

This separation helps keep sustainability calculations transparent and auditable.

## 🌍 Vision

EcoTwin AI aims to make campus sustainability data easier to understand and act upon.

Instead of simply showing charts, the platform connects:

**Data → Detection → Explanation → Recommendation → Action**

The long-term vision is to connect real campus IoT and utility data and help institutions continuously identify opportunities for more efficient resource use.

## 👨‍💻 Developer

**Prince Vyas**

Computer Engineering Student
AI/ML • Full Stack Development • Cloud

GitHub: `https://github.com/princevyas771`

---

## 📜 License

This project was created for the **AWS Zero to Shipped Hackathon 2026**.


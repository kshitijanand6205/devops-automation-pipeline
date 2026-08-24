# DevOps Automation Pipeline

A simple Node.js application demonstrating a complete CI/CD pipeline using:
1. Git
2. Jenkins
3. Docker
4. AWS EC2

## Tech Stack
- Node.js + Express
- Docker
- Jenkins (CI/CD)
- AWS EC2 (deployment)

## Run Locally
\`\`\`
npm install
npm start
\`\`\`
App runs on http://localhost:5000

## Pipeline Overview
1. Code pushed to Github
2. Jenkins pulls code and builds Docker image
3. Image pushed tp Docker Hub
4. Container deployed on AWS EC2

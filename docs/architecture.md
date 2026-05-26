# Elevate AI Goal Coach Architecture

## Core AWS Services

- Cognito: User authentication
- API Gateway: REST API endpoints
- Lambda: Backend business logic
- DynamoDB: Stores users, goals, tasks, progress, and AI summaries
- EventBridge: Scheduled automation for reminders and missed task checks
- SNS: Email or text notifications
- S3: Stores generated reports and exported files
- CloudWatch: Logs, monitoring, and alerts
- Secrets Manager: Stores AI API keys securely
- Bedrock or OpenAI: AI goal planning and coaching engine

## Main Workflow

1. User signs in with Cognito.
2. User submits an ultimate goal.
3. API Gateway sends request to Lambda.
4. Lambda calls AI service to break goal into milestones.
5. Goal roadmap is saved in DynamoDB.
6. EventBridge checks daily progress.
7. SNS sends reminders and motivation.
8. AI adjusts goal plan if tasks are missed.
9. Weekly and monthly progress reports are generated.

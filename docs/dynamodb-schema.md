# DynamoDB Schema

## Table 1: Users
PK: userId

## Table 2: Goals
PK: userId
SK: goalId

## Table 3: Tasks
PK: goalId
SK: taskId

## Table 4: Progress
PK: userId
SK: date

## Table 5: Notifications
PK: userId
SK: notificationId

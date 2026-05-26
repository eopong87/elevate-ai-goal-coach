exports.handler = async (event) => {
  const body = JSON.parse(event.body || "{}");

  const response = {
    message: "Goal created successfully",
    goal: {
      goalId: Date.now().toString(),
      ultimateGoal: body.ultimateGoal || "No goal provided",
      status: "active"
    }
  };

  return {
    statusCode: 201,
    body: JSON.stringify(response)
  };
};

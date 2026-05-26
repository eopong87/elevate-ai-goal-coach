exports.handler = async (event) => {
  const body = JSON.parse(event.body || "{}");

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Task updated successfully",
      taskStatus: body.status || "completed"
    })
  };
};

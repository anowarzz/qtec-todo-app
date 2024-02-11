const initialTodo = {
  todos: [
    {
      id: crypto.randomUUID(),
      title: "Buy groceries",
      description:
        "Get milk, eggs, bread, vegetables, and fruits from the supermarket. Don't forget to check for any discounts or offers.",
      priority: "High",
      isCompleted: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Finish coding assignment",
      description:
        "Complete the JavaScript exercise by Friday. Make sure to test the code thoroughly and handle any edge cases.",
      priority: "Medium",
      isCompleted: true,
    },
    {
      id: crypto.randomUUID(),
      title: "Call mom",
      description:
        "Check in with mom and see how she's doing. Discuss any recent updates or events in the family.",
      priority: "Low",
      isCompleted: false,
    },
  ],
};

export { initialTodo };

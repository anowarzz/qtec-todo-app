const initialTodo = [
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
  {
    id: crypto.randomUUID(),
    title: "Prepare presentation",
    description:
      "Create slides for the upcoming meeting. Include relevant data, charts, and visuals to make the presentation engaging.",
    priority: "High",
    isCompleted: true,
  },
  {
    id: crypto.randomUUID(),
    title: "Go for a run",
    description:
      "Do a 5-mile run in the park. Warm up properly before starting and stay hydrated throughout the run.",
    priority: "Medium",
    isCompleted: false,
  },
];

export { initialTodo };

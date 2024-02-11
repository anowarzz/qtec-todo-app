export const getPriorityClass = (priority) => {
  if (priority === "High") {
    return "text-red-500";
  } else if (priority === "Medium") {
    return "text-yellow-500";
  } else if (priority === "Low") {
    return "text-green-500";
  } else {
    return "";
  }
};

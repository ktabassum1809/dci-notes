const tasks = [
  {
    task: "clean apartment",
    priority: 5,
  },
  {
    task: "learn objects",
    priority: 2,
  },
  {
    task: "practice JavaScript",
    priority: 1,
  },
];

const finishTask = (tasks) => {
  const tasksCopy = [...tasks];
  tasksCopy.pop();
  return tasksCopy;
};

console.log(finishTask(tasks));
console.log(tasks);

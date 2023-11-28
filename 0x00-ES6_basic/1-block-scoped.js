export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const updatedTask = true;
    const updatedTask2 = false;
    return [updatedTask, updatedTask2];
  }

  return [task, task2];
}

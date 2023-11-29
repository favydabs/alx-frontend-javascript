export default function createIteratorObject(report) {
  const iterator = {
    departments: Object.keys(report),
    employees: {},
    currentIndex: 0,
    next() {
      const currentDepartment = this.departments[this.currentIndex];
      const currentEmployees = this.employees[currentDepartment];

      if (!currentEmployees || currentEmployees.length === 0) {
        // Move to the next department
        this.currentIndex++;

        if (this.currentIndex < this.departments.length) {
          return this.next(); // Recursive call to handle empty departments
        } else {
          return { done: true };
        }
      }

      const currentEmployee = currentEmployees.shift();
      return { value: currentEmployee, done: false };
    },
    [Symbol.iterator]() {
      return this;
    },
  };

  for (const department in report) {
    iterator.employees[department] = [...report[department]];
  }

  return iterator;
}

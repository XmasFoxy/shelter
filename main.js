function learnMap() {
  const employees = [
    { name: "Alice", salary: 50000, experience: 3 },
    { name: "Bob", salary: 60000, experience: 5 },
    { name: "Charlie", salary: 45000, experience: 2 },
  ]
  const result = employees.map(item => {
    return { name: item.name, salary: item.salary, experience: item.experience, totalSalary: item.salary + (item.salary * 0.05 * item.experience) }
  });
  return result;
}

console.log(learnMap());
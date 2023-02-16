const tab = [
    {name: "John", gender: "M", salary: 34000},
    {name: "Mathias", gender: "M", salary: 32000},
    {name: "Doe", gender: "M", salary: 42000},
    {name: "Jade", gender: "F", salary: 45000}
]
// la somme des salaires des Hommes, si augmenter 10%

let tabMenNew = tab.filter(tab => tab.gender == "M").map(tab => tab.salary += tab.salary * 0.1).reduce((tabMenNew,salary) => tabMenNew + salary)
//let sumTabMenNew = tabMenNew.reduce((sumTabMenNew,salary) => sumTabMenNew + salary);

// let sum =tab.filter(tab => tab.gender == "M").map(tab => tab.salary += tab.salary * 0.1).reduce((sum,salary) => sum + salary);
console.log(tab);
console.log('\n\n\n');
console.log(tabMenNew);

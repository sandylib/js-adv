const employees = [{
    name: 'John Olsen',
    age: 54,
    jobTitle: 'developer',
    salary: 70000,
}, {
    name: 'Karen Norris',
    age: 34,
    jobTitle: 'engineer',
    salary: 75000,
}, {
    name: 'Daryl Cline',
    age: 25,
    jobTitle: 'secretary',
    salary: 54000,
}, {
    name: 'Abbey Garcia',
    age: 40,
    jobTitle: 'developer',
    salary: 100000,
}, {
    name: 'Finn Smith',
    age: 29,
    jobTitle: 'engineer',
    salary: 40000,
}, {
    name: 'Eve Wordsworth',
    age: 20,
    jobTitle: 'developer',
    salary: 65000,
}, {
    name: 'Ronald Jacobs',
    age: 60,
    jobTitle: 'developer',
    salary: 90000,
}];

//Q2:  averageNonDeveloperSalary

const developers = employees.filter(emp=> emp.jobTitle !== 'developer');
console.log('developers', developers);
const developerSalaries = developers.map( dev => dev.salary);
console.log('developerSalaries', developerSalaries);

const totalDevelopersSalaries = developerSalaries.reduce( (acc, x) =>  acc+ x, 0 );
console.log('totalDevelopersSalaries', totalDevelopersSalaries);
const averageDeveloperSalary = totalDevelopersSalaries/developers.length;

console.log(averageDeveloperSalary);



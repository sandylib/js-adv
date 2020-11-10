var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};

function say(greeting, text) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName + text);
}

say.call(person1, 'Hello','sdfasdf'); // Hello Jon Kuperman
say.call(person2, 'Hello', 'asdfasdf'); // Hello Kelly King


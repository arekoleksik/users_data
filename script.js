var peopleDB = [];
function Person(attributes) {
    this.name = attributes.name;
    this.surname = attributes.surname;
    this.age = attributes.age;
    this.role= attributes.role;
}

var person1 = new Person({
    name: "John",
    surname: "Snow",
    age: 25,
    role: "trainee"
});
var person2 = new Person({
    name: "Maciej",
    surname: "Snow",
    age: 25,
    role: "trainee"
});
var person3 = new Person({
    name: "Kaj",
    surname: "Snow",
    age: 25,
    role: "trainee"
});


peopleDB.push(person1);
peopleDB.push(person2);
peopleDB.push(person3);

function renderRow(name,surname,age,role) {
    return '<div><div>'+name +'</div><div>'+surname+'</div><div>'+age+'</div><div>'+role+'</div></div>'
}

function renderDB() {
    var containerDB = document.getElementById('records');
    peopleDB.map(function (item) {
        containerDB.innerHTML += renderRow(item.name, item.surname, item.age, item.role)
    });
}

renderDB();
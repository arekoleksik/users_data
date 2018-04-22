var peopleDB = [];
function Person(attributes) {
    this.name = attributes.name;
    this.surname = attributes.surname;
    this.age = attributes.age;
    this.role= attributes.role;
}

function renderRow(name,surname,age,role) {
    return '<div><div>'+name +'</div><div>'+surname+'</div><div>'+age+'</div><div>'+role+'</div></div>'
}

function renderDB() {
    var containerDB = document.getElementById('records');
    containerDB.innerHTML = '';
    peopleDB.map(function (item) {
        containerDB.innerHTML += renderRow(item.name, item.surname, item.age, item.role)
    });
}

var addButton = document.getElementById('addButton');
addButton.addEventListener('click', function () {
    var inputName = document.getElementById('inputName').value;
    var inputSurname = document.getElementById('inputSurname').value;
    var inputAge = document.getElementById('inputAge').value;
    var inputRole = document.getElementById('inputRole').value;
    console.log(inputName+inputSurname+inputAge+inputRole);

    var person1 = new Person({
        name: inputName,
        surname: inputSurname,
        age: inputAge,
        role: inputRole
    });

    peopleDB.push(person1);
    renderDB();
});







function personDB() {
    this.database = [];
}
personDB.prototype.addPerson = function (person) {
    this.database.push(person)
};
personDB.prototype.displayPerson = function () {
    console.log(this.database)
};

function Person(attributes) {
    this.name = attributes.name;
    this.surname = attributes.surname;
    this.age = attributes.age;
    this.role= attributes.role;
}

function Render (attribute) {
    this.container = document.getElementById(attribute)
}

Render.prototype.setHtml = function (database) {
    this.container.innerHTML = '';
    var self = this;
    database.map(function (item) {
        self.container.innerHTML += self.renderRow(item.name, item.surname, item.age, item.role)});

};

Render.prototype.renderRow = function (name,surname,age,role) {
    return '<div><div>'+name +'</div><div>'+surname+'</div><div>'+age+'</div><div>'+role+'</div></div>'

    };



var renderInstance = new Render('records');
var dbInstance = new personDB();




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

    dbInstance.addPerson(person1);
    renderInstance.setHtml(dbInstance.database)
});






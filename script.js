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

function Render (container, button, inputName, inputSurname, inputAge,inputRole) {
    this.container = document.getElementById(container);
    this.button = document.getElementById(button);
    this.inputName = document.getElementById(inputName);
    this.inputSurname = document.getElementById(inputSurname);
    this.inputAge = document.getElementById(inputAge);
    this.inputRole = document.getElementById(inputRole);
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

Render.prototype.getValuesFromInput = function () {
    return {
        name: this.inputName.value,
        surname: this.inputSurname.value,
        age:this.inputAge.value,
        role: this.inputRole.value
    }
};

Render.prototype.addClick = function () {
    var self = this;
    this.button.addEventListener('click', function () {
        var person = self.getValuesFromInput();
        dbInstance.addPerson(person);
        renderInstance.setHtml(dbInstance.database);
    })
};

var renderInstance = new Render('records', 'addButton','inputName', 'inputSurname', 'inputAge','inputRole');
var dbInstance = new personDB();
renderInstance.setHtml(dbInstance.database);
renderInstance.addClick();


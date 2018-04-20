var users = [
    {
        name: "Hernan",
        lastname: "Gutierrez",
        age: 36,
        children: ['juan', 'minihernan' ],
        email: "hgutierrex89@gmail.com",
    },
    {
        name: "Nacho",
        lastname: "Bufandelli",
        age: 18,
        children: ['cristian', 'rober'],
        email: "buffandeli1993@gmail.com",
    },
    {
        name: "Tomas",
        lastname: "Britos",
        age: 15,
        children: [],
        email: "tommybritos2003@gmail.com",
    },
    {
        name: "Juancho",
        lastname: "Sanchez",
        age: 45,
        children: ['micho', 'tito', 'gordo', 'negro', 'cabezon'],
        email: "sanchezjuancho@gmail.com",
    },
]

for(var i=0; i < users.legth; i++){
console.log(users[i].lastname + ", " + users[i].name + " tiene " + users[i].children.length, " hijos")

}
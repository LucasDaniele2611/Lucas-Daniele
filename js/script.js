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
function filterbyage(age){
for(var i=0; i < users.length; i++){
    if(age > users[i].age){
 console.log(assamble(users[i]));
}
}
}

function assamble(user){
    return user.lastname + ", " + user.name + " tiene " + user.children.length + " hijos";
}


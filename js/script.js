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


/*
listUsers.setUsers(usersItem)
listUsers.iterate()
*/
//function assamble(user){
 //   return user.lastname + ", " + user.name + " tiene " + user.children.length + " hijos";
//}

var listUsers = {
    users:[],
    assamble: function(user){
        return  '<tr>'
       + '<td>'+ user.Name +'</td>'
       + '<td>'+ user.age +'</td>'
       + '<td>'+ user.email +'</td>'
       + '<td>'+ user.country +'</td>'
       + '<td>'+ user.profile +'</td>'
       + '<td>'+ user.salary +'</td>'
    + '</tr>';





        //return user.country + ", " + user.Name + " tiene " + user.profile + " hijos";
    
    
    },
    iterate: function(){
    for (var i = 0; i < listUsers.users.length; i++ ){
        $('#users tbody').append(listUsers.assamble(listUsers.users[i]))
        
    }
    
    },
    setUsers: function(users){
            listUsers.users = users;
            return;
    },
    clearTable: function(){
        $('#users tbody').html('');
    }
}
//listUsers.assamble(users)

//$('#users tbody').append();
$ ('#clickme').on('click',function(){
listUsers.setUsers(usersItems);
listUsers.iterate();
});

$ ('#clear').on('click',function(){
 listUsers.clearTable();
    });
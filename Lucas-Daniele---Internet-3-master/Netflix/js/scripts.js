$.ajax({
    url:'http://demo3487450.mockable.io/belgrano/users',
    method:'GET',
    body: {
        
    }
}).then(success, error)

function success(data){
    console.log(data);
    tablebuild.setItems(data);
    tablebuild.listAll();

}
function error(err){
    console.log(err);
}





























/* here goes the scripts */

var tablebuild = {
    listAll: function(){
        for (var i = 0; i < tablebuild.items.length; i++ ){
            $('#table-body').append(tablebuild.assamble(tablebuild.items[i]))
        }
        $('.show').on('click',function(){
            var id = $(this).parents('.row')
            .find('.description').fadeIn();
        
        })
    },

    filtromarca: function(brand){
        for (var i = 0; i < tablebuild.items.length; i++ ){
            if(tablebuild.items[i].brand == brand){
                $('#table-body').append(tablebuild.assamble(tablebuild.items[i]))
            }
            
        }
    },

    assamble: function(items){
            return  '<div class="row" '
            + 'data-id="'+items.name+'">'
            + '<span class="col-2">' +'</span>'
           + '<span class="col-2">'+ items.email +'</span>'
           + '<span class="col-2">'+ items.age +'</span>'
           + '<span class="col-2">'+ items.country +'</span>'
           + '<span class="col-2">'+ items.phone +'</span>'
           + '<span class="col-2">'
           + '<button type="text" class="show">show</button>'
           + '</span>'
           + '<span class="description col-12">'
           + items.profile+ '</span>'
        + '</div>';
    },

    setItems: function(a){
        tablebuild.items = a;
    },

    items: [],


    
}
tablebuild.setItems(elementsList);

$('#action1').on('click',function(){
    var brand = $('#brandfilter').val();
    tablebuild.filtromarca(brand);
})


/*
tocar el boton-
tomar lo que esta en el input-
recorrer la lista-
lo que coincida con lo buscado
mostrar 
*/

var peliculasfun = {
    listAll: function(){
        for (var i = 0; i < peliculasfun.items.length; i++ ){
            $('#peliculas').append(peliculasfun.assamble(peliculasfun.items[i]))
        }
        $('.show').on('click',function(){
            var id = $(this).parents('.row')
            .find('.description').fadeIn();
        
        })
    },

    filtromarca: function(brand){
        for (var i = 0; i < tablebuild.items.length; i++ ){
            if(tablebuild.items[i].brand == brand){
                $('#table-body').append(tablebuild.assamble(tablebuild.items[i]))
            }
            
        }
    },

    assamble: function(items){
            return '<div id="peliculas" class="row">'
        + '<div class="col-3"><img src="'+ poster +'" alt="inception" class=""></div>'
        + '<div class="col-9">'
        + '<h1 class="col-12">' + titulo + '</h1>'
        + '<div id="description" class="col-12">' + description + '</div>'
        + '<div id="estrellitas" class="col-12">'
        + '<i class="fas fa-star"></i>'
        + '<i class="fas fa-star"></i>'
        + '<i class="fas fa-star"></i>'
        + '<i class="fas fa-star"></i>'
        + '<i class="fas fa-star"></i>'
        + '</div></div></div>'
    },

    setItems: function(a){
        peliculasfun.items = a;
    },

    items: [],


    
}
tablebuild.setItems(elementsList);

$('#action1').on('click',function(){
    var brand = $('#brandfilter').val();
    tablebuild.filtromarca(brand);
})






























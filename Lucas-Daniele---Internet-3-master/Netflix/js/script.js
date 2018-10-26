//POSTEO

$('#enviar').on('click', function (event) {
    event.preventDefault();
    var toSave = {
        peliId: $('#peliId').val(),
        title: $('#title').val(),
        description: $('#description').val(),
        poster: $('#poster').val(),
        film_length: $('#film_length').val(),
        score: $('#score').val(),
    }
    submitForm(toSave);
})

function submitForm(data) {
    $.ajax({
        url: 'http://192.168.11.150:3000/peliculas',
        method: 'POST',
        data: data
    })
}



//ARMAR PAGINA
var pagina = {

    pelis: [],

    assambleScore: function (score) {
        var stars = '';
        for (var i = 0; i < score; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        return stars;
    },


    assambleRow: function (pelis) {
        var row = '<div class="row">';
        for (var i = 0; i < pelis.length; i++) {
            row += this.assambleMovie(pelis[i]);
        }
        return row + '</div>';
    },
    assambleMovie: function (pelia) {
        return '<div class="col-md-4">'
            + '<img src="' + pelia.poster + '"alt="" style="width: 90%; height: 450px;">'
            + '<h2>' + pelia.title + '</h2>'
            + '<div class="col-md-12">'
            + pagina.assambleScore(pelia.score)
            + '</div>'
            + '<p>'
            + '<a class="btn btn-danger" href="#" data-id="' + pelia._id + '" role="button">Descripción ></a>'
            + '</p>'
            + '</div>'
    },

    assambleInfo: function (peli) {
        return '<div class="secundario">'
            + '<a class="btn backbtn" href="javascript:void(0)"><i class="fas fa-chevron-left"></i> </a>'
            + '<div id="peliculas" class="row">'
            + '<div class="col-3"><img src="' + peli.poster + '"class="imagen"></div>'
            + '<div class="row">'
            + '<h1 class="col-12">' + peli.title + '</h1>'
            + '<div id="description" class="col-12">' + peli.description + '</div>'
            + '<div id="estrellitas" class="col-12">'
            + pagina.assambleScore(peli.score)
            + '</div>'
            + '</div>'
            + '</div>';

    },

    listHome: function () {
        $('#app-root').html("");
        var buffer = [];
        for (var i = 0; i < pagina.pelis.length; i++) {
            buffer.push(pagina.pelis[i]);

            if (buffer.length === 3 || i === pagina.pelis.length - 1) {
                $('#app-root').append(pagina.assambleRow(buffer));
                buffer = [];
            }
        }
        $('.btn-danger').on('click', function () {
            var id = $(this).attr('data-id');
            servidor.getMovieById(id)
            .then(function (data) {
                $('#app-root').html(pagina.assambleInfo(data));
                $('.backbtn').on('click', function (e) {
                    e.preventDefault();
                    pagina.listHome();
                })
            }, function (err) {
                console.error(err);
            });
        })
    },
    setMovies: function (b) {
        pagina.pelis = b;
    },

}
servidor.getAllMovies().then(function (response) {
    pagina.setMovies(response);
    pagina.listHome();
})
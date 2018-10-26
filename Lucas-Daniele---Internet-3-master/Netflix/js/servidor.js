//GET SERVIDOR
var servidor = {
    getMovieById: function (id) {
        return $.ajax({
            url: 'http://192.168.11.150:3000/peliculas/' + id,
            method: 'GET',
        })
    },
    getAllMovies: function () {
        return $.ajax({
            url: 'http://192.168.11.150:3000/peliculas',
            method: 'GET'
        });
    }
}
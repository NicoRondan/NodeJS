import mongojs from 'mongojs';

const db = mongojs('DatabaseMovies', [
    'movies'
]);

module.exports = app => {
    
    app.get('/movies', (req, res) => {
        db.movies.find((err, movies) => {
            res.json({
                movies
            });
        });
    });

    app.post('/movies', (req, res) => {
        let newMovie = req.body;

        db.movies.insert(newMovie, (err, movie) => {
            res.json({
                movie
            });
        });
    });

    app.put('/movies/:id', (req, res) => {
        let updatedMovie = req.body;
        db.movies.update(
            {_id: mongojs.ObjectId(req.params.id)},
            updatedMovie,
            {},
            (err, res) => {
                res.json({
                    response: res
                });
            }
        )
    });

    app.delete('/movies/:id', (req, res) => {
        db.movies.remove({
            _id: mongojs.ObjectId(req.params.id)
        }, (err, response) => {
            res.json({response});
        });
    });

};
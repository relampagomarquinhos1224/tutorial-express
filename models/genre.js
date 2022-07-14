var moongose = require('mongoose');

var Schema = moongose.Schema;

var GenreSchema = new Schema({
    name: { type: String, required: true, minLenght: 3, maxLenght: 100 }
});


GenreSchema
    .virtual('url')
    .get(function () {
        return '/catalog/genre/' + this.id;

    });

module.exports = mongoose.model('Genre', GenreSchema);


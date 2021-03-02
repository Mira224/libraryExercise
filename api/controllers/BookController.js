/**
 * BookController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    //action - list books of different categroy
    home: async function (req, res) {
        var artBook = await Book.find({
            where: { category: "art" },
            limit: 4,
        });
        var scienceBook = await Book.find({
            where: { category: "science" },
            limit: 4,
        });

        return res.view('book/home', { artBooks: artBook, scienceBooks: scienceBook });
    },

    // action - create
    create: async function (req, res) {

        if (req.method == 'GET') return res.view('book/createBook');

        var book = await Book.create(req.body).fetch();

        return res.status(201).json({ id: book.id });

    },
    // json function
json: async function (req, res) {

    var everybooks = await Book.find();

    return res.json(everybooks);
},



};


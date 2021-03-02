/**
 * SystemController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    display: async function (req, res) {

        // var images = [
        //     { img: "https://picsum.photos/id/237/200/300" },
        //     { img: "https://picsum.photos/id/238/200/300" },
        //     { img: "https://picsum.photos/id/239/200/300" },
        // ],

        return res.view("system/display", { images: images });

    },

    next: async function (req, res) {

    },

    create: async function (req, res) {
        var p1 = await System.findOne(req.session.image1);
        var p2 = await System.findOne(req.session.image2);
        var p3 = await System.findOne(req.session.image3);

        return res.view("system//grades", { p1: p1, p2: p2, p3: p3 });
    },

};


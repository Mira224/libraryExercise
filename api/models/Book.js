/**
 * Book.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    serial:{
      type:"string",
      required:true,
    },
    title: {
      type: "string",
      required: true,
    },
    author: {
      type: "string",
      required: true,
    },
    image: {
      type: "string"
    },
    description: { type: "string" },
    categroy: {
      type: "string",
      isIn:['N/A', 'art','science'],
      defaultsTo:'N/A',
    },
    year:{type:"number"},
    classification:{
      type:"string",
      isIn:['N/A', 'Romance','Advanture','Scientific','Horror',],
      defaultsTo:'N/A',
    },
    location: {
      type: "string",
      required: true,
    },
    status: {
      type: "string",
      isIn:['available', 'unavailable'],
      defaultsTo:'available'
    },
    period: {
      type: "number",
      required: true,
    },


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};


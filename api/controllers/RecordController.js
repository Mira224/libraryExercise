/**
 * RecordController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    enquiry: async function(req, res){

        if(req.method =="GET"){
            return res.view("record/create");
        }

        if(req.body.stime<="17:00"){
            
         var result = await Record.create(req.body).fetch();
         return res.status(409).json("You will be contacted tomorrow.");
        }else{
            alert("You will be contacted the day after tomorrow.");
            var result = await Record.create(req.body).fetch();
            return res.status(410).json("You will be contacted tomorrow.");
        }
        
    } ,
    enquiries: async function(req, res){
        var allRecords = await Record.find();

        return res.json(allRecords);

}
};


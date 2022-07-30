/*
*   Ready2Help
*   COMP299-SEC004
*   July-14-2022
*   tickets.js
*/

let tickets = require('../models/tickets');

function getErrorMessage(err){
    if (err.errors) {
        for (let errName in err.erros){
            if (err.errors[errName].message)return err.errors[errName].message;
        }
        if (err.message){
            return err.message;
        }else{
            return 'Unknown server error';
        }
    }
};

module.exports.tickets = function(req, res, next){

    try{
        tickets.find((err, tickets)=> {

            if(err){
                console.error(err);
                return res.status(400).json(
                    {
                        success: false,
                        message: getErrorMessage(err)
                    }
                );
            }
            else{
                
                res.status(200).json(tickets);
            }
        });
    }catch (error){
        return res.status(400).json(
            {
                success: false,
                message: getErrorMessage(error)
            }
        );
    }


}



module.exports.processEdit = (req, res, next) => {

    try{

            let id = req.params.id

            let updatedItem = tickets({   

                _id: id,
                name: req.body.name,
                email: req.body.email,
                ticketStatus: req.body.ticketStatus,
                ticketDescription: req.body.ticketDescription,
                ticketPriority: req.body.ticketPriority
            });
        
            tickets.updateOne({_id: id}, updatedItem, (err) => {
                if(err)
                {
                    console.log(err);
                    return res.status(400).json(
                        {
                            success: false,
                            message: getErrorMessage(err)
                        }
                    );
                }
                else
                {
                    console.log(req.body);
                    return res.status(200).json(
                        {
                            sucess:true,
                            message: 'Item updated sucessfully.'
                        }
                    );
        
                }
        });
    
    }catch (error){
        return res.status(400).json(
            {
                success: false,
                message: getErrorMessage(error)
            }
        );
    }
    
}



//delete 
module.exports.performDelete = (req, res, next) => {

    try{

        console.log(req.body.ticketDescription);
        
        let id = req.params.id            
    
        let updatedItem = tickets({
            _id: id,   
            name: req.body.name,
            email: req.body.email,
            ticketStatus: 'Cancelled',
            ticketDescription: req.body.ticketDescription,
            recordnum: req.body.recordnum,
            ticketPriority: req.body.ticketPriority
        });
    
        tickets.updateOne({_id: id}, updatedItem, (err) => {
            if(err)
            {
                console.log(err);
                return res.status(400).json(
                    {
                        success: false,
                        message: getErrorMessage(err)
                    }
                );
            }
            else
            { return res.status(200).json(
                {
                    sucess: true,
                    message: 'Items status has been cancelled'
                }                
            );
            }
        });
    }catch(error){
        return res.status(400).json(
            {
                success: false,
                message: getErrorMessage(error)
            }
        );
    }
           
}


//create a new ticket from the form
module.exports.processAdd = (req, res, next) => {

    try{
        let createTicket = tickets({ //create new ticket object with all proprties in model

            _id: req.body.id,     
            name: req.body.name,
            email: req.body.email,
            ticketStatus: req.body.ticketStatus,
            ticketDescription: req.body.ticketDescription,
            recordnum: req.body.recordnum,
            ticketPriority: req.body.ticketPriority
          });
    
          tickets.create(createTicket, (err, item) =>{  
              if(err)
              {
                  console.log(err);
                  return res.status(400).json(
                    {
                        success: false,
                        message: getErrorMessage(err)
                    }
                  );
               }
              else
              {                    
                //  console.log(item);
                res.status(200).json(item);
    
              }
          });  

    }catch(error){
        return res.status(400).json(
            {
                success: false,
                message: getErrorMessage(error)
            }
          );
    }

    
}




/* OLD DELETE FUNCTION - JUST IN CASE NEEDED LATER AT SOME POINT*/
/*
// tickets.remove({_id: id}, (err) => {
    //     if(err)
    //     {
    //         console.log(err);
    //         res.end(err);
    //     }
    //     else
    //     {
    //         //refresh the page
    //         res.redirect('/');
    //     }
    // });
*/
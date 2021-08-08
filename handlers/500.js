'use strict';

module.exports=(error,req,res,next)=>{
    res.status(500).send({
        code:500,
        route:res.path,
        message:`try again we found erros : ${error.message}`,
    });
};
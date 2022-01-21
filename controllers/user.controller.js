const userService = require('../services/user.service');


const getName = async(req,res)=>{
    const fieldname = req.body.fieldname;
    const name = (req.body.firstName || req.body.lastName || req.body.filename || req.body.email || req.body.originalname)
    const result = await userService.getName(name,fieldname);
    res.send(result);
}

const fullTextSearch = async(req,res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const result = await userService.fullTextSearch(firstName,lastName);
    res.send(result);
}

const sorting = async(req,res)=>{
 const order = req.body.order;
 const limit = req.body.limit;
 const combine = (req.body.firstName || req.body.lastName || req.body.email || req.body.filename)
    const result = await userService.sorting(combine,order,limit);
    res.send(result);
}


const getDate = async(req,res)=>{
    const createdAt = req.body.createdAt;
    const updatedAt = req.body.updatedAt;
    const result = await userService.getDate(createdAt,updatedAt);
    res.send(result);
}


const allData = async(req,res)=>{
    const payload = (req.body.firstName || req.body.lastName || req.body.email || req.body.filename)
    const fieldname = req.body.fieldname;
    const order = req.body.order;
    const limit = req.body.limit;
    const result = await userService.allData(payload,fieldname,order,limit);
    console.log('77777777777777777777777777777777777',result);
    res.send(result);

}

  module.exports = {
    getName,
    sorting,
    fullTextSearch,
    getDate,
    allData,
    
  }
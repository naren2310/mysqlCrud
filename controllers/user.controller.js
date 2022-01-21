const userService = require('../services/user.service');

const createTable =   async (req, res) => {
   const payload = {
        name:req.body.name,
        age:req.body.age,
        qulification:req.body.qulification,

    }

    const user = await userService.createTable(payload);

    res.send("table created sucessfully ");
};

const createUser =   async (req, res) => {
    const payload = {
         name:req.body.name,
         age:req.body.age,
         qulification:req.body.qulification,
 
     }
 
     const user = await userService.createUser(payload);
 
     res.send(user);
 };


 const getUserId = async (req,res)=>{
     const user = await userService.getUserId(req.params.id);
     res.send(user);
 }


 const getAllUsers = async (req,res)=>{
     const user = await userService.getAllUsers();
     res.send(user);
 }
 const updateUser =   async (req, res) => {
    const payload = {
         name:req.body.name,
         age:req.body.age,
         qulification:req.body.qulification,
 
     }
    const id = req.params.id;
     const user = await userService.updateUser(payload,id);
 
     res.send(user);
 };



const deleteUser = async (req, res) => {
  const user = await userService.deleteUser(req.params.id);
  res.send(user);
};

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

  module.exports = {
    createTable,
    createUser,
    getUserId,
    updateUser,
    deleteUser,
    getAllUsers,
    getName,
    sorting,
    fullTextSearch,
    getDate,
    
  }
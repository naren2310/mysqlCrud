const db = require('../db.connection');

const getName = async(payload,fieldname)=>{
    return new Promise((res)=>{
        db.query(`select * from employees where ${fieldname} LIKE '${payload}%'`, (err,rows)=>{
        if(err){
            console.log('error',err);
        }
        return res(rows);
        })
    })
}

const fullTextSearch = async(payload)=>{
    return new Promise((res)=>{
        db.query(` SELECT * FROM employees WHERE CONCAT(firstName, ' ', lastName) LIKE '%${payload}%'`, (err,rows)=>{
        if(err){
            console.log('error',err);
        }
        return res(rows);
        })
    })
}

const sorting = async(payload,order,limit)=>{
    return new Promise((res)=>{
        db.query(`SELECT * FROM employees ORDER BY ${payload} ${order} LIMIT ${limit}`,(err,rows)=>{
            if(err){
                console.log('error',err);
            }
            return res(rows);
        })
    })
}

const getDate = async(createdAt,updatedAt)=>{
    return new Promise((res)=>{
        db.query(`select * from employees where createdAt >='${createdAt}' AND updatedAt<='${updatedAt}'`,(err,rows)=>{
            if(err){
                console.log('error',err);
            }
            return res(rows);
        })
    })
}


module.exports = {
    getName,
    sorting,
    fullTextSearch,
    getDate,
};

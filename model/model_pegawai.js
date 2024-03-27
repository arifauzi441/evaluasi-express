let connection = require(`../config/database`);

class model_pegawai{
    static async getAll(){
        return new Promise((resolve,reject) => {
            connection.query(`select * from pegawai order by id_pegawai`, (err,rows) => {
                if(err){
                    reject(err)
                }else{
                    resolve(rows)
                }
            })
        })
    }
    static async storeAll(data){
        return new Promise((resolve,reject) => {
            connection.query(`insert into pegawai set ?`, data, (err,rows) => {
                if(err){
                    reject(err)
                }else{
                    resolve(rows)
                }
            })
        })
    }
    static async editAll(id){
        return new Promise((resolve,reject) => {
            connection.query(`select * from pegawai where id_pegawai = ${id}`, (err,rows) => {
                if(err){
                    reject(err)
                }else{
                    resolve(rows)
                }
            })
        })
    }
    static async upadateAll(id, data){
        return new Promise((resolve,reject) => {
            connection.query(`update pegawai set ? where id_pegawai = ${id}`, data, (err,rows) => {
                if(err){
                    reject(err)
                }else{
                    resolve(rows)
                }
            })
        })
    }
    static async deleteAll(id){
        return new Promise((resolve,reject) => {
            connection.query(`delete from pegawai where id_pegawai = ${id}`, (err,rows) => {
                if(err){
                    reject(err)
                }else{
                    resolve(rows)
                }
            })
        })
    }
}
module.exports = model_pegawai;
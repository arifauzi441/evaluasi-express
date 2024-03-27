let connection = require(`../config/database`);

class model_ruangan{
    static async getAll(){
        return new Promise((resolve,reject) => {
            connection.query(`select * from ruangan join pegawai on ruangan.id_pegawai = pegawai.id_pegawai order by id_ruangan`, (err,rows) => {
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
            connection.query(`insert into ruangan set ?`, data, (err,rows) => {
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
            connection.query(`select * from ruangan where id_ruangan = ${id}`, (err,rows) => {
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
            connection.query(`update ruangan set ? where id_ruangan = ${id}`, data, (err,rows) => {
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
            connection.query(`delete from ruangan where id_ruangan = ${id}`, (err,rows) => {
                if(err){
                    reject(err)
                }else{
                    resolve(rows)
                }
            })
        })
    }
}
module.exports = model_ruangan;
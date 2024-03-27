let connection = require(`../config/database`);

class model_penyimpanan{
    static async getAll(){
        return new Promise((resolve,reject) => {
            connection.query(`select * from penyimpanan join ruangan on penyimpanan.id_ruangan = ruangan.id_ruangan order by id_penyimpanan`, (err,rows) => {
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
            connection.query(`insert into penyimpanan set ?`, data, (err,rows) => {
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
            connection.query(`select * from penyimpanan where id_penyimpanan = ${id}`, (err,rows) => {
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
            connection.query(`update penyimpanan set ? where id_penyimpanan = ${id}`, data, (err,rows) => {
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
            connection.query(`delete from penyimpanan where id_penyimpanan = ${id}`, (err,rows) => {
                if(err){
                    reject(err)
                }else{
                    resolve(rows)
                }
            })
        })
    }
}
module.exports = model_penyimpanan;
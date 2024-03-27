let connection = require(`../config/database`);

class model_barang{
    static async getAll(){
        return new Promise((resolve,reject) => {
            connection.query(`select * from barang join penyimpanan on barang.id_penyimpanan = penyimpanan.id_penyimpanan order by id_barang`, (err,rows) => {
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
            connection.query(`insert into barang set ?`, data, (err,rows) => {
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
            connection.query(`select * from barang where id_barang = ${id}`, (err,rows) => {
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
            connection.query(`update barang set ? where id_barang = ${id}`, data, (err,rows) => {
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
            connection.query(`delete from barang where id_barang = ${id}`, (err,rows) => {
                if(err){
                    reject(err)
                }else{
                    resolve(rows)
                }
            })
        })
    }
}
module.exports = model_barang;
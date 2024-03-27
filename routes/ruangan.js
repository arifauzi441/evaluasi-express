let express = require(`express`);
let routes = express.Router();
const model_ruangan = require(`../model/model_ruangan`);
const model_pegawai = require(`../model/model_pegawai`);

routes.get(`/`, async (req,res,next) => {
    let data = await model_ruangan.getAll();
    res.render(`ruangan/index`,{
        data
    });
});

routes.get(`/create`, async (req,res,next) => {
    let data = await model_pegawai.getAll();
    res.render(`ruangan/create`,{
        data
    });
})

routes.post(`/store`, async (req,res,next) => {
    try{
        let {nama_ruangan, kode_ruangan, id_pegawai} = req.body;
        let data = {nama_ruangan, kode_ruangan, id_pegawai};
        await model_ruangan.storeAll(data);
        res.redirect(`/ruangan`);
    }catch(err){
        console(err);
    }
})

routes.get(`/edit/(:id)`, async (req,res,next) => {
    id = req.params.id
    data = await model_ruangan.editAll(id);
    data2 = await model_pegawai.getAll();
    res.render(`ruangan/edit`,{
        data2,
        id : data[0].id_ruangan,
        nama : data[0].nama_ruangan,
        kode : data[0].kode_ruangan,
    });
})

routes.post(`/update/(:id)`, async (req,res,next) => {
    try{
        let id = req.params.id
        let {nama_ruangan, kode_ruangan, id_pegawai} = req.body;
        let data = {nama_ruangan, kode_ruangan, id_pegawai};
        await model_ruangan.upadateAll(id,data);
        res.redirect(`/ruangan`);
    }catch(err){
        console.log(err);
    }
})

routes.get(`/delete/(:id)`, async (req,res,next) =>{
    let id = req.params.id
    await model_ruangan.deleteAll(id);
    res.redirect(`/ruangan`);
})

module.exports = routes;
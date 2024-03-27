let express = require(`express`);
let routes = express.Router();
const model_pegawai = require(`../model/model_pegawai`);

routes.get(`/`, async (req,res,next) => {
    let data = await model_pegawai.getAll();
    res.render(`pegawai/index`,{
        data
    });
});

routes.get(`/create`, (req,res,next) => {
    res.render(`pegawai/create`);
})

routes.post(`/store`, async (req,res,next) => {
    try{
        let {nama_pegawai,nip_pegawai,jabatan_pegawai} = req.body;
        let data = {nama_pegawai,nip_pegawai,jabatan_pegawai};
        await model_pegawai.storeAll(data);
        res.redirect(`/pegawai`);
    }catch(err){
        console(err);
    }
})

routes.get(`/edit/(:id)`, async (req,res,next) => {
    id = req.params.id
    data = await model_pegawai.editAll(id);
    res.render(`pegawai/edit`,{
        id : data[0].id_pegawai,
        nama : data[0].nama_pegawai,
        nip : data[0].nip_pegawai,
        jabatan : data[0].jabatan_pegawai,
    });
})

routes.post(`/update/(:id)`, async (req,res,next) => {
    try{
        let id = req.params.id
        let {nama_pegawai,nip_pegawai,jabatan_pegawai} = req.body;
        let data = {nama_pegawai,nip_pegawai,jabatan_pegawai};
        await model_pegawai.upadateAll(id,data);
        res.redirect(`/pegawai`);
    }catch(err){
        console.log(err);
    }
})

routes.get(`/delete/(:id)`, async (req,res,next) =>{
    let id = req.params.id
    await model_pegawai.deleteAll(id);
    res.redirect(`/pegawai`);
})

module.exports = routes;
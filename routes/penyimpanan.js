let express = require(`express`);
let routes = express.Router();
const model_penyimpanan = require(`../model/model_penyimpanan`);
const model_ruangan = require(`../model/model_ruangan`);

routes.get(`/`, async (req,res,next) => {
    let data = await model_penyimpanan.getAll();
    res.render(`penyimpanan/index`,{
        data
    });
});

routes.get(`/create`, async (req,res,next) => {
    let data = await model_ruangan.getAll();
    res.render(`penyimpanan/create`,{
        data
    });
})

routes.post(`/store`, async (req,res,next) => {
    try{
        let {nama_penyimpanan, kode_penyimpanan, id_ruangan} = req.body;
        let data = {nama_penyimpanan, kode_penyimpanan, id_ruangan};
        await model_penyimpanan.storeAll(data);
        res.redirect(`/penyimpanan`);
    }catch(err){
        console(err);
    }
})

routes.get(`/edit/(:id)`, async (req,res,next) => {
    id = req.params.id
    data = await model_penyimpanan.editAll(id);
    data2 = await model_ruangan.getAll();
    res.render(`penyimpanan/edit`,{
        data2,
        id : data[0].id_penyimpanan,
        nama : data[0].nama_penyimpanan,
        kode : data[0].kode_penyimpanan,
    });
})

routes.post(`/update/(:id)`, async (req,res,next) => {
    try{
        let id = req.params.id
        let {nama_penyimpanan, kode_penyimpanan, id_ruangan} = req.body;
        let data = {nama_penyimpanan, kode_penyimpanan, id_ruangan};
        await model_penyimpanan.upadateAll(id,data);
        res.redirect(`/penyimpanan`);
    }catch(err){
        console.log(err);
    }
})

routes.get(`/delete/(:id)`, async (req,res,next) =>{
    let id = req.params.id
    await model_penyimpanan.deleteAll(id);
    res.redirect(`/penyimpanan`);
})

module.exports = routes;
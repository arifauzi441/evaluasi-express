let express = require(`express`);
let routes = express.Router();
const model_barang = require(`../model/model_barang`);
const model_penyimpanan = require(`../model/model_penyimpanan`);

routes.get(`/`, async (req,res,next) => {
    let data = await model_barang.getAll();
    res.render(`barang/index`,{
        data
    });
});

routes.get(`/create`, async (req,res,next) => {
    let data = await model_penyimpanan.getAll();
    res.render(`barang/create`,{
        data
    });
})

routes.post(`/store`, async (req,res,next) => {
    try{
        let {nama_barang, kode_barang, merk_spesifikasi_barang, tahun_perolehan_barang, sumber_perolehan_barang, jumlah_perolehan_barang, kondisi_perolehan_barang, id_penyimpanan} = req.body;
        let data = {nama_barang, kode_barang, merk_spesifikasi_barang, tahun_perolehan_barang, sumber_perolehan_barang, jumlah_perolehan_barang, kondisi_perolehan_barang, id_penyimpanan}
        await model_barang.storeAll(data);
        res.redirect(`/barang`);
    }catch(err){
        console(err);
    }
})

routes.get(`/edit/(:id)`, async (req,res,next) => {
    id = req.params.id
    data = await model_barang.editAll(id);
    data2 = await model_penyimpanan.getAll();
    res.render(`barang/edit`,{
        data2,
        id : data[0].id_barang,
        nama : data[0].nama_barang,
        kode : data[0].kode_barang,
        merk : data[0].merk_spesifikasi_barang,
        tahun: data[0].tahun_perolehan_barang,
        sumber: data[0].sumber_perolehan_barang,
        jumlah: data[0].jumlah_perolehan_barang,
        kondisi: data[0].kondisi_perolehan_barang,
    });
})

routes.post(`/update/(:id)`, async (req,res,next) => {
    try{
        let id = req.params.id
        let {nama_barang, kode_barang, merk_spesifikasi_barang, tahun_perolehan_barang, sumber_perolehan_barang, jumlah_perolehan_barang, kondisi_perolehan_barang, id_penyimpanan} = req.body;
        let data = {nama_barang, kode_barang, merk_spesifikasi_barang, tahun_perolehan_barang, sumber_perolehan_barang, jumlah_perolehan_barang, kondisi_perolehan_barang, id_penyimpanan}
        await model_barang.upadateAll(id,data);
        res.redirect(`/barang`);
    }catch(err){
        console.log(err);
    }
})

routes.get(`/delete/(:id)`, async (req,res,next) =>{
    let id = req.params.id
    await model_barang.deleteAll(id);
    res.redirect(`/barang`);
})

module.exports = routes;
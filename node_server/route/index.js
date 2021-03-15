const express = require("express");
const handleDB = require("../db/handleDB");
const router = express.Router();

router.get("/", async (req, res) => {
	let sql = "select * from product_bar";
	let result = await handleDB(res, sql);
	let data = {
		data: result
	}
	
	res.send(data)
})

router.get("/getListData", async (req, res) => {
	let {
		id
	} = req.query;
	let sql = `select * from product_list${id}`;
	let result = await handleDB(res, sql);
	let data = {
		data: result
	}
	res.send(data)

})



module.exports = router;

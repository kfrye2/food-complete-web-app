const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();

app.set("port", 8080);

app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

var Pool = require("pg").Pool;
var config = {
	host: "localhost",
	user: "foodie",
	password: "foodie",
	database: "food_nutrition"
};

var pool = new Pool(config);

app.get("/api/info", async (req, res) => {
	try {
		const template = "select sum(coalesce(fa_sat_g,0) + coalesce(fa_mono_g,0) + "
									+ "coalesce(fa_poly_g,0)) as fat_g, "
            + "e.description, e.kcal, e.protein_g, e.carbohydrate_g "
            + "from entries e where description ilike $1 group by "
			+ "e.kcal, e.protein_g, e.carbohydrate_g, e.description "
			+ "order by e.description limit 20;"
        
		const response = await pool.query(template, ['%' + req.query.q + '%']);
		if (response.rowCount == 0) {
			res.sendStatus(404);
        }
        
        const results = response.rows.map(function(item) {
			return item;
		});
		res.json({ food: response.rows });
	} catch (err) {
		console.error("Error running query " + err);
	}
});

app.listen(app.get("port"), () => {
	console.log(`Find the server at http://localhost:${app.get("port")}/`);
});

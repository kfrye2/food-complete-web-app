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
	console.log(req.query.q);
	try {
        const template = "select sum(fa_sat_g + fa_mono_g + fa_poly_g) as fat_g, "
            + "e.description, e.kcal, e.protein_g, e.carbohydrate_g "
            + "from entries e where description ilike $1 group by "
            + "e.description, e.kcal, e.protein_g, e.carbohydrate_g limit 25;"
        
		const response = await pool.query(template, ['%' + req.query.q + '%']);
		if (response.rowCount == 0) {
			res.sendStatus(404);
        }
        
        const results = response.rows.map(function(item) {
            const fats = item.fat_g;
            fats.toFixed(2);
			return item;
		});
		res.json({ foods: response.rows });
	} catch (err) {
		console.error("Error running query " + err);
	}
});

app.listen(app.get("port"), () => {
	console.log(`Find the server at http://localhost:${app.get("port")}/`);
});

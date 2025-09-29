import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

import { prepareData } from "./data";

const data = prepareData();
const app = new Hono();

app.use("/*", cors());
app.use(logger());
app.get("/query", (ctx) => {
	const fn = ctx.req.query("function");
	const symbol = ctx.req.query("symbol");
	const apiKey = ctx.req.query("apikey");

	if (
		!apiKey ||
		(apiKey !== process.env.API_KEY && apiKey !== process.env.DEMO_KEY)
	) {
		return ctx.json(
			{
				"Error Message":
					'The parameter "apikey" is invalid or missing. Please claim your API key.',
			},
			200,
		);
	}

	if (fn !== "TIME_SERIES_DAILY" && fn !== "OVERVIEW") {
		return ctx.json(
			{
				"Error Message": `This API function (${fn ?? ""}) does not exist.`,
			},
			200,
		);
	}

	if (apiKey === process.env.DEMO_KEY && symbol !== process.env.DEMO_SYMBOL) {
		return ctx.json(
			{
				Information:
					"The **demo** API key is for demo purposes only. Please claim your API key.",
			},
			200,
		);
	}

	if ((symbol && !data.has(symbol)) || !symbol) {
		return ctx.json({}, 200);
	}

	return ctx.json((data.get(symbol) as any)[fn]);
});

serve(
	{
		fetch: app.fetch,
		port: Number(process.env.PORT) || 3000,
	},
	(info) => {
		console.log(`Server is running on http://localhost:${info.port}`);
	},
);

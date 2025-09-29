import dailyData from "./daily.json" with { type: "json" };
import overviewData from "./overview.json" with { type: "json" };

const daily = dailyData as any;
const overview = overviewData as any;

type Data = {
	TIME_SERIES_DAILY: any;
	OVERVIEW: any;
};

const prepareData = (): Map<string, Data> => {
	const data = new Map<string, Data>();

	Object.keys(overview).forEach((key) => {
		data.set(key, {
			TIME_SERIES_DAILY: daily[key],
			OVERVIEW: overview[key],
		});
	});

	return data;
};

export { prepareData };

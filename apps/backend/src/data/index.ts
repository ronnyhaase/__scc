import dailyData from "./daily.json" with { type: "json" };
import overviewData from "./overview.json" with { type: "json" };

type Overview = Record<string, string>;
interface TimeSeries {
	"Meta Data": {
		"1. Information": string;
		"2. Symbol": string;
		"3. Last Refreshed": string;
		"4. Output Size": string;
		"5. Time Zone": string;
	};
	"Time Series (Daily)": {
		[date: string]: {
			"1. open": string;
			"2. high": string;
			"3. low": string;
			"4. close": string;
			"5. volume": string;
		};
	};
}

const daily = dailyData as Record<string, TimeSeries>;
const overview = overviewData as Record<string, Overview>;

type Data = {
	TIME_SERIES_DAILY: TimeSeries;
	OVERVIEW: Overview;
};

const prepareData = (): Map<string, Data> => {
	const data = new Map<string, Data>();

	Object.keys(overview).forEach((symbol) => {
		data.set(symbol, {
			TIME_SERIES_DAILY: daily[symbol],
			OVERVIEW: overview[symbol],
		});
	});

	return data;
};

export { prepareData };

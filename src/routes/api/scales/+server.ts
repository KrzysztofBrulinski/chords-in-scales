import { AllScales } from "$data";
import { apiFakeTimeout } from "$utils/apiFakeTimeout";
import { json } from "@sveltejs/kit";

export async function GET({ setHeaders }) {
	try {
		await apiFakeTimeout();

		setHeaders({
			"cache-control": "max-age=604800",
		});

		return json(AllScales);

	} catch (error) {
		console.log(error);
		return json({
			scales: [],
			error
		});
	}
}

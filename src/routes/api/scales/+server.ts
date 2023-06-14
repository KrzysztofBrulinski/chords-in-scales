export async function GET() {
	try {
		const time = Math.floor((Math.random() * 2) + 1) * 1000;
		const apiTimeoutSimulation = () => new Promise((resolve) => {
			setTimeout(() => resolve(""), time);
		});

		const data = {
			scales: [
				"A",
				"Am",
				"A#",
				"A#m",
				"B",
				"Bm",
				"B#",
				"B#m",
				"C",
				"Cm",
				"C#",
				"C#m",
				"D",
				"Dm",
				"D#",
				"D#m",
				"E",
				"Em",
				"E#",
				"E#m",
				"F",
				"Fm",
				"F#",
				"F#m",
				"G",
				"Gm",
				"G#",
				"G#m"
			],
		};

		await apiTimeoutSimulation();

		return new Response(JSON.stringify(data), {
			headers: {
				'Content-Type': 'application/json'
			}
		});

	} catch (error) {
		if (error instanceof Error) {
			const errorResponse = {
				scales: [],
				error
			}
			return new Response(JSON.stringify(errorResponse), {
				headers: {
					'Content-Type': 'application/json'
				}
			});
		}
	}
}

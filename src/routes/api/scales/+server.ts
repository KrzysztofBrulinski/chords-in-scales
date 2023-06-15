export async function GET() {
	try {
		const time = Math.floor((Math.random() * 2) + 1) * 1000;
		const apiTimeoutSimulation = () => new Promise((resolve) => {
			setTimeout(() => resolve(""), time);
		});

		const data = {
			scales: {
				moll: [
					"Am",
					"Bbm",
					"Bm",
					"Cm",
					"C#m",
					"Dm",
					"D#m",
					"Em",
					"Fm",
					"F#m",
					"Gm",
					"G#m",
				],

				dur: [
					"A",
					"Bb",
					"B",
					"C",
					"C#",
					"D",
					"Eb",
					"E",
					"F",
					"F#",
					"G",
					"Ab",
				],
			}
		};

		await apiTimeoutSimulation();

		return new Response(JSON.stringify(data), {
			headers: {
				'Content-Type': 'application/json',
				'cache-control': 'public, max-age=3600'
			}
		});

	} catch (error) {
		console.log(error);
		return new Response(JSON.stringify({
			scales: [],
			error
		}), {
			headers: {
				'Content-Type': 'application/json',
				'cache-control': 'public, max-age=3600'
			}
		});
	}
}

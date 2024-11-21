
async function main()
{
	const promise: Promise<string> = new Promise((resolve, reject) =>
	{
		setTimeout(() =>
		{
			resolve("OK");
			reject("Error!");
		});
	});

	promise.then(v => console.log("value: ", v))
		.catch(error => console.log("error: ", error));
}
main();

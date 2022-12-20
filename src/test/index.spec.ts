import { AxiosResponse } from "axios";
import { Config } from "./../interface/IConfig";
import { Client } from "./../index";
describe("Client unit test", () => {
	let config = {
		...new Config(),
		clientId: "796de824-97c8-48ce-ba50-75a3a4ea085e",
		secret: "6WWJEU53klJerZLlyfKXdoycEpaU8xTZNkElOvKu9Nui288WhCkuhUsMTMHang0B",
		host: "localhost:9666",
		ssl: false,
		apiVersion: "v2",
	};
	const client = new Client(config);
	let response1, response2;
	test("Get all categories async", async () => {
		response1 = await client.async_getCategories();
	});
	test("Get all categories no_async", async () => {
		await client.noAsync_getCategories().then((res: AxiosResponse) => {
			response2 = res.data;
		});
		expect(response1).toEqual(response2);
	});

	test("Get all anime by category async", async () => {});
});

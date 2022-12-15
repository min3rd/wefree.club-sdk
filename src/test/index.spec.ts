import { AxiosResponse } from "axios";
import { Config } from "./../interface/IConfig";
import { Client } from "./../index";
describe("Client unit test", () => {
	let config = {
		...new Config(),
		clientId: "",
		secret: "",
		host: "localhost:9666",
		ssl: false,
		apiVersion: "v2",
	};
	const client = new Client(config);
	let aCategories, naCategories;
	test("Get all categories async", async () => {
		aCategories = await client.async_getCategories();
	});
	test("Get all categories no_async", async () => {
		await client.noAsync_getCategories().then((res: AxiosResponse) => {
			naCategories = res.data;
		});
		expect(aCategories).toEqual(naCategories);
	});

	test("Get all anime by category async", async () => {

    });
});

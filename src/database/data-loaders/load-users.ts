import fs from "node:fs";
import { User } from "../../schemas/index";
import path from "node:path";

const loadUsers = async () => {
	try {
		const areAnyUser = await User.countDocuments();
		if (areAnyUser > 0) {
			console.log("User are already loaded in the database. Skipping fill.");
			return;
		}

		const usersDataPath = path.join(__dirname, "../../initial-data/users.json");
		const usersData = JSON.parse(fs.readFileSync(usersDataPath, "utf-8"));

		await User.insertMany(usersData);
		console.log("Users have been successfully inserted into the database.");
	} catch (error) {
		console.error("Error filling users:", error);
	}
};

export default loadUsers;

import { User } from "../../schemas/index";
import usersData from "../../data/users.json"

const loadUsers = async () => {
	try {
		const areAnyUser = await User.countDocuments();
		if (areAnyUser > 0) {
			console.log("User are already loaded in the database. Skipping fill.");
			return;
		}
		await User.insertMany(usersData);
		console.log("Users have been successfully inserted into the database.");
	} catch (error) {
		console.error("Error filling users:", error);
	}
};

export default loadUsers;

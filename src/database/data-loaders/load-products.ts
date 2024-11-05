import mongoose from "mongoose";
import { Category } from "../../schemas/index";
import { Product } from "../../schemas/index";
import categoriesData from "../../data/categories.json";
import productsData from "../../data/products.json";

async function loadProducts() {
	try {
		const productCount = await Product.countDocuments();
		if (productCount > 0) {
			console.log(
				"Products are already loaded in the database. Skipping fill.",
			);
			return;
		}

		const categoryPromises = categoriesData.map(async (categoryData) => {
			let category = await Category.findOne({ name: categoryData.name });
			if (!category) {
				category = await Category.create(categoryData);
			}
			return category;
		});
		const categories = await Promise.all(categoryPromises);

		const categoryMap: { [key: string]: mongoose.Types.ObjectId } = {};

		for (const category of categories) {
			categoryMap[category.name] = category._id;
		}

		const productsWithCategoryIds = productsData.map((product) => {
			return {
				...product,
				price: Number.parseFloat(
					product.price.replace("$", "").replace(",", ""),
				),
				category: categoryMap[product.category],
			};
		});

		await Product.insertMany(productsWithCategoryIds);
		console.log("Categories and products loaded successfully.");
	} catch (error) {
		console.error("Error filling the database:", error);
	} finally {
		mongoose.connection.close();
	}
}

export default loadProducts;

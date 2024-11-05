import { Category } from '../../schemas/index';
import categoriesData from '../../data/categories.json';


    async function loadCategories() {
        const categoryMap: { [key: string]: string } = {};

        const categoryPromises = categoriesData.map(async (categoryData) => {
            let category = await Category.findOne({ name: categoryData.name });
            if (!category) {
                category = await Category.create(categoryData);
            }
            categoryMap[category.name] = category._id.toString();
            return category;
        });

        await Promise.all(categoryPromises);
        return categoryMap;
    }
export default loadCategories;

import loadUsers from '../database/data-loaders/load-users';
import loadProducts from '../database/data-loaders/load-products';
import loadCategories from '../database/data-loaders/load-categories';

async function initializeDatabase() {
    try {
        console.log("Starting initial data loading...");

        await loadCategories();
        console.log("Categories loaded successfully.");

        await loadUsers();
        console.log("Users loaded successfully.");

        await loadProducts();
        console.log("Products loaded successfully.");

        console.log("Initial data loading completed.");
    } catch (error) {
        console.error("Error during database initialization:", error);
    }
}

export default initializeDatabase;

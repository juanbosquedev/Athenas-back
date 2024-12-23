import { getAllUsers } from "./users-controller/all-usesrs";
import { createUser } from "./users-controller/create-user";
import { getUserById } from "./users-controller/usesr-id";
import { deleteUser } from "./users-controller/delete-user";
import { updateUser } from "./users-controller/update-user";
import { addFavoriteProduct } from "./users-controller/favorites/add-favorite-product";
import { removeFavoriteProduct } from "./users-controller/favorites/remove-favorite-product";

export {
    getAllUsers,
    createUser,
    getUserById,
    deleteUser,
    updateUser,
    addFavoriteProduct,
    removeFavoriteProduct
};

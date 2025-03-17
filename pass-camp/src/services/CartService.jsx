import axios from "axios";

const API_BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/cart`;

export const getCart = async (accountId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}`, {
      params: { accountId },
      withCredentials: true,
      headers: {
        loggedInUser: sessionStorage.getItem("loggedInUser"),
        role: sessionStorage.getItem("role"),
      },
    });
    console.log("response:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching cart:", error);
    return [];
  }
};

export const getCartItems = async (cartId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}`, {
      params: { cartId },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching cart items:", error);
    return [];
  }
};

export const addToCart = async (item) => {
  try {
    const cartData = await getCart(item.accountId);
    console.log(item.accountId);

    console.log("Cart data:", cartData);

    if (!cartData?.cartId) {
      throw new Error("Cart not found for the user.");
    }

    const response = await axios.post(
      `${API_BASE_URL}/add`,
      { ...item, cartId: cartData.cartId },
      {
        withCredentials: true,
        headers: {
          loggedInUser: sessionStorage.getItem("loggedInUser"),
          role: sessionStorage.getItem("role"),
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Error adding item to cart:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const removeFromCart = async (cartItemId) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/remove/${cartItemId}`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error removing item from cart:", error);
  }
};

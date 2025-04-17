import { DeleteData, GetData, PostData, PutData } from "../../utils";
import { landingProducts, productDetails } from "../shpping-slice";
import {
  addNewAddress,
  addToCart,
  addToWishlist,
  placeOrder,
  removeFromCart,
  removeFromWishlist,
} from "../user-slice";

export const onGetProducts = (payload) => async (dispatch) => {
  try {
    const response = await GetData("/");

    dispatch(landingProducts(response.data));
    // dispatch({ type: Action.LANDING_PRODUCTS, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

export const onGetProductDetails = (id) => async (dispatch) => {
  try {
    const response = await GetData("/" + id);

    dispatch(productDetails(response.data));
    // dispatch({ type: Action.PRODUCT_DETAILS, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

/* ------------------- Wishlist --------------------- */

export const onAddToWishlist = (_id) => async (dispatch) => {
  try {
    const response = await PutData("/wishlist", {
      _id,
    });

    dispatch(addToWishlist(response.data));
    // dispatch({ type: Action.ADD_TO_WISHLIST, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

export const onRemoveFromWishlist = (_id) => async (dispatch) => {
  try {
    const response = await DeleteData("/wishlist/" + _id);

    dispatch(removeFromWishlist(response.data));
    // dispatch({ type: Action.REMOVE_FROM_WISHLIST, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

/* ------------------- Cart --------------------- */

export const onAddToCart =
  ({ _id, qty }) =>
  async (dispatch) => {
    try {
      const response = await PutData("/cart", {
        _id,
        qty,
      });

      dispatch(addToCart(response.data));
      // dispatch({ type: Action.ADD_TO_CART, payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };

export const onRemoveFromCart = (_id) => async (dispatch) => {
  try {
    const response = await DeleteData("/cart/" + _id);

    dispatch(removeFromCart(response.data));
    // dispatch({ type: Action.REMOVE_FROM_CART, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

export const onCreateAddress =
  ({ street, postalCode, city, country }) =>
  async (dispatch) => {
    try {
      const response = await PostData("/customer/address/", {
        street,
        postalCode,
        city,
        country,
      });
      dispatch(addNewAddress(response.data));
      // dispatch({ type: Action.ADDED_NEW_ADDRESS, payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };

export const onPlaceOrder =
  ({ transactionId }) =>
  async (dispatch) => {
    try {
      const response = await PostData("/shopping/order/", {
        transactionId,
      });

      console.log(response.data, "ORDER");
      dispatch(placeOrder(response.data));
      // dispatch({ type: Action.PLACE_ORDER, payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };

import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircle,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import NotFound from "./errors/NotFound";
import SelectAmountModal from "../components/SelectAmountModal";
import { addToCart } from "../services/CartService";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const base_img_url = "https://fakeimg.pl/300/";

const ItemDetail = () => {
  const [searchParams] = useSearchParams();
  const itemId = searchParams.get("itemId");
  const [itemData, setItemData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle adding item to cart after selecting amount
  const handleConfirm = async (amount) => {
    const cartItem = {
      accountId: JSON.parse(sessionStorage.getItem("loggedInUser"))?.accountId,
      itemId: itemData?.item?.itemId,
      amount: amount,
      totalPrice: itemData?.item?.price * amount,
    };

    try {
      await addToCart(cartItem);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Failed to add item to cart:", error);
    }
  };

  const fetchItemDetail = async (itemId) => {
    if (!itemId) return;

    try {
      const response = await axios.get(`${API_BASE_URL}/item/info`, {
        params: { itemId },
      });

      setItemData(response.data);
    } catch (error) {
      console.error("Fetch error:", error);
      setItemData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItemDetail(itemId);
  }, [itemId]);

  const item = itemData?.item;
  const sellerAccount = itemData?.sellerAccount;
  const availableAmount = itemData?.availableAmount;
  const categories = itemData?.categories;

  if (loading) return <Spinner />;
  if (!itemData) return <NotFound />;

  return (
    <div className="grid w-11/12 mx-auto gap-6 py-6">
      {/* Title Section */}
      <div className="title">
        <h1 className="text-3xl font-bold text-gray-800">{item?.itemName}</h1>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section - Image & Description */}
        <div className="flex flex-col  md:col-span-2 gap-6 w-full">
          <div className="image w-full">
            <img
              src={base_img_url}
              alt={item?.itemName}
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="description bg-gray-50 p-6 rounded-lg shadow-md w-full min-h-[200px] flex-grow">
            <p className="text-lg text-gray-700">
              <strong>Description: </strong>
              {item?.description}
            </p>
          </div>
        </div>

        {/* Right Section - Details & Buttons */}
        <div className="flex flex-col gap-6 w-full">
          {/* Item Details */}
          <div className="details bg-gray-50 p-6 rounded-lg shadow-md w-full min-h-[200px] flex-grow">
            <div className="grid grid-cols-2 gap-4 text-gray-700">
              <p>
                <strong>Price:</strong> {item?.price?.toFixed(2)} $
              </p>
              <p>
                <strong>Material:</strong> {item?.material || "N/A"}
              </p>
              <p>
                <strong>Available:</strong> {availableAmount}
              </p>
              <p>
                <strong>In Stock:</strong>
                <span className="font-semibold ml-2">
                  {item.inStock ? (
                    <FontAwesomeIcon
                      className="size-3 text-green-600"
                      icon={faCircle}
                      beatFade
                    />
                  ) : (
                    <FontAwesomeIcon
                      className="size-3 text-red-600"
                      icon={faCircle}
                      beatFade
                    />
                  )}
                </span>
              </p>
              <p>
                <strong>Seller:</strong> {sellerAccount}
              </p>
            </div>

            {/* Categories */}
            <div className="mt-4">
              <h2 className="font-semibold text-gray-700">Categories:</h2>
              <ul className="list-disc list-inside text-gray-600">
                {categories?.length > 0 ? (
                  categories.map((category) => (
                    <li key={category.categoryId}>{category.categoryName}</li>
                  ))
                ) : (
                  <li>No categories available.</li>
                )}
              </ul>
            </div>
          </div>

          {/* Buttons */}
          <div className="buttons flex gap-4">
            <button className="bg-gradient-to-br from-[#E9A885] to-green-200 text-gray-800 px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition w-full">
              Buy Now
              <FontAwesomeIcon className="ml-2" icon={faMoneyBill} />
            </button>
            {/* Button to Open Modal */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-br from-[#E9A885] to-yellow-200 px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition w-full flex justify-center items-center"
            >
              Add to Cart
              <FontAwesomeIcon className="ml-2" icon={faCartShopping} />
            </button>

            {/* Select Amount Modal */}
            <SelectAmountModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onConfirm={handleConfirm}
              product={item}
              availableAmount={availableAmount}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

import { useNavigate } from "react-router-dom";

const default_img_url = "https://fakeimg.pl/300/";
const DataCard = ({
  data: { sellerAccountId, itemId, itemName, price, material },
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/item?itemId=${itemId}`)}
      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      <img
        src={default_img_url} // Fallback image
        alt={itemName}
        className="w-full h-50 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-900">{itemName}</h3>
      <p className="text-gray-600 text-sm">{price}$</p>
    </div>
  );
};

export default DataCard;

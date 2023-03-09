import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Link } from "react-router-dom";

const CartWidget = ({ numero }) => {
  return (
    <Link to="/cart">
      <div className="container-cart">
        <ShoppingCartCheckoutIcon
          style={{
            fontSize: "2rem",
            color: "#e1d4c7",
          }}
        />
        <div className="bubble-counter">
          <span>0</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;

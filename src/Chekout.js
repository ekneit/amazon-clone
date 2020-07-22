import React from "react";
import { useStateValue } from "./StateProvider";
import "./Chekout.css";
import ChekoutProduct from "./ChekoutProduct";
import Subtotal from "./Subtotal";

function Chekout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="chekout">
      <div className="chekout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ad"
          className="chekout__ad"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping basket is empty</h2>
            <p>
              You have no items in your basket. To buy one click "Add to basket"
              next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2>Your Shopping basket</h2>
            {/* List all of the Checkout Products */}
            {basket.map((item) => (
              <ChekoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="chekout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Chekout;

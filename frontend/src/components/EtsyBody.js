import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllItems,
  getAllProducts,
  getProducts,
} from "../features/productsSlice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import { selectUser } from "../features/userSlice";

function EtsyBody() {
  const dispatch = useDispatch();
  // const [products, setProducts] = useState([]);
  const products = useSelector(getAllProducts);
  const user = useSelector(selectUser);
  // const product = useSelector(getProducts);
  // const getAllItemsFromItems = useSelector(getAllItems);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = () => {
    Axios.get("http://localhost:4000/getItems/").then((response) => {
      if (response.data.success === true) {
        console.log("geting all products");
        console.log(response.data.result);

        dispatch(getAllItems(response.data.result));

        // console.log(products);
      }
    });
  };
  const handleFavourite = (itemId, userId) => {
    console.log("Favourites added" + itemId + userId);
  };

  const renderProducts = products.map((pro) => {
    return (
      <div className="home_cards col-md-4 mb-4">
        {pro.itemId}
        <div className="home_card card">
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "50%",
              padding: "5px",
            }}
            className="favourite_icon"
            onClick={() => {
              handleFavourite(pro.itemId, user.id);
            }}
          >
            <FavoriteBorderIcon />
          </div>
          <img
            src={require("../Images/" + pro.itemImage)}
            className="card-img-top"
            alt="..."
          />
          <p className="home_price">
            <AirportShuttleIcon /> ${pro.itemPrice}
          </p>

          {/* <div className="card-body">
            <h5 className="card-title">{pro.itemName}</h5>
            
            <p className="card-text">{pro.itemDescription}</p>
            <button className="btn-sm btn-dark">Edit</button>
          </div> */}
        </div>
      </div>
    );
  });

  return (
    <div
      className="etsy_body"
      style={{
        // backgroundColor: "red",
        marginTop: "10%",
        marginLeft: "3%",
        marginRight: "3%",
      }}
    >
      <div className="container-fluid mx-1">
        <div className="row mt-5 mx-1">
          <div className="col-md-9">
            <div className="row">{renderProducts}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EtsyBody;

import "./CurrencyModal.css";
import Axios from "axios";
import React, { useEffect, useState } from "react";

function CurrencyModal({ setOpenModal }) {
  const [userPreferedCurrency, setUserPreferedCurrency] = useState("");

  const changePreferedCurrency = () => {
    Axios.post("http://localhost:3001/api/changePreferedCurrency", {
      userPreferedCurrency: userPreferedCurrency,
      userId: 1,
    }).then(() => {
      alert("inserted the value");
    });
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => setOpenModal(false)}> X </button>
        </div>

        <div className="title">
          <h4>Update Your Settings</h4>
          <p> Set the currency you use.</p>
        </div>

        <div className="body">
          <label> Currency </label>
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(e) => {
              setUserPreferedCurrency(e.target.value);
            }}
          >
            <option selected> - select currency - </option>
            <option value="$"> $ USD </option>
            <option value="₹"> ₹ Rupee</option>
            <option value="£"> £ Pound</option>
          </select>
        </div>

        <div className="footer">
          <button onClick={() => setOpenModal(false)} id="cancelBtn">
            {" "}
            Close{" "}
          </button>
          <button onClick={() => changePreferedCurrency}> Save </button>
        </div>
      </div>
    </div>
  );
}

export default CurrencyModal;

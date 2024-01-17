import React from "react";
import "./Navigation.css";

function Navigation() {
  return (
    <>
      <div className="border">
        <div className="col">
          <div className="nav">
            <h1>ALPHA SOLUTION</h1>
            <img src="https://st4.depositphotos.com/1842549/21163/i/450/depositphotos_211633178-stock-photo-user-profile-icon-user-profile.jpg" />
          </div>
          <div className="color">
            <div className="form">
              <div>
                <h3 style={{ color: "rgb(76, 74, 74)", fontSize: "16px" }}>
                  Payment Link Reference
                </h3>
                <span
                  style={{
                    color: "black",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  ALP/23-24/1
                </span>
              </div>
              <div className="tot">
                <p style={{ fontSize: "19px", fontWeight: "bold" }}>
                  TOTAL INVOICE
                </p>
                <span style={{ fontSize: "45px", fontWeight: "bold" }}>
                  513
                </span>
              </div>
            </div>
            <div style={{ marginBottom: "25px" }}>
              <h3 style={{ color: "rgb(76, 74, 74)", fontSize: "16px" }}>
                Payment Url Title
              </h3>
              <span
                style={{ color: "black", fontSize: "18px", fontWeight: "bold" }}
              >
                {" "}
                Payment link from Alpha
              </span>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <h3 style={{ color: "rgb(76, 74, 74)", fontSize: "16px" }}>
                Customer Name
              </h3>
              <input
                placeholder="Ameer"
                style={{
                  width: "95%",
                  padding: "10px",
                  borderColor: "white",
                  borderRadius: "5px",
                  fontWeight: "bold",
                }}
              ></input>
            </div>
            <div className="mob">
              <div>
                <label
                  style={{
                    color: "rgb(76, 74, 74)",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Mobile Number
                </label>
                <br />
                <input
                  type="text"
                  id="exampleInput"
                  name="exampleInput"
                  value="+976|"
                  placeholder="78676777"
                  style={{
                    width: "80%",
                    padding: "10px",
                    borderColor: "white",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div>
                <label
                  style={{
                    color: "rgb(76, 74, 74)",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Customer Email
                </label>
                <br />
                <input
                  placeholder="xyz@gmail.com"
                  style={{
                    width: "95%",
                    padding: "10px",
                    borderColor: "white",
                    borderRadius: "5px",
                    paddingLeft: "5px",
                    fontWeight: "bold",
                  }}
                ></input>
              </div>
            </div>
            <div className="tabMain">
              <div>
                <h3>INVOICE ITEMS</h3>
              </div>
              <div>
                <label style={{ color: "white", marginRight: "9px" }}>
                  Invoice amount
                </label>
                <input
                  value="99KD"
                  style={{
                    width: "40px",
                    padding: "10px",
                    borderColor: "white",
                    borderRadius: "8px",
                    color: "red",
                    fontWeight: "bold",
                  }}
                />
              </div>
            </div>
            <div className="tab">
              <table>
                <tr>
                  <th>No.</th>
                  <th>Invoice Details</th>
                  <th> Invoice Date</th>
                  <th> Quantity</th>
                  <th>Amount(KD)</th>
                </tr>
                <tr>
                  <td>01</td>
                  <td>AJA/22-23/3</td>
                  <td>20/12/2023</td>
                  <td>01</td>
                  <td>99</td>
                </tr>
              </table>
            </div>
            <div>
              <button
                style={{
                  width: "30%",
                  padding: "10px",
                  borderColor: "white",
                  borderRadius: "10px",
                }}
              >
                PAY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;

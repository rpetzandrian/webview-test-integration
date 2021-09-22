import React from "react";
import { Link, useHistory } from "react-router-dom";
import parse from "html-react-parser";
import "./css.css";

const Homepage = ({ edit }) => {
  const data = `<h1>Hasklhduemnjknawkljlkj</h1>`;

  return (
    <div class="container">
      <section
        id="basic-info"
        className={edit && "bordered"}
        onClick={() =>
          edit && window.ReactNativeWebView.postMessage("BasicInfo")
        }
      >
        {/* Insert Basic Info Component */}
        {/* {parse(basicInfo)} */}
        <div class="brand-img-container">
          <img
            id="brand-img"
            src="https://via.placeholder.com/100"
            alt="image"
          />
        </div>
        <h6 id="brand-name">Nama Brand kamu</h6>
        <p id="brand-description">
          Jangan cuma diliatin, langsung checkout saja dengan cara klik link
          dibawah
        </p>
      </section>

      <section
        id="button-list"
        className={edit && "bordered"}
        onClick={() =>
          edit && window.ReactNativeWebView.postMessage("EditButton")
        }
      >
        {/* Insert Button Component */}
        {parse(data)}
      </section>
    </div>
  );
};

export default Homepage;

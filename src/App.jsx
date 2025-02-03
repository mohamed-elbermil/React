import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="element-next">
        <div>
          <h1>223 stays in Melbourne</h1>
          <p>Book your next stay at one of our properties.</p>
        </div>
        <button className="little-btn">Share</button>
        <button className="long-btn">Save search</button>
      </div>
      <section className="all-card">
        <div className="card">
          <img src="../public/images/appart-1.png" alt="appartement" />
          <div className="text-card">
            <div className="title-icon">
              <div className="title-left">
                <span>Entire apartment rental in Collingwood</span>
                <p>A Stylish Apt, 5 min walk to Queen Victoria Market</p>
              </div>
              <div className="heart">
                <i class="fa-regular fa-heart"></i>
              </div>
            </div>
            <div className="star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <p>4.9</p>
              <p className="details">202 reviews</p>
            </div>
            <div className="infos-card">
              <div className="infos-card-left">
                <div className="info-element details">
                  <i class="fa-solid fa-location-dot"></i>
                  <p>Collingwood VIC</p>
                </div>
                <div className="info-element details">
                  <i class="fa-solid fa-house"></i>
                  <p>1 bed</p>
                </div>
                <div className="info-element details">
                  <i class="fa-solid fa-wifi"></i>
                  <p>Wifi</p>
                </div>
              </div>
              <div className="info-element details">
                <p>
                  <span>$540 </span>AUD total
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default App;

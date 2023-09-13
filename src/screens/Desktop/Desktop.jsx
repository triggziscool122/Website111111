import React from "react";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Home</div>
          <div className="text-wrapper-2">Cards</div>
          <div className="text-wrapper-3">Contact</div>
        </div>
        <div className="text-wrapper-4">WebFlow</div>
        <div className="overlap-group">
          <div className="group" />
          <div className="sign-up">&nbsp;&nbsp;Sign Up</div>
        </div>
        <div className="overlap-2">
          <div className="rectangle" />
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="text-wrapper-5">Jake Leonard</div>
          <div className="text-wrapper-6">$12,000</div>
          <div className="card">
            <div className="overlap-group-2">
              <div className="rectangle-4" />
              <div className="text-wrapper-7">08/24</div>
              <div className="text-wrapper-8">979</div>
              <div className="text-wrapper-9">0000 0000 0000 0000</div>
            </div>
          </div>
          <img className="material-symbols" alt="Material symbols" src="/img/material-symbols-person.svg" />
          <div className="text-wrapper-10">Total Balance</div>
          <div className="group-wrapper">
            <div className="group-2">
              <div className="overlap-group-3">
                <div className="rectangle-5" />
                <div className="text-wrapper-11">Freeze Card</div>
              </div>
              <img className="logos-mastercard" alt="Logos mastercard" src="/img/logos-mastercard.svg" />
              <div className="text-wrapper-12">Jake Leonard</div>
              <div className="text-wrapper-13">Jakes Bank</div>
            </div>
          </div>
          <img className="logos-spotify-icon" alt="Logos spotify icon" src="/img/logos-spotify-icon.svg" />
          <div className="text-wrapper-14">Spotify</div>
          <div className="text-wrapper-15">Netflix</div>
          <div className="text-wrapper-16">$5.00</div>
          <div className="text-wrapper-17">$15.54</div>
          <img className="logos-netflix-icon" alt="Logos netflix icon" src="/img/logos-netflix-icon.svg" />
        </div>
        <div className="rectangle-6" />
        <img className="the-key-to-financal" alt="The key to financal" src="/img/the-key-to-financal-success.png" />
      </div>
    </div>
  );
};

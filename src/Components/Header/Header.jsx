import React from "react";
import "./Header.css";
import MySvg from "../../assets/134216_menu_lines_hamburger_icon.svg";
const Header = () => {
  return (
    <>

    <div className="mothership">
      <div className="right-side">
        <img className="hamburber" src={MySvg} alt="Hamburger Icon" />
        <p className="GGreview">GoodReviewGG</p>
      </div>

      <div className="middle-Side">
        <div className="SearchContainer">
          <input className="SearchBar" type="text" placeholder="Search"></input>
          
          <svg
            className="SearchSvg"
            margin-right="0"
            width="50"
            height="53"
            viewBox="0 0 50 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="22.9167"
              cy="24.1977"
              rx="12.5"
              ry="13.1988"
              fill="#7E869E"
              fill-opacity="0.25"
              stroke="black"
              stroke-width="1.2"
            />
            <path
              d="M41.6667 43.9959L35.4167 37.3965"
              stroke="black"
              stroke-width="1.2"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
      <div className="left-Side">
        <svg
          className="leftt-Side-Svg"
          width="30"
          height="42"
          viewBox="0 0 45 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.375 32.601V34.3168H5.625V32.601L9.375 29.1693V18.8742C9.375 13.5551 13.1813 8.87091 18.75 7.36097V6.86338C18.75 5.95324 19.1451 5.08038 19.8484 4.43682C20.5516 3.79325 21.5054 3.4317 22.5 3.4317C23.4946 3.4317 24.4484 3.79325 25.1516 4.43682C25.8549 5.08038 26.25 5.95324 26.25 6.86338V7.36097C31.8188 8.87091 35.625 13.5551 35.625 18.8742V29.1693L39.375 32.601ZM26.25 36.0326C26.25 36.9428 25.8549 37.8156 25.1516 38.4592C24.4484 39.1028 23.4946 39.4643 22.5 39.4643C21.5054 39.4643 20.5516 39.1028 19.8484 38.4592C19.1451 37.8156 18.75 36.9428 18.75 36.0326"
            fill="#EE4266"
          />
        </svg>
    

    <div className="Group-12 ">
    <div className="Rectangle-4142">
    <p className="POST-A-REVIEW"> Post Review </p>



    </div>





    </div>















        <svg
          className="left-Side-Svg"
          width="40"
          height="52"
          viewBox="0 0 50 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="25" cy="26.2423" rx="25" ry="25.3416" fill="#D9D9D9" />
        </svg>
      </div>
      
    </div>
    <div className="Line">

</div>
    <div className="SecondMotherShip">

    <div>
      <p className="SecondMotherShipFont">Community </p>
    </div>
      <div>
      <p className="SecondMotherShipFont">Games </p>
      </div>
<div>
<p className="SecondMotherShipFont">Industry </p>
  
</div>

    </div>

    </>











  );
};

export default Header;

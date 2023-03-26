import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/logo.png";
import SearchIcon from "../../assets/search-icon.png";

import "./styles.scss";

export const Header = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput) {
      navigate({
        pathname: "/items",
        search: `?search=${searchInput}`,
      });
    }
  };

  const onLogoClick = () => {
    setSearchInput("");
    navigate({
      pathname: "/",
    });
  };

  return (
    <header className="search-header">
      <div className="container">
        <img
          src={Logo}
          alt="Mercado Libre"
          className="logo"
          onClick={onLogoClick}
        />
        <form className="search-container">
          <input
            className="search"
            placeholder="Nunca dejes de buscar"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className="submit" onClick={handleSubmit}>
            <img src={SearchIcon} alt="Search" />
          </button>
        </form>
      </div>
    </header>
  );
};

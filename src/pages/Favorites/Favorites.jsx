import React from "react";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import FavoritesList from "../../components/FavoritesList/FavoritesList";
import Header from "../../components/Header/Header";
import css from "./Favorites.module.css";

const Favorites = () => {
  return (
    <div className={css.favorites}>
      <Header />
      <DocumentTitle>Favorite Teachers Catalog</DocumentTitle>
      <div className={css.container}>
        <FavoritesList />
      </div>
    </div>
  );
};

export default Favorites;

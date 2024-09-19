import React from "react";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import FavoritesList from "../../components/FavoritesList/FavoritesList";
import Header from "../../components/Header/Header";

const Favorites = () => {
  return (
    <div>
      <Header />
      <DocumentTitle>Favorite Teachers Catalog</DocumentTitle>
      <div>
        <FavoritesList />
      </div>
    </div>
  );
};

export default Favorites;

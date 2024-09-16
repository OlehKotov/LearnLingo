import React from "react";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import FavoritesList from "../../components/FavoritesList/FavoritesList";

const Favorites = () => {
  return (
    <div>
      <DocumentTitle>Favorite Teachers Catalog</DocumentTitle>
      <FavoritesList />
    </div>
  );
};

export default Favorites;

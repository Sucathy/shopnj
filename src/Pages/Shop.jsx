import React, { useEffect, useState } from "react";
import BestSeller from "../Components/BestSeller/BestSeller";
import Hero from "../Components/Hero/Hero";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import OfferZone from "../Components/OfferZone/OfferZone";
import Popular from "../Components/Popular/Popular";
const Shop = () => {
  const [popular, setPopular] = useState([]);
  const [newcollection, setNewCollection] = useState([]);

  const fetchInfo = () => {
    fetch("http://35.175.149.156:4000/popularinwomen")
      .then((res) => res.json())
      .then((data) => setPopular(data));
    fetch("http://35.175.149.156:4000/newcollections")
      .then((res) => res.json())
      .then((data) => setNewCollection(data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const customLineStyle = {
    border: "none",
    borderTop: "4px solid ",
    width: "100%",
    marginTop: "50px",
  };

  return (
    <div>
      <Hero />
      <Popular data={popular} />
      <hr style={customLineStyle} />
      <OfferZone />
      {/* <Offers/> */}
      <hr style={customLineStyle} />
      <BestSeller />
      <NewCollections data={newcollection} />
      <NewsLetter />
    </div>
  );
};

export default Shop;

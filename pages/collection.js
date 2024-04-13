import React, { useState, useEffect, useContext } from "react";
import { NFTMarketplaceContext } from '../Context/NFTMarketplaceContext';

//INTERNAL IMPORT
import Style from "../styles/collection.module.css";
import images from "../img";
import {
  Banner,
  CollectionProfile,
  NFTCardTwo,
} from "../collectionPage/collectionIndex";
import { Loader } from "../components/componentsIndex";

import { Slider, Brand } from "../components/componentsIndex";
import Filter from "../components/Filter/Filter";



const collection = () => {
  const { fetchNFTs } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    // try {
      fetchNFTs().then((items) => {
        setNfts(items?.reverse());
        setNftsCopy(items);
        console.log(nfts);
      });
    }, []);


  const collectionArray = [
    // images.nft_image_1,
    // images.nft_image_2,
    // images.nft_image_3,
    // images.nft_image_1,
    // images.nft_image_2,
    // images.nft_image_3,
    // images.nft_image_1,
    // images.nft_image_2,
  ];
  return (
    <div className={Style.collection}>
      <Banner bannerImage={images.creatorbackground1} />
      <CollectionProfile />
      <Filter />
      <Loader />
      <NFTCardTwo NFTData={nfts} />
      <Slider />
      <Brand />
    </div>
  );
};

export default collection;
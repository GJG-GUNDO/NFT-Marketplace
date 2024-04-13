import React, { useState, useEffect, useContext } from "react";
//internal import

import Style from '../styles/index.module.css'
import { Video, Loader,  Brand, Slider, FollowerTab, AudioLive, Collection, NFTCard, Filter, HeroSection, Title, Service, Subscribe, BigNFTSlider, Category } from '../components/componentsIndex'

import { NFTMarketplaceContext } from '../Context/NFTMarketplaceContext';

import { getTopCreators } from "../TopCreators/TopCreators";


const Home = () => {

  const {checkIfWalletConnected, currentAccount} =  useContext(NFTMarketplaceContext)
  useEffect(() => {

    checkIfWalletConnected()
   
  }, [])

  const { fetchNFTs } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    if (currentAccount) {
      fetchNFTs().then((items) => {
        setNfts(items.reverse());
        setNftsCopy(items);
      });
    }
  }, []);

  //CREATOR LIST

  const creators = getTopCreators(nfts);
  console.log(creators);

  
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title heading="Audio Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life." />
      <AudioLive />
      {/* <Title heading="New Collection" */}
      {/* paragraph="Discover the most outstanding NFTs in all topics of life." /> */}
      {creators.length == 0 ? (
        <Loader />
      ) : (
        <FollowerTab TopCreator={creators} />
      )}
      {/* <FollowerTab /> */}
      {/* <Title heading="Explore NFTs Video"
        paragraph="Click on play icon & enjoy Nfts Video" /> */}
      <Slider />
      <Collection />
      <Title heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life." />
      <Filter />
      {/* console.log(nfts); */}
      {nfts.length ==0 ? <Loader /> 
      :  <NFTCard NFTData={nfts}/>}
      {/* <NFTCard NFTData={nfts}/> */}
      <Title heading="Browse by category"
        paragraph="Explore the NFTs in the most faetured categories." />
      <Category />
      <Subscribe />
      <Brand />
      <Video />
    </div>
  )
}

export default Home
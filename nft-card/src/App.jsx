import React, { useState, useEffect } from 'react';
import axios from 'axios';


const address = <input type='text' placeholder='Enter your address'></input>
const NFTList = ({ address }) => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const fetchNfts = async () => {
      const response = await axios.get(`https://api.opensea.io/api/v1/assets?owner=${address}`);
      setNfts(response.data.assets);
    };

    fetchNfts();
  }, [address]);

  const handleClick = (nft) => {
    // Open modal with NFT details
  };

  const handlePurchase = (nft) => {
    window.location.href = nft.permalink;
  };

  return (
    <div className="nft-grid">
      {nfts.map((nft) => (
        <div className="nft-card" key={nft.id} onClick={() => handleClick(nft)}>
          <img src={nft.image_url} alt={nft.name} />
          <h3>{nft.name}</h3>
          <p>{nft.description}</p>
        </div>
      ))}
      {/* Modal */}
      {/* Purchase button */}
    </div>
  );
};

export default NFTList;

import React, { useState, useEffect, Children } from "react";
import { ethers } from "ethers";

const apiKey = "XbTCI1sk-nWg_2lJu90LU9FjQS6I94qj";
const provider = new ethers.providers.JsonRpcProvider(
  `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`
);

export const etherscan = React.createContext();

export const EtherProvider = ({ children }) => {
  const data = "Etherscan Clone";

  const tenBlockWithDetails = [];
  const [yourBlockTrans, setYourBlockTrans] = useState(tenBlockWithDetails);
  const [currentBlock, setCurrentBlock] = useState([]);
  const [topTenBlock, setTopTenBlock] = useState([]);
  const [transaction, setTransaction] = useState([]);
  const [gasPrice, setGasPrice] = useState("");

  const accountDetails = async () => {
    try {
      const getCurrentBlock = await provider.getBlockNumber();
      setCurrentBlock(getCurrentBlock);

      const blockTransaction = await provider.getBlock(getCurrentBlock);
      setTransaction(blockTransaction.transactions);

      const previousBlock = getCurrentBlock - 10;
      const listTenBlock = [];

      for (let i = getCurrentBlock; i > previousBlock; i--) {
        listTenBlock.push([i]);
      }

      const getBlockDetails = listTenBlock.flat();
      setTopTenBlock(getBlockDetails);

      getBlockDetails.map(async (el) => {
        const singleBlockData = await provider.getBlock(el);
        tenBlockWithDetails.push(singleBlockData);
      });

      const gasPrice = await provider.getGasPrice();
      const latestGasPrice = ethers.utils.formatUnits(gasPrice);
      setGasPrice(latestGasPrice);
    } catch (error) {
      console.log("Something want wrong while fetching data", error);
    }
  };

  useEffect(() => {
    accountDetails();
  }, []);

  return (
    <etherscan.Provider
      value={{
        data,
        currentBlock,
        topTenBlock,
        transaction,
        yourBlockTrans,
        gasPrice,
        provider,
      }}
    >
      {children}
    </etherscan.Provider>
  );
};

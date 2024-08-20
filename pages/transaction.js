import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { ethers } from "ethers";
import { useRouter } from "next/router";

import StyleTransaction from "../styles/block.module.css";
import { etherscan } from "../context/Ethere";

const transaction = () => {
  const { provider } = useContext(etherscan);
  const router = useRouter();
  const { query } = router;
  const hash = Object.keys(query)[0];

  const transDetails = [];
  const [transactionData, setTransactionData] = useState(transDetails);

  const [gasLimit, setGasLimit] = useState("");
  const [gasPrice, setGasPrice] = useState("");
  const [value, setValue] = useState("");

  const getDataOfTransaction = async () => {
    try {
      const transactionDetails = await provider.getTransaction(hash);
      setTransactionData(transactionDetails);
      transDetails.push(transactionDetails);

      const limitGas = ethers.utils.formatUnits(transactionDetails.gasLimit);
      setGasLimit(limitGas);

      const priceGas = ethers.utils.formatUnits(transactionDetails.gasPrice);
      setGasPrice(priceGas);

      const valueGas = ethers.utils.formatUnits(transactionDetails.value);
      setValue(valueGas);
    } catch (error) {
      console.log("Something wrong from transaction page");
    }
  };

  useEffect(() => {
    getDataOfTransaction();
  }, []);

  return (
    <div className={StyleTransaction.block}>
      <div className={StyleTransaction.box}>
        <div className={StyleTransaction.box__header}>
          <h3>Transaction Hash</h3>
          <p>{hash}</p>
        </div>
        <div className={StyleTransaction.blockTable}>
          <div>
            <div className={StyleTransaction.dataRow}>
              <p>Number</p>
              <Link
                href={{
                  pathname: "/block/",
                  query: transactionData.blockNumber,
                }}
              >
                <p className={StyleTransaction.color}>
                  {transactionData.blockNumber}
                </p>
              </Link>
            </div>

            <div className={StyleTransaction.dataRow}>
              <p>From</p>
              <Link
                href={{
                  pathname: "/account/",
                  query: transactionData.from,
                }}
              >
                <p className={StyleTransaction.color}>{transactionData.from}</p>
              </Link>
            </div>

            <div className={StyleTransaction.dataRow}>
              <p>To</p>
              <Link
                href={{
                  pathname: "/account/",
                  query: transactionData.to,
                }}
              >
                <p className={StyleTransaction.color}>{transactionData.to}</p>
              </Link>
            </div>

            <div className={StyleTransaction.dataRow}>
              <p>Hash</p>
              <p>{transactionData.hash ? transactionData.hash : "No Hash"}</p>
            </div>

            <div className={StyleTransaction.dataRow}>
              <p>Nonce</p>
              <p>
                {transactionData.nonce ? transactionData.nonce : "No Nonce"}
              </p>
            </div>

            <div className={StyleTransaction.dataRow}>
              <p>Transaction Index</p>
              <p>
                {transactionData.transactionIndex
                  ? transactionData.transactionIndex
                  : "No Transaction Index"}
                {console.log(transactionData)}
              </p>
            </div>

            <div className={StyleTransaction.dataRow}>
              <p>R</p>
              <p>{transactionData.r ? transactionData.r : "No R"}</p>
            </div>

            <div className={StyleTransaction.dataRow}>
              <p>S</p>
              <p>{transactionData.s ? transactionData.s : "No S"}</p>
            </div>

            <div className={StyleTransaction.dataRow}>
              <p>Gas Limit</p>
              <p>{gasLimit}</p>
            </div>

            <div className={StyleTransaction.dataRow}>
              <p>Gas Price</p>
              <p>{gasPrice}</p>
            </div>

            <div className={StyleTransaction.dataRow}>
              <p>Type</p>
              <p>{transactionData.type}</p>
            </div>

            <div className={StyleTransaction.dataRow}>
              <p>V</p>
              <p>{transactionData.v}</p>
            </div>

            <div className={StyleTransaction.dataRow}>
              <p>Value</p>
              <p>{value}</p>
            </div>

            <div className={StyleTransaction.dataRow}>
              <p>Chain Id</p>
              <p>{transactionData.chainId}</p>
            </div>

            <div className={StyleTransaction.dataRow}>
              <p>Confirmations</p>
              <p>{transactionData.confirmations}</p>
            </div>

            <div className={StyleTransaction.dataRow}>
              <p>Created</p>
              <p>
                {transactionData.creates ? transactionData.creates : "No Data"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default transaction;

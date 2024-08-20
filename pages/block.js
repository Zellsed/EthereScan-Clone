import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ethers } from "ethers";

import Style from "../components/Table.module.css";
import { etherscan } from "../context/Ethere";
import StyleTransaction from "../styles/block.module.css";

const Block = () => {
  const { provider } = useContext(etherscan);
  const router = useRouter();
  const { query } = router;
  const blockNumber = Number(Object.keys(query)[0]);

  const [open, setOpen] = useState(false);

  const dataBlock = [];

  const [blockData, setBlockData] = useState([]);
  const [transaction, setTransaction] = useState([]);

  const [ethGasLimit, setEthGasLimit] = useState("");
  const [ethDifficulty, setEthDifficulty] = useState("");
  const [ethGasUsed, setEthGasUsed] = useState("");

  const [blockNo, setBlockNo] = useState(true);
  const [transactionTab, setTransactionTab] = useState(false);

  const openTab = () => {
    if (blockNo) {
      setBlockNo(false);
      setTransactionTab(true);
    } else if (transactionTab) {
      setBlockNo(true);
    }
  };

  const getBlockDetails = async () => {
    try {
      const getBlock = await provider.getBlock(blockNumber);
      dataBlock.push(getBlock);
      setBlockData(getBlock);

      const gasLimit = ethers.utils.formatUnits(getBlock.gasLimit);
      setEthGasLimit(gasLimit);

      const gasUsed = ethers.utils.formatUnits(getBlock.gasUsed);
      setEthGasUsed(gasUsed);

      const difficulty = ethers.utils.formatUnits(getBlock.difficulty);
      setEthDifficulty(difficulty);

      setTransaction(getBlock.transactions);
    } catch (error) {
      console.log("Something went wrong:", error);
    }
  };

  useEffect(() => {
    if (blockNumber) {
      getBlockDetails();
    }
  }, [blockNumber]);

  return (
    <div className={StyleTransaction.block}>
      <div className={Style.box}>
        <div className={StyleTransaction.box__header}>
          <h3>Block Number</h3>
          <p>{blockNumber}</p>
        </div>

        <div className={StyleTransaction.blockTable}>
          <div className={StyleTransaction.blockBtn}>
            <button onClick={() => openTab()}>Block Details</button>
            <button onClick={() => openTab()}>Block Transaction</button>
          </div>

          {blockNo ? (
            <div>
              <div className={StyleTransaction.dataRow}>
                <p>Number</p>
                <p>{blockData.number}</p>
              </div>

              <div className={StyleTransaction.dataRow}>
                <p>Timestamp</p>
                <p>{blockData.timestamp}</p>
              </div>

              <div className={StyleTransaction.dataRow}>
                <p>Miner</p>
                <Link href={{ pathname: "/account/", query: blockData.miner }}>
                  <p className={StyleTransaction.color}>{blockData.miner}</p>
                </Link>
              </div>

              <div className={StyleTransaction.dataRow}>
                <p>Hash</p>
                <p>{blockData.hash}</p>
              </div>

              <div className={StyleTransaction.dataRow}>
                <p>ParentHash</p>
                <p>{blockData.parentHash ? blockData.parentHash : "No data"}</p>
              </div>

              <div className={StyleTransaction.dataRow}>
                <p>Nonce</p>
                <p>{blockData.nonce}</p>
              </div>

              <div className={StyleTransaction.dataRow}>
                <p>Extra Data</p>
                <p>{blockData.extraData}</p>
              </div>

              <div className={StyleTransaction.dataRow}>
                <p>Difficulty</p>
                <p>{blockData.difficulty ? blockData.difficulty : "No Data"}</p>
              </div>

              <div className={StyleTransaction.dataRow}>
                <p>Gas Limit</p>
                <p>{ethGasLimit} ETH</p>
              </div>

              <div className={StyleTransaction.dataRow}>
                <p>Gas Limit</p>
                <p>{ethGasUsed} ETH</p>
              </div>

              <div className={StyleTransaction.dataRow}>
                <p>Gas Limit</p>
                <p>{ethDifficulty} ETH</p>
              </div>
            </div>
          ) : (
            <div className={StyleTransaction.dataTable}>
              <div className={Style.coloum}>
                <div className={Style.tableTitle}>
                  <p>All Transaction in the blcok {transaction.length}</p>
                </div>
                <div className={Style.tableInfo}>
                  {transaction.map((el, i) => (
                    <div key={i + 1} className={Style.transHash}>
                      <span>{i + 1}</span>
                      <Link
                        href={{
                          pathname: "/transaction/",
                          query: blockData.hash,
                        }}
                      >
                        <p className={StyleTransaction.color}>{el}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Block;

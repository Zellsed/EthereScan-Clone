import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { ethers } from "ethers";

import { etherscan } from "../context/Ethere";
import Style from "../styles/account.module.css";
import etherLogo from "../public/eth.png";
import loder from "../public/loding.gif";
import Table from "../components/Table";

const account = () => {
  const { provider } = useContext(etherscan);
  const router = useRouter();
  const { query } = router;
  const acc = Object.keys(query)[0];

  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("");
  const [totalTransaction, setTotalTransaction] = useState("");
  const [name, setName] = useState("");
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  const [accountHistory, setAccountHistory] = useState([]);
  const [internalByAddress, setInternalByAddress] = useState([]);
  const [ERC20, setERC20] = useState([]);
  const [ERC21, setERC21] = useState([]);
  const [ERC1155, setERC1155] = useState([]);
  const [blockMindedByAddress, setBlockMindedByAddress] = useState([]);
  const [blockRangeTransaction, setBlockRangeTransaction] = useState([]);

  const accountData = async () => {
    try {
      setAccount(acc);
      setOpen(false);
      const ESN = await provider.lookupAddress(acc);
      setName(ESN || "Unknown");

      const accountBalance = await provider.getBalance(acc);
      const showBalance = ethers.utils.formatEther(accountBalance);
      setBalance(showBalance);

      const API_KEY = "GWUC36QUJQSYT7PDC94M2WN6T6T8SN51G1";

      // Fetch account history
      const historyResponse = await fetch(
        `https://api.etherscan.io/api?module=account&action=txlist&address=${acc}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${API_KEY}`
      );
      const historyData = await historyResponse.json();
      setAccountHistory(historyData.result);

      // Fetch internal transactions
      const internalResponse = await axios.get(
        `https://api.etherscan.io/api?module=account&action=txlistinternal&address=${acc}&apikey=${API_KEY}`
      );
      setInternalByAddress(internalResponse.data.result);

      // Fetch ERC20 tokens
      const erc20Response = await axios.get(
        `https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2&address=${acc}&page=1&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=${API_KEY}`
      );
      setERC20(erc20Response.data.result);

      // Fetch mined blocks
      const minedBlocksResponse = await axios.get(
        `https://api.etherscan.io/api?module=account&action=getminedblocks&address=${acc}&blocktype=blocks&page=1&offset=10&apikey=${API_KEY}`
      );
      setBlockMindedByAddress(minedBlocksResponse.data.result);

      // Fetch block range transactions
      const blockRangeResponse = await axios.get(
        `https://api.etherscan.io/api?module=account&action=txlistinternal&startblock=13481773&endblock=13491773&page=1&offset=10&sort=asc&apikey=${API_KEY}`
      );
      setBlockRangeTransaction(blockRangeResponse.data.result);

      // Fetch ERC21 tokens
      const erc21Response = await axios.get(
        `https://api.etherscan.io/api?module=account&action=tokennfttx&contractaddress=0x06012c8cf97bead5deae237070f9587f8e7a266d&address=${acc}&page=1&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=${API_KEY}`
      );
      setERC21(erc21Response.data.result);

      // Fetch ERC1155 tokens
      const erc1155Response = await axios.get(
        `https://api.etherscan.io/api?module=account&action=token1155tx&contractaddress=0x76be3b62873462d2142405439777e971754e8e77&address=${acc}&page=1&offset=100&startblock=0&endblock=99999999&sort=asc&apikey=${API_KEY}`
      );
      setERC1155(erc1155Response.data.result);

      // Get Total Count
      const totalTransaction = await provider.getTransactionCount(acc);
      setTotalTransaction(totalTransaction);
    } catch (error) {
      console.log("Something went wrong", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={Style.accountDIV}>
      {open ? (
        <div className={Style.btnContainer}>
          <h1>
            {open
              ? "Welcome To Ether Finance"
              : "Plase wait we are loading data"}
          </h1>
          <button className={Style.openBtn} onClick={() => accountData()}>
            Click
          </button>
        </div>
      ) : (
        <div>
          {loading ? (
            <div className={Style.loading}>
              <Image src={loder} alt="loading" width={100} height={100} />
            </div>
          ) : (
            ""
          )}

          {!loading ? (
            <div className={Style.container}>
              <div className={Style.box}>
                <div className={Style.account}>
                  <Image src={etherLogo} alt="logo" width={20} height={30} />
                  <p>
                    Address: <span>{acc}</span>
                  </p>
                </div>
                <div className={Style.owner}>
                  <p onClick={() => accountData()}>Owner</p>
                  {name || "Hello"}
                </div>
              </div>

              <div className={Style.overviewBox}>
                <div className={Style.overview}>
                  <div className={Style.overviewTitle}>
                    <p>Overview</p>
                    <p className={Style.miner}>
                      {name || "Miner"}: &nbsp; {account.slice(0, 10)}...
                    </p>
                  </div>

                  <div className={Style.accountBalance}>
                    <p className={Style.color}>Balance</p>
                    <p>{balance} ETH</p>
                  </div>

                  <div className={Style.accountValue}>
                    <p className={Style.color}>Value</p>
                    <p>{balance * 1057.28} $</p>
                  </div>
                </div>

                <div className={Style.branding}>
                  <h2>
                    Welcome <br />
                    Ether Finance Tracker
                  </h2>

                  <p>
                    Hey, welcome to ether finance tracker, find out ypur
                    ethereum {name || account.slice(0, 10)}... &nbsp; financial
                    status
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
      {!loading ? (
        <Table
          accountHistory={accountHistory}
          totalTransaction={totalTransaction}
          internalByAddress={internalByAddress}
          ERC20={ERC20}
          ERC21={ERC21}
          ERC1155={ERC1155}
          accountData={accountData}
          blockMindedByAddress={blockMindedByAddress}
          blockRangeTransaction={blockRangeTransaction}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default account;

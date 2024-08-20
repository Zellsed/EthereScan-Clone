import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { MdOutlineClose } from "react-icons/md";
import { TbChartArrowsVertical } from "react-icons/tb";

import Style from "../styles/NavBar.module.css";
import etherLogo from "../public/eth.png";
import logo from "../public/logo.png";
import logoTop from "../public/footerLogo.png";
import user from "../public/avatar.png";

const NavBar = () => {
  const [useAccount, setUserAccount] = useState("");
  const [balance, setBalance] = useState("");
  const [count, setCount] = useState("");
  const [openModel, setOpenModel] = useState(false);
  const [price, setPrice] = useState([]);
  const [etherSupply, setEtherSupply] = useState([]);
  const [updatedPriceDate, setUpdatedPriceDate] = useState("");

  const openUserInfo = () => {
    if (openModel) {
      setOpenModel(false);
    } else if (!openModel) {
      setOpenModel(true);
    }
  };

  const getEtherPrice = async () => {
    try {
      const API_ETHER_KEY = "GWUC36QUJQSYT7PDC94M2WN6T6T8SN51G1";

      axios
        .get(
          `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${API_ETHER_KEY}`
        )
        .then((response) => {
          setPrice(response.data.result);

          const timestamp = Number(response.data.result.ethusd_timestamp);

          const date = new Date(timestamp);
          setUpdatedPriceDate(
            "Update:" +
              date.getHours() +
              ":" +
              date.getMinutes() +
              ":" +
              date.getSeconds()
          );
        });

      axios
        .get(
          `https://api.etherscan.io/api?module=stats&action=ethsupply&apikey=${API_ETHER_KEY}`
        )
        .then((response) => {
          setEtherSupply(response.data.result);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfAccountExist = async () => {
    try {
      if (!window.ethereum) return console.log("please install MetaMask");

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length) {
        setUserAccount(accounts[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      if (!window.ethereum) return console.log("please install MetaMask");

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length) {
        setUserAccount(accounts[0]);
      } else {
        console.log("Sorry you do not have account");
      }

      window.location.reload();
    } catch (error) {
      console.log("Something is wrong");
    }
  };

  useEffect(() => {
    checkIfAccountExist();
    getEtherPrice();
  }, []);

  return (
    <div>
      <div className={Style.navbar}>
        <div className={Style.navbar__container}>
          <div className={Style.left}>
            <Link href="/">
              <div>
                <h1 className={Style.desktop}>Ether Finance</h1>
                <h1 className={Style.mobile}>
                  <Image src={logoTop} alt="logo" width={50} height={50} />
                </h1>
              </div>
            </Link>
          </div>

          <div className={Style.right}>
            {useAccount.length ? (
              <div className={Style.connected}>
                <button onClick={() => openUserInfo()}>
                  Account: {useAccount.slice(0, 10)}...
                </button>
                {openModel ? (
                  <div className={Style.userModal}>
                    <div className={Style.user_box}>
                      <div className={Style.cleseBtn}>
                        <MdOutlineClose onClick={() => openUserInfo()} />
                      </div>
                      <Image src={user} alt="User" width={50} height={50} />
                      <p>Acccount: &nbsp; {useAccount}</p>
                      <p>Balance: &nbsp; {balance} ETH</p>
                      <p>Total Transaction: &nbsp; count ETH</p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              <button onClick={() => connectWallet()}>Connect Wallet</button>
            )}
          </div>
        </div>
      </div>

      <div className={Style.price}>
        <div className={Style.price__box}>
          <div className={Style.etherPrice}>
            <div>
              <Image src={etherLogo} alt="ether logo" width={30} height={60} />
            </div>
            <div>
              <h4>ETHER PRICE</h4>
              <p>$ 234444</p>
              <p>BTC 737773</p>
              <p>UPDATED PRICE</p>
            </div>
          </div>

          <div className={Style.supplyEther}>
            <div>
              <TbChartArrowsVertical className={Style.supplyIcon} />
            </div>

            <div>
              <h4>TOTAL ETHER SUPPLY</h4>
              <p>$ 234444</p>
              <p>BTC 737773</p>
              <p>UPDATED PRICE</p>
            </div>
          </div>
        </div>

        <div className={Style.price__box}>
          <div className={Style.tokenBox__logo}>
            <Image src={logo} alt="logo" width={200} height={200} />
          </div>

          <div className={Style.logoWidth}>
            <p>ERC20</p>
            <p>ERC21</p>
            <p>ERC1155</p>
            <p>CONTRACT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

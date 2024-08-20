import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { ethers } from "ethers";
import Link from "next/link";
import { SiMinutemailer } from "react-icons/si";

import { etherscan } from "../context/Ethere";
import Style from "./index.module.css";
import etherLogo from "../public/eth.png";

const index = () => {
  const router = useRouter();
  const { yourBlockTrans, transaction } = useContext(etherscan);

  const [userAccount, setUserAccount] = useState("");

  const converIntoETH = (amount) => {
    const ETH = ethers.utils.formatUnits(amount, "ether");
    return ETH;
  };

  const accountAddress = async (event) => {
    event.preventDefault();
    const address = document.getElementById("accountAddress").value.trim();
    setUserAccount(address);
    router.push(`/account?${address}`);
    address = "";
  };

  return (
    <div>
      <div className={Style.header}>
        <form className={Style.accountAddress}>
          <input
            type="text"
            placeholder="ETher Account address"
            id="accountAddress"
          />
          <Link href={{ pathname: "/account", query: userAccount }}>
            <a onClick={(event) => accountAddress(event)}>
              <SiMinutemailer />
            </a>
          </Link>
        </form>
      </div>

      <div className={Style.container}>
        <div className={Style.container__box}>
          <h3>Latest Blocks</h3>
          <div className={Style.container__block}>
            {yourBlockTrans.map((el, i) => (
              <div className={Style.oneBlock} key={i + 1}>
                <div className={Style.block}>
                  <div className={Style.info}>
                    <p className={Style.bk}>BK</p>
                    <Link href={{ pathname: "/block", query: el.number }}>
                      {el.number}
                    </Link>
                  </div>
                  <p>{el.timestamp}</p>
                </div>
                <div>
                  <div className={Style.miner}>
                    <p>
                      <samp>
                        Miner: &nbsp;&nbsp;{" "}
                        <Link
                          className={Style.link}
                          href={{ pathname: "/account/", query: el.miner }}
                        >
                          <a>{el.miner.slice(0, 35)}...</a>
                        </Link>
                      </samp>
                    </p>
                    <span>
                      <Link
                        className={Style.link}
                        href={{ pathname: "/block/", query: el.number }}
                      >
                        <a>{el.transactions.length}</a>
                      </Link>
                      &nbsp;TNS in 3Sec
                    </span>
                  </div>
                  <div className={Style.reward}>
                    <p>
                      {converIntoETH(el.baseFeePerGas)} <span>ETH</span>
                    </p>
                    <Image
                      src={etherLogo}
                      className={Style.eth}
                      alt="Ether logo"
                      width={10}
                      height={10}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.container__box}>
          <h3>Latest Transaction</h3>
          <div className={Style.container__block}>
            {transaction.map((el, i) => (
              <div className={Style.oneBlock} key={i + 1}>
                <div className={Style.info}>
                  <div>
                    <p className={Style.bx}>TS</p>
                  </div>
                  <Link href={{ pathname: "/transaction", query: el }}>
                    <a>Hash:&nbsp; {el.slice(0, 55)}...</a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

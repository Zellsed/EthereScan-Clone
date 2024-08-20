import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import Link from "next/link";

import Style from "./Table.module.css";

const ERC20Token = ({ ERC20 }) => {
  return (
    <div>
      {ERC20.length === 0 ? (
        <div className={Style.sorry}>
          <h1>Sorry no Data ERC20</h1>
        </div>
      ) : (
        <div className={Style.dataTable}>
          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Hash</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC20.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <AiFillEye />
                  <p>{el.hash.slice(0, 35)}...</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Block</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC20.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p className={Style.toLink}>
                    <Link href={{ pathname: "/block/", query: el.blockNumber }}>
                      <a onClick={handleClick}>{el.blockNumber}</a>
                    </Link>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>TimaStamp</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC20.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p className={Style.toLink}>{el.timeStamp}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>From</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC20.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p className={Style.toLink}>{el.from.slice(0, 10)}...</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>To</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC20.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p className={Style.toLink}>
                    <Link href={{ pathname: "/account/", query: el.to }}>
                      <a onClick={handleClick}>{el.to.slice(0, 10)}...</a>
                    </Link>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Value</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC20.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.value.slice(0, 5)}...</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Gas Used</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC20.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.gasUsed}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Token Name</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC20.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.tokenName}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Token Symbol</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC20.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.tokenSymbole}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Token Decimal</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC20.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.tokenDecimal}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Confirmation</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC20.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.confirmations}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>CumulativeGas</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC20.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.cumulativeGasUsed}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Gas</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC20.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.gas}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Gas Used</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC20.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.gasUsed}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Input</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC20.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.input}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Index</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC20.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.transactionIndex}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Contract Address</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC20.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>
                    {el.contractAddress
                      ? el.contractAddress
                      : "No Contract Address"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ERC20Token;

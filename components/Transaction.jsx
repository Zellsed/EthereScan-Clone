import React from "react";
import { AiFillEye } from "react-icons/ai";
import Link from "next/link";

import Style from "./Table.module.css";

const Transaction = ({ accountHistory, handleClick }) => {
  return (
    <div className={Style.dataTable}>
      <div className={Style.coloum}>
        <div className={Style.tableTitle}>
          <p>Txn Hash</p>
        </div>
        <div className={Style.tableInfo}>
          {accountHistory.map((el, i) => (
            <div key={i + 1} className={Style.transHash}>
              <AiFillEye />
              <p>{el.hash.slice(0, 35)}...</p>
            </div>
          ))}
        </div>
      </div>

      <div className={Style.coloum}>
        <div className={Style.tableTitle}>
          <p>Method</p>
        </div>
        <div className={Style.tableInfo}>
          {accountHistory.map((el, i) => (
            <div key={i + 1} className={Style.transHash}>
              <p>Transfer</p>
            </div>
          ))}
        </div>
      </div>

      <div className={Style.coloum}>
        <div className={Style.tableTitle}>
          <p>Block</p>
        </div>
        <div className={Style.tableInfo}>
          {accountHistory.map((el, i) => (
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
          {accountHistory.map((el, i) => (
            <div key={i + 1} className={Style.transHash}>
              <p>{el.timeStamp}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={Style.coloum}>
        <div className={Style.tableTitle}>
          <p>From</p>
        </div>
        <div className={Style.tableInfo}>
          {accountHistory.map((el, i) => (
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
          {accountHistory.map((el, i) => (
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
          {accountHistory.map((el, i) => (
            <div key={i + 1} className={Style.transHash}>
              <p>{el.value.slice(0, 5)}...</p>
            </div>
          ))}
        </div>
      </div>

      <div className={Style.coloum}>
        <div className={Style.tableTitle}>
          <p>Gas Price</p>
        </div>
        <div className={Style.tableInfo}>
          {accountHistory.map((el, i) => (
            <div key={i + 1} className={Style.transHash}>
              <p>{el.gasPrice}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={Style.coloum}>
        <div className={Style.tableTitle}>
          <p>BlockHash</p>
        </div>
        <div className={Style.tableInfo}>
          {accountHistory.map((el, i) => (
            <div key={i + 1} className={Style.transHash}>
              <p>{el.blockHash.slice(0, 10)}...</p>
            </div>
          ))}
        </div>
      </div>

      <div className={Style.coloum}>
        <div className={Style.tableTitle}>
          <p>Confirmation</p>
        </div>
        <div className={Style.tableInfo}>
          {accountHistory.map((el, i) => (
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
          {accountHistory.map((el, i) => (
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
          {accountHistory.map((el, i) => (
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
          {accountHistory.map((el, i) => (
            <div key={i + 1} className={Style.transHash}>
              <p>{el.gasUsed}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={Style.coloum}>
        <div className={Style.tableTitle}>
          <p>Nonce</p>
        </div>
        <div className={Style.tableInfo}>
          {accountHistory.map((el, i) => (
            <div key={i + 1} className={Style.transHash}>
              <p>{el.nonce}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={Style.coloum}>
        <div className={Style.tableTitle}>
          <p>Index</p>
        </div>
        <div className={Style.tableInfo}>
          {accountHistory.map((el, i) => (
            <div key={i + 1} className={Style.transHash}>
              <p>{el.transactionIndex}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transaction;

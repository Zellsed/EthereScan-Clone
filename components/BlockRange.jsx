import React from "react";
import { FaFilter } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import Link from "next/link";

import Style from "./Table.module.css";

const BlockRange = ({ blockRangeTransaction, handleClick }) => {
  return (
    <div>
      {blockRangeTransaction.length === 0 ? (
        <div className={Style.sorry}>
          <p>Sorry no Data</p>
        </div>
      ) : (
        <div className={Style.dataTable}>
          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Hash</p>
            </div>
            <div className={Style.tableInfo}>
              {blockRangeTransaction.map((el, i) => (
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
              {blockRangeTransaction.map((el, i) => (
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
              {blockRangeTransaction.map((el, i) => (
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
              {blockRangeTransaction.map((el, i) => (
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
              {blockRangeTransaction.map((el, i) => (
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
              {blockRangeTransaction.map((el, i) => (
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
              {blockRangeTransaction.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.gasUsed}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Gas</p>
            </div>
            <div className={Style.tableInfo}>
              {blockRangeTransaction.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.gas}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Input</p>
            </div>
            <div className={Style.tableInfo}>
              {blockRangeTransaction.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.input ? el.input : "No Data"}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Type</p>
            </div>
            <div className={Style.tableInfo}>
              {blockRangeTransaction.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.type}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>TraceId</p>
            </div>
            <div className={Style.tableInfo}>
              {blockRangeTransaction.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.traceId}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>isError</p>
            </div>
            <div className={Style.tableInfo}>
              {blockRangeTransaction.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.isError}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Contract Address</p>
            </div>
            <div className={Style.tableInfo}>
              {blockRangeTransaction.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>
                    {el.contractAddress ? el.contractAddress : "No Address"}
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

export default BlockRange;

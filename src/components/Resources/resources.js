import React from "react";
import "./style.css";
import Leftarow from "../../actets/left.png";
import LeftBBB from "../../actets/leftblack.png";
function Resources() {
  const arr = [{ color: "#E5E5E5" }];

  const arry1 = [
    { text: "An Incomplete Guide to Rollups " },
    { text: "ZK-Rollups on EthHub " },
    { text: "What are zkRollups? " },
    { text: "The best comparison on zkRollups today " }
  ];
  const arry2 = [
    { text: "StarkNet and Cairo Documentation" },
    { text: "Hermez network docs" },
    { text: "Introduction to zkSync for Developers " },
    { text: "Aztec Developer Docs  " },
    { text: "Loopring Developer Docs  " },
    { text: "zkTube Docs" },
    { text: "ZKSwap Docs " }
  ];
  const arry3 = [
    { text: "Loopring Developer Docs  " },
    { text: "zkTube Docs" },
    { text: "ZKSwap Docs " },
    
  ];

  return (
    <>
      <div className="container-fluied">
        <div className="main wrap_resorce">
          <h2 className="my-5">Guides</h2>
          <div className="resorce_card_wrap">
            {arry1.map((item) => {
              return (
                <div className="resorce_card mb-4">
                  <div className="inside">
                    <div className="fist_w">
                      <p className="resorce_text">{item.text} </p>
                    </div>
                    <div className="second_w">
                      <img src={Leftarow}></img>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <h2 className="my-5">zkRollup Docs</h2>
          <div className="resorce_card_wrap_tow">
            {arry2.map(
              (item) => {
                return (
                  <div
                    className="resorce_card2 mb-4"
                    style={{
                      backgroundColor: "#A7E2F2",
                    }}
                  >
                    <div className="inside">
                      <div className="fist_w">
                        <p className="resorce_text resorce_text2">
                        {item.text} 
                        </p>
                      </div>
                      <div className="second_w">
                        <img src={LeftBBB}></img>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
          <h2 className="my-5">Community Resources</h2>
          <div className="resorce_card_wrap margn_botm_last">
            {arry3.map((item) => {
              return (
                <div
                  className="resorce_card mb-4"
                  style={{
                    backgroundColor: "#347283",
                  }}
                >
                  <div className="inside">
                    <div className="fist_w">
                      <p className="resorce_text">     {item.text}  </p>
                    </div>
                    <div className="second_w">
                      <img src={Leftarow}></img>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Resources;

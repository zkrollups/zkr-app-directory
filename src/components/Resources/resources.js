import React from "react";
import "./style.css";
import Leftarow from "../../actets/left.png";
import LeftBBB from "../../actets/leftblack.png";
function Resources() {
  // const arr = [{ color: "#E5E5E5" }];

  const arry1 = [
    { text: "An Incomplete Guide to Rollups", link: "https://vitalik.ca/general/2021/01/05/rollup.html" },
    { text: "Zero-Knowledge Rollups", link: "https://ethereum.org/en/developers/docs/scaling/zk-rollups/" },
    { text: "ZK-Rollups on EthHub", link: "https://docs.ethhub.io/ethereum-roadmap/layer-2-scaling/zk-rollups/" },
    { text: "What are zkRollups?", link: "https://www.numio.one/what-are-zkrollups/" },
    { text: "The best comparison on zkRollups today", link: "https://newsletter.banklesshq.com/p/the-best-comparison-on-zkrollups" }
  ];
  const arry2 = [
    { text: "Awesome Zero Knowledge", link: "https://github.com/ventali/awesome-zk" },
    { text: "Awesome StarkNet", link: "https://github.com/gakonst/awesome-starknet" },
    { text: "Awesome zkEVM", link: "https://github.com/LuozhuZhang/awesome-zkevm" },
    { text: "Awesome zkSync", link: "https://github.com/juanscolari/awesome-zksync" },
    { text: "Awesome Loopring", link: "https://github.com/Loopring/awesome-loopring" },
    { text: "StarkNet Cairo 101", link: "https://github.com/l-henri/starknet-cairo-101" },
    { text: "Cairo Goldmine", link: "https://github.com/beautyisourbusiness/cairo-goldmine" },
    { text: "zkRollup research library", link: "https://github.com/john-light/zkrollups/blob/main/library.md" },
    // { text: "zkTube Docs", link: "" },
    // { text: "ZKSwap Docs ", link: "" },
  ];
  const arry3 = [
    { text: "StarkNet and Cairo Documentation", link: "https://www.cairo-lang.org/docs/" },
    { text: "Hermez network docs", link: "https://docs.hermez.io/#/" },
    { text: "Introduction to zkSync for Developers ", link: "https://zksync.io/dev/" },
    { text: "Aztec Developer Docs  ", link: "https://developers.aztec.network/" },
    { text: "Loopring Developer Docs  ", link: "https://docs.loopring.io/en/" },
    { text: "zkTube Docs", link: "https://github.com/zkTube-Labs/zkTube-docs/tree/main/docs" },
    { text: "ZKSwap Docs ", link: "https://en.wiki.zks.org/" }
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
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <p className="resorce_text">{item.text} </p>
                      </a>
                    </div>
                    <div className="second_w">
                      <img src={Leftarow} alt=""></img>
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
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          <p className="resorce_text resorce_text2">
                            {item.text} 
                          </p>
                        </a>
                      </div>
                      <div className="second_w">
                        <img src={LeftBBB} alt=""></img>
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
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <p className="resorce_text">     {item.text}  </p>
                      </a>
                    </div>
                    <div className="second_w">
                      <img src={Leftarow} alt=""></img>
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

import axios from "axios";
// export const projects = [
//   {
//       "name": "StarkNet",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "zkRollup"
//       ],
//       "description": "StarkNet, a permissionless scaling ZK rollup, live (Alpha) on Ethereum Mainnet since November 2021, a general-purpose Rollup that powers dApps of any business logic.",
//       "websiteLink": "https://starkware.co/starknet/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/starknet.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "rollups"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/StarkWareLtd",
//       "wallet_address": "",
//       "websiteLink": "https://starkware.co/starknet/"
//   },
//   {
//       "name": "zkSync",
//       "backgroundColor": "#36368F",
//       "category": [
//           "zkRollup",
//           "Web Wallet"
//       ],
//       "description": "zkSync is a trustless protocol for scalable low-cost payments on Ethereum, powered by zkRollup technology. It uses zero-knowledge proofs and on-chain data availability to keep users' funds as safe as though they never left the mainnet.",
//       "featured": "featured",
//       "websiteLink ": "https://zksync.io/",
//       "getStartedLink1": "https://zksync.io/faq/tokenomics.html",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/zksync.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "rollups",
//           "wallets"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tokenLink": "https://zksync.io/faq/tokenomics.html",
//       "tokenStatus": "Expected",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/zksync",
//       "wallet_address": "",
//       "websiteLink": "https://zksync.io/"
//   },
//   {
//     "name": "Aztec",
//     "backgroundColor": "#2D2F4B",
//     "category": [
//         "zkRollup"
//     ],
//     "description": "Aztec is an open source Layer 2 network bringing scalability and privacy to Ethereum. Aztec uses zkSNARK proofs to provide privacy and scaling.",
//     "websiteLink ": "https://aztec.network/",
//     "getStartedLink1": "",
//     "getStartedLink2": "https://www.google.com/",
//     "imageLink": "url('project-logos/aztec.png')",
//     "linkText1": "Bridge ",
//     "linkText2": "Aave dApp",
//     "networks": [
//         "aztec"
//     ],
//     "search_on": [
//         "rollups"
//     ],
//     "status": "LIVE",
//     "statusColor": "#30DE88",
//     // "Text1": "",
//     "getStartedText2": "Go to the Aave dapp ",
//     "getStartedText3": "Click (Make a trade) and follow the instructions ",
//     "tooltip": "Aztec",
//     "twitterLink": "https://twitter.com/aztecnetwork",
//       "wallet_address": "",
//     "websiteLink": "https://aztec.network/"
//   },
//   {
//     "name": "StarkEx",
//     "backgroundColor": "#F1F1F0",
//     "category": [
//         "zkRollup"
//     ],
//     "description": " StarkEx, a custom standalone scaling service by StarkWare, has been powering applications since June 2020, settled over $350B, with over 90M transactions, serving hundreds of thousands of users.",
//     "websiteLink ": "https://starkware.co/starkex/",
//     "getStartedLink1": "",
//     "getStartedLink2": "https://www.google.com/",
//     "imageLink": "url('project-logos/starkex.png')",
//     "linkText1": "Bridge ",
//     "linkText2": "Aave dApp",
//     "networks": [
//         "starkex"
//     ],
//     "search_on": [
//         "rollups"
//     ],
//     "status": "LIVE",
//     "statusColor": "#30DE88",
//     // "Text1": "",
//     "getStartedText2": "Go to the Aave dapp ",
//     "getStartedText3": "Click (Make a trade) and follow the instructions ",
//     "tooltip": "StarkEx",
//     "twitterLink": "https://twitter.com/StarkWareLtd",
//       "wallet_address": "",
//     "websiteLink": "https://starkware.co/starkex/"
//   },
//   {
//       "name": "Loopring",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "zkRollup",
//           "Mobile & Web Wallet",
//           "dApp"
//       ],
//       "description": "Loopring is a zkRollup layer2. It allows for high-throughput, low-cost trading and payment on Ethereum.",
//       "websiteLink ": "http://loopring.io/",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/loopring",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/loopring.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "loopring"
//       ],
//       "search_on": [
//           "rollups",
//           "wallets",
//           "dApps"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/LRC.png')",
//       "tokenLink": "https://www.coingecko.com/en/coins/loopring",
//       "tokenStatus": "Has",
//       "tokenTicker": "LRC",
//       "tooltip": "Loopring",
//       "twitterLink": "https://twitter.com/loopringorg",
//       "wallet_address": "",
//       "websiteLink": "http://loopring.io/"
//   },
//   {
//       "name": "ZKSpace",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "zkRollup",
//           "Mobile & Web Wallet"
//       ],
//       "description": "ZKSpace is an all-featured Layer 2 protocol using ZK-Rollups. Transactions are completed instantly and gas fees reduced tens of times.",
//       "websiteLink ": "https://zks.org",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/zkspace",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/zkspace.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zkspace"
//       ],
//       "search_on": [
//           "rollups",
//           "wallets"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/ZKS.png')",
//       "tokenLink": "https://www.coingecko.com/en/coins/zkspace",
//       "tokenStatus": "Has",
//       "tokenTicker": "c",
//       "tooltip": "ZKSpace",
//       "twitterLink": "https://twitter.com/ZKSpaceOfficial",
//       "wallet_address": "",
//       "websiteLink": "https://zks.org"
//   },
//   {
//       "name": "Polygon Hermez",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "zkRollup",
//           "Mobile & Web Wallet"
//       ],
//       "description": "Polygon Hermez is an open-source ZK-Rollup optimised for secure, low-cost and usable token transfers on the wings of Ethereum.",
//       "websiteLink ": "https://hermez.io/",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/polygon",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/hermez.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "polygonhermez"
//       ],
//       "search_on": [
//           "rollups",
//           "wallets"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/polygon.png')",
//       "tokenLink": "https://www.coingecko.com/en/coins/polygon",
//       "tokenStatus": "Has",
//       "tokenTicker": "MATIC",
//       "tooltip": "Polygon Hermez",
//       "twitterLink": "https://twitter.com/0xPolygonHermez",
//       "wallet_address": "",
//       "websiteLink": "https://hermez.io/"
//   },
//   {
//       "name": "Polygon Miden",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "zkRollup"
//       ],
//       "description": "Polygon Miden, is an upcoming STARK-based, EVM-compatible rollup.",
//       "websiteLink ": "https://github.com/maticnetwork/miden",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/polygon",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/miden.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "polygonmiden"
//       ],
//       "search_on": [
//           "rollups"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/polygon.png')",
//       "tokenLink": "https://www.coingecko.com/en/coins/polygon",
//       "tokenStatus": "Has",
//       "tokenTicker": "MATIC",
//       "tooltip": "Polygon Miden",
//       "twitterLink": "https://twitter.com/0xPolygonMiden",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/maticnetwork/miden"
//   },
//   {
//       "name": "zkTube",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "zkRollup"
//       ],
//       "description": "zktube is a protocol with ZK Rollup solutions of zero knowledge proof building for users and developers.",
//       "websiteLink ": "https://zktube.io/",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/zktube",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/zktube.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zktube"
//       ],
//       "search_on": [
//           "rollups"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/ZKT.png')",
//       "tokenLink": "https://www.coingecko.com/en/coins/zktube",
//       "tokenStatus": "Has",
//       "tokenTicker": "ZKT",
//       "tooltip": "zkTube",
//       "twitterLink": "https://twitter.com/zktubeofficial/",
//       "wallet_address": "",
//       "websiteLink": "https://zktube.io/"
//   },
//   {
//       "name": "Scroll",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "zkRollup"
//       ],
//       "description": "Scroll aims to build a fast and secure EVM-compatible zk-Rollup with a strong proving network.",
//       "websiteLink ": "https://scroll.io/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/scroll.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "scroll"
//       ],
//       "search_on": [
//           "rollups"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "Scroll",
//       "twitterLink": "https://twitter.com/Scroll_ZKP",
//       "wallet_address": "",
//       "websiteLink": "https://scroll.io/"
//   },
//   {
//       "name": "Polygon Zero",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "zkRollup"
//       ],
//       "description": "Polygon Zero uses the speed of Plonky2 to enable a more scalable and decentralized ZK L2 giving users access to higher throughput and lower fees.",
//       "websiteLink ": "https://polygon.technology/solutions/polygon-zero",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/polygon",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/polygonzero.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "polygonzero"
//       ],
//       "search_on": [
//           "rollups"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/polygon.png')",
//       "tokenLink": "https://www.coingecko.com/en/coins/polygon",
//       "tokenStatus": "Has",
//       "tokenTicker": "MATIC",
//       "tooltip": "Polygon Zero",
//       "twitterLink": "https://twitter.com/0xPolygonZero",
//       "wallet_address": "",
//       "websiteLink": "https://polygon.technology/solutions/polygon-zero"
//   },
//   {
//       "name": "Edgeswap",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "zkRollup",
//           "dApp"
//       ],
//       "description": "Edgeswap is an Ethereum-based (Layer 2) zkRollup Protocol. EdgeSwap provides the market with high-performance, cost-effective swapping and farming services.",
//       "websiteLink ": "https://edgeswap.io/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/edgeswap.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "edgeswap"
//       ],
//       "search_on": [
//           "rollups",
//           "dApps"
//       ],
//       "status": "TESTNET",
//       "statusColor": "#F4B832",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "Edgeswap",
//       "twitterLink": "https://twitter.com/EdgeSwap",
//       "wallet_address": "",
//       "websiteLink": "https://edgeswap.io/"
//   },
//   {
//       "name": "zkLink",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "zkRollup",
//           "dApp"
//       ],
//       "description": "A unified, multi-chain L2 network secured by revolutionary zero-knowledge technology.",
//       "websiteLink ": "https://zk.link/",
//       "getStartedLink1": "https://docs.zk.link/docs/FAQ",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/zklink.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zklink"
//       ],
//       "search_on": [
//           "rollups",
//           "dApps"
//       ],
//       "status": "TESTNET",
//       "statusColor": "#F4B832",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/ZKL.png')",
//       "tokenLink": "https://docs.zk.link/docs/FAQ",
//       "tokenStatus": "Expected",
//       "tokenTicker": "ZKL",
//       "tooltip": "zkLink",
//       "twitterLink": "https://twitter.com/zkLinkorg",
//       "wallet_address": "",
//       "websiteLink": "https://zk.link/"
//   },
//   {
//       "name": "ZKyber",
//       "backgroundColor": "#36368F",
//       "category": [
//           "zkRollup",
//           "dApp"
//       ],
//       "description": "ZKyber is Kyber Networks experimental Zk-rollup Layer 2 product. ZKyber aims to build a DeFi-dedicated Zk-rollup that provides our users with a complete and professional system of financial tools.",
//       "websiteLink ": "https://kyberswap.com/zkyber/",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/kyber-network-crystal",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/zkyber.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zkyber"
//       ],
//       "search_on": [
//           "rollups",
//           "dApps"
//       ],
//       "status": "TESTNET",
//       "statusColor": "#F4B832",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/KNC.jpg')",
//       "tokenLink": "https://www.coingecko.com/en/coins/kyber-network-crystal",
//       "tokenStatus": "Has",
//       "tokenTicker": "KNC",
//       "tooltip": "ZKyber",
//       "twitterLink": "https://twitter.com/KyberNetwork",
//       "wallet_address": "",
//       "websiteLink": "https://kyberswap.com/zkyber/"
//   },
//   {
//       "name": "Orbis",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "zkRollup"
//       ],
//       "description": "Orbis is a Layer 2 ZK rollup scaling solution for Cardano. It utilizes recursive proofs to achieve highly scalable throughput & supports a general purpose smart contract ecosystem alongside application specific rollups.",
//       "websiteLink ": "https://orbisprotocol.com",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/orbis.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "orbis"
//       ],
//       "search_on": [
//           "rollups"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "Orbis",
//       "twitterLink": "https://twitter.com/orbisproject",
//       "wallet_address": "",
//       "websiteLink": "https://orbisprotocol.com"
//   },
//   {
//       "name": "Nectar Protocol",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "zkRollup"
//       ],
//       "description": "Nectar is a zkRollup and HIPAA compliant decentralized storage protocol. Nectar is based on zkSync, a zero-knowledge rollup, and will be EVM compatible.",
//       "websiteLink ": "https://nectar.haus/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/nectar.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "nectar"
//       ],
//       "search_on": [
//           "rollups"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "Nectar",
//       "twitterLink": "https://twitter.com/nectarprotocol",
//       "wallet_address": "",
//       "websiteLink": "https://nectar.haus/"
//   },
//   {
//       "name": "Numio",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Mobile Wallet"
//       ],
//       "description": "Buy, sell, trade, earn crypto with DeFi, collect NFTs, and more, while saving you up to 100x on Ethereum fees. \n \n Numio gives you more control over your digital assets in one convenient app. Numio can be used pseudonymously, or with an optional zkProof powered identity verification system. All Numio products are non-custodial.\n \n  Available on Android and iOS, Numio was the first zkRollup powered mobile payments app to be released on Google Play.",
//       "googlePlay": "https://play.google.com/store/apps/details?id=com.numio.pay",
//       "appleStore": "https://apps.apple.com/us/app/numio/id1538072952",
//       "websiteLink ": "https://numio.one",
//       "getStartedLink1": "https://www.numio.one/download/",
//       "getStartedLink2": "",
//       "imageLink": "url('project-logos/numio.png')",
//       "linkText1": "Get the App ",
//       "linkText2": "",
//       "featured": "featured",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "wallets"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       "Text1": "Get the Numio app",
//       "getStartedText2": "Follow the instructions to create a wallet",
//       "getStartedText3": "Fund your wallet from Ethereum, zkSync, or with a debit or credit card",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/getnumio",
//       "wallet_address": "",
//       "websiteLink": "https://numio.one"
//   },
//   {
//       "name": "imToken",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "Mobile Wallet"
//       ],
//       "description": "imToken is an easy and secure digital wallet trusted by millions.",
//       "websiteLink ": "https://token.im/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/imtoken.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "wallets"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/imTokenOfficial",
//       "wallet_address": "",
//       "websiteLink": "https://token.im/"
//   },
//   {
//       "name": "Argent",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Mobile Wallet"
//       ],
//       "description": "Argent is the most simple and secure smart wallet for crypto. Store and send; earn interest and invest.",
//       "websiteLink ": "https://www.argent.xyz/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/argent.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "wallets"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/argentHQ",
//       "wallet_address": "",
//       "websiteLink": "https://www.argent.xyz/"
//   },
//   {
//       "name": "Argent X",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Web Wallet"
//       ],
//       "description": "Argent X is an open-source Chrome browser plugin wallet for StarkNet. Argent X supports StarkNet Alpha on the Ethereum mainnet.",
//       "websiteLink ": "https://www.argent.xyz/argent-x/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/argentx.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "wallets"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/argentHQ",
//       "wallet_address": "",
//       "websiteLink": "https://www.argent.xyz/argent-x/"
//   },
//   {
//       "name": "Opera Wallet",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Mobile Browser Wallet"
//       ],
//       "description": "The Opera mobile browser wallet integrates DeversiFi (powered by StarkEx), for faster, easier, and cheaper ETH P2P transactions.",
//       "websiteLink ": "https://www.opera.com/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/opera.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starkex"
//       ],
//       "search_on": [
//           "wallets"
//       ],
//       "status": "Live",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkEx, DeversiFi",
//       "twitterLink": "https://twitter.com/opera",
//       "wallet_address": "",
//       "websiteLink": "https://www.opera.com/"
//   },
//   {
//       "name": "D'CENT",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "wallet"
//       ],
//       "description": "The über convenient multi crypto wallet with native dApp browser for Game, NFT, DeFi, and more.",
//       "websiteLink ": "https://dcentwallet.com/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/dcent.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "wallets"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/DCENTwallets",
//       "wallet_address": "",
//       "websiteLink": "https://dcentwallet.com/"
//   },
//   {
//       "name": "Mathwallet",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "wallet"
//       ],
//       "description": "MathWallet is a powerful universal crypto wallet which supports multi-chain tokens and dApps on mobile / browser extension / web & hardware wallet.",
//       "websiteLink ": "https://mathwallet.org/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/mathwallet.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "wallets"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/MathWallet",
//       "wallet_address": "",
//       "websiteLink": "https://mathwallet.org/"
//   },
//   {
//       "name": "ONTO",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Mobile Wallet"
//       ],
//       "description": "ONTO wallet is a decentralized multi-chain gateway for identity and asset management.",
//       "websiteLink ": "https://onto.app/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/onto.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "wallets"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/ONTOWallet",
//       "wallet_address": "",
//       "websiteLink": "https://onto.app/"
//   },
//   {
//       "name": "Web3Auth",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "wallet"
//       ],
//       "description": "Web3Auth is a pluggable auth suite for Web3 wallets and applications. It onboards both mainstream and crypto native users under a minute by providing experiences that they're most comfortable with.",
//       "websiteLink ": "https://web3auth.io/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/web3auth.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "wallets"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/web3auth",
//       "wallet_address": "",
//       "websiteLink": "https://web3auth.io/"
//   },
//   {
//       "name": "BlockWallet",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "wallet"
//       ],
//       "description": "BlockWallet is the first-ever browser extension that gives you an untraceable identity. Reclaim privacy on your ETH, WBTC & ERC-20 transfers.",
//       "websiteLink ": "https://blockwallet.io/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/blockwallet.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "wallets"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/GetBlockWallet",
//       "wallet_address": "",
//       "websiteLink": "https://blockwallet.io/"
//   },
//   {
//       "name": "Fox Wallet",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Mobile Wallet"
//       ],
//       "description": "Fox Wallet is a user-friendly Web3.0 portal built for a multi-chain ecosystem.",
//       "websiteLink ": "https://foxwallet.com/en",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/fox.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync",
//           "starknet"
//       ],
//       "search_on": [
//           "wallets"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync, StarkNet",
//       "twitterLink": "https://twitter.com/FoxWallet",
//       "wallet_address": "",
//       "websiteLink": "https://foxwallet.com/en"
//   },
//   {
//       "name": "Go Pocket",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "Mobile Wallet"
//       ],
//       "description": "Go Pocket is a next-gen crypto wallet which focuses on providing real-time and dynamic security services & best user experience.",
//       "websiteLink ": "https://gopocket.security/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/gopocket.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "wallets"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/gopocketwallet",
//       "wallet_address": "",
//       "websiteLink": "https://gopocket.security/"
//   },
//   {
//       "name": "Ledger",
//       "backgroundColor": "#36368F",
//       "category": [
//           "wallet"
//       ],
//       "description": "Buy, exchange and grow your crypto securely with a Ledger hardware wallet, combined with the Ledger Live app. It's never been easier to keep your crypto safe and accessible.",
//       "websiteLink ": "https://www.ledger.com/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/ledger.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "wallets"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/Ledger",
//       "wallet_address": "",
//       "websiteLink": "https://www.ledger.com/"
//   },
//   {
//       "name": "Tally Ho",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Web Wallet"
//       ],
//       "description": "Tally Ho is a free, community owned, open-source Web3 wallet built as a browser extension.",
//       "websiteLink ": "https://tally.cash/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/tally.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "wallets"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/tallycash",
//       "wallet_address": "",
//       "websiteLink": "https://tally.cash/"
//   },
//   {
//       "name": "Braavos",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Web Wallet"
//       ],
//       "description": "Braavos is a browser extension for accessing dApps and holding crypto assets. Braavos runs on StarkNet and is currently an Alpha release.",
//       "websiteLink": "https://braavos.app/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/braavos.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "wallets"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/myBraavos",
//       "wallet_address": "",
//       "websiteLink": "https://braavos.app/"
//   },
//   {
//       "name": "DeversiFi",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Dapp"
//       ],
//       "description": "A decentralised exchange for accessing DeFi opportunities on Ethereum: invest, trade, and send tokens without paying gas fees.",
//       "websiteLink": "https://deversifi.com/",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/dvf",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/deversifi.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starkex"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/DVF.jpg')",
//       "tokenLink": "https://www.coingecko.com/en/coins/dvf",
//       "tokenStatus": "Has",
//       "tokenTicker": "DVF",
//       "tooltip": "StarkEx",
//       "twitterLink": "https://twitter.com/deversifi",
//       "wallet_address": "",
//       "websiteLink": "https://deversifi.com/"
//   },
//   {
//       "name": "dYdX",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Dapp & Rollup"
//       ],
//       "description": "Trade Perpetual Contracts with low fees, deep liquidity, and up to 25× leverage.",
//       "websiteLink": "https://dydx.exchange/",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/dydx",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/dydx.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starkex"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/DYDX.png')",
//       "tokenLink": "https://www.coingecko.com/en/coins/dydx",
//       "tokenStatus": "Has",
//       "tokenTicker": "DYDX",
//       "tooltip": "StarkEx)",
//       "twitterLink": "https://twitter.com/dydxprotocol",
//       "wallet_address": "",
//       "websiteLink": "https://dydx.exchange/"
//   },
//   {
//       "name": "Sorare",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "Dapp & Rollup"
//       ],
//       "description": "Experience true football connection in The Global Fantasy Football Game! Trade & collect digital cards.",
//       "websiteLink": "https://sorare.com/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/sorare.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starkex"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkEx",
//       "twitterLink": "https://twitter.com/Sorare",
//       "wallet_address": "",
//       "websiteLink": "https://sorare.com/"
//   },
//   {
//       "name": "Curve",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Creating deep on-chain liquidity using advanced bonding curves.",
//       "websiteLink": "https://zksync.curve.fi/",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/curve-dao-token",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/curve.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "TESTNET",
//       "statusColor": "#F4B832",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/CRV.jpg')",
//       "tokenLink": "https://www.coingecko.com/en/coins/curve-dao-token",
//       "tokenStatus": "Has",
//       "tokenTicker": "CRV",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/CurveFinance",
//       "wallet_address": "",
//       "websiteLink": "https://zksync.curve.fi/"
//   },
//   {
//       "name": "ZigZag",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Dapp"
//       ],
//       "description": "ZigZag is a native, easy-to-use, reliable, fully secure and low fee Decentralized Exchange built on ZK Rollups.",
//       "featured": "featured",
//       "websiteLink ": "https://info.zigzag.exchange/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/zigzag.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync",
//           "starknet"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync, StarkNet",
//       "twitterLink": "https://mobile.twitter.com/zigzagexchange",
//       "wallet_address": "",
//       "websiteLink": "https://info.zigzag.exchange/"
//   },
//   {
//       "name": "Paraswap",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Dapp"
//       ],
//       "description": "ParaSwap aggregates decentralized exchanges and other DeFi services in one comprehensive interface to streamline and facilitate users' interactions with Ethereum's decentralized finance.",
//       "websiteLink ": "https://paraswap.io",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/paraswap",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/paraswap.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "BETA",
//       "statusColor": "#F4E532",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/PSP.jpg')",
//       "tokenLink": "https://www.coingecko.com/en/coins/paraswap",
//       "tokenStatus": "Has",
//       "tokenTicker": "PSP",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/paraswap",
//       "wallet_address": "",
//       "websiteLink": "https://paraswap.io"
//   },
//   {
//       "name": "Gitcoin",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Gitcoin is where communities unite to build & fund the open web - you can support your favourite open source projects by donating via zkSync",
//       "websiteLink ": "https://gitcoin.co/",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/gitcoin",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/gitcoin.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync",
//           "loopring"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/GTC.png')",
//       "tokenLink": "https://www.coingecko.com/en/coins/gitcoin",
//       "tokenStatus": "Has",
//       "tokenTicker": "GTC",
//       "tooltip": "zkSync, Loopring",
//       "twitterLink": "https://twitter.com/gitcoin",
//       "wallet_address": "",
//       "websiteLink": "https://gitcoin.co/"
//   },
//   {
//       "name": "Mute",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Mute is a ZK-Rollup based automated market maker (AMM) exchange, farming platform, and IDO platform.",
//       "websiteLink ": "https://mute.io/",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/mute",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/mute.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "TESTNET",
//       "statusColor": "#F4B832",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/MUTE.png')",
//       "tokenLink": "https://www.coingecko.com/en/coins/mute",
//       "tokenStatus": "Has",
//       "tokenTicker": "MUTE",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/mute_io",
//       "wallet_address": "",
//       "websiteLink": "https://mute.io/"
//   },
//   {
//       "name": "Storj",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Secure, private, affordable decentralized cloud object storage for developers - Storj Hosts (Storage Node Operators) can elect to receive their payments via zkSync.",
//       "websiteLink ": "https://www.storj.io/",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/storj",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/storj.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/STORJ.png')",
//       "tokenLink": "https://www.coingecko.com/en/coins/storj",
//       "tokenStatus": "Has",
//       "tokenTicker": "STORJ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/storj",
//       "wallet_address": "",
//       "websiteLink": "https://www.storj.io/"
//   },
//   {
//       "name": "Golem",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Golem is a flexible, open-source platform for democratised access to digital resourcesGolem - providers can choose to receive their payments via zkSync.",
//       "websiteLink ": "https://www.golem.network/",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/golem",
//       "getStartedLink": "https://www.google.com/",
//       "imageLink": "url('project-logos/golem.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/GLM.jpg')",
//       "tokenLink": "https://www.coingecko.com/en/coins/golem",
//       "tokenStatus": "Has",
//       "tokenTicker": "GLM",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/golemproject",
//       "wallet_address": "",
//       "websiteLink": "https://www.golem.network/"
//   },
//   {
//       "name": "Rails",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Rails is a Layer 2 payment dApp powered by Loopring.",
//       "websiteLink ": "https://rails.eth.link/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/rails.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "loopring"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "Loopring",
//       "twitterLink": "https://twitter.com/Rails_eth",
//       "wallet_address": "",
//       "websiteLink": "https://rails.eth.link/"
//   },
//   {
//       "name": "pNetwork",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Dapp"
//       ],
//       "description": "pTokens aims to be a decentralized open-source system facilitating cross-chain movement of assets.",
//       "websiteLink ": "https://p.network/",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/pnetwork",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/pnetwork.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "loopring"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/PNT.png')",
//       "tokenLink": "https://www.coingecko.com/en/coins/pnetwork",
//       "tokenStatus": "Has",
//       "tokenTicker": "PNT",
//       "tooltip": "Loopring",
//       "twitterLink": "https://twitter.com/pNetworkDeFi",
//       "wallet_address": "",
//       "websiteLink": "https://p.network/"
//   },
//   {
//       "name": "IBetYou",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Dapp"
//       ],
//       "description": "A smarter way to place and track your bets. Keep 'em all in one place, make sure no one bails out, and win money in your favorite cryptocurrency.",
//       "websiteLink ": "https://ibetyou.xyz/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/ibetyou.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/ibetyouxyz",
//       "wallet_address": "",
//       "websiteLink": "https://ibetyou.xyz/"
//   },
//   {
//       "name": "Maker Wormhole",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Dapp"
//       ],
//       "description": "DAI Wormholing - the ability for almost instant teleportation of DAI between supported Layer 2s + Ethereum.",
//       "websiteLink ": "https://forum.makerdao.com/t/introducing-maker-wormhole/11550",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/maker",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/maker.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/MKR.png')",
//       "tokenLink": "https://www.coingecko.com/en/coins/maker",
//       "tokenStatus": "Has",
//       "tokenTicker": "MKR",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/makerdao",
//       "wallet_address": "",
//       "websiteLink": "https://forum.makerdao.com/t/introducing-maker-wormhole/11550"
//   },
//   {
//       "name": "Akropolis",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Dapp"
//       ],
//       "description": "DeFi yield on autopilot. An easy to use interface for financial operations and decision-making.",
//       "websiteLink ": "https://www.akropolis.io/",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/arkropolis",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/akropolis.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/AKRO.png')",
//       "tokenLink": "https://www.coingecko.com/en/coins/arkropolis",
//       "tokenStatus": "Has",
//       "tokenTicker": "AKRO",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/akropolisio",
//       "wallet_address": "",
//       "websiteLink": "https://www.akropolis.io/"
//   },
//   {
//       "name": "Snapshot X",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Snapshot X is a voting framework built on StarkNet, the layer 2 ZK-Rollup. It will allow any DAO to run their governance on-chain on layer 2 and execute transactions on Ethereum.",
//       "websiteLink ": "https://snapshot.org/#/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/snapshot.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/SnapshotLabs",
//       "wallet_address": "",
//       "websiteLink": "https://snapshot.org/#/"
//   },
//   {
//       "name": "zkSync Checkout",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Dapp"
//       ],
//       "description": "zkSync Checkout helps anyone adopt permissionless checkouts backed by zkSync - create and process payments with all the benefits of the zkSync Rollup.",
//       "websiteLink ": "https://checkout.zksync.io/link",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/zksync.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/zksync",
//       "wallet_address": "",
//       "websiteLink": "https://checkout.zksync.io/link"
//   },
//   {
//       "name": "zkMint",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Dapp"
//       ],
//       "description": "zkSync minting tool to mint zkSync-supported tokens.",
//       "websiteLink ": "https://mint.zksync.dev/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/zksync.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "TESTNET",
//       "statusColor": "#F4B832",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/zkSync",
//       "wallet_address": "",
//       "websiteLink": "https://mint.zksync.dev/"
//   },
//   {
//       "name": "zk.Money",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Dapp"
//       ],
//       "description": "zk.money is an Ethereum Layer 2 privacy app built on top of the Aztec network. Sending and receiving a token is anonymous, and does not publish any of the transaction's data publicly.",
//       "websiteLink ": "https://zk.money/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/aztec.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "aztec"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "Aztec",
//       "twitterLink": "https://twitter.com/aztecprotocol",
//       "wallet_address": "",
//       "websiteLink": "https://zk.money/"
//   },
//   {
//       "name": "LayerSwap",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "dapp"
//       ],
//       "description": "With LayerSwap, you can send crypto from your crypto exchange account directly to Layer 2 networks without paying high Gas fees.",
//       "websiteLink ": "https://www.layerswap.io/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/layerswap.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/layerswap/",
//       "wallet_address": "",
//       "websiteLink": "https://www.layerswap.io/"
//   },
//   {
//       "name": "Orbiter Finance",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "dapp"
//       ],
//       "description": "Orbiter Finance is a decentralized cross-rollup Layer 2 bridge with a contract only on the destination side and is Ethereum's future multi-rollup infrastructure, the cost is low, and the process is instant.",
//       "websiteLink ": "https://orbiter.finance/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/orbiter.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync",
//           "starknet"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync, StarkNet",
//       "twitterLink": "https://twitter.com/Orbiter_Finance",
//       "wallet_address": "",
//       "websiteLink": "https://orbiter.finance/"
//   },
//   {
//       "name": "mySwap",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Dapp"
//       ],
//       "description": "mySwap is an AMM built on top of Starknet (Ethereum L2).",
//       "websiteLink ": "https://www.myswap.xyz/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/myswap.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "TESTNET",
//       "statusColor": "#F4B832",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/mySwapxyz",
//       "wallet_address": "",
//       "websiteLink": "https://www.myswap.xyz/"
//   },
//   {
//       "name": "suez.dev",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Test the first bridge from ethereum GOERLI TESTNET to starknet - WARNING: any real Eth sent will be lost!",
//       "websiteLink ": "https://suez.dev/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/suez.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "TESTNET",
//       "statusColor": "#F4B832",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/SuezBridge",
//       "wallet_address": "",
//       "websiteLink": "https://suez.dev/"
//   },
//   {
//       "name": "UniSync",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Dapp"
//       ],
//       "description": "UniSync: a port of Uniswap V2 on the zkSync zkEVM.",
//       "websiteLink ": "https://blog.matter-labs.io/unisync-a-port-of-uniswap-v2-on-the-zkevm-b12954748504",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/zksync.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "TESTNET",
//       "statusColor": "#F4B832",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/zkSync",
//       "wallet_address": "",
//       "websiteLink": "https://blog.matter-labs.io/unisync-a-port-of-uniswap-v2-on-the-zkevm-b12954748504"
//   },
//   {
//       "name": "xSigma",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Dapp"
//       ],
//       "description": "xSigma is a stablecoin exchange and a liquidity mining platform backed by a public Nasdaq-listed company.",
//       "websiteLink ": "https://xsigma.fi/",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/xsigma",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/xsigma.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/SIG.png')",
//       "tokenLink": "https://www.coingecko.com/en/coins/xsigma",
//       "tokenStatus": "Has",
//       "tokenTicker": "SIG",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/xSigma5",
//       "wallet_address": "",
//       "websiteLink": "https://xsigma.fi/"
//   },
//   {
//       "name": "JediSwap",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Dapp"
//       ],
//       "description": "JediSwap is a fully permissionless and composable AMM built on Starknet",
//       "websiteLink ": "https://app.testnet.jediswap.xyz/#/swap",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/jediswap.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "TESTNET",
//       "statusColor": "#F4B832",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/JediSwap",
//       "wallet_address": "",
//       "websiteLink": "https://app.testnet.jediswap.xyz/#/swap"
//   },
//   {
//       "name": "Element Finance",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Element Finance is an open source protocol for fixed and variable yield markets.",
//       "websiteLink ": "https://www.element.fi/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/element.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "aztec"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "Aztec",
//       "twitterLink": "https://twitter.com/element_fi",
//       "wallet_address": "",
//       "websiteLink": "https://www.element.fi/"
//   },
//   {
//       "name": "Celer Network",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Celer Network is a layer-2 scaling platform that brings fast, secure and low-cost blockchain applications to Ethereum.",
//       "websiteLink ": "https://cbridge.celer.network/#/transfer",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/celer-network",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/celer.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/CELR.png')",
//       "tokenLink": "https://www.coingecko.com/en/coins/celer-network",
//       "tokenStatus": "Has",
//       "tokenTicker": "CELR",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/CelerNetwork",
//       "wallet_address": "",
//       "websiteLink": "https://cbridge.celer.network/#/transfer"
//   },
//   {
//       "name": "Composable Finance",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Dapp"
//       ],
//       "description": "A robust cross-chain & cross-layer infrastructure with intuitive tools for DeFi devs.",
//       "websiteLink ": "https://www.composable.finance/",
//       "getStartedLink1": "https://docs.composable.finance/governance-and-tokenomics/layr-tokens",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/composable.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/LAYR.jpg')",
//       "tokenLink": "https://docs.composable.finance/governance-and-tokenomics/layr-tokens",
//       "tokenStatus": "Expected",
//       "tokenTicker": "LAYR",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/ComposableFin",
//       "wallet_address": "",
//       "websiteLink": "https://www.composable.finance/"
//   },
//   {
//       "name": "StarkSwap",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Next generation DeFi powered by public ZK-Rollup technology",
//       "websiteLink ": "https://www.starkswap.co/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/starkswap.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "TESTNET",
//       "statusColor": "#F4B832",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/starkswap",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/Starkswap"
//   },
//   {
//       "name": "Serity",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Serity is a community-owned protocol powering the creation and trading of yield-backed synthetic assets.",
//       "websiteLink ": "https://serity.finance/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/serity.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/SerityFinance",
//       "wallet_address": "",
//       "websiteLink": "https://serity.finance/"
//   },
//   {
//       "name": "ZKX",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Dapp"
//       ],
//       "description": "A perpetual swaps exchange optimized for off-chain asset trading and gamified user experience.",
//       "websiteLink ": "https://zkx.fi/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/zkx.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "wallet_address": "",
//   },
//   {
//       "name": "ZkPad",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "Dapp"
//       ],
//       "description": "ZkPad is the first secured Launchpad on zkRollups. We aim to bring sustainable liquidity to projects building on StarkNet.",
//       "websiteLink ": "https://zkpad.io/",
//       "getStartedLink1": "https://wp.zkpad.io/tokenomics",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/zkpad.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tokenStatus": "Expected",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/ZKPadfi",
//       "wallet_address": "",
//       "websiteLink": "https://zkpadfi.medium.com/zkpad-to-empower-starkware-protocols-6325e757a452"
//   },
//   {
//       "name": "zkLend",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Dapp"
//       ],
//       "description": "zkLend is an L2 money-market protocol built on StarkNet which combines zk-rollup scalability with Ethereum’s security, enabling participants to efficiently earn interest on deposits and seamlessly borrow assets. The protocol offers a dual solution: a permissioned and compliance-focused solution for institutional clients, and a permissionless service for DeFi users - all without sacrificing decentralisation.",
//       "websiteLink ": "https://zklend.com",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/zklend.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tokenStatus": "Expected",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/zkLend",
//       "wallet_address": "",
//       "websiteLink": "https://zklend.com"
//   },
//   {
//       "name": "xBank",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Dapp"
//       ],
//       "description": "xBank is a non-custodial liquidity market protocol that manages deposits for lenders and facilitates lending for borrowers. xBank performs risk management to protect lenders from risks of illiquidity and insolvency.",
//       "websiteLink ": "https://www.xbank.finance/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/xbank.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "TESTNET",
//       "statusColor": "#F4B832",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/xBankFinance",
//       "wallet_address": "",
//       "websiteLink": "https://www.xbank.finance/"
//   },
//   {
//       "name": "Forward Protocol",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Forward Protocol is building WordPress for Web 3.0 with a customizable, no-code, drag & drop interface.",
//       "websiteLink ": "https://forwardprotocol.io/",
//       "getStartedLink1": "https://forwardprotocol.io/wp-content/uploads/2021/12/Forward_Tokenomics.pdf",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/forward.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/FORWARD.png')",
//       "tokenLink": "https://forwardprotocol.io/wp-content/uploads/2021/12/Forward_Tokenomics.pdf",
//       "tokenStatus": "Expected",
//       "tokenTicker": "FORWARD",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/ForwardProtocol/",
//       "wallet_address": "",
//       "websiteLink": "https://forwardprotocol.io/"
//   },
//   {
//       "name": "Poly Network",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Poly Network is a global cross-chain interoperability protocol for implementing blockchain interoperability and building the Web3.0 infrastructure.",
//       "websiteLink ": "https://poly.network/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/polynetwork.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/PolyNetwork2",
//       "wallet_address": "",
//       "websiteLink": "https://poly.network/"
//   },
//   {
//       "name": "Symbiote Stark",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Dapp"
//       ],
//       "description": "SymbioteStark is a game that teaches you all technical things about Cairo. Learn to make smart contracts in Cairo by making your own crypto-collectibles game. ",
//       "websiteLink ": "https://symbonstark.surge.sh/#/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/symbonstark.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/SymbOnStark",
//       "wallet_address": "",
//       "websiteLink": "https://symbonstark.surge.sh/#/"
//   },
//   {
//       "name": "Starkle",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Starkle is a clone of the popular game Wordle. In this version all the words are related to Starkware, Ethereum, Layer 2's and similar!",
//       "websiteLink ": "https://home.byoa.org/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/starkle.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "TESTNET",
//       "statusColor": "#F4B832",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/mallowsxyz",
//       "wallet_address": "",
//       "websiteLink": "https://home.byoa.org/"
//   },
//   {
//       "name": "1inch",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Dapp"
//       ],
//       "description": "The 1inch Network unites decentralized protocols whose synergy enables the most lucrative, fastest and protected operations in the DeFi space.",
//       "websiteLink ": "https://1inch.exchange/",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/1inch",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/1inch.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/1inch.png')",
//       "tokenLink": "https://www.coingecko.com/en/coins/1inch",
//       "tokenStatus": "Has",
//       "tokenTicker": "1inch",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/1inch",
//       "wallet_address": "",
//       "websiteLink": "https://1inch.exchange/"
//   },
//   {
//       "name": "88mph",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Dapp"
//       ],
//       "description": "88mph has a variety of features that make it the best place to start earning a fixed yield rate on your assets. Our leading non-custodial fully on-chain protection measures give you the peace of mind you deserve.",
//       "websiteLink ": "https://88mph.app/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/88mph.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/88mphapp",
//       "wallet_address": "",
//       "websiteLink": "https://88mph.app/"
//   },
//   {
//       "name": "Alchemix",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Dapp",
//           "DAO"
//       ],
//       "description": "Alchemix Finance is a future-yield-backed synthetic asset platform and community DAO.",
//       "websiteLink ": "https://app.alchemix.fi/",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/Alchemix",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/alchemix.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps",
//           "DAOs"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/ALCX.png')",
//       "tokenLink": "https://www.coingecko.com/en/coins/Alchemix",
//       "tokenStatus": "Has",
//       "tokenTicker": "ALCX",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/AlchemixFi",
//       "wallet_address": "",
//       "websiteLink": "https://app.alchemix.fi/"
//   },
//   {
//       "name": "Aragon",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Dapp",
//           "DAO"
//       ],
//       "description": "Build your Decentralized Autonomous Organization on open-source infrastructure with governance plugins.",
//       "websiteLink ": "https://aragon.org/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/aragon.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps",
//           "DAOs"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/aragonproject",
//       "wallet_address": "",
//       "websiteLink": "https://aragon.org/"
//   },
//   {
//       "name": "Frax Finance",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Frax is a fractional-algorithmic stablecoin protocol. Open-source, permissionless, and entirely on-chain Frax aims to provide highly scalable, decentralized, algorithmic money in place of fixed-supply digital assets like BTC. ",
//       "websiteLink ": "https://frax.finance/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/frax.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/fraxfinance",
//       "wallet_address": "",
//       "websiteLink": "https://frax.finance/"
//   },
//   {
//       "name": "Hashflow",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Hashflow is a DEX that offers tight spreads, zero slippage, and yield without impermanent loss.",
//       "websiteLink ": "https://www.hashflow.com/",
//       "getStartedLink1": "https://www.hashflow.com/token",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/hashflow.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/HFT.png')",
//       "tokenLink": "https://www.hashflow.com/token",
//       "tokenStatus": "Expected",
//       "tokenTicker": "HFT",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/hashflownetwork",
//       "wallet_address": "",
//       "websiteLink": "https://www.hashflow.com/"
//   },
//   {
//       "name": "MRHB",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Marhaba is a complete, safe and user friendly platform that will provide maximum access to [interest free] DeFi, NFT and Cryptoasset opportunities.",
//       "websiteLink ": "https://mrhb.network/",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/marhabadefi",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/mrhb.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/MHRB.png')",
//       "tokenLink": "https://www.coingecko.com/en/coins/marhabadefi",
//       "tokenStatus": "Has",
//       "tokenTicker": "MHRB",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/MarhabaDeFi",
//       "wallet_address": "",
//       "websiteLink": "https://mrhb.network/"
//   },
//   {
//       "name": "OlympusDAO",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Dapp",
//           "DAO"
//       ],
//       "description": "Olympus is building a community-owned decentralized financial infrastructure to bring more stability and transparency for the world.",
//       "websiteLink ": "https://www.olympusdao.finance/",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/olympus",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/olympus.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps",
//           "DAOs"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/OHM.png')",
//       "tokenLink": "https://www.coingecko.com/en/coins/olympus",
//       "tokenStatus": "Has",
//       "tokenTicker": "OHM",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/OlympusDAO",
//       "wallet_address": "",
//       "websiteLink": "https://www.olympusdao.finance/"
//   },
//   {
//       "name": "Rubicon Protocol",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Dapp"
//       ],
//       "description": "The Rubicon Protocol is a decentralized exchange protocol on the Ethereum blockchain. It enables the peer-to-peer exchange of ERC20 tokens.",
//       "websiteLink ": "https://rubicon.finance/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/rubicon.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/rubicondefi",
//       "wallet_address": "",
//       "websiteLink": "https://rubicon.finance/"
//   },
//   {
//       "name": "Taker Protocol",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Taker is a liquidity protocol that allows users to liquidate and rent all kinds of novel crypto assets, including encrypted collectibles, metaverse assets, financial papers, synthetic assets and more.",
//       "websiteLink ": "https://taker.org/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/taker.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/TakerProtocol",
//       "wallet_address": "",
//       "websiteLink": "https://taker.org/"
//   },
//   {
//       "name": "Tracer",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Tracer is an open-source, smart contract protocol for derivatives. Broadly, it is an array of financial contract generators [Factory] governed by a DAO.",
//       "websiteLink ": "https://tracer.finance/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/tracer.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/TracerDAO",
//       "wallet_address": "",
//       "websiteLink": "https://tracer.finance/"
//   },
//   {
//       "name": "Trustless",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Trustless is a community dedicated to re-building foundational defi protocols in a maximally Trustless way. The Trustless Currency Protocol allows anyone to borrow the Hue token.",
//       "websiteLink ": "https://www.trustless.fi/",
//       "getStartedLink1": "https://www.trustless.fi/hue",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/trustless.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/HUE.png')",
//       "tokenLink": "https://www.trustless.fi/hue",
//       "tokenStatus": "Expected",
//       "tokenTicker": "HUE",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/trustlessfi",
//       "wallet_address": "",
//       "websiteLink": "https://www.trustless.fi/"
//   },
//   {
//       "name": "Vovo Finance",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Vovo Finance is a structured products protocol that offers a variety of products catering to users with different risk profiles. Vovo offers products including principal protected products and yield enhancements.",
//       "websiteLink ": "https://vovo.finance/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/vovo.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/VovoFinance",
//       "wallet_address": "",
//       "websiteLink": "https://vovo.finance/"
//   },
//   {
//       "name": "WOO Network",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Dapp"
//       ],
//       "description": "WOO Network is a trading platform that features deep liquidity for superior order execution, zero-fee trading, and fully customizable trading workspaces.",
//       "websiteLink ": "https://woo.org/",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/woo-network",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/woo.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/WOO.png')",
//       "tokenLink": "https://www.coingecko.com/en/coins/woo-network",
//       "tokenStatus": "Has",
//       "tokenTicker": "WOO",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/WOOnetwork",
//       "wallet_address": "",
//       "websiteLink": "https://woo.org/"
//   },
//   {
//       "name": "yearn",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Dapp"
//       ],
//       "description": "yearn.finance is a selection of Ethereum lending and trading protocols that allow users to optimize their crypto earnings.",
//       "websiteLink ": "https://yearn.finance/",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/yearn-finance",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/yearn.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/YFI.png')",
//       "tokenLink": "https://www.coingecko.com/en/coins/yearn-finance",
//       "tokenStatus": "Has",
//       "tokenTicker": "YFI",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/iearnfinance",
//       "wallet_address": "",
//       "websiteLink": "https://yearn.finance/"
//   },
//   {
//       "name": "Zerion",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Zerion is the easiest way to build and manage your entire DeFi portfolio from one place.",
//       "websiteLink ": "https://zerion.io/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/zerion.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/zerion_io",
//       "wallet_address": "",
//       "websiteLink": "https://zerion.io/"
//   },
//   {
//       "name": "Ferrum Network",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Ferrum Network is a cross-chain Blockchain as a Service DeFi company that specializes in adding deflationary token utility and advisory services to projects across the crypto space.",
//       "websiteLink ": "https://ferrum.network/",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/ferrum-network",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/ferrum.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "Dev",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/FRM.png')",
//       "tokenLink": "https://www.coingecko.com/en/coins/ferrum-network",
//       "tokenStatus": "Has",
//       "tokenTicker": "FRM",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/FerrumNetwork",
//       "wallet_address": "",
//       "websiteLink": "https://ferrum.network/"
//   },
//   {
//       "name": "Alpha Road",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Alpha Road is a decentralized non-custodial platform built on Starknet (ZK-Rollup L2 solution) allowing users to maximize returns with a next gen DeFi experience and bespoke financial products.",
//       "websiteLink ": "https://alpharoad.fi/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/alpharoad.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "Dev",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/alpharoad_fi",
//       "wallet_address": "",
//       "websiteLink": "https://alpharoad.fi/"
//   },
//   {
//       "name": "OKx",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Discover crypto, built on top of the world's most powerful exchange.",
//       "websiteLink ": "https://www.okx.com/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/okx.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "Dev",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/okx",
//       "wallet_address": "",
//       "websiteLink": "https://www.okx.com/"
//   },
//   {
//       "name": "Aura",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Aura is a new synthetics issuance protocol on Starknet. Aura's first product is going to be a USD synthetic stablecoin with a corresponding Savings product.",
//       "websiteLink ": "https://sandclock.org/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/aura.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "Dev",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/AuraProtocol",
//       "wallet_address": "",
//       "websiteLink": "https://sandclock.org/"
//   },
//   {
//       "name": "Via",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Via is an advanced Cross-Chain Liquidity Aggregation Protocol and Infrastructure for GameFi",
//       "websiteLink ": "https://via.exchange/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/via.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/via_protocol",
//       "wallet_address": "",
//       "websiteLink": "https://via.exchange/"
//   },
//   {
//       "name": "Gro",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Gro protocol is a stablecoin yield aggregator that tranches risk and yield.",
//       "websiteLink ": "https://www.gro.xyz/",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/pwrd-stablecoin",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/gro.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/PWRD.webp')",
//       "tokenLink": "https://www.coingecko.com/en/coins/pwrd-stablecoin",
//       "tokenStatus": "Has",
//       "tokenTicker": "PWRD",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/groprotocol",
//       "wallet_address": "",
//       "websiteLink": "https://www.gro.xyz/"
//   },
//   {
//       "name": "Increment",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Dapp"
//       ],
//       "description": "The Increment protocol introduces a system design that uses pooled virtual assets for liquidity and leverages Curve V2's AMM (Automated Market Maker) for trade execution.",
//       "websiteLink ": "https://increment.finance/",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/pwrd-stablecoin",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/increment.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/PWRD.webp')",
//       "tokenLink": "https://www.coingecko.com/en/coins/pwrd-stablecoin",
//       "tokenStatus": "Has",
//       "tokenTicker": "PWRD",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/IncrementHQ",
//       "wallet_address": "",
//       "websiteLink": "https://increment.finance/"
//   },
//   {
//       "name": "AAVE",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Aave is an open source and non-custodial liquidity protocol for earning interest on deposits and borrowing assets.",
//       "websiteLink ": "https://aave.com/",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/aave",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/aave.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/AAVE.png')",
//       "tokenLink": "https://www.coingecko.com/en/coins/aave",
//       "tokenStatus": "Has",
//       "tokenTicker": "AAVE",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/aaveaave",
//       "wallet_address": "",
//       "websiteLink": "https://aave.com/"
//   },
//   {
//       "name": "Magnety",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Magnety is an on-chain asset management protocol that allows anyone, such as investment groups, DAOs, or individuals, to get the most out of DeFi through an easy-to-use platform. ",
//       "websiteLink ": "https://medium.com/@magnety.finance/magnety-defi-4-all-6414990639e8",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/magnety.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/magnetyfi",
//       "wallet_address": "",
//       "websiteLink": "https://medium.com/@magnety.finance/magnety-defi-4-all-6414990639e8"
//   },
//   {
//       "name": "Babylon Finance",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Babylon is a community-led asset management protocol that enables users to invest in DeFi together. It's built on the Ethereum network and it's non-custodial, transparent, permission-less, and governed by the community.",
//       "websiteLink ": "https://www.babylon.finance/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/babylon.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/BabylonFinance",
//       "wallet_address": "",
//       "websiteLink": "https://www.babylon.finance/"
//   },
//   {
//       "name": "Phezzan Protocol",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Phezzan Protocol is an interest earning perpetual DEX, with a mission to Democratize Perpetual Trading for All. \n \n Our main features include: \n \n 1. Yield bearing assets can be used as collateral \n \n 2. PnL settles in stablecoins, can auto convert to yield bearing assets according to user preference \n \n 3. Market, Limit & Stop Orders \n \n  4. Multi-collateral support \n \n 5. Will launch on zkSync 2.0 to offer the best speed and gas fees",
//       "websiteLink ": "http://phezzan.xyz/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/phezzan.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "TESTNET",
//       "statusColor": "#F4B832",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/PhezzanProtocol",
//       "wallet_address": "",
//       "websiteLink": "http://phezzan.xyz/"
//   },
//   {
//       "name": "Dank Protocol",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Dank is an open-source lending protocol based on smart contracts which allows all valuable crypto assets to obtain multi diversified financial services.",
//       "websiteLink ": "https://dank-protocol.com/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/dank.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/dank_protocol",
//       "wallet_address": "",
//       "websiteLink": "https://dank-protocol.com/"
//   },
//   {
//       "name": "Krebit",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Krebit is an identity verification protocol, DAO and marketplace for Web3 Verifiable Credentials.",
//       "websiteLink ": "https://krebit.id/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/krebit.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/KrebitDAO",
//       "wallet_address": "",
//       "websiteLink": "https://krebit.id/"
//   },
//   {
//       "name": "ZKEX",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "Dapp"
//       ],
//       "description": "ZKEX is a multi-chain L2 order book DEX, secured with zero-knowledge proofs, powered by zkSync, StarkNet, and zkLink.",
//       "websiteLink ": "https://zkex.com/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/zkex.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync",
//           "starknet",
//           "zklink"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync, StarkNet, ZKLink",
//       "twitterLink": "https://twitter.com/ZKEX_Official",
//       "wallet_address": "",
//       "websiteLink": "https://zkex.com/"
//   },
//   {
//       "name": "Manifest",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Manifest is a collective of creators, innovators, and people who want more out of life. Stake MNFST for sMNFST to own the future of decentralized business.",
//       "websiteLink ": "https://manifest.gg/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/manifest.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/manifest/",
//       "wallet_address": "",
//       "websiteLink": "https://manifest.gg/"
//   },
//   {
//       "name": "CVI",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Dapp"
//       ],
//       "description": "The Crypto Volatility Index (CVI) is a decentralized VIX for crypto that allows users to hedge themselves against market volatility and impermanent loss.",
//       "websiteLink ": "https://cvi.finance/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/cvi.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/official_cvi",
//       "wallet_address": "",
//       "websiteLink": "https://cvi.finance/"
//   },
//   {
//       "name": "Hedgey",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Hedgey is a permissionless protocol that lets DAOs and treasuries create strategic financing with their tokens through public and private OTC offers, yield bearing covered calls, and time locked auctions.",
//       "websiteLink ": "https://hedgey.finance/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/hedgey.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/hedgeyfinance",
//       "wallet_address": "",
//       "websiteLink": "https://hedgey.finance/"
//   },
//   {
//       "name": "Arweave",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Arweave is a protocol that allows you to store data permanently, sustainably, with a single upfront fee.",
//       "websiteLink ": "https://www.arweave.org/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/arweave.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/ArweaveTeam",
//       "wallet_address": "",
//       "websiteLink": "https://www.arweave.org/"
//   },
//   {
//       "name": "SyncSwap",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Dapp"
//       ],
//       "description": "SyncSwap is a decentralized AMM exchange built on zkSync.",
//       "websiteLink ": "https://www.syncswap.xyz/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/syncswap.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/syncswap",
//       "wallet_address": "",
//       "websiteLink": "https://www.syncswap.xyz/"
//   },
//   {
//       "name": "WardenSwap",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "Dapp"
//       ],
//       "description": "WardenSwap is a multichain, AI powered, digital asset exchange platform.",
//       "websiteLink ": "https://www.wardenswap.com/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/warden.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/WardenSwap",
//       "wallet_address": "",
//       "websiteLink": "https://www.wardenswap.com/"
//   },
//   {
//       "name": "Icewater",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Icewater is a project dedicated toward building a non-pegged stablecoin, called H2O.",
//       "websiteLink ": "https://icewater.money",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/icewater.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/icewatermoney",
//       "wallet_address": "",
//       "websiteLink": "https://icewater.money"
//   },
//   {
//       "name": "Raise Finance",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Dapp"
//       ],
//       "description": "A platform for decentralized fundraising, investments and payments built on L2.",
//       "websiteLink ": "https://www.raisefinance.io/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/raise.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/raise_fi",
//       "wallet_address": "",
//       "websiteLink": "https://www.raisefinance.io/"
//   },
//   {
//       "name": "Brine Finance",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Dapp"
//       ],
//       "description": "The decentralized order-book exchange for traders crafted by traders  Gasless | Instant | Cross-Chain | Secure | Trustless.",
//       "websiteLink ": "https://www.brine.finance/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/brine.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/BrineFinance",
//       "wallet_address": "",
//       "websiteLink": "https://www.brine.finance/"
//   },
//   {
//       "name": "SithSwap",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Sithswap is a next‐gen amm on starknet featuring instant volatile and stable swaps with ultra‐low slippage, zero fees and the full security of Ethereum.",
//       "websiteLink ": "https://sithswap.com/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/sithswap.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/SithSwap",
//       "wallet_address": "",
//       "websiteLink": "https://sithswap.com/"
//   },
//   {
//       "name": "SynFutures",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Dapp"
//       ],
//       "description": "SynFutures is a next-generation derivatives exchange focused on creating an open and trustless derivatives market by enabling trading on any device with proper price feeds. ",
//       "websiteLink ": "https://www.synfutures.com/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/synfutures.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/SynFuturesDefi",
//       "wallet_address": "",
//       "websiteLink": "https://www.synfutures.com/"
//   },
//   {
//       "name": "Sat.is",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Dapp"
//       ],
//       "description": "Sat.is is the next generation multichain decentralized exchange that aims to provide the optimal trading experience with zero slippage, low transaction fees, and self-custody of funds.",
//       "websiteLink ": "https://zksync-testnet.sat.is/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/satis.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "TESTNET",
//       "statusColor": "#F4B832",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/SatisDEX",
//       "wallet_address": "",
//       "websiteLink": "https://zksync-testnet.sat.is/"
//   },
//   {
//       "name": "Ramp",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "Infra"
//       ],
//       "description": "Ramp lets everyone exchange currencies like USD, GBP, EUR with various crypto assets.",
//       "websiteLink ": "https://ramp.network/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/ramp.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/RampNetwork",
//       "wallet_address": "",
//       "websiteLink": "https://ramp.network/"
//   },
//   {
//       "name": "zkScan",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Infra"
//       ],
//       "description": "zkScan is a Block Explorer and Analytics Platform for zkSync",
//       "websiteLink ": "https://zkscan.io/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/zksync.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/zksync",
//       "wallet_address": "",
//       "websiteLink": "https://zkscan.io/"
//   },
//   {
//       "name": "The Graph",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Infra"
//       ],
//       "description": "The Graph is an indexing protocol for querying networks like Ethereum and IPFS. Anyone can build and publish open APIs, called subgraphs, making data easily accessible.",
//       "websiteLink ": "https://thegraph.com/",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/the-graph",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/thegraph.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "Dev",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/GRT.png')",
//       "tokenLink": "https://www.coingecko.com/en/coins/the-graph",
//       "tokenStatus": "Has",
//       "tokenTicker": "GRT",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/graphprotocol",
//       "wallet_address": "",
//       "websiteLink": "https://thegraph.com/"
//   },
//   {
//       "name": "StarkTx Transaction Decoder",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Infra"
//       ],
//       "description": "The StarkTx Transaction Decoder is a StarkNet transaction analysis tool.",
//       "websiteLink ": "https://starktx.info/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/starkTx.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "Live",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "N/A",
//       "wallet_address": "",
//       "websiteLink": "https://starktx.info/"
//   },
//   {
//       "name": "Syscoin NEVM",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Infra"
//       ],
//       "description": "Coordinated dual-chain EVM platform specifically designed to give zkRollups a Bitcoin auxpow settlement L1 enhanced with multi-quorum finality that resists MEV attacks & selfish mining.",
//       "websiteLink ": "https://syscoin.org/",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/syscoin",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/syscoin.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "Syscoin NEVM"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "Live",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/SYS.jpg')",
//       "tokenLink": "https://www.coingecko.com/en/coins/syscoin",
//       "tokenStatus": "Has",
//       "tokenTicker": "SYS",
//       "tooltip": "Syscoin NEVM",
//       "twitterLink": "https://twitter.com/syscoin",
//       "wallet_address": "",
//       "websiteLink": "https://syscoin.org/"
//   },
//   {
//       "name": "Covalent",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Infra"
//       ],
//       "description": "Covalent provides a unified API bringing visibility to billions of blockchain data points.",
//       "websiteLink ": "https://www.covalenthq.com/",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/covalent",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/covalent.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/CQT.png')",
//       "tokenLink": "https://www.coingecko.com/en/coins/covalent",
//       "tokenStatus": "Has",
//       "tokenTicker": "CQT",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/Covalent_HQ",
//       "wallet_address": "",
//       "websiteLink": "https://www.covalenthq.com/"
//   },
//   {
//       "name": "StarkNet Alpha Block Explorer",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Infra"
//       ],
//       "description": "A block explorer and analytics platform for StarkNet.",
//       "websiteLink ": "https://voyager.online/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/starknet.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/nethermindeth",
//       "wallet_address": "",
//       "websiteLink": "https://voyager.online/"
//   },
//   {
//       "name": "Banxa",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Infra"
//       ],
//       "description": "Direct fiat purchasing for a range of L2 protocols including zkSync, Loopring and StarkNet.",
//       "websiteLink ": "https://banxa.com/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/banxa.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync",
//           "starknet",
//           "loopring"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync, StarkNet, Loopring",
//       "twitterLink": "https://twitter.com/BanxaOfficial",
//       "wallet_address": "",
//       "websiteLink": "https://banxa.com/"
//   },
//   {
//       "name": "Yagi Finance",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "Infra"
//       ],
//       "description": "Yagi is a network of keepers on StarkNet L2 that automate protocol actions.",
//       "websiteLink ": "https://yagi.fi/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/yagi.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/yagi_fi",
//       "wallet_address": "",
//       "websiteLink": "https://yagi.fi/"
//   },
//   {
//       "name": "Warp",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Infra"
//       ],
//       "description": "Warp brings Solidity to StarkNet, making it possible to transpile Ethereum smart contracts to Cairo, and use them on StarkNet.",
//       "websiteLink ": "https://github.com/NethermindEth/warp",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/nethermind.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/nethermindeth",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/NethermindEth/warp"
//   },
//   {
//       "name": "Sandclock",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "Infra"
//       ],
//       "description": "Sandclock is building the tooling that will leverage crosschain {DeFi strategies with built-in insurance, payment rails, and novel governance and tokenomics models} to enable seamless transfer of value across the web.",
//       "websiteLink ": "https://www.sandclock.org/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/sandclock.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/SandclockOrg",
//       "wallet_address": "",
//       "websiteLink": "https://www.sandclock.org/"
//   },
//   {
//       "name": "Real-Time Price Chart",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Infra"
//       ],
//       "description": "A real-time price chart from the Mallows team. This price chart is designed to show many price feeds in a bird's-eye view and is optimized for real-time data and not historical prices. Currently, the price chart shows ETH/USD and BTC/USD.",
//       "websiteLink ": "https://home.byoa.org/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/realtime.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "TESTNET",
//       "statusColor": "#F4B832",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/mallowsxyz",
//       "wallet_address": "",
//       "websiteLink": "https://home.byoa.org/"
//   },
//   {
//       "name": "StarkNet Data Warehouse",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Infra"
//       ],
//       "description": "The StarkNet Data Warehouse (SDW) provides analytical tools, contextualized data and insight needed to deeply understand and navigate historical StarkNet data.",
//       "websiteLink ": "https://www.snowflake.com/datasets/token-flow-insights-starknet-data-warehouse-beta/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/sdw.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "BETA",
//       "statusColor": "#F4E532",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/InsightsFlow/",
//       "wallet_address": "",
//       "websiteLink": "https://www.snowflake.com/datasets/token-flow-insights-starknet-data-warehouse-beta/"
//   },
//   {
//       "name": "Chainlink",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Infra"
//       ],
//       "description": "Chainlink decentralized oracle networks provide tamper-proof inputs, outputs, and computations to support advanced smart contracts on any blockchain.",
//       "websiteLink ": "https://chain.link/",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/chainlink",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/chainlink.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/LINK.png')",
//       "tokenLink": "https://www.coingecko.com/en/coins/chainlink",
//       "tokenStatus": "Has",
//       "tokenTicker": "LINK",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/chainlink",
//       "wallet_address": "",
//       "websiteLink": "https://chain.link/"
//   },
//   {
//       "name": "Connext",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Infra"
//       ],
//       "description": "Cross chain liquidity network and interoperability protocol. Connext makes blockchains and rollups composable with fast, trustless transfers and contract calls.",
//       "websiteLink ": "https://www.connext.network/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/connext.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/ConnextNetwork",
//       "wallet_address": "",
//       "websiteLink": "https://www.connext.network/"
//   },
//   {
//       "name": "deBridge",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "Infra"
//       ],
//       "description": "Scale up your protocol, bridge any arbitrary assets, and build new types of cross-chain interoperability applications on top of a truly decentralized infrastructure.",
//       "websiteLink ": "https://debridge.finance/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/debridge.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/deBridgeFinance",
//       "wallet_address": "",
//       "websiteLink": "https://debridge.finance/"
//   },
//   {
//       "name": "Figment",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "Infra"
//       ],
//       "description": "Staking, and application layer solutions for token holders and developers investing in and building on Web 3 technology",
//       "websiteLink ": "https://www.figment.io/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/figment.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync",
//           "starknet"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync, StarkNet",
//       "twitterLink": "https://twitter.com/Figment_io",
//       "wallet_address": "",
//       "websiteLink": "https://www.figment.io/"
//   },
//   {
//       "name": "Gnosis Safe",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Infra"
//       ],
//       "description": "Gnosis Safe is a smart contract wallet running on Ethereum that requires a minimum number of people to approve a transaction before it can occur.",
//       "websiteLink ": "https://gnosis-safe.io/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/gnosis.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/gnosisSafe",
//       "wallet_address": "",
//       "websiteLink": "https://gnosis-safe.io/"
//   },
//   {
//       "name": "Moralis",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Infra"
//       ],
//       "description": "Moralis provides a managed backend for blockchain projects. Automatically syncing the balances of your users into the database, allowing you to set up on-chain alerts, watch smart contract events, build indexes, and more.",
//       "websiteLink ": "https://moralis.io/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/moralis.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/MoralisWeb3",
//       "wallet_address": "",
//       "websiteLink": "https://moralis.io/"
//   },
//   {
//       "name": "Multichain",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "Infra"
//       ],
//       "description": "Multichain is the ultimate Router for web3. It is an infrastructure developed for arbitrary cross-chain interactions.",
//       "websiteLink ": "https://multichain.org/",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/anyswap",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/multichain.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/ANY.jpg')",
//       "tokenLink": "https://www.coingecko.com/en/coins/anyswap",
//       "tokenStatus": "Has",
//       "tokenTicker": "ANY",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/MultichainOrg",
//       "wallet_address": "",
//       "websiteLink": "https://multichain.org/"
//   },
//   {
//       "name": "Mystiko Network",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Infra"
//       ],
//       "description": "Mystiko.Network is building the Base Layer of Web3 via Zero Knowledge Proof Based Cross Chain Networks.",
//       "websiteLink ": "https://mystiko.network/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/mystiko.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/MystikoNetwork",
//       "wallet_address": "",
//       "websiteLink": "https://mystiko.network/"
//   },
//   {
//       "name": "Nomad",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Infra"
//       ],
//       "description": "Nomad is a new design for radically cheaper cross-chain communication. Nomad expects to cut 90% of gas costs compared to a traditional header relay.",
//       "websiteLink ": "https://www.nomad.xyz/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/nomad.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/nomadxyz_",
//       "wallet_address": "",
//       "websiteLink": "https://www.nomad.xyz/"
//   },
//   {
//       "name": "Sprintcheckout",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Infra"
//       ],
//       "description": "Sprintcheckout is an ethereum Layer 2 Payment Gateway. Accept crypto payments- bankless, cheap and fast. Powered by zkSync Ethereum Layer 2.",
//       "websiteLink ": "https://www.sprintcheckout.com/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/sprint.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/sprintcheckout",
//       "wallet_address": "",
//       "websiteLink": "https://www.sprintcheckout.com/"
//   },
//   {
//       "name": "Tenderly",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Infra"
//       ],
//       "description": "Tenderly is a comprehensive Ethereum Developer Platform for real-time monitoring, alerting, debugging, and simulating Smart Contracts.",
//       "websiteLink ": "https://tenderly.co/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/tenderly.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/TenderlyApp",
//       "wallet_address": "",
//       "websiteLink": "https://tenderly.co/"
//   },
//   {
//       "name": "The Geo Web",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Infra"
//       ],
//       "description": "The Geo Web is a set of open protocols & system of property rights for anchoring digital content to physical locations.",
//       "websiteLink ": "https://www.geoweb.network/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/geoweb.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/thegeoweb",
//       "wallet_address": "",
//       "websiteLink": "https://www.geoweb.network/"
//   },
//   {
//       "name": "UTORG",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Infra"
//       ],
//       "description": "UTORG is a Licensed fiat-to-crypto gateway. Live in 187+ countries, with AI-based KYC, Apple Pay, and 24/7 live support.",
//       "websiteLink ": "https://utorg.pro/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/utorg.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/UTORG_pro",
//       "wallet_address": "",
//       "websiteLink": "https://utorg.pro/"
//   },
//   {
//       "name": "Veramo",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Infra"
//       ],
//       "description": "Veramo is a JavaScript framework that makes it easy for anyone to use cryptographically verifiable data in their applications.",
//       "websiteLink ": "https://veramo.io/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/veramo.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/veramojs",
//       "wallet_address": "",
//       "websiteLink": "https://veramo.io/"
//   },
//   {
//       "name": "iqlusion",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Infra"
//       ],
//       "description": "iqlusion provides infrastructure for next-generation cryptocurrency technologies which are designed and built to scale to real-world demands.",
//       "websiteLink ": "https://www.iqlusion.io/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/iqlusion.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/iqlusioninc/",
//       "wallet_address": "",
//       "websiteLink": "https://www.iqlusion.io/"
//   },
//   {
//       "name": "Token Flow",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Infra"
//       ],
//       "description": "Token Flow provides contextualized data and analytics for the blockchain ecosystem.",
//       "websiteLink ": "https://tokenflow.live/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/sdw.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/InsightsFlow",
//       "wallet_address": "",
//       "websiteLink": "https://tokenflow.live/"
//   },
//   {
//       "name": "Cephalopod Equipment",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Infra"
//       ],
//       "description": "Cephalopod Equipment operates infrastructure for decentralized technologies designed to support new forms of economic coordination and participant-owned networks.",
//       "websiteLink ": "https://cephalopod.equipment/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/cephalopod.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/CephalopodEquip",
//       "wallet_address": "",
//       "websiteLink": "https://cephalopod.equipment/"
//   },
//   {
//       "name": "PeckShield",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Infra"
//       ],
//       "description": "Peckshield is a blockchain security and data analytics company.",
//       "websiteLink ": "https://peckshield.com/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/peckshield.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/PeckShield",
//       "wallet_address": "",
//       "websiteLink": "https://peckshield.com/"
//   },
//   {
//       "name": "Chainstack",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Infra"
//       ],
//       "description": "From startups to large enterprises, thousands of businesses of all sizes use Chainstack's software and APIs to build, run, and scale blockchain applications.",
//       "websiteLink ": "https://chainstack.com/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/chainstack.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/ChainstackHQ",
//       "wallet_address": "",
//       "websiteLink": "https://chainstack.com/"
//   },
//   {
//       "name": "ConsenSys",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Infra"
//       ],
//       "description": "With a leading suite of blockchain products, ConsenSys makes it easy to build applications on Ethereum and participate in DeFi, NFTs, DAOs, and the metaverse.",
//       "websiteLink ": "https://ConsenSys.net/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/consensys.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/ConsenSys/",
//       "wallet_address": "",
//       "websiteLink": "https://ConsenSys.net/"
//   },
//   {
//       "name": "Infura",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Infra"
//       ],
//       "description": "Infuras suite of high availability APIs and Developer Tools provide quick, reliable access to the Ethereum and IPFS networks.",
//       "websiteLink ": "https://infura.io/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/infura.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/infura_io/",
//       "wallet_address": "",
//       "websiteLink": "https://infura.io/"
//   },
//   {
//       "name": "CryptoExperts",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Infra"
//       ],
//       "description": "Through both consulting services and business-driven innovation, CryptoExperts help the security industry benefit from the latest available advances in cryptography to improve their products and services.",
//       "websiteLink ": "https://www.cryptoexperts.com/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/cryptoexperts.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/CryptoExperts",
//       "wallet_address": "",
//       "websiteLink": "https://www.cryptoexperts.com/"
//   },
//   {
//       "name": "ABDK",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Infra"
//       ],
//       "description": "ABDK Provide smart contract and blockchain services including development, auditing, and consulting.",
//       "websiteLink ": "https://www.abdk.consulting/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/abdk.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "wallet_address": "",
//       "websiteLink": "https://www.abdk.consulting/"
//   },
//   {
//       "name": "Pathfinder",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "Infra"
//       ],
//       "description": "Pathfinder is a StarkNet full node giving you a safe view into StarkNet.",
//       "websiteLink ": "https://github.com/eqlabs/pathfinder",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/pathfinder.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/equilibrium_co",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/eqlabs/pathfinder"
//   },
//   {
//       "name": "Storage Proofs",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Infra"
//       ],
//       "description": "Storage Proofs is a StarkNet project currently in stealth mode - details to be released",
//       "websiteLink ": "",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/stealth.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "Stealth",
//       "statusColor": "#808080",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "wallet_address": "",
//   },
//   {
//       "name": "AARVANT",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Infra"
//       ],
//       "description": "AARVANT is a StarkNet project currently in stealth mode - details to be released",
//       "websiteLink ": "",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/stealth.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "Stealth",
//       "statusColor": "#808080",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "wallet_address": "",
//   },
//   {
//       "name": "Stark Gate",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Infra"
//       ],
//       "description": "Stark Gate is a StarkNet project currently in stealth mode - details to be released",
//       "websiteLink ": "",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/stealth.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "Stealth",
//       "statusColor": "#808080",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "wallet_address": "",
//   },
//   {
//       "name": "Erigon",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "Infra"
//       ],
//       "description": "Erigon is an implementation of Ethereum (aka Ethereum client), on the efficiency frontier, written in Go. The Erigon team is working on expanding their Ethereum Full Node to support StarkNet.",
//       "websiteLink ": "https://github.com/ledgerwatch/erigon",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/erigon.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/ErigonEth",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/ledgerwatch/erigon"
//   },
//   {
//       "name": "Alchemy",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Infra"
//       ],
//       "description": "Web3 development made easy. One magic line of code supercharges your development with the world's most powerful blockchain developer platform, relied upon by the majority of the world's top blockchain apps.",
//       "websiteLink ": "https://www.alchemy.com/layer2/starknet?",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/alchemy.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/AlchemyPlatform",
//       "wallet_address": "",
//       "websiteLink": "https://www.alchemy.com/layer2/starknet?"
//   },
//   {
//       "name": "stakefish",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Infra"
//       ],
//       "description": "Stakefish is a Proof of Stake service provider with distributed validator nodes that are monitored 24/7.",
//       "websiteLink ": "https://stake.fish/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/stakefish.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/stakefish",
//       "wallet_address": "",
//       "websiteLink": "https://stake.fish/"
//   },
//   {
//       "name": "Angle Protocol",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "Infra"
//       ],
//       "description": "Angle is the first over-collateralized, decentralized and capital-efficient stablecoin protocol. It offers full convertibility between stable assets and collateral at oracle value.",
//       "websiteLink ": "https://www.angle.money/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/angle.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/AngleProtocol",
//       "wallet_address": "",
//       "websiteLink": "https://www.angle.money/"
//   },
//   {
//       "name": "WalletConnect",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Infra"
//       ],
//       "description": "WalletConnect is the web3 standard to connect blockchain wallets to dapps.",
//       "websiteLink ": "https://walletconnect.com/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/walletconnect.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/walletconnect",
//       "wallet_address": "",
//       "websiteLink": "https://walletconnect.com/"
//   },
//   {
//       "name": "Simplex",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Infra"
//       ],
//       "description": "Simplex is an EU-licensed financial institution and a Level 1 Service Provider, empowering the crypto industry with a full fiat infrastructure.",
//       "websiteLink ": "https://www.simplex.com/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/simplex.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/SimplexCC",
//       "wallet_address": "",
//       "websiteLink": "https://www.simplex.com/"
//   },
//   {
//       "name": "Automata Network",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Infra"
//       ],
//       "description": "Automata Network is a decentralized service protocol that provides middleware-like services for dApps to achieve traceless privacy, high assurance and frictionless computation.",
//       "websiteLink ": "https://www.ata.network/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/automata.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/AutomataNetwork",
//       "wallet_address": "",
//       "websiteLink": "https://www.ata.network/"
//   },
//   {
//       "name": "XID Network",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Infra"
//       ],
//       "description": "XID Network is a decentralized identity network built on on-chain data.",
//       "websiteLink ": "https://xidnetwork.xyz/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/xid.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://mobile.twitter.com/XidNetwork",
//       "wallet_address": "",
//       "websiteLink": "https://xidnetwork.xyz/"
//   },
//   {
//       "name": "Go+ Security",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Infra"
//       ],
//       "description": "Go+ Security is a security service platform for all types of blockchain users which supports independent risk submitting, quick risk detection and feedback.",
//       "websiteLink ": "https://gopluslabs.io/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/go+.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/GoplusSecurity",
//       "wallet_address": "",
//       "websiteLink": "https://gopluslabs.io/"
//   },
//   {
//       "name": "Gelato Network",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Infra"
//       ],
//       "description": "Gelato Network is a decentralized network of bots used by web3 developers to automate smart contract executions on public EVM compatible blockchains.",
//       "websiteLink ": "https://www.gelato.network/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/gelato.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/gelatonetwork",
//       "wallet_address": "",
//       "websiteLink": "https://www.gelato.network/"
//   },
//   {
//       "name": "StarkGate Alpha",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "Infra"
//       ],
//       "description": "StarkGate serves as a gateway between Ethereum and StarkNet, and allows users to do everything they can expect from a bridge.",
//       "websiteLink ": "https://goerli.starkgate.starknet.io/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/starkgate.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "TESTNET",
//       "statusColor": "#F4B832",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/StarkWareLtd",
//       "wallet_address": "",
//       "websiteLink": "https://goerli.starkgate.starknet.io/"
//   },
//   {
//       "name": "Panther",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Infra"
//       ],
//       "description": "Panther is a decentralized protocol that provides end-to-end privacy for any digital asset using zkSNARK cryptography. This allows retail and institutional investors to execute private, trusted DeFi transactions across multiple blockchains.",
//       "websiteLink ": "https://www.pantherprotocol.io/",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/panther-protocol",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/panther.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "panther"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/ZKP.png')",
//       "tokenLink": "https://www.coingecko.com/en/coins/panther-protocol",
//       "tokenStatus": "Has",
//       "tokenTicker": "ZKP",
//       "tooltip": "Panther",
//       "twitterLink": "https://twitter.com/ZkPanther",
//       "wallet_address": "",
//       "websiteLink": "https://www.pantherprotocol.io/"
//   },
//   {
//       "name": "Immutable X",
//       "backgroundColor": "#36368F",
//       "category": [
//           "NFT"
//       ],
//       "description": "Ethereum NFT scaling platform. Zero gas fees, 9K TPS & 100% carbon neutral.",
//       "websiteLink ": "https://www.immutable.com/",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/imx",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/immutable.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starkex"
//       ],
//       "search_on": [
//           "nfts"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/IMX.png')",
//       "tokenLink": "https://www.coingecko.com/en/coins/imx",
//       "tokenStatus": "Has",
//       "tokenTicker": "IMX",
//       "tooltip": "StarkEx",
//       "twitterLink": "https://twitter.com/Immutable",
//       "wallet_address": "",
//       "websiteLink": "https://www.immutable.com/"
//   },
//   {
//       "name": "zkNFT",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "NFT"
//       ],
//       "description": "Mint, explore, and swap NFTs for a fraction of Ethereum mainnet costs. zkSync makes transactions fast, cheap, and secure.",
//       "websiteLink ": "https://zknft.xyz/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/zknft.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "nfts"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/0xmons",
//       "wallet_address": "",
//       "websiteLink": "https://zknft.xyz/"
//   },
//   {
//       "name": "zkPunks",
//       "backgroundColor": "#36368F",
//       "category": [
//           "NFT"
//       ],
//       "description": "zkPunks are 10,000 OG punk NFTs on zkSync. 10% donated to Ethereum scaling solutions through Gitcoin. Not affiliated with Larva Labs.",
//       "websiteLink ": "#",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/zkpunks.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "nfts"
//       ],
//       "status": "TESTNET",
//       "statusColor": "#F4B832",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/PunksZk",
//       "wallet_address": "",
//       "websiteLink": "#"
//   },
//   {
//       "name": "briq",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "NFT"
//       ],
//       "description": "briq is an NFT composability system based on fundamental elements called briqs that can be combined to create NFTs. These NFTs can be combined with other briq NFTs or disassembled to get the briqs back. briq is NFT LEGO.",
//       "websiteLink ": "https://briq.construction/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/briq.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "nfts"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/briqNFT",
//       "wallet_address": "",
//       "websiteLink": "https://briq.construction/"
//   },
//   {
//       "name": "Boonji Project",
//       "backgroundColor": "#36368F",
//       "category": [
//           "NFT"
//       ],
//       "description": "Boonji Project 'The Discovery of Galaxy Joa' NFT airdrop on zkSync",
//       "websiteLink ": "https://www.boonjiproject.com/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/boonji.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "nfts"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/boonjiproject",
//       "wallet_address": "",
//       "websiteLink": "https://www.boonjiproject.com/"
//   },
//    {
//       "name": "Mint Square",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "NFT"
//       ],
//       "description": "Discover, Mint, Buy and Sell NFTs • Mint Square is an NFT Platform on Ethereum Layer 2 ZK Rollup",
//       "websiteLink ": "https://mintsquare.io/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/mintsquare.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "nfts"
//       ],
//       "status": "TESTNET",
//       "statusColor": "#F4B832",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/MintSquareNFT",
//       "wallet_address": "",
//       "websiteLink": "https://mintsquare.io/"
//   },
//   {
//       "name": "Opensky",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "NFT"
//       ],
//       "description": "OpenSky lets you mint and transfer NFTs for a fraction of the cost on Ethereum. It uses zkSync, a scaling and privacy engine for Ethereum.",
//       "websiteLink ": "https://open-sky.vercel.app/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/blockblock.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "nfts"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/blockblockio",
//       "wallet_address": "",
//       "websiteLink": "https://open-sky.vercel.app/"
//   },
//   {
//       "name": "Aspect",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "NFT"
//       ],
//       "description": "Aspect is an NFT marketplace powered by StarkNet. Make offers and list nfts with near zero gas fees. Deploy your nft collection on starknet and Aspect.",
//       "websiteLink ": "https://testnet.aspect.co/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/aspect.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "nfts"
//       ],
//       "status": "TESTNET",
//       "statusColor": "#F4B832",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/aspectdotco",
//       "wallet_address": "",
//       "websiteLink": "https://testnet.aspect.co/"
//   },
//   {
//       "name": "GameStop",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "NFT"
//       ],
//       "description": "GameStop has partnered with the StarkEx powered Immutable platform to launch their NFT marketplace.",
//       "websiteLink ": "https://nft.gamestop.com/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/gamestop.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starkex",
//           "loopring"
//       ],
//       "search_on": [
//           "nfts"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkEx",
//       "twitterLink": "https://twitter.com/GameStop",
//       "wallet_address": "",
//       "websiteLink": "https://nft.gamestop.com/"
//   },
//   {
//       "name": "zkSharks",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "NFT"
//       ],
//       "description": "zkSharks are 10,000 unique NFTs looking to promote Ethereum scaling and moving NFT trading to L2. Our goal is to be the first NFT collection to launch on zkSync 2.0.",
//       "websiteLink ": "https://www.zksharks.com/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/zksharks.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "nfts"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/SharksZk",
//       "wallet_address": "",
//       "websiteLink": "https://www.zksharks.com/"
//   },
//   {
//       "name": "Bitmap Box",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "NFT"
//       ],
//       "description": "Bitmap Box is a 2D block-building game and protocol. Combine blocks to make unique creations.",
//       "websiteLink ": "https://www.bitmapbox.xyz/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/bitmapbox.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "nfts"
//       ],
//       "status": "TESTNET",
//       "statusColor": "#F4B832",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/bitmapbox",
//       "wallet_address": "",
//       "websiteLink": "https://www.bitmapbox.xyz/"
//   },
//   {
//       "name": "Φ",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "NFT"
//       ],
//       "description": "φ is an on-chain metaverse on ZK L2 based on your ens domain and On-Chain Activity Data.",
//       "websiteLink ": "https://phi-xyz.notion.site/532af6de66e64c7c883d552d301b8020",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/phi.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "nfts"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/phi_xyz",
//       "wallet_address": "",
//       "websiteLink": "https://phi-xyz.notion.site/532af6de66e64c7c883d552d301b8020"
//   },
//   {
//       "name": "Mallows",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "NFT"
//       ],
//       "description": "Mallows are ethereum ERC-721 NFTs each produced with unique generative art and attributes defining its own humble, cute, nerdy, little coder self.",
//       "websiteLink ": "https://home.byoa.org/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/mallows.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "nfts"
//       ],
//       "status": "TESTNET",
//       "statusColor": "#F4B832",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/mallowsxyz",
//       "wallet_address": "",
//       "websiteLink": "https://home.byoa.org/"
//   },
//   {
//       "name": "KUBRI",
//       "backgroundColor": "#36368F",
//       "category": [
//           "NFT"
//       ],
//       "description": "KUBRI allows to to mint & bridge ERC1155 NFTs from Starknet to Ethereum.",
//       "websiteLink ": "https://kubribridge.vercel.app/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/kubri.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "nfts"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "wallet_address": "",
//       "websiteLink": "https://kubribridge.vercel.app/"
//   },
//   {
//       "name": "SO-COL",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "NFT"
//       ],
//       "description": "Layer 2 on Ethereum powered by StarkNet focused on making NFTs accessible, affordable, and eco-friendly for everyone + a web3 social app for communities.",
//       "websiteLink ": "",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/socol.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "nfts"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://mobile.twitter.com/socol_io",
//       "wallet_address": "",
//   },
//   {
//       "name": "Auclantis",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "NFT"
//       ],
//       "description": "Auclantis is an open and decentralized NFT auction house with low gas fees and no platform fees. We use cutting-edge Layer-2 technology to reduce users' gas costs by over 90%.",
//       "websiteLink ": "https://auclantis.com/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/auclantis.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "nfts"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/auclantis",
//       "wallet_address": "",
//       "websiteLink": "https://auclantis.com/"
//   },
//   {
//       "name": "tofuNFT",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "NFT"
//       ],
//       "description": "tofuNFT is an NFT marketplace focused on GameFi and collectibles, rebranded from SCV's NFT market. Enjoy exploring & trading with your buddies!",
//       "websiteLink ": "https://tofunft.com/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/tofu.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "nfts"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/tofuNFT",
//       "wallet_address": "",
//       "websiteLink": "https://tofunft.com/"
//   },
//   {
//       "name": "Influence",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Games"
//       ],
//       "description": "A grand strategy space MMO, backed by NFTs, set in a distant asteroid belt, and built on Ethereum.",
//       "websiteLink ": "https://www.influenceth.io/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/influence.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "games"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/influenceth",
//       "wallet_address": "",
//       "websiteLink": "https://www.influenceth.io/"
//   },
//   {
//       "name": "Dope Wars",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Games"
//       ],
//       "description": "The pursuit of money, power & respect in these metaverse streets. Dope Wars is a community owned, emergent gaming ecosystem inspired by the original Drugs Wars game.",
//       "websiteLink ": "https://dopewars.gg/",
//       "getStartedLink1": "https://www.coingecko.com/en/coins/dope-wars-paper",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/dopewars.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "games"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "token_image_url": "url('project-logos/token_images/PAPER.png')",
//       "tokenLink": "https://www.coingecko.com/en/coins/dope-wars-paper",
//       "tokenStatus": "Has",
//       "tokenTicker": "PAPER",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/TheDopeWars",
//       "wallet_address": "",
//       "websiteLink": "https://dopewars.gg/"
//   },
//   {
//       "name": "The Ninth",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Games"
//       ],
//       "description": "The Ninth is a Metaverse game powered by StarkNet. The 9th world has multi-epoch iterations, trade markets, DAOs, game guilds and virtual buildings.",
//       "websiteLink ": "https://ninth.gg/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/theninth.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "games"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/ninth_gg",
//       "wallet_address": "",
//       "websiteLink": "https://ninth.gg/"
//   },
//   {
//       "name": "OpenStars.org",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Games",
//           "DAO"
//       ],
//       "description": "OpenStars.org is a community-owned space strategy game built on the blockchain. Governance is done through a DAO, which will distribute the benefits from the stars in a fair manner.",
//       "websiteLink ": "https://www.openstars.org/#/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/openstars.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "games",
//           "DAOs"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/OpenStars",
//       "wallet_address": "",
//       "websiteLink": "https://www.openstars.org/#/"
//   },
//   {
//       "name": "Game of Blocks",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Games"
//       ],
//       "description": "A play-to-earn game of strategy and conquest, inspired by Board Games, MMORPGs and Real-Time Strategy games and powered by NFTs on the blockchain.",
//       "websiteLink ": "https://docs.gameofblocks.io/litepaper",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/gameofblocks.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "games"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/game_of_blocks",
//       "wallet_address": "",
//       "websiteLink": "https://docs.gameofblocks.io/litepaper"
//   },
//   {
//       "name": "Realms (for Adventurers)",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Games"
//       ],
//       "description": "A MMOCCG (Massively Multiplayer on-chain composable game) of economics and Chivalry built on-top of ZK-STARKS. Earn resources, trade and conquer your enemies all on-chain.",
//       "websiteLink ": "https://bibliothecaforloot.com/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/loot.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "games"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/LootRealms",
//       "wallet_address": "",
//       "websiteLink": "https://bibliothecaforloot.com/"
//   },
//   {
//       "name": "Eykar",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Games"
//       ],
//       "description": "Eykar is a decentralized fantasy strategy game powered by StarkNet. An open source smartcontract dictates the rules of the world.",
//       "websiteLink ": "https://eykar.org/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/eykar.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "games"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/AgeOfEykar",
//       "wallet_address": "",
//       "websiteLink": "https://eykar.org/"
//   },
//   {
//       "name": "ZKasino",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Games"
//       ],
//       "description": "zKasino is a decentralized casino built on Layer 2 ZK-Rollups technology allowing for infinite scalability whilst keeping optimal decentralization from the Ethereum network.",
//       "websiteLink ": "https://zkasino.io/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/zkasino.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "games"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "http://twitter.com/zkasino_io",
//       "wallet_address": "",
//       "websiteLink": "https://zkasino.io/"
//   },
//   {
//       "name": "GoL2",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Games"
//       ],
//       "description": "GoL2 is a StarkNet project currently in stealth mode - details to be released",
//       "websiteLink ": "",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/stealth.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "games"
//       ],
//       "status": "Stealth",
//       "statusColor": "#808080",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "wallet_address": "",
//   },
//   {
//       "name": "Exothium",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Games"
//       ],
//       "description": "A Quest to build a Regenerative project transforming the ideas of the Community into decentralized applications.",
//       "websiteLink ": "https://beta.exothium.com/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/exothium.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "games"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/exothium",
//       "wallet_address": "",
//       "websiteLink": "https://beta.exothium.com/"
//   },
//   {
//       "name": "EtherQuest",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Games"
//       ],
//       "description": "Free to play, live action RPG Indie game where you own your items as NFTs.",
//       "websiteLink ": "https://www.etherquestgame.com/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/etherquest.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "games"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://mobile.twitter.com/ether_quest",
//       "wallet_address": "",
//       "websiteLink": "https://www.etherquestgame.com/"
//   },
//   {
//       "name": "Redline",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Games"
//       ],
//       "description": "Giant robot NFT racing and engineering on StarkNet and UE5. Deep Strategy and Drama Game.",
//       "websiteLink ": "https://redline.game/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/redline.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "games"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/PlayRedline",
//       "wallet_address": "",
//       "websiteLink": "https://redline.game/"
//   },
//   {
//       "name": "Poster",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Social"
//       ],
//       "description": "Poster is a general purpose decentralized social network.",
//       "websiteLink ": "https://pstr.app/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/poster.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "social"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/onPstr",
//       "wallet_address": "",
//       "websiteLink": "https://pstr.app/"
//   },
//   {
//       "name": "zkDAO",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "DAO"
//       ],
//       "description": "zkDAO is a decentralized organization dedicated to expanding the zkSync ecosystem through active funding across numerous verticals.",
//       "websiteLink ": "https://zkdao.io/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/zkdao.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "daos"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/zkdao_official",
//       "wallet_address": "",
//       "websiteLink": "https://zkdao.io/"
//   },
//   {
//       "name": "Bibliotheca",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "DAO"
//       ],
//       "description": "Bibliotheca graphs Loot projects so you can see your progress in the LootVerse.",
//       "websiteLink ": "https://bibliothecaforloot.com/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/loot.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "daos"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/lootgraph",
//       "wallet_address": "",
//       "websiteLink": "https://bibliothecaforloot.com/"
//   },
//   {
//       "name": "FujiDAO",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "DAO"
//       ],
//       "description": "Fuji is a protocol that aims to optimize loan expenses for DeFi users. It achieves this by monitoring the borrowing markets and whenever there is a better rate, it refinances the debt its users. ",
//       "websiteLink ": "https://www.fujidao.org/#/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/fujidao.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "daos"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/FujiFinance",
//       "wallet_address": "",
//       "websiteLink": "https://www.fujidao.org/#/"
//   },
//   {
//       "name": "MatchboxDAO",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "DAO"
//       ],
//       "description": "Matchbox is an ecosystem DAO to ignite and fuel on-chain games on StarkNet.",
//       "websiteLink ": "https://mirror.xyz/matchboxdao.eth",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/matchbox.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "daos"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/matchbox_dao",
//       "wallet_address": "",
//       "websiteLink": "https://mirror.xyz/matchboxdao.eth"
//   },
//   {
//       "name": "Sacred Army Of Shadowy Coders",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "DAO"
//       ],
//       "description": "SASC funds Open-Source technologies in WEB3 and beyond through the power of NFT gaming.",
//       "websiteLink ": "https://github.com/sascdao",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/sasc.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "daos"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://mobile.twitter.com/sascdao",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/sascdao"
//   },
//   {
//       "name": "Physics puzzle on StarkNet",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Misc"
//       ],
//       "description": "A physics puzzle on StarkNet by guiltygyoza.",
//       "websiteLink ": "https://github.com/guiltygyoza/physics-puzzle-starknet",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/github.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/guiltygyoza/physics-puzzle-starknet"
//   },
//   {
//       "name": "Qasr",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Misc"
//       ],
//       "description": "Qasr is a simple NFT bridge for Starknet by mortimr.",
//       "websiteLink ": "https://github.com/mortimr/qasr",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/github.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/mortimr/qasr"
//   },
//   {
//       "name": "Starknet DAI Bridge",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Misc"
//       ],
//       "description": "StarkNet interpretation of DAI token and basic DAI bridge.",
//       "websiteLink ": "https://github.com/makerdao/starknet-dai-bridge",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/github.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/makerdao/starknet-dai-bridge"
//   },
//   {
//       "name": "rk4-starknet",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Misc"
//       ],
//       "description": "Running Runge-Kutta 4th Order Method on StarkNet - a precurosr to on-chain physics engine.",
//       "websiteLink ": "https://github.com/guiltygyoza/rk4-starknet",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/github.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/guiltygyoza/rk4-starknet"
//   },
//   {
//       "name": "StarDrop - anonymous rewards",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Misc"
//       ],
//       "description": "An experimental project to distribute rewards in a privacy-preserving manner running on StarkNet.",
//       "websiteLink ": "https://github.com/kobigurk/stardrop",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/github.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/kobigurk/stardrop"
//   },
//   {
//       "name": "tictactoe-on-starknet",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Misc"
//       ],
//       "description": "RL-driven agent playing tic-tac-toe on starknet against challengers.",
//       "websiteLink ": "https://github.com/guiltygyoza/tictactoe-on-starknet",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/github.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/guiltygyoza/tictactoe-on-starknet"
//   },
//   {
//       "name": "Basic Sample Hardhat Project",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "Misc"
//       ],
//       "description": "This project demonstrates a basic Hardhat project, but with Starknet plugin.",
//       "websiteLink ": "https://github.com/Shard-Labs/starknet-hardhat-example",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/github.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/Shard-Labs/starknet-hardhat-example"
//   },
//   {
//       "name": "Starkops",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Misc"
//       ],
//       "description": "StarkNet Toolchain CLI written in TypeScript by seanjameshan.",
//       "websiteLink ": "https://github.com/seanjameshan/starkops",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/github.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/seanjameshan/starkops"
//   },
//   {
//       "name": "starknet.php",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Misc"
//       ],
//       "description": "starknet.php is a PHP sdk that allows you to interact with StarkNet from a PHP application.",
//       "websiteLink ": "https://github.com/Starknet-php/starknet.php",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/github.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/zasciiz",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/Starknet-php/starknet.php"
//   },
//   {
//       "name": "3d-Graphics on StarkNet",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Misc"
//       ],
//       "description": "Adopting gltf 2.0 standard to work towards 3d asset interoperability.",
//       "websiteLink ": "https://github.com/guiltygyoza/3d-asset-on-starknet",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/github.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/guiltygyoza",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/guiltygyoza/3d-asset-on-starknet"
//   },
//   {
//       "name": "Shard Labs Flask wrapper",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "Misc"
//       ],
//       "description": "A Flask wrapper of Starknet state. Similar in purpose to Ganache.Aims to mimic Starknet's Alpha testnet, but with simplified functionality.",
//       "websiteLink ": "https://github.com/Shard-Labs/starknet-devnet/tree/master",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/github.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/shard_labs/",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/Shard-Labs/starknet-devnet/tree/master"
//   },
//   {
//       "name": "Starknet Hardhat Plugin",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Misc"
//       ],
//       "description": "A plugin for integrating Starknet tools into Hardhat projects.",
//       "websiteLink ": "https://github.com/Shard-Labs/starknet-hardhat-plugin",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/github.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/shard_labs/",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/Shard-Labs/starknet-hardhat-plugin"
//   },
//   {
//       "name": "StarkNet Cairo 101",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Misc"
//       ],
//       "description": "Get started with Cairo with this simple tutorial. Complete the puzzles, get points and learn about StarkNet smart contracts!",
//       "websiteLink ": "https://github.com/l-henri/starknet-cairo-101",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/github.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/HenriLieutaud",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/l-henri/starknet-cairo-101"
//   },
//   {
//       "name": "Starknet Storage Verifier",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "Misc"
//       ],
//       "description": "The Starknet Storage Verifier will allow anyone to trustlessly prove any past or current storage values of L1 contracts to other L2 contracts.",
//       "websiteLink ": "https://github.com/OilerNetwork/starknet-l2-storage-verifier",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/oiler.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/OilerNetwork",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/OilerNetwork/starknet-l2-storage-verifier"
//   },
//   {
//       "name": "Zorro",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Misc"
//       ],
//       "description": "Zorro is a fast way for people to prove that they're a unique person so they can obtain democratic DAO voting rights and other benefits.",
//       "websiteLink ": "https://zorro.xyz/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/zorro.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/ZorroProtocol",
//       "wallet_address": "",
//       "websiteLink": "https://zorro.xyz/"
//   },
//   {
//       "name": "StarknetFractals",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Misc"
//       ],
//       "description": "Generating the mandelbrot set on Starknet. Computes a 100x100 mandelbrot plot and stores necessary data to recontruct it onchain in 100 storage felts.",
//       "websiteLink ": "https://github.com/Orland0x/StarknetFractals",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/github.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/Orland0x/StarknetFractals"
//   },
//   {
//       "name": "starknet-rs",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "Misc"
//       ],
//       "description": "StarkNet-rs is a complete StarkNet library in Rust by xJonathanLEI.",
//       "websiteLink ": "https://crates.io/crates/starknet",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/starknetrs.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/xJonathanLEI",
//       "wallet_address": "",
//       "websiteLink": "https://crates.io/crates/starknet"
//   },
//   {
//       "name": "starknet-js",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "Misc"
//       ],
//       "description": "StarkNet-js is a JavaScript library for StarkNet by Sean.",
//       "websiteLink ": "https://github.com/0xs34n/starknet.js",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/github.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/0xs34n",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/0xs34n/starknet.js"
//   },
//   {
//       "name": "starknet.py",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Misc"
//       ],
//       "description": "A StarkNet SDK for Python by Software Mansion",
//       "websiteLink ": "https://github.com/software-mansion/starknet.py",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/starknetpy.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/software-mansion/starknet.py"
//   },
//   {
//       "name": "cairo-multisig",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Misc"
//       ],
//       "description": "A primitive multisig contract for StarkNet written in Cairo. Submit transactions for group approval to help mitigate risk of lost/compromised keys or malicious group members.",
//       "websiteLink ": "https://github.com/sambarnes/cairo-multisig",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/github.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/__________sam__",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/sambarnes/cairo-multisig"
//   },
//   {
//       "name": "glyph",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Misc"
//       ],
//       "description": "A proof-of-concept package manager for Cairo contracts/libraries.",
//       "websiteLink ": "https://github.com/sambarnes/cairo-glyph",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/github.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/__________sam__",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/sambarnes/cairo-glyph"
//   },
//   {
//       "name": "xoroshiro-cairo",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Misc"
//       ],
//       "description": "A xoroshiro128** pseudorandom number generator implementation in Cairo.",
//       "websiteLink ": "https://github.com/milancermak/xoroshiro-cairo",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/github.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/milancermak",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/milancermak/xoroshiro-cairo"
//   },
//   {
//       "name": "CurveZero",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Misc"
//       ],
//       "description": "CurveZero is a proposal for a fixed rate loan protocol, the CurveZero litepaper introduces a framework for determining the USD funding rate term structure.",
//       "websiteLink ": "https://docs.google.com/document/d/1rrYC32w63FzzV61rJWqqYomEMgfZ3cRR1jOlJmnnxeY/edit",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/github.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "wallet_address": "",
//       "websiteLink": "https://docs.google.com/document/d/1rrYC32w63FzzV61rJWqqYomEMgfZ3cRR1jOlJmnnxeY/edit"
//   },
//   {
//       "name": "Nile",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "Misc"
//       ],
//       "description": "Nile is a CLI tool to develop StarkNet projects written in Cairo",
//       "websiteLink ": "https://github.com/OpenZeppelin/nile",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/openzeppelin.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/openzeppelin",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/OpenZeppelin/nile"
//   },
//   {
//       "name": "Fountain",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Misc"
//       ],
//       "description": "Fountain is a A 2-dimensional physics engine written in Cairo.",
//       "websiteLink ": "https://github.com/topology-gg/fountain",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/topology.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/topology_gg",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/topology-gg/fountain"
//   },
//   {
//       "name": "Frobisher",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Misc"
//       ],
//       "description": "A musical assistant written in Cairo able to create midi file, and standard specification for music creator.",
//       "websiteLink ": "https://github.com/topology-gg/fountain",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/topology.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/topology_gg",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/topology-gg/fountain"
//   },
//   {
//       "name": "Christopher",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Misc"
//       ],
//       "description": "Christopher is a gate level simulator and gate level netlist standard specification in Cairo.",
//       "websiteLink ": "https://github.com/topology-gg/fountain",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/topology.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/topology_gg",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/topology-gg/fountain"
//   },
//   {
//       "name": "Cairo Chess",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Misc"
//       ],
//       "description": "A Cairo contract to play chess, with composability in mind.",
//       "websiteLink ": "https://github.com/greenlucid/chess-cairo",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/github.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/greenlucid/chess-cairo"
//   },
//   {
//       "name": "Ogame-Cairo",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "Misc"
//       ],
//       "description": "OGame is a browser-based, money-management and space-war themed massively multiplayer online browser game. Ogame Cairo is logic implementation written in Cairo for Starknet.",
//       "websiteLink ": "https://github.com/ametel01/Ogame-Cairo",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/github.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/ametel01/Ogame-Cairo"
//   },
//   {
//       "name": "Web3 to StarkNet json-rpc adapter",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Misc"
//       ],
//       "description": "Adaptor application for consuming web3 messages from i.e. wallets, and passing them on to StarkNet.",
//       "websiteLink ": "https://github.com/software-mansion-labs/starknet-web3-rpc-adapter",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/github.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/swmansion",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/software-mansion-labs/starknet-web3-rpc-adapter"
//   },
//   {
//       "name": "warp-to-cairo",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "Misc"
//       ],
//       "description": "warp-to-cairo is a simple tool converting starknet warp outputs (NethermindEth/warp) outputs into readable cairo contracts.",
//       "websiteLink ": "https://github.com/kootsZhin/warp-to-cairo",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/github.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/kootsZhin",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/kootsZhin/warp-to-cairo"
//   },
//   {
//       "name": "clr.fund",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Misc"
//       ],
//       "description": "Clr.fund is a protocol for efficiently allocating funds to public goods that benefit the Ethereum Network. Clr.fund strives for credible neutrality, decentralization, permissionlessness, trustlessness, and pseudonymity.",
//       "websiteLink ": "https://clr.fund/#/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/clr.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/clrfund",
//       "wallet_address": "",
//       "websiteLink": "https://clr.fund/#/"
//   },
//   {
//       "name": "Starknet-multisig",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Misc"
//       ],
//       "description": "Multi-signature functionality for StarkNet - this is a work in progress.",
//       "websiteLink ": "https://github.com/eqlabs/starknet-multisig",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/pathfinder.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/equilibrium_co",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/eqlabs/starknet-multisig"
//   },
//   {
//       "name": "StarkNet React",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Misc"
//       ],
//       "description": "StarkNet React is a collection of React hooks for StarkNet.",
//       "websiteLink ": "https://github.com/auclantis/starknet-react",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/auclantis.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/auclantis",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/auclantis/starknet-react"
//   },
//   {
//       "name": "cairo-lang-rs",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Misc"
//       ],
//       "description": "Rust support for the Cairo programming language - this is a work in progress.",
//       "websiteLink ": "https://github.com/mattsse/cairo-lang-rs",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/github.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/mattsse_",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/mattsse/cairo-lang-rs"
//   },
//   {
//       "name": "EIP-2981_Cairo",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "Misc"
//       ],
//       "description": "This repo contains a version of EIP-2981 written in Cairo.",
//       "websiteLink ": "https://github.com/AntoineMkr/EIP-2981_Cairo",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/github.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/Meckerrr",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/AntoineMkr/EIP-2981_Cairo"
//   },
//   {
//       "name": "voyager",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Misc"
//       ],
//       "description": "A local version of the Voyager StarkNet block explorer.",
//       "websiteLink ": "https://github.com/DemerzelSolutions/voyager/pkgs/container/voyager",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/github.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/DemerzelSolutions/voyager/pkgs/container/voyager"
//   },
//   {
//       "name": "Skyro",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Misc"
//       ],
//       "description": "Skyro compiles programs written in Idris2 to Cairo and thereby enables high-level, pure functional programming for verifiable computation.",
//       "websiteLink ": "https://github.com/skyro-compiler/skyro",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/skyro.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/skyro-compiler/skyro"
//   },
//   {
//       "name": "Cairo Merkle Distributor",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "Misc"
//       ],
//       "description": "A basic merkle distributor for StarkNet written in Cairo.",
//       "websiteLink ": "https://github.com/ncitron/cairo-merkle-distributor",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/github.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/NoahCitron",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/ncitron/cairo-merkle-distributor"
//   },
//   {
//       "name": "Cairo Utils on Web",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Misc"
//       ],
//       "description": "StarkNet and Cairo language utilities for devs on web.",
//       "websiteLink ": "https://cairo-utils-web.vercel.app/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/utils.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/ccarnino",
//       "wallet_address": "",
//       "websiteLink": "https://cairo-utils-web.vercel.app/"
//   },
//   {
//       "name": "cairo-dutch",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Misc"
//       ],
//       "description": "A Dutch Auction written in Cairo for StarkNet. Ported after studying a reference implementation from solidity-by-example.",
//       "websiteLink ": "https://github.com/sambarnes/cairo-dutch",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/github.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/__________sam__",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/sambarnes/cairo-dutch"
//   },
//   {
//       "name": "Juno",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Misc"
//       ],
//       "description": "Juno is a Starknet client implementation from NethermindEth.",
//       "websiteLink ": "https://github.com/NethermindEth/juno",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/github.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/nethermindeth",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/NethermindEth/juno"
//   },
//   {
//       "name": "Ricks",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Misc"
//       ],
//       "description": "An implementation of a new NFT fractionalization primitive, RICKS (Recurrently Issued Collectively Kept Shards), in starknet cairo.",
//       "websiteLink ": "https://github.com/FawadHa1der/ricks-cairo-contracts",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/github.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/FawadHa1der/ricks-cairo-contracts"
//   },
//   {
//       "name": "Canvas",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "dapp"
//       ],
//       "description": "CANVAS unlocks Decentralised Finance (DeFi) and enables everyone to access the Future of Finance.",
//       "websiteLink ": "https://www.canvas.co/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/canvas.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/canvas_defi",
//       "wallet_address": "",
//       "websiteLink": "https://www.canvas.co/"
//   },
//   {
//       "name": "Arcticium",
//       "backgroundColor": "#36368F",
//       "category": [
//           "NFT"
//       ],
//       "description": "Building an ecosystem and community for NFTs on StarkNet",
//       "websiteLink ": "http://arcticium.com/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/arcticium.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "nfts"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/arcticiumm",
//       "wallet_address": "",
//       "websiteLink": "http://arcticium.com/"
//   },
//     {
//       "name": "StarkNet IoT",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Misc"
//       ],
//       "description": "This app uses verified IoT data to mint NFTs for users that will store an image and the insurance metadata, as well as a calculated score for these users.",
//       "websiteLink ": "https://github.com/StarkWareHackathon/starknet-IoT-DAO",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/github.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "",
//       "wallet_address": "",
//       "websiteLink": "https://github.com/StarkWareHackathon/starknet-IoT-DAO"
//   },
//     {
//       "name": "Starcombo",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "dapp"
//       ],
//       "description": "Starcombo is a tool allowing users to build their DeFi strategy on Starknet simply by drag&drop.",
//       "websiteLink ": "https://testnet.starcombo.xyz/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/starcombo.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "TESTNET",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/Starcombo_xyz",
//       "wallet_address": "",
//       "websiteLink": "https://testnet.starcombo.xyz/"
//   },
//       {
//       "name": "Randomfeedooooor",
//       "backgroundColor": "#36368F",
//       "category": [
//           "infra"
//       ],
//       "description": "Randomness on the blockchain.",
//       "websiteLink ": "https://randomfeedooooor.vercel.app/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/randomfeed.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "",
//       "wallet_address": "",
//       "websiteLink": "https://randomfeedooooor.vercel.app/"
//   },
//    {
//       "name": "Apibara",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "NFT"
//       ],
//       "description": "Build your own NFT marketplace in a fraction of the time. Focus on building what you love, we provide the rest.",
//       "websiteLink ": "https://www.apibara.com/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/apibara.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "nfts"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/apibara_web3",
//       "wallet_address": "",
//       "websiteLink": "https://www.apibara.com/"
//   },
//      {
//       "name": "cartridge",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Game"
//       ],
//       "description": "starknet gaming console 👾🕹",
//       "websiteLink ": "https://starknet.cartridge.gg/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/cartridge.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "games"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/cartridge_gg",
//       "wallet_address": "",
//       "websiteLink": "https://starknet.cartridge.gg/"
//   },
//        {
//       "name": "giza",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Infra"
//       ],
//       "description": "Fully on-chain Artificial Intelligence 🧠 powered by ZK proofs 🚀",
//       "websiteLink ": "https://gizatech.xyz/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/giza.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "LIVE",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/gizatechxyz",
//       "wallet_address": "",
//       "websiteLink": "https://gizatech.xyz/"
//   },
//   {
//       "name": "starksync btc",
//       "backgroundColor": "#EB5600",
//       "category": [
//           "Infra"
//       ],
//       "description": "Relay for validating bitcoin blocks and adding them to ethereum smart contracts implemented in cairo.",
//       "websiteLink ": "https://git.tu-berlin.de/luckylee/starkrelay",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/starksyncbtc.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/lucidLuckylee",
//       "wallet_address": "",
//       "websiteLink": "https://git.tu-berlin.de/luckylee/starkrelay"
//   },
//   {
//       "name": "pontis oracle",
//       "backgroundColor": "#36368F",
//       "category": [
//           "Infra"
//       ],
//       "description": "Pontis is the leading oracle on Starknet, built to empower native protocols to realize their ambitious potential.",
//       "websiteLink ": "https://www.pontisoracle.xyz/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/pontis.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "LIVE",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "",
//       "wallet_address": "",
//       "websiteLink": "https://www.pontisoracle.xyz/"
//   },
//   {
//       "name": "Stork Oracle",
//       "backgroundColor": "#6C6DD6",
//       "category": [
//           "Infra"
//       ],
//       "description": "Low-latency, traded on-chain price feeds designed for StarkNet and StarkEx.",
//       "websiteLink ": "https://www.stork.network/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/stork.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/StorkOracle",
//       "wallet_address": "",
//       "websiteLink": "https://www.stork.network/"
//   },
//     {
//       "name": "starknethouse",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Misc"
//       ],
//       "description": "StarkNet House is a virtual educational summer program presented by Topology in collaboration with StarkWare and pioneers in the Starknet ecosystem.",
//       "websiteLink ": "https://www.starknet.house/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/starknethouse.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "Misc"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/StarknetHouse",
//       "wallet_address": "",
//       "websiteLink": "https://www.starknet.house/"
//   },
//       {
//       "name": "Metamaterial",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Games"
//       ],
//       "description": "MetaMaterial is a protocol that allows Blockchain games to share resources/items/weapons with each other.",
//       "websiteLink ": "https://goerli.metamaterial.app/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/metamaterial.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "games"
//       ],
//       "status": "TESTNET",
//       "statusColor": "#30DE88",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "https://twitter.com/material_meta",
//       "wallet_address": "",
//       "websiteLink": "https://goerli.metamaterial.app/"
//   },
//    {
//       "name": "StarkGuild DAO",
//       "backgroundColor": "#36368F",
//       "category": [
//           "DAO"
//       ],
//       "description": "To Follow...",
//       "websiteLink ": "",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/unreleased.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "dao"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "",
//       "wallet_address": "",
//       "websiteLink": ""
//   },
//     {
//       "name": "zkCairo Cats",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "NFT"
//       ],
//       "description": "10,000 cairo cats living in the zkmetaverse. coming soon.",
//       "websiteLink ": "",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/unreleased.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "starknet"
//       ],
//       "search_on": [
//           "nfts"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "StarkNet",
//       "twitterLink": "",
//       "wallet_address": "",
//       "websiteLink": ""
//   },
//   {
//       "name": "BitKeep",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Mobile Wallet"
//       ],
//       "description": "Find the hottest assets in BitKeep. BitKeep is the top crypto wallet in Asia. BitKeep Swap. Any chain.Any token.Any time.",
//       "websiteLink ": "https://bitkeep.com/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/bitkeep.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "wallets"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/BitKeepOS",
//       "wallet_address": "",
//       "websiteLink": "https://bitkeep.com/"
//   },
//       {
//       "name": "Homespace",
//       "backgroundColor": "#36368F",
//       "category": [
//           "NFT"
//       ],
//       "description": "Decentralized NFT Metaverse with Architecture and Artificial Intelligence",
//       "websiteLink ": "https://homespace.is/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/homespace.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "nfts"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/HomeSpaceNFT",
//       "wallet_address": "",
//       "websiteLink": "https://homespace.is/"
//   },
//   {
//       "name": "Standard Protocol",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "dApp"
//       ],
//       "description": "Builders of self-sovereign, decentralized reserve bank, bringing truly 'self-custodial' decentralized finance.",
//       "websiteLink ": "https://standard.tech/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/standard.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/standardweb3",
//       "wallet_address": "",
//       "websiteLink": "https://standard.tech/"
//   },
//     {
//       "name": "OMNIA Protocol",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "Infra"
//       ],
//       "description": "Untraceable blockchain nodes infrastructure.",
//       "websiteLink ": "https://omniatech.io/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/omnia.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/omnia_protocol",
//       "wallet_address": "",
//       "websiteLink": "https://omniatech.io/"
//   },
//   {
//       "name": "OnJunoHQ",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "dApp"
//       ],
//       "description": "Crypto Friendly Banking: Earn, invest and spend both your cash and crypto from one powerful checking account",
//       "websiteLink ": "https://onjuno.com/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/onjuno.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "dApps"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/OnJunoHQ",
//       "wallet_address": "",
//       "websiteLink": "https://onjuno.com/"
//   },
//     {
//       "name": "RSS3",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "Infra"
//       ],
//       "description": "RSS3 is an open information syndication protocol that aims to support efficient and decentralized information distribution in Web3.",
//       "websiteLink ": "https://rss3.io/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/rss3.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "infra"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/rss3_",
//       "wallet_address": "",
//       "websiteLink": "https://rss3.io/"
//   },
//   {
//       "name": "Reddio",
//       "backgroundColor": "#2D2F4B",
//       "category": [
//           "NFT"
//       ],
//       "description": "The world first easy-to-use composable APIs with affordable gas fee, to integrate NFT into your application and beyond.",
//       "websiteLink ": "https://www.reddio.com/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/reddio.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "nfts"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/reddio_com",
//       "wallet_address": "",
//       "websiteLink": "https://www.reddio.com/"
//   },
//     {
//       "name": "4EVERLAND",
//       "backgroundColor": "#F1F1F0",
//       "category": [
//           "NFT"
//       ],
//       "description": "A Web3 cloud computing platform with global acceleration, privacy protection, distributed storage, and other technical features.",
//       "websiteLink ": "https://www.4everland.org/",
//       "getStartedLink1": "",
//       "getStartedLink2": "https://www.google.com/",
//       "imageLink": "url('project-logos/4everland.png')",
//       "linkText1": "Bridge ",
//       "linkText2": "Aave dApp",
//       "networks": [
//           "zksync"
//       ],
//       "search_on": [
//           "nfts"
//       ],
//       "status": "DEV",
//       "statusColor": "#000000",
//       // "Text1": "",
//       "getStartedText2": "Go to the Aave dapp ",
//       "getStartedText3": "Click (Make a trade) and follow the instructions ",
//       "tooltip": "zkSync",
//       "twitterLink": "https://twitter.com/4everland_org",
//       "wallet_address": "",
//       "websiteLink": "https://www.4everland.org/"
//   },
// ]
export const projects =[];
export const getdata=async (limit=25,skip=0)=>{

    var data_n =[];
    const data = await axios.get(`https://api.contentful.com/spaces/daabvgh6kr39/entries?access_token=CFPAT-kftH_yvwaUJASmJN0gPF62A2Ctinwqc7um8weUgVTJo&limit=${limit}&skip=${skip}`,{
        headers:{
            "Authorization":"Bearer CFPAT-kftH_yvwaUJASmJN0gPF62A2Ctinwqc7um8weUgVTJo"
        }
    });
    console.log("data===>> ",data)
    for(var i=0;i<data.data.items.length;i++){
        const d = data.data.items[i].fields
        const key =Object.keys(d)
        var project_single={}
        for(var j =0;j<key.length;j++){
            project_single[key[j]]=d[key[j]]['en-US']
        }
        data_n.push(project_single)
        // console.log("keys===>> ",)
    }
    console.log("Proojects========>> ",data_n)
    // setprojects(data_n)
    return data_n;
    // for
    // console.log("data ====>> ",data);
    
    // .then((Response)=>
    // setpost(Response.data))

   
    // .catch(error)

    // console.log(" callapi=================>>>>> ", response.data);
    return data;
}

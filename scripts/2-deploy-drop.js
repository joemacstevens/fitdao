import {AddressZero} from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDropAddress = await sdk.deployer.deployEditionDrop({
      name: "FitDao Membership",
      description: "A Dao for Keeping Fit",
      image: readFileSync("scripts/assets/stice.png"),
      primary_sale_recipient: AddressZero,
    })

    const editionDrop = sdk.getEditionDrop(editionDropAddress);
    const metadata = await editionDrop.metadata.get();

    console.log(
         "✅ Successfully deployed editionDrop contract, address:",
      editionDropAddress,
    )
  } catch(error) {
    console.log("failed to deploy editionDrop contract", error);
  }
})();

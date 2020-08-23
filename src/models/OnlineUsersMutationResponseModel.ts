import { Instance } from "mobx-state-tree"
import { OnlineUsersMutationResponseModelBase } from "./OnlineUsersMutationResponseModel.base"

/* The TypeScript type of an instance of OnlineUsersMutationResponseModel */
export interface OnlineUsersMutationResponseModelType extends Instance<typeof OnlineUsersMutationResponseModel.Type> {}

/* A graphql query fragment builders for OnlineUsersMutationResponseModel */
export { selectFromOnlineUsersMutationResponse, onlineUsersMutationResponseModelPrimitives, OnlineUsersMutationResponseModelSelector } from "./OnlineUsersMutationResponseModel.base"

/**
 * OnlineUsersMutationResponseModel
 */
export const OnlineUsersMutationResponseModel = OnlineUsersMutationResponseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

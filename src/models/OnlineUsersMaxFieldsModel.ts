import { Instance } from "mobx-state-tree"
import { OnlineUsersMaxFieldsModelBase } from "./OnlineUsersMaxFieldsModel.base"

/* The TypeScript type of an instance of OnlineUsersMaxFieldsModel */
export interface OnlineUsersMaxFieldsModelType extends Instance<typeof OnlineUsersMaxFieldsModel.Type> {}

/* A graphql query fragment builders for OnlineUsersMaxFieldsModel */
export { selectFromOnlineUsersMaxFields, onlineUsersMaxFieldsModelPrimitives, OnlineUsersMaxFieldsModelSelector } from "./OnlineUsersMaxFieldsModel.base"

/**
 * OnlineUsersMaxFieldsModel
 */
export const OnlineUsersMaxFieldsModel = OnlineUsersMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

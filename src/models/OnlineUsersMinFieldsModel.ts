import { Instance } from "mobx-state-tree"
import { OnlineUsersMinFieldsModelBase } from "./OnlineUsersMinFieldsModel.base"

/* The TypeScript type of an instance of OnlineUsersMinFieldsModel */
export interface OnlineUsersMinFieldsModelType extends Instance<typeof OnlineUsersMinFieldsModel.Type> {}

/* A graphql query fragment builders for OnlineUsersMinFieldsModel */
export { selectFromOnlineUsersMinFields, onlineUsersMinFieldsModelPrimitives, OnlineUsersMinFieldsModelSelector } from "./OnlineUsersMinFieldsModel.base"

/**
 * OnlineUsersMinFieldsModel
 */
export const OnlineUsersMinFieldsModel = OnlineUsersMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

import { Instance } from "mobx-state-tree"
import { OnlineUsersModelBase } from "./OnlineUsersModel.base"

/* The TypeScript type of an instance of OnlineUsersModel */
export interface OnlineUsersModelType extends Instance<typeof OnlineUsersModel.Type> {}

/* A graphql query fragment builders for OnlineUsersModel */
export { selectFromOnlineUsers, onlineUsersModelPrimitives, OnlineUsersModelSelector } from "./OnlineUsersModel.base"

/**
 * OnlineUsersModel
 */
export const OnlineUsersModel = OnlineUsersModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

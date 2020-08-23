import { Instance } from "mobx-state-tree"
import { OnlineUsersAggregateFieldsModelBase } from "./OnlineUsersAggregateFieldsModel.base"

/* The TypeScript type of an instance of OnlineUsersAggregateFieldsModel */
export interface OnlineUsersAggregateFieldsModelType extends Instance<typeof OnlineUsersAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for OnlineUsersAggregateFieldsModel */
export { selectFromOnlineUsersAggregateFields, onlineUsersAggregateFieldsModelPrimitives, OnlineUsersAggregateFieldsModelSelector } from "./OnlineUsersAggregateFieldsModel.base"

/**
 * OnlineUsersAggregateFieldsModel
 */
export const OnlineUsersAggregateFieldsModel = OnlineUsersAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

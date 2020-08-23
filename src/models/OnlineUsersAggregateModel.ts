import { Instance } from "mobx-state-tree"
import { OnlineUsersAggregateModelBase } from "./OnlineUsersAggregateModel.base"

/* The TypeScript type of an instance of OnlineUsersAggregateModel */
export interface OnlineUsersAggregateModelType extends Instance<typeof OnlineUsersAggregateModel.Type> {}

/* A graphql query fragment builders for OnlineUsersAggregateModel */
export { selectFromOnlineUsersAggregate, onlineUsersAggregateModelPrimitives, OnlineUsersAggregateModelSelector } from "./OnlineUsersAggregateModel.base"

/**
 * OnlineUsersAggregateModel
 */
export const OnlineUsersAggregateModel = OnlineUsersAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OnlineUsersAggregateFieldsModel, OnlineUsersAggregateFieldsModelType } from "./OnlineUsersAggregateFieldsModel"
import { OnlineUsersAggregateFieldsModelSelector } from "./OnlineUsersAggregateFieldsModel.base"
import { OnlineUsersModel, OnlineUsersModelType } from "./OnlineUsersModel"
import { OnlineUsersModelSelector } from "./OnlineUsersModel.base"
import { RootStoreType } from "./index"


/**
 * OnlineUsersAggregateBase
 * auto generated base class for the model OnlineUsersAggregateModel.
 */
export const OnlineUsersAggregateModelBase = ModelBase
  .named('OnlineUsersAggregate')
  .props({
    __typename: types.optional(types.literal("online_users_aggregate"), "online_users_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => OnlineUsersAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => OnlineUsersModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OnlineUsersAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | OnlineUsersAggregateFieldsModelSelector | ((selector: OnlineUsersAggregateFieldsModelSelector) => OnlineUsersAggregateFieldsModelSelector)) { return this.__child(`aggregate`, OnlineUsersAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | OnlineUsersModelSelector | ((selector: OnlineUsersModelSelector) => OnlineUsersModelSelector)) { return this.__child(`nodes`, OnlineUsersModelSelector, builder) }
}
export function selectFromOnlineUsersAggregate() {
  return new OnlineUsersAggregateModelSelector()
}

export const onlineUsersAggregateModelPrimitives = selectFromOnlineUsersAggregate()

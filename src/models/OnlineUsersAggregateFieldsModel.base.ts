/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OnlineUsersMaxFieldsModel, OnlineUsersMaxFieldsModelType } from "./OnlineUsersMaxFieldsModel"
import { OnlineUsersMaxFieldsModelSelector } from "./OnlineUsersMaxFieldsModel.base"
import { OnlineUsersMinFieldsModel, OnlineUsersMinFieldsModelType } from "./OnlineUsersMinFieldsModel"
import { OnlineUsersMinFieldsModelSelector } from "./OnlineUsersMinFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * OnlineUsersAggregateFieldsBase
 * auto generated base class for the model OnlineUsersAggregateFieldsModel.
 */
export const OnlineUsersAggregateFieldsModelBase = ModelBase
  .named('OnlineUsersAggregateFields')
  .props({
    __typename: types.optional(types.literal("online_users_aggregate_fields"), "online_users_aggregate_fields"),
    count: types.union(types.undefined, types.null, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => OnlineUsersMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => OnlineUsersMinFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OnlineUsersAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  max(builder?: string | OnlineUsersMaxFieldsModelSelector | ((selector: OnlineUsersMaxFieldsModelSelector) => OnlineUsersMaxFieldsModelSelector)) { return this.__child(`max`, OnlineUsersMaxFieldsModelSelector, builder) }
  min(builder?: string | OnlineUsersMinFieldsModelSelector | ((selector: OnlineUsersMinFieldsModelSelector) => OnlineUsersMinFieldsModelSelector)) { return this.__child(`min`, OnlineUsersMinFieldsModelSelector, builder) }
}
export function selectFromOnlineUsersAggregateFields() {
  return new OnlineUsersAggregateFieldsModelSelector()
}

export const onlineUsersAggregateFieldsModelPrimitives = selectFromOnlineUsersAggregateFields().count

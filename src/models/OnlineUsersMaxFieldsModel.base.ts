/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OnlineUsersMaxFieldsBase
 * auto generated base class for the model OnlineUsersMaxFieldsModel.
 */
export const OnlineUsersMaxFieldsModelBase = ModelBase
  .named('OnlineUsersMaxFields')
  .props({
    __typename: types.optional(types.literal("online_users_max_fields"), "online_users_max_fields"),
    id: types.union(types.undefined, types.null, types.frozen()),
    last_seen: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OnlineUsersMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get last_seen() { return this.__attr(`last_seen`) }
}
export function selectFromOnlineUsersMaxFields() {
  return new OnlineUsersMaxFieldsModelSelector()
}

export const onlineUsersMaxFieldsModelPrimitives = selectFromOnlineUsersMaxFields().last_seen

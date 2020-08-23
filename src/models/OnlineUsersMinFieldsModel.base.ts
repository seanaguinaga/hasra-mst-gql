/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OnlineUsersMinFieldsBase
 * auto generated base class for the model OnlineUsersMinFieldsModel.
 */
export const OnlineUsersMinFieldsModelBase = ModelBase
  .named('OnlineUsersMinFields')
  .props({
    __typename: types.optional(types.literal("online_users_min_fields"), "online_users_min_fields"),
    id: types.union(types.undefined, types.null, types.frozen()),
    last_seen: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OnlineUsersMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get last_seen() { return this.__attr(`last_seen`) }
}
export function selectFromOnlineUsersMinFields() {
  return new OnlineUsersMinFieldsModelSelector()
}

export const onlineUsersMinFieldsModelPrimitives = selectFromOnlineUsersMinFields().last_seen

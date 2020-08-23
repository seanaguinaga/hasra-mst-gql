/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UsersModel, UsersModelType } from "./UsersModel"
import { UsersModelSelector } from "./UsersModel.base"
import { RootStoreType } from "./index"


/**
 * OnlineUsersBase
 * auto generated base class for the model OnlineUsersModel.
 */
export const OnlineUsersModelBase = ModelBase
  .named('OnlineUsers')
  .props({
    __typename: types.optional(types.literal("online_users"), "online_users"),
    id: types.union(types.undefined, types.null, types.frozen()),
    last_seen: types.union(types.undefined, types.null, types.frozen()),
    user: types.union(types.undefined, types.null, types.late((): any => UsersModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OnlineUsersModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get last_seen() { return this.__attr(`last_seen`) }
  user(builder?: string | UsersModelSelector | ((selector: UsersModelSelector) => UsersModelSelector)) { return this.__child(`user`, UsersModelSelector, builder) }
}
export function selectFromOnlineUsers() {
  return new OnlineUsersModelSelector()
}

export const onlineUsersModelPrimitives = selectFromOnlineUsers().last_seen

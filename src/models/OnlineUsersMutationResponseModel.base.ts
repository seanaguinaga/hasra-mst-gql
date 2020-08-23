/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OnlineUsersModel, OnlineUsersModelType } from "./OnlineUsersModel"
import { OnlineUsersModelSelector } from "./OnlineUsersModel.base"
import { RootStoreType } from "./index"


/**
 * OnlineUsersMutationResponseBase
 * auto generated base class for the model OnlineUsersMutationResponseModel.
 */
export const OnlineUsersMutationResponseModelBase = ModelBase
  .named('OnlineUsersMutationResponse')
  .props({
    __typename: types.optional(types.literal("online_users_mutation_response"), "online_users_mutation_response"),
    affected_rows: types.union(types.undefined, types.integer),
    returning: types.union(types.undefined, types.array(types.late((): any => OnlineUsersModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OnlineUsersMutationResponseModelSelector extends QueryBuilder {
  get affected_rows() { return this.__attr(`affected_rows`) }
  returning(builder?: string | OnlineUsersModelSelector | ((selector: OnlineUsersModelSelector) => OnlineUsersModelSelector)) { return this.__child(`returning`, OnlineUsersModelSelector, builder) }
}
export function selectFromOnlineUsersMutationResponse() {
  return new OnlineUsersMutationResponseModelSelector()
}

export const onlineUsersMutationResponseModelPrimitives = selectFromOnlineUsersMutationResponse().affected_rows

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OnlineUsersAggregateModel, OnlineUsersAggregateModelType } from "./OnlineUsersAggregateModel"
import { OnlineUsersAggregateModelSelector } from "./OnlineUsersAggregateModel.base"
import { OnlineUsersModel, OnlineUsersModelType } from "./OnlineUsersModel"
import { OnlineUsersModelSelector } from "./OnlineUsersModel.base"
import { TodosAggregateModel, TodosAggregateModelType } from "./TodosAggregateModel"
import { TodosAggregateModelSelector } from "./TodosAggregateModel.base"
import { TodosModel, TodosModelType } from "./TodosModel"
import { TodosModelSelector } from "./TodosModel.base"
import { UsersAggregateModel, UsersAggregateModelType } from "./UsersAggregateModel"
import { UsersAggregateModelSelector } from "./UsersAggregateModel.base"
import { UsersModel, UsersModelType } from "./UsersModel"
import { UsersModelSelector } from "./UsersModel.base"
import { RootStoreType } from "./index"


/**
 * QueryRootBase
 * auto generated base class for the model QueryRootModel.
 */
export const QueryRootModelBase = ModelBase
  .named('QueryRoot')
  .props({
    __typename: types.optional(types.literal("query_root"), "query_root"),
    online_users: types.union(types.undefined, types.array(types.late((): any => OnlineUsersModel))),
    online_users_aggregate: types.union(types.undefined, types.late((): any => OnlineUsersAggregateModel)),
    todos: types.union(types.undefined, types.array(types.late((): any => TodosModel))),
    todos_aggregate: types.union(types.undefined, types.late((): any => TodosAggregateModel)),
    todos_by_pk: types.union(types.undefined, types.null, types.late((): any => TodosModel)),
    users: types.union(types.undefined, types.array(types.late((): any => UsersModel))),
    users_aggregate: types.union(types.undefined, types.late((): any => UsersAggregateModel)),
    users_by_pk: types.union(types.undefined, types.null, types.late((): any => UsersModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class QueryRootModelSelector extends QueryBuilder {
  online_users(builder?: string | OnlineUsersModelSelector | ((selector: OnlineUsersModelSelector) => OnlineUsersModelSelector)) { return this.__child(`online_users`, OnlineUsersModelSelector, builder) }
  online_users_aggregate(builder?: string | OnlineUsersAggregateModelSelector | ((selector: OnlineUsersAggregateModelSelector) => OnlineUsersAggregateModelSelector)) { return this.__child(`online_users_aggregate`, OnlineUsersAggregateModelSelector, builder) }
  todos(builder?: string | TodosModelSelector | ((selector: TodosModelSelector) => TodosModelSelector)) { return this.__child(`todos`, TodosModelSelector, builder) }
  todos_aggregate(builder?: string | TodosAggregateModelSelector | ((selector: TodosAggregateModelSelector) => TodosAggregateModelSelector)) { return this.__child(`todos_aggregate`, TodosAggregateModelSelector, builder) }
  todos_by_pk(builder?: string | TodosModelSelector | ((selector: TodosModelSelector) => TodosModelSelector)) { return this.__child(`todos_by_pk`, TodosModelSelector, builder) }
  users(builder?: string | UsersModelSelector | ((selector: UsersModelSelector) => UsersModelSelector)) { return this.__child(`users`, UsersModelSelector, builder) }
  users_aggregate(builder?: string | UsersAggregateModelSelector | ((selector: UsersAggregateModelSelector) => UsersAggregateModelSelector)) { return this.__child(`users_aggregate`, UsersAggregateModelSelector, builder) }
  users_by_pk(builder?: string | UsersModelSelector | ((selector: UsersModelSelector) => UsersModelSelector)) { return this.__child(`users_by_pk`, UsersModelSelector, builder) }
}
export function selectFromQueryRoot() {
  return new QueryRootModelSelector()
}

export const queryRootModelPrimitives = selectFromQueryRoot()

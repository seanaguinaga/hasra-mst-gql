/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { TodosAggregateModel, TodosAggregateModelType } from "./TodosAggregateModel"
import { TodosAggregateModelSelector } from "./TodosAggregateModel.base"
import { TodosModel, TodosModelType } from "./TodosModel"
import { TodosModelSelector } from "./TodosModel.base"
import { RootStoreType } from "./index"


/**
 * UsersBase
 * auto generated base class for the model UsersModel.
 */
export const UsersModelBase = ModelBase
  .named('Users')
  .props({
    __typename: types.optional(types.literal("users"), "users"),
    created_at: types.union(types.undefined, types.frozen()),
    id: types.union(types.undefined, types.frozen()),
    last_seen: types.union(types.undefined, types.null, types.frozen()),
    name: types.union(types.undefined, types.null, types.string),
    todos: types.union(types.undefined, types.array(types.late((): any => TodosModel))),
    todos_aggregate: types.union(types.undefined, types.late((): any => TodosAggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class UsersModelSelector extends QueryBuilder {
  get created_at() { return this.__attr(`created_at`) }
  get id() { return this.__attr(`id`) }
  get last_seen() { return this.__attr(`last_seen`) }
  get name() { return this.__attr(`name`) }
  todos(builder?: string | TodosModelSelector | ((selector: TodosModelSelector) => TodosModelSelector)) { return this.__child(`todos`, TodosModelSelector, builder) }
  todos_aggregate(builder?: string | TodosAggregateModelSelector | ((selector: TodosAggregateModelSelector) => TodosAggregateModelSelector)) { return this.__child(`todos_aggregate`, TodosAggregateModelSelector, builder) }
}
export function selectFromUsers() {
  return new UsersModelSelector()
}

export const usersModelPrimitives = selectFromUsers().created_at.last_seen.name

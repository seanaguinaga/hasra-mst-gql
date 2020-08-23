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
 * TodosBase
 * auto generated base class for the model TodosModel.
 */
export const TodosModelBase = ModelBase
  .named('Todos')
  .props({
    __typename: types.optional(types.literal("todos"), "todos"),
    created_at: types.union(types.undefined, types.null, types.frozen()),
    id: types.union(types.undefined, types.frozen()),
    is_completed: types.union(types.undefined, types.null, types.boolean),
    is_public: types.union(types.undefined, types.null, types.boolean),
    owner: types.union(types.undefined, types.null, types.late((): any => UsersModel)),
    owner_id: types.union(types.undefined, types.null, types.frozen()),
    title: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class TodosModelSelector extends QueryBuilder {
  get created_at() { return this.__attr(`created_at`) }
  get id() { return this.__attr(`id`) }
  get is_completed() { return this.__attr(`is_completed`) }
  get is_public() { return this.__attr(`is_public`) }
  get owner_id() { return this.__attr(`owner_id`) }
  get title() { return this.__attr(`title`) }
  owner(builder?: string | UsersModelSelector | ((selector: UsersModelSelector) => UsersModelSelector)) { return this.__child(`owner`, UsersModelSelector, builder) }
}
export function selectFromTodos() {
  return new TodosModelSelector()
}

export const todosModelPrimitives = selectFromTodos().created_at.is_completed.is_public.owner_id.title

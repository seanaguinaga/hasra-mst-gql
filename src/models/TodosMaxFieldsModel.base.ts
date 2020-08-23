/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * TodosMaxFieldsBase
 * auto generated base class for the model TodosMaxFieldsModel.
 */
export const TodosMaxFieldsModelBase = ModelBase
  .named('TodosMaxFields')
  .props({
    __typename: types.optional(types.literal("todos_max_fields"), "todos_max_fields"),
    created_at: types.union(types.undefined, types.null, types.frozen()),
    id: types.union(types.undefined, types.null, types.frozen()),
    owner_id: types.union(types.undefined, types.null, types.frozen()),
    title: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class TodosMaxFieldsModelSelector extends QueryBuilder {
  get created_at() { return this.__attr(`created_at`) }
  get id() { return this.__attr(`id`) }
  get owner_id() { return this.__attr(`owner_id`) }
  get title() { return this.__attr(`title`) }
}
export function selectFromTodosMaxFields() {
  return new TodosMaxFieldsModelSelector()
}

export const todosMaxFieldsModelPrimitives = selectFromTodosMaxFields().created_at.owner_id.title

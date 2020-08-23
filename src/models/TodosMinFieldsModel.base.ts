/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * TodosMinFieldsBase
 * auto generated base class for the model TodosMinFieldsModel.
 */
export const TodosMinFieldsModelBase = ModelBase
  .named('TodosMinFields')
  .props({
    __typename: types.optional(types.literal("todos_min_fields"), "todos_min_fields"),
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

export class TodosMinFieldsModelSelector extends QueryBuilder {
  get created_at() { return this.__attr(`created_at`) }
  get id() { return this.__attr(`id`) }
  get owner_id() { return this.__attr(`owner_id`) }
  get title() { return this.__attr(`title`) }
}
export function selectFromTodosMinFields() {
  return new TodosMinFieldsModelSelector()
}

export const todosMinFieldsModelPrimitives = selectFromTodosMinFields().created_at.owner_id.title

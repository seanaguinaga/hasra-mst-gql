/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { TodosModel, TodosModelType } from "./TodosModel"
import { TodosModelSelector } from "./TodosModel.base"
import { RootStoreType } from "./index"


/**
 * TodosMutationResponseBase
 * auto generated base class for the model TodosMutationResponseModel.
 */
export const TodosMutationResponseModelBase = ModelBase
  .named('TodosMutationResponse')
  .props({
    __typename: types.optional(types.literal("todos_mutation_response"), "todos_mutation_response"),
    affected_rows: types.union(types.undefined, types.integer),
    returning: types.union(types.undefined, types.array(types.late((): any => TodosModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class TodosMutationResponseModelSelector extends QueryBuilder {
  get affected_rows() { return this.__attr(`affected_rows`) }
  returning(builder?: string | TodosModelSelector | ((selector: TodosModelSelector) => TodosModelSelector)) { return this.__child(`returning`, TodosModelSelector, builder) }
}
export function selectFromTodosMutationResponse() {
  return new TodosMutationResponseModelSelector()
}

export const todosMutationResponseModelPrimitives = selectFromTodosMutationResponse().affected_rows

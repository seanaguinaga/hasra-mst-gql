/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { TodosMaxFieldsModel, TodosMaxFieldsModelType } from "./TodosMaxFieldsModel"
import { TodosMaxFieldsModelSelector } from "./TodosMaxFieldsModel.base"
import { TodosMinFieldsModel, TodosMinFieldsModelType } from "./TodosMinFieldsModel"
import { TodosMinFieldsModelSelector } from "./TodosMinFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * TodosAggregateFieldsBase
 * auto generated base class for the model TodosAggregateFieldsModel.
 */
export const TodosAggregateFieldsModelBase = ModelBase
  .named('TodosAggregateFields')
  .props({
    __typename: types.optional(types.literal("todos_aggregate_fields"), "todos_aggregate_fields"),
    count: types.union(types.undefined, types.null, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => TodosMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => TodosMinFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class TodosAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  max(builder?: string | TodosMaxFieldsModelSelector | ((selector: TodosMaxFieldsModelSelector) => TodosMaxFieldsModelSelector)) { return this.__child(`max`, TodosMaxFieldsModelSelector, builder) }
  min(builder?: string | TodosMinFieldsModelSelector | ((selector: TodosMinFieldsModelSelector) => TodosMinFieldsModelSelector)) { return this.__child(`min`, TodosMinFieldsModelSelector, builder) }
}
export function selectFromTodosAggregateFields() {
  return new TodosAggregateFieldsModelSelector()
}

export const todosAggregateFieldsModelPrimitives = selectFromTodosAggregateFields().count

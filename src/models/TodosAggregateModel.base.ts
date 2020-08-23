/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { TodosAggregateFieldsModel, TodosAggregateFieldsModelType } from "./TodosAggregateFieldsModel"
import { TodosAggregateFieldsModelSelector } from "./TodosAggregateFieldsModel.base"
import { TodosModel, TodosModelType } from "./TodosModel"
import { TodosModelSelector } from "./TodosModel.base"
import { RootStoreType } from "./index"


/**
 * TodosAggregateBase
 * auto generated base class for the model TodosAggregateModel.
 */
export const TodosAggregateModelBase = ModelBase
  .named('TodosAggregate')
  .props({
    __typename: types.optional(types.literal("todos_aggregate"), "todos_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => TodosAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => TodosModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class TodosAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | TodosAggregateFieldsModelSelector | ((selector: TodosAggregateFieldsModelSelector) => TodosAggregateFieldsModelSelector)) { return this.__child(`aggregate`, TodosAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | TodosModelSelector | ((selector: TodosModelSelector) => TodosModelSelector)) { return this.__child(`nodes`, TodosModelSelector, builder) }
}
export function selectFromTodosAggregate() {
  return new TodosAggregateModelSelector()
}

export const todosAggregateModelPrimitives = selectFromTodosAggregate()

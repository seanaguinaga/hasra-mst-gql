import { Instance } from "mobx-state-tree"
import { TodosAggregateFieldsModelBase } from "./TodosAggregateFieldsModel.base"

/* The TypeScript type of an instance of TodosAggregateFieldsModel */
export interface TodosAggregateFieldsModelType extends Instance<typeof TodosAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for TodosAggregateFieldsModel */
export { selectFromTodosAggregateFields, todosAggregateFieldsModelPrimitives, TodosAggregateFieldsModelSelector } from "./TodosAggregateFieldsModel.base"

/**
 * TodosAggregateFieldsModel
 */
export const TodosAggregateFieldsModel = TodosAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

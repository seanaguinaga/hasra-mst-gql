import { Instance } from "mobx-state-tree"
import { TodosAggregateModelBase } from "./TodosAggregateModel.base"

/* The TypeScript type of an instance of TodosAggregateModel */
export interface TodosAggregateModelType extends Instance<typeof TodosAggregateModel.Type> {}

/* A graphql query fragment builders for TodosAggregateModel */
export { selectFromTodosAggregate, todosAggregateModelPrimitives, TodosAggregateModelSelector } from "./TodosAggregateModel.base"

/**
 * TodosAggregateModel
 */
export const TodosAggregateModel = TodosAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

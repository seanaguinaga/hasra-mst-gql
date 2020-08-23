import { Instance } from "mobx-state-tree"
import { TodosModelBase } from "./TodosModel.base"

/* The TypeScript type of an instance of TodosModel */
export interface TodosModelType extends Instance<typeof TodosModel.Type> {}

/* A graphql query fragment builders for TodosModel */
export { selectFromTodos, todosModelPrimitives, TodosModelSelector } from "./TodosModel.base"

/**
 * TodosModel
 */
export const TodosModel = TodosModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

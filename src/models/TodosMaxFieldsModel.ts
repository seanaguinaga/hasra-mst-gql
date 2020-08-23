import { Instance } from "mobx-state-tree"
import { TodosMaxFieldsModelBase } from "./TodosMaxFieldsModel.base"

/* The TypeScript type of an instance of TodosMaxFieldsModel */
export interface TodosMaxFieldsModelType extends Instance<typeof TodosMaxFieldsModel.Type> {}

/* A graphql query fragment builders for TodosMaxFieldsModel */
export { selectFromTodosMaxFields, todosMaxFieldsModelPrimitives, TodosMaxFieldsModelSelector } from "./TodosMaxFieldsModel.base"

/**
 * TodosMaxFieldsModel
 */
export const TodosMaxFieldsModel = TodosMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

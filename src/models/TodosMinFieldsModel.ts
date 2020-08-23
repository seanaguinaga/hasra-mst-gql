import { Instance } from "mobx-state-tree"
import { TodosMinFieldsModelBase } from "./TodosMinFieldsModel.base"

/* The TypeScript type of an instance of TodosMinFieldsModel */
export interface TodosMinFieldsModelType extends Instance<typeof TodosMinFieldsModel.Type> {}

/* A graphql query fragment builders for TodosMinFieldsModel */
export { selectFromTodosMinFields, todosMinFieldsModelPrimitives, TodosMinFieldsModelSelector } from "./TodosMinFieldsModel.base"

/**
 * TodosMinFieldsModel
 */
export const TodosMinFieldsModel = TodosMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

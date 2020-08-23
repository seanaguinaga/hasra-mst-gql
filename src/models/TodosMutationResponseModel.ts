import { Instance } from "mobx-state-tree"
import { TodosMutationResponseModelBase } from "./TodosMutationResponseModel.base"

/* The TypeScript type of an instance of TodosMutationResponseModel */
export interface TodosMutationResponseModelType extends Instance<typeof TodosMutationResponseModel.Type> {}

/* A graphql query fragment builders for TodosMutationResponseModel */
export { selectFromTodosMutationResponse, todosMutationResponseModelPrimitives, TodosMutationResponseModelSelector } from "./TodosMutationResponseModel.base"

/**
 * TodosMutationResponseModel
 */
export const TodosMutationResponseModel = TodosMutationResponseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

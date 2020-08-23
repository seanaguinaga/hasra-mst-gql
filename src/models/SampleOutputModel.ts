import { Instance } from "mobx-state-tree"
import { SampleOutputModelBase } from "./SampleOutputModel.base"

/* The TypeScript type of an instance of SampleOutputModel */
export interface SampleOutputModelType extends Instance<typeof SampleOutputModel.Type> {}

/* A graphql query fragment builders for SampleOutputModel */
export { selectFromSampleOutput, sampleOutputModelPrimitives, SampleOutputModelSelector } from "./SampleOutputModel.base"

/**
 * SampleOutputModel
 */
export const SampleOutputModel = SampleOutputModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

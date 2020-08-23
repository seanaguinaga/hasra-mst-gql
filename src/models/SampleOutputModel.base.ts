/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * SampleOutputBase
 * auto generated base class for the model SampleOutputModel.
 */
export const SampleOutputModelBase = ModelBase
  .named('SampleOutput')
  .props({
    __typename: types.optional(types.literal("SampleOutput"), "SampleOutput"),
    accessToken: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class SampleOutputModelSelector extends QueryBuilder {
  get accessToken() { return this.__attr(`accessToken`) }
}
export function selectFromSampleOutput() {
  return new SampleOutputModelSelector()
}

export const sampleOutputModelPrimitives = selectFromSampleOutput().accessToken

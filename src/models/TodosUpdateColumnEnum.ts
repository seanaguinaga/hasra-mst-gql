/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum TodosUpdateColumn {
  created_at="created_at",
id="id",
is_completed="is_completed",
is_public="is_public",
owner_id="owner_id",
title="title"
}

/**
* TodosUpdateColumn
*/
export const TodosUpdateColumnEnumType = types.enumeration("TodosUpdateColumn", [
        "created_at",
  "id",
  "is_completed",
  "is_public",
  "owner_id",
  "title",
      ])

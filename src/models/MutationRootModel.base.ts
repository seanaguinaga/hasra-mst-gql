/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OnlineUsersModel, OnlineUsersModelType } from "./OnlineUsersModel"
import { OnlineUsersModelSelector } from "./OnlineUsersModel.base"
import { OnlineUsersMutationResponseModel, OnlineUsersMutationResponseModelType } from "./OnlineUsersMutationResponseModel"
import { OnlineUsersMutationResponseModelSelector } from "./OnlineUsersMutationResponseModel.base"
import { SampleOutputModel, SampleOutputModelType } from "./SampleOutputModel"
import { SampleOutputModelSelector } from "./SampleOutputModel.base"
import { TodosModel, TodosModelType } from "./TodosModel"
import { TodosModelSelector } from "./TodosModel.base"
import { TodosMutationResponseModel, TodosMutationResponseModelType } from "./TodosMutationResponseModel"
import { TodosMutationResponseModelSelector } from "./TodosMutationResponseModel.base"
import { UsersModel, UsersModelType } from "./UsersModel"
import { UsersModelSelector } from "./UsersModel.base"
import { UsersMutationResponseModel, UsersMutationResponseModelType } from "./UsersMutationResponseModel"
import { UsersMutationResponseModelSelector } from "./UsersMutationResponseModel.base"
import { RootStoreType } from "./index"


/**
 * MutationRootBase
 * auto generated base class for the model MutationRootModel.
 */
export const MutationRootModelBase = ModelBase
  .named('MutationRoot')
  .props({
    __typename: types.optional(types.literal("mutation_root"), "mutation_root"),
    actionName: types.union(types.undefined, types.null, types.late((): any => SampleOutputModel)),
    delete_online_users: types.union(types.undefined, types.null, types.late((): any => OnlineUsersMutationResponseModel)),
    delete_todos: types.union(types.undefined, types.null, types.late((): any => TodosMutationResponseModel)),
    delete_todos_by_pk: types.union(types.undefined, types.null, types.late((): any => TodosModel)),
    delete_users: types.union(types.undefined, types.null, types.late((): any => UsersMutationResponseModel)),
    delete_users_by_pk: types.union(types.undefined, types.null, types.late((): any => UsersModel)),
    insert_online_users: types.union(types.undefined, types.null, types.late((): any => OnlineUsersMutationResponseModel)),
    insert_online_users_one: types.union(types.undefined, types.null, types.late((): any => OnlineUsersModel)),
    insert_todos: types.union(types.undefined, types.null, types.late((): any => TodosMutationResponseModel)),
    insert_todos_one: types.union(types.undefined, types.null, types.late((): any => TodosModel)),
    insert_users: types.union(types.undefined, types.null, types.late((): any => UsersMutationResponseModel)),
    insert_users_one: types.union(types.undefined, types.null, types.late((): any => UsersModel)),
    update_online_users: types.union(types.undefined, types.null, types.late((): any => OnlineUsersMutationResponseModel)),
    update_todos: types.union(types.undefined, types.null, types.late((): any => TodosMutationResponseModel)),
    update_todos_by_pk: types.union(types.undefined, types.null, types.late((): any => TodosModel)),
    update_users: types.union(types.undefined, types.null, types.late((): any => UsersMutationResponseModel)),
    update_users_by_pk: types.union(types.undefined, types.null, types.late((): any => UsersModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class MutationRootModelSelector extends QueryBuilder {
  actionName(builder?: string | SampleOutputModelSelector | ((selector: SampleOutputModelSelector) => SampleOutputModelSelector)) { return this.__child(`actionName`, SampleOutputModelSelector, builder) }
  delete_online_users(builder?: string | OnlineUsersMutationResponseModelSelector | ((selector: OnlineUsersMutationResponseModelSelector) => OnlineUsersMutationResponseModelSelector)) { return this.__child(`delete_online_users`, OnlineUsersMutationResponseModelSelector, builder) }
  delete_todos(builder?: string | TodosMutationResponseModelSelector | ((selector: TodosMutationResponseModelSelector) => TodosMutationResponseModelSelector)) { return this.__child(`delete_todos`, TodosMutationResponseModelSelector, builder) }
  delete_todos_by_pk(builder?: string | TodosModelSelector | ((selector: TodosModelSelector) => TodosModelSelector)) { return this.__child(`delete_todos_by_pk`, TodosModelSelector, builder) }
  delete_users(builder?: string | UsersMutationResponseModelSelector | ((selector: UsersMutationResponseModelSelector) => UsersMutationResponseModelSelector)) { return this.__child(`delete_users`, UsersMutationResponseModelSelector, builder) }
  delete_users_by_pk(builder?: string | UsersModelSelector | ((selector: UsersModelSelector) => UsersModelSelector)) { return this.__child(`delete_users_by_pk`, UsersModelSelector, builder) }
  insert_online_users(builder?: string | OnlineUsersMutationResponseModelSelector | ((selector: OnlineUsersMutationResponseModelSelector) => OnlineUsersMutationResponseModelSelector)) { return this.__child(`insert_online_users`, OnlineUsersMutationResponseModelSelector, builder) }
  insert_online_users_one(builder?: string | OnlineUsersModelSelector | ((selector: OnlineUsersModelSelector) => OnlineUsersModelSelector)) { return this.__child(`insert_online_users_one`, OnlineUsersModelSelector, builder) }
  insert_todos(builder?: string | TodosMutationResponseModelSelector | ((selector: TodosMutationResponseModelSelector) => TodosMutationResponseModelSelector)) { return this.__child(`insert_todos`, TodosMutationResponseModelSelector, builder) }
  insert_todos_one(builder?: string | TodosModelSelector | ((selector: TodosModelSelector) => TodosModelSelector)) { return this.__child(`insert_todos_one`, TodosModelSelector, builder) }
  insert_users(builder?: string | UsersMutationResponseModelSelector | ((selector: UsersMutationResponseModelSelector) => UsersMutationResponseModelSelector)) { return this.__child(`insert_users`, UsersMutationResponseModelSelector, builder) }
  insert_users_one(builder?: string | UsersModelSelector | ((selector: UsersModelSelector) => UsersModelSelector)) { return this.__child(`insert_users_one`, UsersModelSelector, builder) }
  update_online_users(builder?: string | OnlineUsersMutationResponseModelSelector | ((selector: OnlineUsersMutationResponseModelSelector) => OnlineUsersMutationResponseModelSelector)) { return this.__child(`update_online_users`, OnlineUsersMutationResponseModelSelector, builder) }
  update_todos(builder?: string | TodosMutationResponseModelSelector | ((selector: TodosMutationResponseModelSelector) => TodosMutationResponseModelSelector)) { return this.__child(`update_todos`, TodosMutationResponseModelSelector, builder) }
  update_todos_by_pk(builder?: string | TodosModelSelector | ((selector: TodosModelSelector) => TodosModelSelector)) { return this.__child(`update_todos_by_pk`, TodosModelSelector, builder) }
  update_users(builder?: string | UsersMutationResponseModelSelector | ((selector: UsersMutationResponseModelSelector) => UsersMutationResponseModelSelector)) { return this.__child(`update_users`, UsersMutationResponseModelSelector, builder) }
  update_users_by_pk(builder?: string | UsersModelSelector | ((selector: UsersModelSelector) => UsersModelSelector)) { return this.__child(`update_users_by_pk`, UsersModelSelector, builder) }
}
export function selectFromMutationRoot() {
  return new MutationRootModelSelector()
}

export const mutationRootModelPrimitives = selectFromMutationRoot()

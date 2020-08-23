/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { QueryRootModel, QueryRootModelType } from "./QueryRootModel"
import { queryRootModelPrimitives, QueryRootModelSelector } from "./QueryRootModel.base"
import { OnlineUsersModel, OnlineUsersModelType } from "./OnlineUsersModel"
import { onlineUsersModelPrimitives, OnlineUsersModelSelector } from "./OnlineUsersModel.base"
import { UsersModel, UsersModelType } from "./UsersModel"
import { usersModelPrimitives, UsersModelSelector } from "./UsersModel.base"
import { TodosModel, TodosModelType } from "./TodosModel"
import { todosModelPrimitives, TodosModelSelector } from "./TodosModel.base"
import { TodosAggregateModel, TodosAggregateModelType } from "./TodosAggregateModel"
import { todosAggregateModelPrimitives, TodosAggregateModelSelector } from "./TodosAggregateModel.base"
import { TodosAggregateFieldsModel, TodosAggregateFieldsModelType } from "./TodosAggregateFieldsModel"
import { todosAggregateFieldsModelPrimitives, TodosAggregateFieldsModelSelector } from "./TodosAggregateFieldsModel.base"
import { TodosMaxFieldsModel, TodosMaxFieldsModelType } from "./TodosMaxFieldsModel"
import { todosMaxFieldsModelPrimitives, TodosMaxFieldsModelSelector } from "./TodosMaxFieldsModel.base"
import { TodosMinFieldsModel, TodosMinFieldsModelType } from "./TodosMinFieldsModel"
import { todosMinFieldsModelPrimitives, TodosMinFieldsModelSelector } from "./TodosMinFieldsModel.base"
import { OnlineUsersAggregateModel, OnlineUsersAggregateModelType } from "./OnlineUsersAggregateModel"
import { onlineUsersAggregateModelPrimitives, OnlineUsersAggregateModelSelector } from "./OnlineUsersAggregateModel.base"
import { OnlineUsersAggregateFieldsModel, OnlineUsersAggregateFieldsModelType } from "./OnlineUsersAggregateFieldsModel"
import { onlineUsersAggregateFieldsModelPrimitives, OnlineUsersAggregateFieldsModelSelector } from "./OnlineUsersAggregateFieldsModel.base"
import { OnlineUsersMaxFieldsModel, OnlineUsersMaxFieldsModelType } from "./OnlineUsersMaxFieldsModel"
import { onlineUsersMaxFieldsModelPrimitives, OnlineUsersMaxFieldsModelSelector } from "./OnlineUsersMaxFieldsModel.base"
import { OnlineUsersMinFieldsModel, OnlineUsersMinFieldsModelType } from "./OnlineUsersMinFieldsModel"
import { onlineUsersMinFieldsModelPrimitives, OnlineUsersMinFieldsModelSelector } from "./OnlineUsersMinFieldsModel.base"
import { UsersAggregateModel, UsersAggregateModelType } from "./UsersAggregateModel"
import { usersAggregateModelPrimitives, UsersAggregateModelSelector } from "./UsersAggregateModel.base"
import { UsersAggregateFieldsModel, UsersAggregateFieldsModelType } from "./UsersAggregateFieldsModel"
import { usersAggregateFieldsModelPrimitives, UsersAggregateFieldsModelSelector } from "./UsersAggregateFieldsModel.base"
import { UsersMaxFieldsModel, UsersMaxFieldsModelType } from "./UsersMaxFieldsModel"
import { usersMaxFieldsModelPrimitives, UsersMaxFieldsModelSelector } from "./UsersMaxFieldsModel.base"
import { UsersMinFieldsModel, UsersMinFieldsModelType } from "./UsersMinFieldsModel"
import { usersMinFieldsModelPrimitives, UsersMinFieldsModelSelector } from "./UsersMinFieldsModel.base"
import { MutationRootModel, MutationRootModelType } from "./MutationRootModel"
import { mutationRootModelPrimitives, MutationRootModelSelector } from "./MutationRootModel.base"
import { SampleOutputModel, SampleOutputModelType } from "./SampleOutputModel"
import { sampleOutputModelPrimitives, SampleOutputModelSelector } from "./SampleOutputModel.base"
import { OnlineUsersMutationResponseModel, OnlineUsersMutationResponseModelType } from "./OnlineUsersMutationResponseModel"
import { onlineUsersMutationResponseModelPrimitives, OnlineUsersMutationResponseModelSelector } from "./OnlineUsersMutationResponseModel.base"
import { TodosMutationResponseModel, TodosMutationResponseModelType } from "./TodosMutationResponseModel"
import { todosMutationResponseModelPrimitives, TodosMutationResponseModelSelector } from "./TodosMutationResponseModel.base"
import { UsersMutationResponseModel, UsersMutationResponseModelType } from "./UsersMutationResponseModel"
import { usersMutationResponseModelPrimitives, UsersMutationResponseModelSelector } from "./UsersMutationResponseModel.base"
import { SubscriptionRootModel, SubscriptionRootModelType } from "./SubscriptionRootModel"
import { subscriptionRootModelPrimitives, SubscriptionRootModelSelector } from "./SubscriptionRootModel.base"


import { OnlineUsersSelectColumn } from "./OnlineUsersSelectColumnEnum"
import { OrderBy } from "./OrderByEnum"
import { TodosSelectColumn } from "./TodosSelectColumnEnum"
import { UsersSelectColumn } from "./UsersSelectColumnEnum"
import { TodosConstraint } from "./TodosConstraintEnum"
import { TodosUpdateColumn } from "./TodosUpdateColumnEnum"
import { UsersConstraint } from "./UsersConstraintEnum"
import { UsersUpdateColumn } from "./UsersUpdateColumnEnum"

export type OnlineUsersOrderBy = {
  id?: OrderBy
  last_seen?: OrderBy
  user?: UsersOrderBy
}
export type UsersOrderBy = {
  created_at?: OrderBy
  id?: OrderBy
  last_seen?: OrderBy
  name?: OrderBy
  todos_aggregate?: TodosAggregateOrderBy
}
export type TodosAggregateOrderBy = {
  count?: OrderBy
  max?: TodosMaxOrderBy
  min?: TodosMinOrderBy
}
export type TodosMaxOrderBy = {
  created_at?: OrderBy
  id?: OrderBy
  owner_id?: OrderBy
  title?: OrderBy
}
export type TodosMinOrderBy = {
  created_at?: OrderBy
  id?: OrderBy
  owner_id?: OrderBy
  title?: OrderBy
}
export type OnlineUsersBoolExp = {
  _and?: OnlineUsersBoolExp[]
  _not?: OnlineUsersBoolExp
  _or?: OnlineUsersBoolExp[]
  id?: UuidComparisonExp
  last_seen?: TimestamptzComparisonExp
  user?: UsersBoolExp
}
export type UuidComparisonExp = {
  _eq?: any
  _gt?: any
  _gte?: any
  _in?: any[]
  _is_null?: boolean
  _lt?: any
  _lte?: any
  _neq?: any
  _nin?: any[]
}
export type TimestamptzComparisonExp = {
  _eq?: any
  _gt?: any
  _gte?: any
  _in?: any[]
  _is_null?: boolean
  _lt?: any
  _lte?: any
  _neq?: any
  _nin?: any[]
}
export type UsersBoolExp = {
  _and?: UsersBoolExp[]
  _not?: UsersBoolExp
  _or?: UsersBoolExp[]
  created_at?: TimestamptzComparisonExp
  id?: UuidComparisonExp
  last_seen?: TimestamptzComparisonExp
  name?: StringComparisonExp
  todos?: TodosBoolExp
}
export type StringComparisonExp = {
  _eq?: string
  _gt?: string
  _gte?: string
  _ilike?: string
  _in?: string[]
  _is_null?: boolean
  _like?: string
  _lt?: string
  _lte?: string
  _neq?: string
  _nilike?: string
  _nin?: string[]
  _nlike?: string
  _nsimilar?: string
  _similar?: string
}
export type TodosBoolExp = {
  _and?: TodosBoolExp[]
  _not?: TodosBoolExp
  _or?: TodosBoolExp[]
  created_at?: TimestamptzComparisonExp
  id?: UuidComparisonExp
  is_completed?: BooleanComparisonExp
  is_public?: BooleanComparisonExp
  owner?: UsersBoolExp
  owner_id?: UuidComparisonExp
  title?: StringComparisonExp
}
export type BooleanComparisonExp = {
  _eq?: boolean
  _gt?: boolean
  _gte?: boolean
  _in?: boolean[]
  _is_null?: boolean
  _lt?: boolean
  _lte?: boolean
  _neq?: boolean
  _nin?: boolean[]
}
export type TodosOrderBy = {
  created_at?: OrderBy
  id?: OrderBy
  is_completed?: OrderBy
  is_public?: OrderBy
  owner?: UsersOrderBy
  owner_id?: OrderBy
  title?: OrderBy
}
export type SampleInput = {
  password: string
  username: string
}
export type OnlineUsersInsertInput = {
  id?: any
  last_seen?: any
  user?: UsersObjRelInsertInput
}
export type UsersObjRelInsertInput = {
  data: UsersInsertInput
  on_conflict?: UsersOnConflict
}
export type UsersInsertInput = {
  created_at?: any
  id?: any
  last_seen?: any
  name?: string
  todos?: TodosArrRelInsertInput
}
export type TodosArrRelInsertInput = {
  data: TodosInsertInput[]
  on_conflict?: TodosOnConflict
}
export type TodosInsertInput = {
  created_at?: any
  id?: any
  is_completed?: boolean
  is_public?: boolean
  owner?: UsersObjRelInsertInput
  owner_id?: any
  title?: string
}
export type TodosOnConflict = {
  constraint: TodosConstraint
  update_columns: TodosUpdateColumn[]
  where?: TodosBoolExp
}
export type UsersOnConflict = {
  constraint: UsersConstraint
  update_columns: UsersUpdateColumn[]
  where?: UsersBoolExp
}
export type OnlineUsersSetInput = {
  id?: any
  last_seen?: any
}
export type TodosSetInput = {
  created_at?: any
  id?: any
  is_completed?: boolean
  is_public?: boolean
  owner_id?: any
  title?: string
}
export type TodosPkColumnsInput = {
  id: any
}
export type UsersSetInput = {
  created_at?: any
  id?: any
  last_seen?: any
  name?: string
}
export type UsersPkColumnsInput = {
  id: any
}
export type JsonComparisonExp = {
  _eq?: any
  _gt?: any
  _gte?: any
  _in?: any[]
  _is_null?: boolean
  _lt?: any
  _lte?: any
  _neq?: any
  _nin?: any[]
}
export type OnlineUsersAggregateOrderBy = {
  count?: OrderBy
  max?: OnlineUsersMaxOrderBy
  min?: OnlineUsersMinOrderBy
}
export type OnlineUsersMaxOrderBy = {
  id?: OrderBy
  last_seen?: OrderBy
}
export type OnlineUsersMinOrderBy = {
  id?: OrderBy
  last_seen?: OrderBy
}
export type OnlineUsersArrRelInsertInput = {
  data: OnlineUsersInsertInput[]
}
export type OnlineUsersObjRelInsertInput = {
  data: OnlineUsersInsertInput
}
export type TodosObjRelInsertInput = {
  data: TodosInsertInput
  on_conflict?: TodosOnConflict
}
export type UsersAggregateOrderBy = {
  count?: OrderBy
  max?: UsersMaxOrderBy
  min?: UsersMinOrderBy
}
export type UsersMaxOrderBy = {
  created_at?: OrderBy
  id?: OrderBy
  last_seen?: OrderBy
  name?: OrderBy
}
export type UsersMinOrderBy = {
  created_at?: OrderBy
  id?: OrderBy
  last_seen?: OrderBy
  name?: OrderBy
}
export type UsersArrRelInsertInput = {
  data: UsersInsertInput[]
  on_conflict?: UsersOnConflict
}
/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {

}


/**
* Enums for the names of base graphql actions
*/



/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['query_root', () => QueryRootModel], ['online_users', () => OnlineUsersModel], ['users', () => UsersModel], ['todos', () => TodosModel], ['todos_aggregate', () => TodosAggregateModel], ['todos_aggregate_fields', () => TodosAggregateFieldsModel], ['todos_max_fields', () => TodosMaxFieldsModel], ['todos_min_fields', () => TodosMinFieldsModel], ['online_users_aggregate', () => OnlineUsersAggregateModel], ['online_users_aggregate_fields', () => OnlineUsersAggregateFieldsModel], ['online_users_max_fields', () => OnlineUsersMaxFieldsModel], ['online_users_min_fields', () => OnlineUsersMinFieldsModel], ['users_aggregate', () => UsersAggregateModel], ['users_aggregate_fields', () => UsersAggregateFieldsModel], ['users_max_fields', () => UsersMaxFieldsModel], ['users_min_fields', () => UsersMinFieldsModel], ['mutation_root', () => MutationRootModel], ['SampleOutput', () => SampleOutputModel], ['online_users_mutation_response', () => OnlineUsersMutationResponseModel], ['todos_mutation_response', () => TodosMutationResponseModel], ['users_mutation_response', () => UsersMutationResponseModel], ['subscription_root', () => SubscriptionRootModel]], [], "js"))
  .props({

  })
  .actions(self => ({
    queryOnline_users(variables: { distinctOn?: OnlineUsersSelectColumn[], limit?: number, offset?: number, orderBy?: OnlineUsersOrderBy[], where?: OnlineUsersBoolExp }, resultSelector: string | ((qb: OnlineUsersModelSelector) => OnlineUsersModelSelector) = onlineUsersModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ online_users: OnlineUsersModelType[]}>(`query online_users($distinctOn: [online_users_select_column!], $limit: Int, $offset: Int, $orderBy: [online_users_order_by!], $where: online_users_bool_exp) { online_users(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new OnlineUsersModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryOnline_users_aggregate(variables: { distinctOn?: OnlineUsersSelectColumn[], limit?: number, offset?: number, orderBy?: OnlineUsersOrderBy[], where?: OnlineUsersBoolExp }, resultSelector: string | ((qb: OnlineUsersAggregateModelSelector) => OnlineUsersAggregateModelSelector) = onlineUsersAggregateModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ online_users_aggregate: OnlineUsersAggregateModelType}>(`query online_users_aggregate($distinctOn: [online_users_select_column!], $limit: Int, $offset: Int, $orderBy: [online_users_order_by!], $where: online_users_bool_exp) { online_users_aggregate(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new OnlineUsersAggregateModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryTodos(variables: { distinctOn?: TodosSelectColumn[], limit?: number, offset?: number, orderBy?: TodosOrderBy[], where?: TodosBoolExp }, resultSelector: string | ((qb: TodosModelSelector) => TodosModelSelector) = todosModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ todos: TodosModelType[]}>(`query todos($distinctOn: [todos_select_column!], $limit: Int, $offset: Int, $orderBy: [todos_order_by!], $where: todos_bool_exp) { todos(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new TodosModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryTodos_aggregate(variables: { distinctOn?: TodosSelectColumn[], limit?: number, offset?: number, orderBy?: TodosOrderBy[], where?: TodosBoolExp }, resultSelector: string | ((qb: TodosAggregateModelSelector) => TodosAggregateModelSelector) = todosAggregateModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ todos_aggregate: TodosAggregateModelType}>(`query todos_aggregate($distinctOn: [todos_select_column!], $limit: Int, $offset: Int, $orderBy: [todos_order_by!], $where: todos_bool_exp) { todos_aggregate(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new TodosAggregateModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryTodos_by_pk(variables: { id: any }, resultSelector: string | ((qb: TodosModelSelector) => TodosModelSelector) = todosModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ todos_by_pk: TodosModelType}>(`query todos_by_pk($id: uuid!) { todos_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new TodosModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryUsers(variables: { distinctOn?: UsersSelectColumn[], limit?: number, offset?: number, orderBy?: UsersOrderBy[], where?: UsersBoolExp }, resultSelector: string | ((qb: UsersModelSelector) => UsersModelSelector) = usersModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ users: UsersModelType[]}>(`query users($distinctOn: [users_select_column!], $limit: Int, $offset: Int, $orderBy: [users_order_by!], $where: users_bool_exp) { users(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryUsers_aggregate(variables: { distinctOn?: UsersSelectColumn[], limit?: number, offset?: number, orderBy?: UsersOrderBy[], where?: UsersBoolExp }, resultSelector: string | ((qb: UsersAggregateModelSelector) => UsersAggregateModelSelector) = usersAggregateModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ users_aggregate: UsersAggregateModelType}>(`query users_aggregate($distinctOn: [users_select_column!], $limit: Int, $offset: Int, $orderBy: [users_order_by!], $where: users_bool_exp) { users_aggregate(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersAggregateModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryUsers_by_pk(variables: { id: any }, resultSelector: string | ((qb: UsersModelSelector) => UsersModelSelector) = usersModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ users_by_pk: UsersModelType}>(`query users_by_pk($id: uuid!) { users_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    mutateActionName(variables: { arg1: SampleInput }, resultSelector: string | ((qb: SampleOutputModelSelector) => SampleOutputModelSelector) = sampleOutputModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ actionName: SampleOutputModelType}>(`mutation actionName($arg1: SampleInput!) { actionName(arg1: $arg1) {
        ${typeof resultSelector === "function" ? resultSelector(new SampleOutputModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDelete_online_users(variables: { where: OnlineUsersBoolExp }, resultSelector: string | ((qb: OnlineUsersMutationResponseModelSelector) => OnlineUsersMutationResponseModelSelector) = onlineUsersMutationResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ delete_online_users: OnlineUsersMutationResponseModelType}>(`mutation delete_online_users($where: online_users_bool_exp!) { delete_online_users(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new OnlineUsersMutationResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDelete_todos(variables: { where: TodosBoolExp }, resultSelector: string | ((qb: TodosMutationResponseModelSelector) => TodosMutationResponseModelSelector) = todosMutationResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ delete_todos: TodosMutationResponseModelType}>(`mutation delete_todos($where: todos_bool_exp!) { delete_todos(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new TodosMutationResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDelete_todos_by_pk(variables: { id: any }, resultSelector: string | ((qb: TodosModelSelector) => TodosModelSelector) = todosModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ delete_todos_by_pk: TodosModelType}>(`mutation delete_todos_by_pk($id: uuid!) { delete_todos_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new TodosModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDelete_users(variables: { where: UsersBoolExp }, resultSelector: string | ((qb: UsersMutationResponseModelSelector) => UsersMutationResponseModelSelector) = usersMutationResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ delete_users: UsersMutationResponseModelType}>(`mutation delete_users($where: users_bool_exp!) { delete_users(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersMutationResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDelete_users_by_pk(variables: { id: any }, resultSelector: string | ((qb: UsersModelSelector) => UsersModelSelector) = usersModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ delete_users_by_pk: UsersModelType}>(`mutation delete_users_by_pk($id: uuid!) { delete_users_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateInsert_online_users(variables: { objects: OnlineUsersInsertInput[] }, resultSelector: string | ((qb: OnlineUsersMutationResponseModelSelector) => OnlineUsersMutationResponseModelSelector) = onlineUsersMutationResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ insert_online_users: OnlineUsersMutationResponseModelType}>(`mutation insert_online_users($objects: [online_users_insert_input!]!) { insert_online_users(objects: $objects) {
        ${typeof resultSelector === "function" ? resultSelector(new OnlineUsersMutationResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateInsert_online_users_one(variables: { object: OnlineUsersInsertInput }, resultSelector: string | ((qb: OnlineUsersModelSelector) => OnlineUsersModelSelector) = onlineUsersModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ insert_online_users_one: OnlineUsersModelType}>(`mutation insert_online_users_one($object: online_users_insert_input!) { insert_online_users_one(object: $object) {
        ${typeof resultSelector === "function" ? resultSelector(new OnlineUsersModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateInsert_todos(variables: { objects: TodosInsertInput[], onConflict?: TodosOnConflict }, resultSelector: string | ((qb: TodosMutationResponseModelSelector) => TodosMutationResponseModelSelector) = todosMutationResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ insert_todos: TodosMutationResponseModelType}>(`mutation insert_todos($objects: [todos_insert_input!]!, $onConflict: todos_on_conflict) { insert_todos(objects: $objects, on_conflict: $onConflict) {
        ${typeof resultSelector === "function" ? resultSelector(new TodosMutationResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateInsert_todos_one(variables: { object: TodosInsertInput, onConflict?: TodosOnConflict }, resultSelector: string | ((qb: TodosModelSelector) => TodosModelSelector) = todosModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ insert_todos_one: TodosModelType}>(`mutation insert_todos_one($object: todos_insert_input!, $onConflict: todos_on_conflict) { insert_todos_one(object: $object, on_conflict: $onConflict) {
        ${typeof resultSelector === "function" ? resultSelector(new TodosModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateInsert_users(variables: { objects: UsersInsertInput[], onConflict?: UsersOnConflict }, resultSelector: string | ((qb: UsersMutationResponseModelSelector) => UsersMutationResponseModelSelector) = usersMutationResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ insert_users: UsersMutationResponseModelType}>(`mutation insert_users($objects: [users_insert_input!]!, $onConflict: users_on_conflict) { insert_users(objects: $objects, on_conflict: $onConflict) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersMutationResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateInsert_users_one(variables: { object: UsersInsertInput, onConflict?: UsersOnConflict }, resultSelector: string | ((qb: UsersModelSelector) => UsersModelSelector) = usersModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ insert_users_one: UsersModelType}>(`mutation insert_users_one($object: users_insert_input!, $onConflict: users_on_conflict) { insert_users_one(object: $object, on_conflict: $onConflict) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdate_online_users(variables: { set?: OnlineUsersSetInput, where: OnlineUsersBoolExp }, resultSelector: string | ((qb: OnlineUsersMutationResponseModelSelector) => OnlineUsersMutationResponseModelSelector) = onlineUsersMutationResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ update_online_users: OnlineUsersMutationResponseModelType}>(`mutation update_online_users($set: online_users_set_input, $where: online_users_bool_exp!) { update_online_users(_set: $set, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new OnlineUsersMutationResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdate_todos(variables: { set?: TodosSetInput, where: TodosBoolExp }, resultSelector: string | ((qb: TodosMutationResponseModelSelector) => TodosMutationResponseModelSelector) = todosMutationResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ update_todos: TodosMutationResponseModelType}>(`mutation update_todos($set: todos_set_input, $where: todos_bool_exp!) { update_todos(_set: $set, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new TodosMutationResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdate_todos_by_pk(variables: { set?: TodosSetInput, pkColumns: TodosPkColumnsInput }, resultSelector: string | ((qb: TodosModelSelector) => TodosModelSelector) = todosModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ update_todos_by_pk: TodosModelType}>(`mutation update_todos_by_pk($set: todos_set_input, $pkColumns: todos_pk_columns_input!) { update_todos_by_pk(_set: $set, pk_columns: $pkColumns) {
        ${typeof resultSelector === "function" ? resultSelector(new TodosModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdate_users(variables: { set?: UsersSetInput, where: UsersBoolExp }, resultSelector: string | ((qb: UsersMutationResponseModelSelector) => UsersMutationResponseModelSelector) = usersMutationResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ update_users: UsersMutationResponseModelType}>(`mutation update_users($set: users_set_input, $where: users_bool_exp!) { update_users(_set: $set, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersMutationResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdate_users_by_pk(variables: { set?: UsersSetInput, pkColumns: UsersPkColumnsInput }, resultSelector: string | ((qb: UsersModelSelector) => UsersModelSelector) = usersModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ update_users_by_pk: UsersModelType}>(`mutation update_users_by_pk($set: users_set_input, $pkColumns: users_pk_columns_input!) { update_users_by_pk(_set: $set, pk_columns: $pkColumns) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    subscribeOnline_users(variables: { distinctOn?: OnlineUsersSelectColumn[], limit?: number, offset?: number, orderBy?: OnlineUsersOrderBy[], where?: OnlineUsersBoolExp }, resultSelector: string | ((qb: OnlineUsersModelSelector) => OnlineUsersModelSelector) = onlineUsersModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ online_users: OnlineUsersModelType[]}>(`subscription online_users($distinctOn: [online_users_select_column!], $limit: Int, $offset: Int, $orderBy: [online_users_order_by!], $where: online_users_bool_exp) { online_users(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new OnlineUsersModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    subscribeOnline_users_aggregate(variables: { distinctOn?: OnlineUsersSelectColumn[], limit?: number, offset?: number, orderBy?: OnlineUsersOrderBy[], where?: OnlineUsersBoolExp }, resultSelector: string | ((qb: OnlineUsersAggregateModelSelector) => OnlineUsersAggregateModelSelector) = onlineUsersAggregateModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ online_users_aggregate: OnlineUsersAggregateModelType}>(`subscription online_users_aggregate($distinctOn: [online_users_select_column!], $limit: Int, $offset: Int, $orderBy: [online_users_order_by!], $where: online_users_bool_exp) { online_users_aggregate(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new OnlineUsersAggregateModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    subscribeTodos(variables: { distinctOn?: TodosSelectColumn[], limit?: number, offset?: number, orderBy?: TodosOrderBy[], where?: TodosBoolExp }, resultSelector: string | ((qb: TodosModelSelector) => TodosModelSelector) = todosModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ todos: TodosModelType[]}>(`subscription todos($distinctOn: [todos_select_column!], $limit: Int, $offset: Int, $orderBy: [todos_order_by!], $where: todos_bool_exp) { todos(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new TodosModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    subscribeTodos_aggregate(variables: { distinctOn?: TodosSelectColumn[], limit?: number, offset?: number, orderBy?: TodosOrderBy[], where?: TodosBoolExp }, resultSelector: string | ((qb: TodosAggregateModelSelector) => TodosAggregateModelSelector) = todosAggregateModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ todos_aggregate: TodosAggregateModelType}>(`subscription todos_aggregate($distinctOn: [todos_select_column!], $limit: Int, $offset: Int, $orderBy: [todos_order_by!], $where: todos_bool_exp) { todos_aggregate(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new TodosAggregateModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    subscribeTodos_by_pk(variables: { id: any }, resultSelector: string | ((qb: TodosModelSelector) => TodosModelSelector) = todosModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ todos_by_pk: TodosModelType}>(`subscription todos_by_pk($id: uuid!) { todos_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new TodosModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    subscribeUsers(variables: { distinctOn?: UsersSelectColumn[], limit?: number, offset?: number, orderBy?: UsersOrderBy[], where?: UsersBoolExp }, resultSelector: string | ((qb: UsersModelSelector) => UsersModelSelector) = usersModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ users: UsersModelType[]}>(`subscription users($distinctOn: [users_select_column!], $limit: Int, $offset: Int, $orderBy: [users_order_by!], $where: users_bool_exp) { users(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    subscribeUsers_aggregate(variables: { distinctOn?: UsersSelectColumn[], limit?: number, offset?: number, orderBy?: UsersOrderBy[], where?: UsersBoolExp }, resultSelector: string | ((qb: UsersAggregateModelSelector) => UsersAggregateModelSelector) = usersAggregateModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ users_aggregate: UsersAggregateModelType}>(`subscription users_aggregate($distinctOn: [users_select_column!], $limit: Int, $offset: Int, $orderBy: [users_order_by!], $where: users_bool_exp) { users_aggregate(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersAggregateModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    subscribeUsers_by_pk(variables: { id: any }, resultSelector: string | ((qb: UsersModelSelector) => UsersModelSelector) = usersModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ users_by_pk: UsersModelType}>(`subscription users_by_pk($id: uuid!) { users_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
  })))

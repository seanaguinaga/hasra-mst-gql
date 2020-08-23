import * as React from "react"
import { observer, useObserver } from "mobx-react-lite"

import { TodosModelType } from "../models"
import { useQuery } from "../models/reactUtils"

export const Todo = observer(({ todo }: { todo: TodosModelType }) => {
  const { store, setQuery, loading, error } = useQuery(undefined)

  const toggle = () => setQuery(store.mutateUpdate_todos({set: {is_completed: !todo.is_completed}, where: {id: {"_eq": todo.id} }}))

  return useObserver(() => (
    <li onClick={() => toggle()}>
      <p className={`${todo.is_completed ? "strikethrough" : ""}`}>{todo.title}</p>
      {error && <span>Failed to update</span>}
      {loading && <span>(updating)</span>}
    </li>
  ))
})

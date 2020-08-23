import React, { useEffect } from "react"
import { observer} from "mobx-react-lite"
import { TodosModel, TodosModelType, useQuery } from "../models"
import { useObserver } from "mobx-react"

export const Todo = observer(({ todo }: { todo: TodosModelType }) => {
  const { setQuery, loading, error } = useQuery(undefined)


  return useObserver(() => (
    <li>
      <p className={`${todo.is_completed ? "strikethrough" : ""}`}>{todo.title}</p>
      {error && <span>Failed to update</span>}
      {loading && <span>(updating)</span>}
    </li>
  ))
})

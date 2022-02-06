import { useQuery } from "@apollo/client";
import client from "src/client";
import { TODO_QUERY, UPDATE_TODO_QUERY } from "src/queries/todo.query";

export const useTodo = () => {
    const { data, loading, error } = useQuery(TODO_QUERY)

    const add = (obj) => {
        const current = client.readQuery({ query: TODO_QUERY });
        const currentObj = current?.todo ?? [];
        client.writeQuery({
            query: TODO_QUERY,
            data: {
                todo: [
                    ...currentObj,
                    obj
                ]
            }
        })
    }
    const edit = (obj, id) => {
        client.cache.updateQuery(
            {
                query: UPDATE_TODO_QUERY,
                variables: {
                    id
                }
            },
            (existing) => {
                const newObj = existing.todo.map(item => {
                    if (item.id === id) {
                        return obj
                    } else {
                        return item
                    }
                })
                return {
                    todo: newObj
                }
            }
        )
    }
    const remove = (id) => {
        client.cache.updateQuery(
            {
                query: UPDATE_TODO_QUERY,
                variables: {
                    id
                }
            },
            (existing) => {
                const removedObj = existing.todo.filter(item => item.id !== id);
                return {
                    todo: [
                        ...removedObj
                    ]
                }
            }
        )
    }

    return [add, edit, remove, { data, loading, error }]
}
import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.1/'
})

export const todoListAPI = {
    getTodolists() {
        return instance.get<TodolistType[]>('todo-lists')
    },
    createTodolist(title: string) {
        return instance.post<ResponseType<{item: TodolistType}>>('todo-lists', {title})
    },
    deleteTodolist(todolistId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}`)
    },
    updateTodolist(todolistId: string, title: string) {
        return instance.put<ResponseType>(`todo-lists/${todolistId}`, {title})
    }
}

type TodolistType = {
    addedDate: string
    id: string
    order: number
    title: string
}
type ResponseType<T = {}> = {
    data: T
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}

export const tasksAPI = {
    getTasks(todolistId:string) {
        return instance.get<ResponseGetTasksType>(`todo-lists/${todolistId}/tasks`)
    },
    createTask(todolistId:string, title:string) {
        return instance.post<ResponseTaskType<{item: TaskType}>>(`todo-lists/${todolistId}/tasks`, {title})
    },
    deleteTask(todolistId:string, taskId:string) {
        return instance.delete<ResponseTaskType>(`todo-lists/${todolistId}/tasks/${taskId}`)
    },
    updateTask(todolistId:string, taskId:string, title:string) {
        return instance.put<ResponseTaskType>(`todo-lists/${todolistId}/tasks/${taskId}`, {title})
    },
}

type TaskType = {
    addedDate: string
    deadline: null
    description: null
    id: string
    order: number
    priority: number
    startDate: null
    status: number
    title: string
    todoListId: string
}

type ResponseGetTasksType = {
    error: null | string
    items: TaskType[]
    totalCount: number
}

type ResponseTaskType<T = {}> = {
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
    data: T
}
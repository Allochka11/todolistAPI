import React, {useEffect, useState} from 'react'
import axios from "axios";
import {tasksAPI, todoListAPI} from "../api/todoList-api";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todoListAPI.getTodolists()
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todoListAPI.createTodolist('NeWOneTitle')
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '0810e193-5ae8-44a4-88b0-3279294b11f1';
        const taskId = 'fb3a384f-d04d-4447-9075-4a2d01def46b';
        tasksAPI.deleteTask(todolistId,taskId).then(()=>{
            todoListAPI.deleteTodolist(todolistId)
                .then((res) => {
                    setState(res.data)
                })
        })


    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null);
    const todolistId = 'b1b1533d-3f93-461c-9ac0-3e538e4d0248'
    let title = 'Lalala';


    useEffect(() => {
        todoListAPI.updateTodolist(todolistId, title)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '0810e193-5ae8-44a4-88b0-3279294b11f1';
        tasksAPI.getTasks(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '0810e193-5ae8-44a4-88b0-3279294b11f1';
        const title = 'Task title';
        tasksAPI.createTask(todolistId, title)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '0810e193-5ae8-44a4-88b0-3279294b11f1';
        const taskId = 'e615939f-690b-4a77-ad9f-77c3028dd4fb';
        tasksAPI.deleteTask(todolistId,taskId)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '0810e193-5ae8-44a4-88b0-3279294b11f1';
        const taskId = 'e615939f-690b-4a77-ad9f-77c3028dd4fb';
        const title = 'Lalala1'
        tasksAPI.updateTask(todolistId,taskId, title)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}



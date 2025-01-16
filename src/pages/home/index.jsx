import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TaskList from '../../components/task-list'
import { getTaskList } from '../../redux/thunks/task'

const Home = () => {
    const dispatch = useDispatch()
    const { data } = useSelector(({ task }) => task)

    useEffect(() => {
        dispatch(getTaskList())
    }, [data.todo.length, data.completed.length])

    return (
        <div>
            <TaskList todoList={data?.todo} completedList={data?.completed} />
        </div>
    )
}

export default Home
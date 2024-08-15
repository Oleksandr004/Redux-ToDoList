import { FC } from 'react'
import styles from './ToDoList.module.scss'

import ToDoListItem from '../ToDoListItem/ToDoListItem'
import { useTypedSelector } from '../../hooks/UseTypedSelector'

const ToDoList: FC = () => {
	const todos = useTypedSelector((state) => state.todos.todoArray)
	if (!todos || todos.length === 0) {
		return <p className={styles.task__none}>Task list is empty</p>
	}
	return (
		<ul className={styles.list}>
			{todos.map((task) => {
				return (
					<ToDoListItem
						key={task.id}
						id={task.id}
						text={task.text}
						completed={task.completed}
					/>
				)
			})}
		</ul>
	)
}

export default ToDoList

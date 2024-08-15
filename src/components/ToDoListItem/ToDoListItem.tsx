import styles from './ToDoListItem.module.scss'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import {
	removeFromList,
	toggleTaskCompletion,
} from '../../features/ToDoListSlice'

interface IToDoListItemProps {
	text: string
	id: number
	completed: boolean
}

const ToDoListItem: FC<IToDoListItemProps> = ({ text, id, completed }) => {
	const dispatch = useDispatch()

	const handleDelete = () => {
		dispatch(removeFromList(id))
	}

	const handleToggleCompletion = () => {
		dispatch(toggleTaskCompletion(id))
	}

	return (
		<li className={styles.element}>
			<p
				style={completed ? { textDecoration: 'line-through' } : undefined}
				className={styles.title}
			>
				{text}
			</p>
			<button onClick={handleToggleCompletion} className={styles.complete__btn}>
				<img src='/check.png' alt='' />
			</button>
			<button onClick={handleDelete} className={styles.delete__btn}>
				<img src='/trash.png' alt='' />
			</button>
		</li>
	)
}

export default ToDoListItem

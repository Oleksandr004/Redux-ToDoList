import { ChangeEvent, FC, useState, FormEvent } from 'react'
import styles from './PopUp.module.scss'
import { useDispatch } from 'react-redux'
import { addToList } from '../../features/ToDoListSlice'

interface IPopUpProps {
	popUpState: boolean
	setPopUpActive: (active: boolean) => void
}

const PopUp: FC<IPopUpProps> = ({ popUpState, setPopUpActive }) => {
	const [taskText, setTaskText] = useState<string>('')
	const dispatch = useDispatch()

	function changingTextTask(e: ChangeEvent<HTMLInputElement>) {
		setTaskText(e.target.value)
	}

	function closePopUp() {
		setPopUpActive(!popUpState)
	}

	function addTask(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		dispatch(
			addToList({
				text: taskText,
				id: 0,
				completed: false,
			})
		)
		setTaskText('')
		closePopUp()
	}

	return (
		<div className={`${styles.pop_up} ${popUpState ? styles.active : ''}`}>
			<div className={styles.body}>
				<img
					onClick={closePopUp}
					className={styles.closer__btn}
					src='/closer.png'
					alt=''
				/>
				<h2 className={styles.title}>Add new Task: </h2>
				<form onSubmit={addTask}>
					{' '}
					<input
						onChange={changingTextTask}
						value={taskText}
						placeholder='Enter your task'
					/>
					<button className={styles.submit__btn} type='submit'>
						Add
					</button>
				</form>
			</div>
		</div>
	)
}

export default PopUp

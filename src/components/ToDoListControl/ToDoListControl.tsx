import { ChangeEvent, useState, FC } from 'react'
import styles from './ToDoListControl.module.scss'
import PopUp from '../PopUp/PopUp'
import { useDispatch } from 'react-redux'
import { filterList } from '../../features/ToDoListSlice'

const ToDoListControl: FC = () => {
	const dispath = useDispatch()

	const [popUp, setPopUpActive] = useState(false)
	const [searchText, setSearhText] = useState('')

	function handleClickPopUp() {
		setPopUpActive(!popUp)
	}

	function changeSeacrhText(e: ChangeEvent<HTMLInputElement>) {
		setSearhText(e.target.value)
	}

	function enterSearch() {
		dispath(filterList(searchText))
	}

	return (
		<>
			<div className={styles.control}>
				<div className={styles.search}>
					<input onChange={changeSeacrhText} placeholder='Search a task...' />
					<button className={styles.search__btn} onClick={enterSearch}>
						<img src='/sea	rch.png' alt='' />
					</button>
				</div>
				<button onClick={handleClickPopUp} className={styles['new-task__btn']}>
					New task
				</button>
			</div>
			<PopUp popUpState={popUp} setPopUpActive={setPopUpActive} />
		</>
	)
}
export default ToDoListControl

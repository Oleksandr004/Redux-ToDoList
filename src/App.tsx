import styles from './styles/main.module.scss'
import ToDoListControl from './components/ToDoListControl/ToDoListControl'
import ToDoList from './components/ToDoList/ToDoList'
const App = () => {
	return (
		<section className={styles.todo}>
			<div className={styles.container}>
				<div className={styles.body}>
					<h1>Things to do:</h1>
					<ToDoListControl />
					<ToDoList />
				</div>
			</div>
		</section>
	)
}

export default App

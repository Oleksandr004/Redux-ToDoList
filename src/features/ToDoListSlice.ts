import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ToDoItem {
	id: number
	text: string
	completed: boolean
}

interface ToDoListState {
	todoArray: ToDoItem[]
	originalArray: ToDoItem[]
}

const loadStateFromLocalStorage = (): ToDoListState => {
	try {
		const serializedState = localStorage.getItem('todoListState')
		if (serializedState === null) {
			return { todoArray: [], originalArray: [] }
		}
		return JSON.parse(serializedState)
	} catch (e) {
		return { todoArray: [], originalArray: [] }
	}
}

const saveStateToLocalStorage = (state: ToDoListState) => {
	try {
		const serializedState = JSON.stringify(state)
		localStorage.setItem('todoListState', serializedState)
	} catch (e) {
		return
	}
}

const initialState: ToDoListState = loadStateFromLocalStorage()

const toDoListSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addToList(state, action: PayloadAction<ToDoItem>) {
			const newTask = {
				id: Date.now(),
				text: action.payload.text,
				completed: action.payload.completed ?? false,
			}
			state.todoArray.push(newTask)
			state.originalArray.push(newTask)
			saveStateToLocalStorage(state)
		},
		removeFromList(state, action: PayloadAction<number>) {
			state.todoArray = state.todoArray.filter(
				(task) => task.id !== action.payload
			)
			state.originalArray = state.originalArray.filter(
				(task) => task.id !== action.payload
			)
			saveStateToLocalStorage(state)
		},
		toggleTaskCompletion(state, action: PayloadAction<number>) {
			const task = state.todoArray.find((task) => task.id === action.payload)
			if (task) {
				task.completed = !task.completed
				const originalTask = state.originalArray.find(
					(task) => task.id === action.payload
				)
				if (originalTask) {
					originalTask.completed = !task.completed
				}
				saveStateToLocalStorage(state)
			}
		},
		filterList(state, action: PayloadAction<string>) {
			const searchText = action.payload.toLowerCase()
			if (searchText) {
				state.todoArray = state.originalArray.filter((task) =>
					task.text.toLowerCase().includes(searchText)
				)
			} else {
				state.todoArray = [...state.originalArray]
			}
		},
	},
})

export const { addToList, removeFromList, toggleTaskCompletion, filterList } =
	toDoListSlice.actions
export default toDoListSlice.reducer

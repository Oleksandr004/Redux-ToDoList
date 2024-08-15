import { configureStore } from '@reduxjs/toolkit'
import ToDoListSlice from '../features/ToDoListSlice'

export const store = configureStore({
	reducer: {
		todos: ToDoListSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

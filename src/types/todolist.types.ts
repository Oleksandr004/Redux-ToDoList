export interface IInitialState {
	todoArray: ItodoArray[]
}
export interface ItodoArray {
	id: number
	text: string
	completed: boolean
}

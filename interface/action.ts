export interface Action {
	image: string
	actorName: string
	verb: string
	object?: string
	initial?: string
	final?: string
	date: Date
}

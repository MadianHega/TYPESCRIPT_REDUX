import { Todo } from '../types'

export const idGenerator = (todo: Todo[]): number => {
	let getRandomInt = (): number => {
		return Math.floor(Math.random() * Math.floor(1000000));
	}

	let idExist = (id: number, todo: Todo[]): boolean => {
		return !!todo.find((e) => e.id == id)
	}

	let idConform = false
	let newId = getRandomInt()

	while (idConform == false) {
		if (!idExist(newId, todo)) {
			idConform = true
		} else {
			newId = getRandomInt()
		}
	}

	return newId
}

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

//     addTodo = (title: string, todo: Todo[]) : void => {
// 			todo = [{
// 				id: this.idGenerator(this.todos),
// 				title: title,
// 				completed: false,
// 			}, ...this.todos]
//     }
    
//     deleteTodo = (id: number) : void => {
// 			this.todos = this.todos.filter(t => t.id !== id)
// 		}	
		
//     handleTodo = (Todo: Todo) : void => {
// 			this.todos = this.todos.map(t => t == Todo ? {...t, completed: true} : t)
// 		}
		
// 		updateTodo = (Todo: Todo, title: string) : void => {
// 			this.todos = this.todos.map(t => t == Todo ? {...t, title} : t)
// 		}

// 		allCompleted = (completed = true) => {
// 			this.todos = this.todos.map(t => t.completed !== completed ? {...t, completed} : t)
// 		}

// 		clearCompleted = () : void => {
// 			this.todos = this.todos.filter(t => !t.completed)
// 		}
// }
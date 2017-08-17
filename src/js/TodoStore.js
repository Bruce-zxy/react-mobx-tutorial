import { autorun, computed, observable } from 'mobx';

class Todo {
	@observable value;
	@observable id;
	@observable complete;
	constructor(value) {
		this.value = value;
		this.id = Date.now();
		this.complete = false;
	}

	// methods
}

class TodoStore {
	@observable todos = []
	@observable filter = ""
	@computed get filteredTodos() {
		var matchesFilter = new RegExp (this.filter, 'i');
		return this.todos.filter(todo=> !this.filter || matchesFilter.test(todo))
	}
	@observable option = {
		background: '#000',
		series: [
			{
				test1: 'test1'
			},
			{
				test2: 'test2'
			},
			{
				test3: 'test1'
			},
			{
				test4: 'test2'
			},
			{
				test5: 'test1'
			},
			{
				test6: 'test2'
			}
		],
		obj: {
			obj: {
				obj: 'obj'
			}
		}
	}
	createTodo(value) {
		this.todos.push(new Todo(value));
	}
}


var store = window.store = new TodoStore;

export default new TodoStore;

autorun(() => {
	console.log(store.option);
})
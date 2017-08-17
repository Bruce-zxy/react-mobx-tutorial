import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
export default class TodoList extends Component {
	filter(e) {
		this.props.store.filter = e.target.value;
	}
	createNew(e) {
		if (e.which === 13) {
			this.props.store.createTodo(e.target.value);
			e.target.value = '';
		}
	}
	render() {
		const { filter, option, filteredTodos, todos } = this.props.store;
		const newOption = Object.assign({}, option);
		var i;
		for (i in option) {
			if (newOption.hasOwnProperty(i)) {
				console.log(i);
			}
		}
		// console.log(newOption.series);
		const todoLis = filteredTodos.map(todo => (
			<li key={todo.id}>{todo.value}</li>
		))
		return <div>
				<h1>todos</h1>
				<input type="text" className="createNew" onKeyPress={this.createNew.bind(this)} />
				<input type="text" className="filter" value={filter} onChange={this.filter.bind(this)} />
				<ul>{todoLis}</ul>
			</div>
	}
}
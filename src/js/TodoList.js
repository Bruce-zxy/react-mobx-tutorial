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
		const { filter, filteredTodos, todos } = this.props.store;

		const todoLis = filteredTodos.map(todo => (
			<li>{todo}</li>
		))
		return <div>
				<h1>todos</h1>
				<input type="text" className="createNew" onKeyPress={this.createNew.bind(this)} />
				<input type="text" className="filter" value={filter} onChange={this.filter.bind(this)} />
				<ul>{todoLis}</ul>
			</div>
	}
}
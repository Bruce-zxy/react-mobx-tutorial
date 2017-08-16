import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
export default class TodoList extends Component {
	filter(e) {
		this.props.store.filter = e.target.value;
	}
	render() {
		const { filter, todos } = this.props.store;

		const todoLis = todos.map(todo => (
			<li>{todo}</li>
		))
		return <div>
				<h1>todos</h1>
				{filter}
				<input type="text" className="filter" value={filter} onChange={this.filter.bind(this)} />
				<ul>{todoLis}</ul>
			</div>
	}
}
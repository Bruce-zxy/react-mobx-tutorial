import React from 'react';
import ReactDom from 'react-dom';

import TodoList from './TodoList';
import store from './TodoStore';


ReactDom.render(<TodoList store={store}/>, document.getElementById("app"));
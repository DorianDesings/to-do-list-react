import { useState } from 'react';
import { v4 } from 'uuid';
import { GlobalStyles } from './styles/GlobalStyles';
import Tasks from './components/tasks/Tasks';
import Header from './components/header/Header';
import Input from './components/input/Input';
import Filters from './components/filters/Filters';
import Button from './components/button/Button';
import { FILTERS } from './constants/filters';

const App = () => {
	const [tasks, setTasks] = useState([]);
	const [filterActive, setFilterActive] = useState(FILTERS.ALL);

	const filteredTasks = filterTasks(filterActive, tasks);
	return (
		<>
			<GlobalStyles />
			<Header />
			<form onSubmit={event => handleSubmit(event, tasks, setTasks)}>
				<Input type='text' name='task' />
			</form>
			<Tasks
				tasks={filteredTasks}
				actionComplete={taskId => completeTask(tasks, setTasks, taskId)}
				actionDelete={taskId => deleteTask(tasks, setTasks, taskId)}
			/>
			<Filters filterActive={filterActive} setFilterActive={setFilterActive} />
		</>
	);
};

const filterActiveTasks = tasks => {
	return tasks.filter(task => !task.completed);
};

const filterCompletedTasks = tasks => {
	return tasks.filter(task => task.completed);
};

const filterTasks = (filterActive, tasks) => {
	switch (filterActive) {
		case FILTERS.ACTIVE:
			return filterActiveTasks(tasks);
		case FILTERS.COMPLETED:
			return filterCompletedTasks(tasks);
		case FILTERS.ALL:
			return [...tasks];
	}
};

const handleSubmit = (event, tasks, setTasks) => {
	event.preventDefault();
	createTask(event.target.task.value, tasks, setTasks);
	event.target.reset();
};

const createTask = (value, tasks, setTasks) => {
	const newTask = {
		id: v4(),
		task: value,
		completed: false
	};
	setTasks([...tasks, newTask]);
};

const completeTask = (tasks, setTasks, taskId) => {
	const tasksUpdated = tasks.map(task => {
		if (task.id === taskId) {
			task.completed = !task.completed;
		}

		return task;
	});

	setTasks(tasksUpdated);
};

const deleteTask = (tasks, setTasks, taskId) => {
	const tasksUpdated = tasks.filter(task => task.id !== taskId);
	setTasks(tasksUpdated);
};

export default App;

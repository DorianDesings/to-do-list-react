import { StyledTask } from './styles';

const Task = ({ task, completed, actionComplete, actionDelete }) => {
	console.log(task);
	return (
		<StyledTask $completed={completed}>
			<input type='checkbox' checked={completed} onChange={actionComplete} />
			<p>{task}</p>
			<span onClick={actionDelete}>X</span>
		</StyledTask>
	);
};

export default Task;

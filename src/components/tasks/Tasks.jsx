import Task from '../task/Task';
import { StyledTasks } from './styles';

const Tasks = ({ tasks, actionComplete, actionDelete }) => {
	return (
		<StyledTasks>
			{tasks.map(task => (
				<Task
					key={task.id}
					{...task}
					actionComplete={() => actionComplete(task.id)}
					actionDelete={() => actionDelete(task.id)}
				/>
			))}
		</StyledTasks>
	);
};

export default Tasks;

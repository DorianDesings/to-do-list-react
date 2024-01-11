import { FILTERS } from '../../constants/filters';
import { StyledFilter } from './styles';

const Filters = ({ filterActive, setFilterActive }) => {
	return (
		<div>
			<StyledFilter
				$active={filterActive === FILTERS.ALL}
				onClick={() => changeFilter(0, setFilterActive)}
			>
				All
			</StyledFilter>
			<StyledFilter
				$active={filterActive === FILTERS.ACTIVE}
				onClick={() => changeFilter(1, setFilterActive)}
			>
				Active
			</StyledFilter>
			<StyledFilter
				$active={filterActive === FILTERS.COMPLETED}
				onClick={() => changeFilter(2, setFilterActive)}
			>
				Completed
			</StyledFilter>
		</div>
	);
};

const changeFilter = (newFilter, setFilterActive) => {
	setFilterActive(newFilter);
};

export default Filters;

import styled from 'styled-components';

const StyledTask = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 3rem;
	padding: 1rem 1.25rem;
	color: ${({ $completed }) => ($completed ? '#8c8ca2' : '#c8cbe7')};
	border-bottom: 1px solid rgba(151, 151, 151, 0.3);
	cursor: pointer;
	text-decoration: ${({ $completed }) =>
		$completed ? 'line-through' : 'none'};
`;

export { StyledTask };

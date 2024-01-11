import styled from 'styled-components';

const StyledFilter = styled.button`
	background: none;
	border: none;
	color: ${({ $active }) => ($active ? '#3a7cfd' : '#9092a5')};
	font-weight: bold;
	font-size: 14px;
	cursor: pointer;
`;

export { StyledFilter };

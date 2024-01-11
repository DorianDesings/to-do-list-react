import styled from 'styled-components';

const StyledHeader = styled.header`
	height: 300px;
	padding: 3rem 1.5rem;
	background-image: url('./public/assets/images/bg-mobile-dark.jpg');
	background-repeat: no-repeat;
	background-size: cover;

	@media screen and (min-width: 768px) {
		background-image: url('./public/assets/images/bg-desktop-dark.jpg');
	}
`;

export { StyledHeader };

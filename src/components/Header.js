import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import logo from '../images/reactjs-icon.svg';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const Title = styled.h1`
	font-size: 3rem;
	color: white;
	margin-bottom: 5rem;
`;

const LogoReact = styled.img`
	width: 250px;
	margin-bottom: 5rem;
	animation-name: rotation;
	animation-duration: 10s;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

const Text = styled.p`
	color: white;
	font-size: 1.6rem;
`;

const Temp = () => (
	<Container>
		<Row>
			<Col col sm="12">
				<Wrapper>
					<Title>Welcome to React Boilerplate</Title>
					<LogoReact src={logo} />
					<Text>
						Just edit 'src/components/App.js' to start creating your application
					</Text>
				</Wrapper>
			</Col>
		</Row>
	</Container>
);

export default Temp;

import {AbsoluteFill} from 'remotion';
import styled from 'styled-components';
import {LogoWithTitle} from './LogoWithTitle';

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex: 1;
	align-items: center;
`;

const Subtitle = styled.div`
	font-size: 79px;
	font-family: 'SF Pro Text';
	font-weight: 700;
	position: absolute;
	margin-top: 600px;
	margin-left: 1005px;
	background: linear-gradient(to right, #4290f5, #42e9f5);
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
	text-fill-color: transparent;
`;

export const SocialPreview: React.FC = () => {
	return (
		<AbsoluteFill style={{backgroundColor: 'white'}}>
			<Container
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
					transform: `scale(0.88)`,
				}}
			>
				<LogoWithTitle />
			</Container>
			<Subtitle>Create videos in React</Subtitle>
		</AbsoluteFill>
	);
};

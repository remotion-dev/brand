import styled from 'styled-components';
import {Logo} from './Logo';

const Title = styled.div`
	font-size: 210px;
	font-family: 'SF Pro Text';
	font-weight: 700;
`;

export const LogoWithTitle: React.FC = () => {
	return (
		<div
			style={{
				flex: 1,
				display: 'flex',
				backgroundColor: 'white',
				flexDirection: 'row',
				alignItems: 'center',
				fontFamily: 'Helvetica',
			}}
		>
			<Logo />
			<div style={{flex: 1}}>
				<Title>Remotion</Title>
			</div>
		</div>
	);
};

import styled from 'styled-components';
import {Triangle} from './Triangle';

const Outer = styled.div`
	display: flex;
	justify-content: center;
	flex: 1;
	align-items: center;
`;

export const Logo: React.FC = () => {
	return (
		<Outer>
			<Triangle size={1100} opacity={0.2} />
			<Triangle size={900} opacity={0.4} />
			<Triangle size={700} opacity={1} />
		</Outer>
	);
};

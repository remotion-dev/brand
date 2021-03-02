import styled from 'styled-components';
import {Triangle} from './Triangle';

const Outer = styled.div`
	display: flex;
	justify-content: center;
	flex: 1;
	align-items: center;
`;

export const Monochromatic: React.FC = () => {
	return (
		<Outer>
			<Triangle size={1100} opacity={0.2} color1="white" color2="white" />
			<Triangle size={900} opacity={0.4} color1="white" color2="white" />
			<Triangle size={700} opacity={1} color1="white" color2="white" />
		</Outer>
	);
};

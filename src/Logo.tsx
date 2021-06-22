import styled from 'styled-components';
import {Triangle} from './Triangle';

const Outer = styled.div`
	display: flex;
	justify-content: center;
	flex: 1;
	align-items: center;
`;

export const Logo: React.FC<{
	size: number;
}> = ({size}) => {
	return (
		<Outer>
			<Triangle size={size} opacity={0.2} />
			<Triangle size={(size * 9) / 11} opacity={0.4} />
			<Triangle size={(size * 7) / 11} opacity={1} />
		</Outer>
	);
};

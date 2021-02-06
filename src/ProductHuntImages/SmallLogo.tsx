import {Triangle} from '../Triangle';

export const SmallLogo: React.FC = () => {
	return (
		<div
			style={{
				position: 'absolute',
				left: 40,
				top: 20,
			}}
		>
			<div
				style={{
					position: 'absolute',
					height: 110,
					width: 110,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Triangle size={110} opacity={0.2} />
				<Triangle size={90} opacity={0.4} />
				<Triangle size={70} opacity={1} />
			</div>
		</div>
	);
};

import {AbsoluteFill} from 'remotion';
import {SmallLogo} from './SmallLogo';
import {BlueGradient, Title} from './Typography';
import {InstallFrame} from './Yarn';

export const Image3: React.FC = () => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'white',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<SmallLogo />
			<Title>
				Get started in <BlueGradient>1 minute</BlueGradient>
			</Title>
			<br />
			<br />
			<br />
			<InstallFrame />
		</AbsoluteFill>
	);
};

import React from 'react';
import {AbsoluteFill} from 'remotion';
import {AnimatedLogo} from './animated-logo/AnimatedLogo';

export const EmailSignature: React.FC = () => {
	return (
		<AbsoluteFill
			style={{
				transform: `scale(1.34)`,
			}}
		>
			<AnimatedLogo scaleLogo theme="light" />
		</AbsoluteFill>
	);
};

import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {springA} from './springs';

export const FirstO: React.FC = () => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const progress = spring({
		fps,
		frame: frame - springA.delay,
		config: springA.config,
	});

	const xOffset = interpolate(progress, [0, 1], [920, 0]);

	const widthExtension = interpolate(progress, [0, 0.5, 1], [0, 300, 0]);

	return (
		<g>
			<rect
				x={1216 + xOffset}
				y={359}
				width={126 + widthExtension}
				height={126}
				stroke="currentColor"
				strokeWidth={46}
				rx={63}
			/>
		</g>
	);
};

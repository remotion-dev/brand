import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const FirstO: React.FC = () => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const progress = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
		durationInFrames: 16,
	});

	const xOffset = interpolate(progress, [0, 1], [1200, 0]);

	const widthExtension = interpolate(progress, [0, 0.5, 1], [0, 300, 0]);

	return (
		<g>
			<rect
				x={1216 + xOffset}
				y={359}
				width={126 + widthExtension}
				height={126}
				stroke="black"
				strokeWidth={46}
				rx={63}
			/>
		</g>
	);
};

import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {springC} from './springs';
import svg = require('svg-path-properties');
// @ts-expect-error no types
import reverse = require('svg-path-reverse');

const p1 = reverse.reverse('M1511 335 L1511 508');

export const I: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const progress = spring({
		fps,
		frame: frame - springC.delay,
		config: springC.config,
	});

	const sprProgress = interpolate(progress, [0, 0.8], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const iPointProgress = interpolate(progress, [0.8, 1], [0, 1], {
		extrapolateLeft: 'clamp',
	});

	const length1 = svg.svgPathProperties(p1).getTotalLength();
	const strokeDashArray = `${length1}`;
	const strokeDashoffset = length1 - length1 * sprProgress;

	return (
		<g>
			{iPointProgress > 0 && (
				<circle
					cx="1510.5"
					cy="293.5"
					r="22"
					fill="currentcolor"
					style={{
						transformOrigin: '50% 50%',
						transformBox: 'fill-box',
						transform: `translateY(${interpolate(
							iPointProgress,
							[0, 1],
							[100, 0]
						)}px)`,
					}}
				/>
			)}
			<path
				strokeDasharray={strokeDashArray}
				strokeDashoffset={strokeDashoffset}
				d={p1}
				stroke="currentcolor"
				strokeWidth="46"
			/>
		</g>
	);
};

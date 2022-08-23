import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {springB, springC} from './springs';
import svg = require('svg-path-properties');
// @ts-expect-error no types
import reverse = require('svg-path-reverse');

const d1 = reverse.reverse('M1410 292L1410 513');
const d2 = 'M1410 358L1451 358';

export const T: React.FC = () => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const progress = spring({
		fps,
		frame: frame - springB.delay,
		config: springB.config,
	});
	const progress2 = spring({
		fps,
		frame: frame - springC.delay,
		config: springC.config,
	});

	const length1 = svg.svgPathProperties(d1).getTotalLength();
	const strokeDashArray = `${length1}`;
	const strokeDashoffset = length1 - length1 * progress;

	const length2 = svg.svgPathProperties(d2).getTotalLength();
	const strokeDashArray2 = `${length2}`;
	const strokeDashoffset2 = length2 - length2 * progress2;

	return (
		<>
			<path
				d={d1}
				stroke="black"
				strokeWidth="46"
				strokeDasharray={strokeDashArray}
				strokeDashoffset={strokeDashoffset}
				style={{
					transform: `translateY(${interpolate(progress, [0, 1], [30, 0])}px)`,
				}}
			/>
			<path
				d="M1410 358L1451 358"
				stroke="black"
				strokeWidth="46"
				strokeLinecap="round"
				strokeDasharray={strokeDashArray2}
				strokeDashoffset={strokeDashoffset2}
			/>
		</>
	);
};

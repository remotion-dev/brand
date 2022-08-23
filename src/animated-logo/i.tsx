import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {springC, springD} from './springs';
import svg = require('svg-path-properties');

const p1 = 'M1511 358L1511 485';

export const I: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const spr = spring({
		fps,
		frame: frame - springD.delay,
		config: springD.config,
	});

	const progress = spring({
		fps,
		frame: frame - springC.delay,
		config: springC.config,
	});

	const length1 = svg.svgPathProperties(p1).getTotalLength();
	const strokeDashArray = `${length1}`;
	const strokeDashoffset = length1 - length1 * progress;

	return (
		<g>
			<path
				strokeDasharray={strokeDashArray}
				strokeDashoffset={strokeDashoffset}
				d={p1}
				stroke="black"
				strokeWidth="46"
				strokeLinecap="square"
			/>
			<circle
				cx="1510.5"
				cy="293.5"
				r="23"
				fill="black"
				style={{
					transformOrigin: '50% 50%',
					transformBox: 'fill-box',
					transform: `scale(${spr})`,
				}}
			/>
		</g>
	);
};

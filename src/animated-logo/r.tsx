import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import svg = require('svg-path-properties');

const d = 'M630 485V415C630 383.52 655.52 358 687 358V358';

export const R: React.FC = () => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();
	const progress = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
	});

	const length = svg.svgPathProperties(d).getTotalLength();

	const strokeDashArray = `${length}`;
	const strokeDashoffset = length - length * progress;

	return (
		<path
			d={d}
			strokeDasharray={strokeDashArray}
			strokeDashoffset={strokeDashoffset}
			stroke="black"
			strokeWidth="46"
			strokeLinecap="square"
		/>
	);
};

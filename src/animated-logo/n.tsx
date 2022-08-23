import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {springD} from './springs';
import svg = require('svg-path-properties');

const d =
	'M1771 485V415C1771 383.52 1796.52 358 1828 358V358C1859.48 358 1885 383.52 1885 415V485';

export const N: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const progress = spring({
		fps,
		frame: frame - springD.delay,
		config: springD.config,
	});

	const length = svg.svgPathProperties(d).getTotalLength();

	const strokeDashArray = `${length}`;
	const strokeDashoffset = length - length * progress;

	return (
		<path
			d={d}
			stroke="black"
			strokeWidth="46"
			strokeDasharray={strokeDashArray}
			strokeDashoffset={strokeDashoffset}
			strokeLinecap="square"
		/>
	);
};

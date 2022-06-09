import React from 'react';
import {
	AbsoluteFill,
	Sequence,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Showcase} from '.';
import {TriangleEntrace} from '../TriangleEntrance';
import {ShowcaseSubmit} from './ShowcaseSubmit';

export const ShowcaseMaster: React.FC = () => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();
	const progress = spring({
		fps,
		frame: frame - 90,
		config: {
			damping: 200,
		},
	});

	return (
		<AbsoluteFill>
			<Showcase />
			<Sequence from={90}>
				<TriangleEntrace type="in" progress={progress}>
					<ShowcaseSubmit />
				</TriangleEntrace>
			</Sequence>
		</AbsoluteFill>
	);
};

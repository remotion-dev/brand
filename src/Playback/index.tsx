import React from 'react';
import {Series} from 'remotion';
import {ComboMoves} from './ComboMoves';
import {Cursor} from './Cursor';
import {Playback} from './Playback';
import {Support} from './Support';
import {Transition} from './Transition';

export const JKL: React.FC = () => {
	return (
		<Series>
			<Series.Sequence durationInFrames={140}>
				<Playback />
			</Series.Sequence>
			<Series.Sequence durationInFrames={140} offset={-20}>
				<Transition type="in">
					<Cursor />
				</Transition>
			</Series.Sequence>
			<Series.Sequence durationInFrames={140} offset={-24}>
				<Transition type="in">
					<ComboMoves />
				</Transition>
			</Series.Sequence>
			<Series.Sequence durationInFrames={140} offset={-24}>
				<Transition type="in">
					<Support />
				</Transition>
			</Series.Sequence>
		</Series>
	);
};

import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {springB, springD} from './springs';

const strokeWidth = 46;

const filmRollDots = 5;

export const FilmRoll: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const innerSpr = spring({
		fps,
		frame: frame - springB.delay,
		config: springB.config,
	});

	const devolve = spring({
		fps,
		frame: frame - springD.delay,
		config: springD.config,
	});

	const secondR = interpolate(devolve, [0, 1], [0, 63.5 - strokeWidth / 2]);

	const dotScale = Math.max(0, 1 - devolve - 0.01);

	const toMove = 600;
	const right = interpolate(innerSpr, [0, 1], [toMove, 0]);
	const r = 86.5;
	const circumference = r * 2 * Math.PI;
	const rotations = toMove / circumference;

	const rotate = interpolate(innerSpr, [0, 1], [0, -rotations * Math.PI * 2]);

	return (
		<>
			<g
				style={{
					transformBox: 'fill-box',
					transformOrigin: 'center center',
					transform: `translateX(${right}px) rotate(${rotate}rad)`,
					mask: 'url(#cirmask)',
				}}
			>
				<mask id="cirmask">
					<circle cx="1642.5" cy="421.5" r={r} fill="white" />
				</mask>
				<circle
					cx="1642.5"
					cy="421.5"
					r={r}
					stroke="black"
					fill="black"
					style={{
						transformBox: 'fill-box',
						transformOrigin: 'center center',
					}}
				/>
				<circle
					cx="1642.5"
					cy="421.5"
					r={secondR}
					fill="white"
					style={{
						transformBox: 'fill-box',
						transformOrigin: 'center center',
					}}
				/>
				<g>
					{new Array(filmRollDots).fill(true).map((f, i) => {
						return (
							<circle
								cx="1642.5"
								cy="421.5"
								r={14}
								fill="white"
								style={{
									transformBox: 'fill-box',
									transformOrigin: 'center center',
									transform: `translateX(${
										Math.sin((i / filmRollDots) * Math.PI * 2) *
										(50 + (1 - dotScale) * 100)
									}px) translateY(${
										Math.cos((i / filmRollDots) * Math.PI * 2) *
										(50 + (1 - dotScale) * 100)
									}px) `,
								}}
							/>
						);
					})}
				</g>
			</g>
		</>
	);
};

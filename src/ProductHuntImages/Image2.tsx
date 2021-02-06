import 'hack-font/build/web/hack.css';
import React from 'react';
import {AbsoluteFill} from 'remotion';
import {SmallLogo} from './SmallLogo';
import {Terminal} from './Terminal';
import {BlueGradient, Title} from './Typography';

export const Image2: React.FC = () => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'white',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<SmallLogo />
			<br />
			<br />
			<br />
			<Title>
				Render to a <BlueGradient>MP4</BlueGradient> file
			</Title>
			<br />
			<br />
			<div
				style={{
					width: 1000,
					height: 500,
					display: 'flex',
				}}
			>
				<Terminal />
			</div>
		</AbsoluteFill>
	);
};

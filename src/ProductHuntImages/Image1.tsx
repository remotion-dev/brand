import React from 'react';
import {AbsoluteFill} from 'remotion';
import editor from './editor.png';
import preview from './preview.png';
import {SmallLogo} from './SmallLogo';
import {BlackGradient, BlueGradient, Title, TitleRight} from './Typography';

export const Image1: React.FC = () => {
	return (
		<AbsoluteFill style={{backgroundColor: 'white'}}>
			<SmallLogo />
			<Title
				style={{
					position: 'absolute',
					top: 170,
					left: 56,
				}}
			>
				<BlackGradient>Code in</BlackGradient>{' '}
				<BlueGradient>React</BlueGradient>
			</Title>
			<Title
				style={{
					position: 'absolute',
					top: 95,
					left: 580,
				}}
			>
				<BlackGradient>Preview with</BlackGradient>{' '}
				<TitleRight>Fast Refresh</TitleRight>
			</Title>
			<img
				src={editor}
				style={{
					width: 700,
					top: 230,
					left: 30,
					position: 'absolute',
				}}
			/>
			<img
				src={preview}
				style={{
					width: 700,
					position: 'absolute',
					left: 550,
					top: 150,
				}}
			/>
		</AbsoluteFill>
	);
};

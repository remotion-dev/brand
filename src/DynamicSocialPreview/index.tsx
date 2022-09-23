import {AbsoluteFill} from 'remotion';
import styled from 'styled-components';
import {Logo} from '../Logo';
import {Swirl} from '../Swirl';

const Container = styled.div`
	flex: 1;
	padding: 100px;
	font-family: GT Planar;
`;

const Title = styled.h1`
	font-size: 5.5em;
	margin-top: 0;
	font-weight: 700;
	margin-bottom: 0;
`;

const Description = styled.p`
	color: #444;
	font-size: 3.2em;
	margin: 0;
	margin-top: 20px;
	line-height: 1.3;
	font-weight: 500;
	max-width: 90%;
	max-lines: 2;
	overflow: hidden;
	text-overflow: ellipsis;
	line-clamp: 2;
	box-orient: vertical;
	font-family: SF Pro;
`;

const GradientText = styled.span`
	font-family: GT Planar;
`;

export const DynamicSocialPreview: React.FC<{
	title: string;
	description: string;
}> = ({title, description}) => {
	return (
		<AbsoluteFill style={{backgroundColor: 'white'}}>
			<AbsoluteFill>
				<Container>
					<div
						style={{width: 100, height: 100, marginLeft: -10, marginTop: 10}}
					>
						<Logo size={120} />
					</div>
					<div style={{marginTop: -10, height: 100}}>
						<Title>
							<GradientText>{title}</GradientText>
						</Title>
						<Description>{description}</Description>
					</div>
					<div
						style={{
							position: 'absolute',
							bottom: 58,
							right: 100,
							fontSize: 36,
							lineHeight: 1.1,
							fontWeight: 700,
							textAlign: 'right',
						}}
					>
						Make videos <br />
						programmatically.
					</div>
				</Container>
			</AbsoluteFill>
			<AbsoluteFill>
				<Swirl />
			</AbsoluteFill>
		</AbsoluteFill>
	);
};

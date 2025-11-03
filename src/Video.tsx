import {getVideoMetadata, VideoMetadata} from '@remotion/media-utils';
import {useEffect, useState} from 'react';
import {Composition, continueRender, delayRender, Folder} from 'remotion';
import {AnimatedBanner} from './animated-logo/AnimatedBanner';
import {AnimatedLogo} from './animated-logo/AnimatedLogo';
import {AnimatedLogoStringer} from './animated-logo/AnimatedLogoStinger';
import {AnimatedMaster} from './animated-logo/AnimatedMaster';
import {Arcs} from './animated-logo/Arcs';
import {ExplodingLogo} from './animated-logo/ExplodingLogo';
import {FilmRoll} from './animated-logo/film-roll';
import {Banner} from './Brand/Banner';
import {Comp} from './Brand/Composition';
import {TriangleDemo} from './Brand/TriangleToSquare';
import {EmailSignature} from './EmailSignature';
import {Logo} from './Logo';
import {LogoWithTitle} from './LogoWithTitle';
import {ProductHuntLogo} from './ScalingLogo';
import {ShowcaseVideo} from './showcase-video';
import {LowerReference} from './video-elements/lower-reference';
import {MoneyBurn} from './video-elements/money-burn';
import {NumberedChapter} from './video-elements/numbered-chapter';
import {UpperReference} from './video-elements/upper-reference';
import {UpperThird} from './video-elements/UpperThird';

const muxId = 'EV00V02hvNnfTYYYsTKtIzb7MfMAsZkSXQfDP001V1yC7I';
// Const muxId = 'zDEoYi6tII8cA017JrZpqyx1hf2ErMaPUklUSSkdkhKk';

export const RemotionVideo: React.FC = () => {
	const [handle] = useState(() => delayRender());
	const [videoMetadata, setVideoMetadata] = useState<VideoMetadata | null>(
		null
	);

	useEffect(() => {
		getVideoMetadata(`https://stream.mux.com/${muxId}/high.mp4`)
			.then((data) => {
				setVideoMetadata(data);
				continueRender(handle);
			})
			.catch((err) => {
				console.log('could not get video metadata', err);
			});
	}, [handle]);

	return (
		<>
			<Composition
				component={ProductHuntLogo}
				width={240}
				height={240}
				fps={30}
				durationInFrames={90}
				id="scaling-logo"
			/>
			<Composition
				component={ShowcaseVideo}
				width={1080}
				height={1080}
				fps={30}
				durationInFrames={Math.floor(
					(videoMetadata?.durationInSeconds ?? 1) * 30
				)}
				id="showcase-video"
				defaultProps={{
					muxId,
					videoMetadata,
				}}
			/>
			<Folder name="animated-logo">
				<Composition
					component={FilmRoll}
					width={1080}
					height={1080}
					fps={30}
					durationInFrames={450}
					id="film-roll"
				/>
				<Composition
					component={AnimatedLogo}
					width={1080}
					height={1080}
					fps={30}
					durationInFrames={450}
					id="animated-logo"
					defaultProps={{
						theme: 'light',
					}}
				/>
				<Composition
					component={AnimatedBanner}
					width={1080}
					height={500}
					fps={30}
					durationInFrames={60}
					id="animated-logo-banner-light"
					defaultProps={{
						theme: 'light' as const,
					}}
				/>
				<Composition
					component={EmailSignature}
					width={500}
					height={160}
					fps={30}
					durationInFrames={80}
					id="email-signature"
				/>
				<Composition
					component={AnimatedBanner}
					width={1080}
					height={500}
					fps={30}
					durationInFrames={60}
					id="animated-logo-banner-dark"
					defaultProps={{
						theme: 'dark' as const,
					}}
				/>
				<Composition
					component={AnimatedLogoStringer}
					width={1920}
					height={1080}
					fps={30}
					durationInFrames={80}
					id="animated-logo-stinger"
				/>
				<Composition
					component={Arcs}
					width={1080}
					height={1080}
					fps={30}
					durationInFrames={450}
					id="arcs"
				/>
				<Composition
					component={AnimatedMaster}
					width={1080}
					height={1080}
					fps={30}
					durationInFrames={450}
					id="animated-master"
				/>
			</Folder>
			<Folder name="static-logo">
				<Composition
					component={Logo}
					width={820}
					height={820}
					fps={30}
					durationInFrames={1}
					id="Logo"
					defaultProps={{
						size: 1100,
					}}
				/>
				<Composition
					component={Logo}
					width={820}
					height={820}
					fps={30}
					durationInFrames={1}
					id="LogoWhite"
					defaultProps={{
						color: 'white',
						size: 1100,
					}}
				/>
				<Composition
					component={LogoWithTitle}
					width={2100}
					height={1080}
					fps={30}
					durationInFrames={1}
					id="LogoWithTitle"
					defaultProps={{
						yOffset: 0,
					}}
				/>
				<Composition
					component={ExplodingLogo}
					width={1920}
					height={1080}
					fps={30}
					durationInFrames={200}
					id="ExplodingLogo"
					defaultProps={{
						theme: 'light',
					}}
				/>
			</Folder>
			<Folder name="video-elements">
				<Composition
					id="lower-third-reference"
					component={LowerReference}
					durationInFrames={5 * 30}
					fps={30}
					width={1920}
					height={1080}
				/>
				<Composition
					id="upper-third-reference"
					component={UpperReference}
					durationInFrames={5 * 30}
					fps={30}
					width={1920}
					height={1080}
				/>
				<Composition
					id="upper-third"
					component={UpperThird}
					durationInFrames={5 * 30}
					fps={30}
					width={1920}
					height={1080}
				/>
				<Composition
					id="numbered-chapter"
					component={NumberedChapter}
					durationInFrames={36}
					fps={30}
					width={1920}
					height={1080}
				/>
				<Composition
					id="money-burn"
					component={MoneyBurn}
					durationInFrames={36}
					fps={30}
					width={1920}
					height={1080}
				/>
			</Folder>
			<Folder name="recorder">
				<Composition
					id="LightMode"
					component={Comp}
					durationInFrames={120}
					fps={30}
					width={1080}
					height={1080}
					defaultProps={{
						theme: 'light',
					}}
				/>
				<Composition
					id="LightModeBanner"
					component={Banner}
					durationInFrames={120}
					fps={30}
					width={1080}
					height={540}
					defaultProps={{
						theme: 'light',
					}}
				/>
				<Composition
					id="DarkMode"
					component={Comp}
					durationInFrames={120}
					fps={30}
					width={1080}
					height={1080}
					defaultProps={{
						theme: 'dark',
					}}
				/>
				<Composition
					id="DarkModeBanner"
					component={Banner}
					durationInFrames={120}
					fps={30}
					width={1080}
					height={540}
					defaultProps={{
						theme: 'dark',
					}}
				/>
				<Composition
					id="TriangletoSwquare"
					component={TriangleDemo}
					durationInFrames={240}
					fps={30}
					width={1080}
					height={1080}
					defaultProps={{theme: 'light'}}
				/>
			</Folder>
		</>
	);
};

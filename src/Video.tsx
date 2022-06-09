import {getVideoMetadata, VideoMetadata} from '@remotion/media-utils';
import {useEffect, useState} from 'react';
import {Composition, continueRender, delayRender, Folder} from 'remotion';
import {ShowcaseVideo} from '../showcase-video';
import {TwoPointFive} from './2-5';
import {DynamicSocialPreview} from './DynamicSocialPreview';
import {Logo} from './Logo';
import {LogoWithTitle} from './LogoWithTitle';
import {Monochromatic} from './Monochromatic';
import {JKL} from './Playback';
import {ComboMoves} from './Playback/ComboMoves';
import {Cursor} from './Playback/Cursor';
import {Support} from './Playback/Support';
import {Image1} from './ProductHuntImages/Image1';
import {Image2} from './ProductHuntImages/Image2';
import {Image3} from './ProductHuntImages/Image3';
import {ProductHuntLogo} from './ProductHuntLogo';
import {Showcase} from './Showcase';
import {ShowcaseMaster} from './Showcase/Master';
import {ShowcaseSubmit} from './Showcase/ShowcaseSubmit';
import {SocialPreview} from './SocialPreview';
import {Swirl} from './Swirl';
import {Vision} from './Vision';

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
				component={SocialPreview}
				width={2000}
				height={1000}
				fps={30}
				durationInFrames={1}
				id="SocialPreview"
			/>
			<Composition
				component={ProductHuntLogo}
				width={240}
				height={240}
				fps={30}
				durationInFrames={90}
				id="ProductHunt"
			/>
			<Composition
				component={Image1}
				width={1270}
				height={760}
				fps={30}
				durationInFrames={1}
				id="Image1"
			/>
			<Composition
				component={Image2}
				width={1270}
				height={760}
				fps={30}
				durationInFrames={1}
				id="Image2"
			/>
			<Composition
				component={Image3}
				width={1270}
				height={760}
				fps={30}
				durationInFrames={1}
				id="Image3"
			/>
			<Composition
				component={Monochromatic}
				width={820}
				height={820}
				fps={30}
				durationInFrames={1}
				id="Monochromatic"
			/>
			<Composition
				component={DynamicSocialPreview}
				width={1200}
				height={630}
				fps={30}
				durationInFrames={1}
				id="DynamicSocialPreview"
				defaultProps={{
					title: 'Showcase uploader',
					description:
						'Upload and submit your videos to the Remotion showcase.',
				}}
			/>
			<Composition
				component={Swirl}
				width={1200}
				height={630}
				fps={30}
				durationInFrames={1}
				id="Swirl"
			/>
			<Composition
				component={Vision}
				width={1080}
				height={1080}
				fps={30}
				durationInFrames={1000}
				id="Vision"
			/>
			<Composition
				component={JKL}
				width={1080}
				height={1080}
				fps={30}
				durationInFrames={460}
				id="Playback"
			/>
			<Composition
				component={Cursor}
				width={1080}
				height={1080}
				fps={30}
				durationInFrames={300}
				id="Cursor"
			/>
			<Composition
				component={ComboMoves}
				width={1080}
				height={1080}
				fps={30}
				durationInFrames={300}
				id="ComboMoves"
			/>
			<Composition
				component={Support}
				width={1080}
				height={1080}
				fps={30}
				durationInFrames={100}
				id="Support"
			/>
			<Folder name="Showcase">
				<Composition
					component={ShowcaseMaster}
					width={1080}
					height={1080}
					fps={30}
					durationInFrames={150}
					id="Master"
				/>
				<Composition
					component={Showcase}
					width={1080}
					height={1080}
					fps={30}
					durationInFrames={150}
					id="Showcase"
				/>
				<Composition
					component={ShowcaseSubmit}
					width={1080}
					height={1080}
					fps={30}
					durationInFrames={150}
					id="SubmitNow"
				/>
			</Folder>
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
			<Composition
				component={TwoPointFive}
				width={1080}
				height={1080}
				fps={30}
				durationInFrames={450}
				id="two-point-five"
			/>
		</>
	);
};

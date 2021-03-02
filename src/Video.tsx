import {Composition} from 'remotion';
import {Logo} from './Logo';
import {LogoWithTitle} from './LogoWithTitle';
import {Monochromatic} from './Monochromatic';
import {Image1} from './ProductHuntImages/Image1';
import {Image2} from './ProductHuntImages/Image2';
import {Image3} from './ProductHuntImages/Image3';
import {ProductHuntLogo} from './ProductHuntLogo';
import {SocialPreview} from './SocialPreview';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				component={Logo}
				width={820}
				height={820}
				fps={30}
				durationInFrames={1}
				id="Logo"
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
		</>
	);
};

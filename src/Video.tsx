import {Composition} from 'remotion';
import {Logo} from './Logo';
import {LogoWithTitle} from './LogoWithTitle';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				component={Logo}
				width={820}
				height={820}
				fps={30}
				durationInFrames={1}
				name="Logo"
			/>
			<Composition
				component={LogoWithTitle}
				width={2100}
				height={1080}
				fps={30}
				durationInFrames={1}
				name="LogoWithTitle"
			/>
		</>
	);
};

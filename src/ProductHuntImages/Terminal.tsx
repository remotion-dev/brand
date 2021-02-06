import 'hack-font/build/web/hack.css';
import styled from 'styled-components';

const Container = styled.div`
	background-color: #252a2e;
	flex: 1;
	border-radius: 20px;
	padding-left: 60px;
	padding-top: 40px;
	font-family: Hack;
	color: white;
	font-size: 20px;
	line-height: 1.8;
	pre {
		margin: 0;
	}
`;

const command = 'npm run build';

export const Terminal: React.FC = () => {
	const renderBars = 20;

	return (
		<Container>
			<div>
				<span style={{color: '#5ef766'}}>➜ </span>
				<span style={{color: '#5ef8fa'}}>remotion-trailer</span>
				<span /> {command}
			</div>
			<div>
				{'>'} remotion-template@1.0.0 build /Users/jonnyburger/remotion-trailer
			</div>
			<div>{'>'} remotion render src/index.tsx HelloWorld out.mp4</div>
			<br />
			<div>📦 (1/3) Bundling video...</div>
			<div>📼 (2/3) Rendering frames...</div>
			<pre>
				|{'='.repeat(20)}| {`(${renderBars}/${renderBars})`}
			</pre>
			<div>🧵 (3/3) Stitching frames together ...</div> <br />
			<div>▶️ Your video is now ready: out.mp4</div>
		</Container>
	);
};

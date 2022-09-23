import {useEffect, useRef} from 'react';
import {
	interpolate,
	interpolateColors,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {COLOR_1, COLOR_2} from '../colors';

function point({
	x,
	y,
	canvas,
	color,
	thickness,
}: {
	x: number;
	y: number;
	canvas: CanvasRenderingContext2D;
	color: string;
	thickness: number;
}) {
	canvas.beginPath();
	canvas.fillStyle = color;
	canvas.arc(x, y, thickness, 0, 2 * Math.PI, true);
	canvas.fill();
	canvas.closePath();
}

export const Swirl: React.FC = () => {
	const ref = useRef<HTMLCanvasElement>(null);
	const frame = useCurrentFrame();
	const {width, height} = useVideoConfig();

	useEffect(() => {
		const ctx = ref.current?.getContext('2d');
		if (!ctx) {
			return;
		}
		ctx.clearRect(0, 0, width, height);
		const start = 110;
		const end = width - 450;
		for (let i = start; i < end; i++) {
			const swirlProgress = interpolate(i, [start, end], [0, 1], {});
			const swirl = interpolate(swirlProgress, [0, 1], [0, Math.PI * 23]);
			const yOffset = Math.sin(swirl) * 15;

			const baseColor = interpolateColors(i, [0, width], [COLOR_2, COLOR_1]);

			point({
				x: i,
				y: height - 90 + yOffset,
				canvas: ctx,
				color: baseColor,
				thickness: 8,
			});
		}
	}, [frame, height, width]);

	return (
		<canvas ref={ref} style={{width, height}} width={width} height={height} />
	);
};

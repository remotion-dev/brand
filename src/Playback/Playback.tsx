import * as React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Playback = (props: React.SVGProps<SVGSVGElement>) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const path1 = React.useRef<SVGPathElement>(null);
	const path2 = React.useRef<SVGPathElement>(null);
	const path3 = React.useRef<SVGPathElement>(null);

	const keyProgress = (index: number) =>
		spring({
			fps,
			frame: frame - index * 4,
			config: {
				damping: 200,
			},
		});

	const length1 = path1.current?.getTotalLength() ?? 0;
	const length2 = path2.current?.getTotalLength() ?? 0;
	const length3 = path3.current?.getTotalLength() ?? 0;

	const strokeDashOffset1 = keyProgress(6) * length1;
	const strokeDashOffset2 = keyProgress(5) * length2;
	const strokeDashOffset3 = keyProgress(7) * length3;

	const op1 = keyProgress(8);
	const op2 = keyProgress(9);
	const op3 = keyProgress(10);

	return (
		<svg
			width={1080}
			height={1080}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
			style={{}}
		>
			<path fill="#fff" d="M0 0h1080v1080H0z" />

			<path
				ref={path1}
				strokeDasharray={`${length1}`}
				strokeDashoffset={length1 - strokeDashOffset1}
				d="M540 586v144"
				stroke="#0B84F3"
				strokeWidth={2}
			/>
			<path
				ref={path2}
				strokeDasharray={`${length2}`}
				strokeDashoffset={length2 - strokeDashOffset2}
				d="M328 491V366h-24"
				stroke="#0B84F3"
				strokeWidth={2}
			/>
			<path
				ref={path3}
				strokeDasharray={`${length3}`}
				strokeDashoffset={length3 - strokeDashOffset3}
				d="M797 549h88v127"
				stroke="#0B84F3"
				strokeWidth={2}
			/>

			<g
				style={{
					transformOrigin: '50% 50%',
					transform: `scale(${keyProgress(2)})`,
				}}
			>
				<g filter="url(#prefix__filter1_d_4_23)">
					<rect
						x={671}
						y={464}
						width={152}
						height={152}
						rx={23}
						fill="#F9F9F9"
					/>
				</g>
				<text
					fill="#303030"
					style={{
						whiteSpace: 'pre',
					}}
					fontFamily="SF Pro Text"
					fontSize={107}
					fontWeight="bold"
					letterSpacing="0em"
				>
					<tspan x={713} y={576.072}>
						L
					</tspan>
				</text>
			</g>
			<g
				id="kKey"
				style={{
					transformOrigin: '50% 50%',
					transform: `scale(${keyProgress(1)})`,
				}}
			>
				<g filter="url(#prefix__filter0_d_4_23)">
					<rect
						x={460}
						y={464}
						width={152}
						height={152}
						rx={23}
						fill="#F9F9F9"
					/>
				</g>
				<text
					fill="#303030"
					style={{
						whiteSpace: 'pre',
					}}
					fontFamily="SF Pro Text"
					fontSize={107}
					fontWeight="bold"
					letterSpacing="0em"
				>
					<tspan x={502} y={576.072}>
						K
					</tspan>
				</text>
			</g>

			<g
				style={{
					transformOrigin: '50% 50%',
					transform: `scale(${keyProgress(0)})`,
				}}
			>
				<g filter="url(#prefix__filter2_d_4_23)">
					<rect
						x={249}
						y={464}
						width={152}
						height={152}
						rx={23}
						fill="#F9F9F9"
					/>
				</g>

				<text
					fill="#303030"
					style={{
						whiteSpace: 'pre',
					}}
					fontFamily="SF Pro Text"
					fontSize={107}
					fontWeight="bold"
					letterSpacing="0em"
				>
					<tspan x={291} y={576.072}>
						J
					</tspan>
				</text>
			</g>
			<text
				fill="#000"
				style={{
					whiteSpace: 'pre',
					opacity: op3,
				}}
				fontFamily="SF Pro Text"
				fontSize={34}
				fontWeight="bold"
				letterSpacing="0em"
			>
				<tspan x={823} y={718.586}>
					Play forward
				</tspan>
			</text>
			<text
				fill="#000"
				style={{
					whiteSpace: 'pre',
					opacity: op1,
				}}
				fontFamily="SF Pro Text"
				fontSize={34}
				fontWeight="bold"
				letterSpacing="0em"
			>
				<tspan x={47} y={375.586}>
					Play backwards
				</tspan>
			</text>
			<text
				fill="#000"
				style={{
					whiteSpace: 'pre',
					opacity: op2,
				}}
				fontFamily="SF Pro Text"
				fontSize={34}
				fontWeight="bold"
				letterSpacing="0em"
			>
				<tspan x={495} y={765.586}>
					Pause
				</tspan>
			</text>
			<defs>
				<filter
					id="prefix__filter0_d_4_23"
					x={456}
					y={464}
					width={160}
					height={160}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy={4} />
					<feGaussianBlur stdDeviation={2} />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
					<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4_23" />
					<feBlend
						in="SourceGraphic"
						in2="effect1_dropShadow_4_23"
						result="shape"
					/>
				</filter>
				<filter
					id="prefix__filter1_d_4_23"
					x={667}
					y={464}
					width={160}
					height={160}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy={4} />
					<feGaussianBlur stdDeviation={2} />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
					<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4_23" />
					<feBlend
						in="SourceGraphic"
						in2="effect1_dropShadow_4_23"
						result="shape"
					/>
				</filter>
				<filter
					id="prefix__filter2_d_4_23"
					x={245}
					y={464}
					width={160}
					height={160}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy={4} />
					<feGaussianBlur stdDeviation={2} />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
					<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4_23" />
					<feBlend
						in="SourceGraphic"
						in2="effect1_dropShadow_4_23"
						result="shape"
					/>
				</filter>
			</defs>
		</svg>
	);
};

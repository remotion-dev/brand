import * as React from 'react';
import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const ComboMoves: React.FC = (props) => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();
	const spr = (i: number) =>
		spring({
			fps,
			frame: frame - i * 2 - 20,
			config: {
				damping: 30,
			},
		});

	return (
		<AbsoluteFill
			style={{
				boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
			}}
		>
			<svg
				width={1080}
				height={1080}
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<path fill="#fff" d="M0 0h1080v1080H0z" />
				<g
					id="row1"
					style={{
						transformOrigin: `50% 50%`,
						transform: `scale(${spr(0)})`,
					}}
				>
					<g filter="url(#prefix__filter0_d_5_6)">
						<rect
							x={83}
							y={343}
							width={109}
							height={109}
							rx={16.493}
							fill="#F9F9F9"
						/>
					</g>
					<text
						fill="#303030"
						style={{
							whiteSpace: 'pre',
						}}
						fontFamily="SF Pro Text"
						fontSize={76.73}
						fontWeight="bold"
						letterSpacing="0em"
					>
						<tspan x={113.118} y={423.549}>
							L
						</tspan>
					</text>
					<g filter="url(#prefix__filter1_d_5_6)">
						<rect
							x={212}
							y={343}
							width={109}
							height={109}
							rx={16.493}
							fill="#F9F9F9"
						/>
					</g>
					<text
						fill="#303030"
						style={{
							whiteSpace: 'pre',
						}}
						fontFamily="SF Pro Text"
						fontSize={76.73}
						fontWeight="bold"
						letterSpacing="0em"
					>
						<tspan x={242.118} y={423.549}>
							L
						</tspan>
					</text>
					<text
						fill="#000"
						style={{
							whiteSpace: 'pre',
						}}
						fontFamily="SF Pro"
						fontSize={64}
						fontWeight="bold"
						letterSpacing="0em"
					>
						<tspan x={599} y={420.75}>
							2x forward
						</tspan>
					</text>
				</g>

				<g
					style={{
						transformOrigin: `50% 50%`,
						transform: `scale(${spr(1)})`,
					}}
				>
					<g filter="url(#prefix__filter2_d_5_6)">
						<rect
							x={83}
							y={505}
							width={109}
							height={109}
							rx={16.493}
							fill="#F9F9F9"
						/>
					</g>
					<text
						fill="#303030"
						style={{
							whiteSpace: 'pre',
						}}
						fontFamily="SF Pro Text"
						fontSize={76.73}
						fontWeight="bold"
						letterSpacing="0em"
					>
						<tspan x={113.118} y={585.549}>
							L
						</tspan>
					</text>
					<g filter="url(#prefix__filter3_d_5_6)">
						<rect
							x={212}
							y={505}
							width={109}
							height={109}
							rx={16.493}
							fill="#F9F9F9"
						/>
					</g>
					<text
						fill="#303030"
						style={{
							whiteSpace: 'pre',
						}}
						fontFamily="SF Pro Text"
						fontSize={76.73}
						fontWeight="bold"
						letterSpacing="0em"
					>
						<tspan x={242.118} y={585.549}>
							L
						</tspan>
					</text>
					<g>
						<g filter="url(#prefix__filter4_d_5_6)">
							<rect
								x={341}
								y={505}
								width={109}
								height={109}
								rx={16.493}
								fill="#F9F9F9"
							/>
						</g>
						<text
							fill="#303030"
							style={{
								whiteSpace: 'pre',
							}}
							fontFamily="SF Pro Text"
							fontSize={76.73}
							fontWeight="bold"
							letterSpacing="0em"
						>
							<tspan x={371.118} y={585.549}>
								L
							</tspan>
						</text>
					</g>
					<text
						fill="#000"
						style={{
							whiteSpace: 'pre',
						}}
						fontFamily="SF Pro"
						fontSize={64}
						fontWeight="bold"
						letterSpacing="0em"
					>
						<tspan x={599} y={582.75}>
							4x forward
						</tspan>
					</text>
				</g>
				<g style={{transformOrigin: `50% 50%`, transform: `scale(${spr(2)})`}}>
					<g filter="url(#prefix__filter5_d_5_6)">
						<rect
							x={83}
							y={664}
							width={109}
							height={109}
							rx={16.493}
							fill="#F9F9F9"
						/>
					</g>
					<text
						fill="#303030"
						style={{
							whiteSpace: 'pre',
						}}
						fontFamily="SF Pro Text"
						fontSize={76.73}
						fontWeight="bold"
						letterSpacing="0em"
					>
						<tspan x={113.118} y={744.549}>
							J
						</tspan>
					</text>
					<g filter="url(#prefix__filter6_d_5_6)">
						<rect
							x={212}
							y={664}
							width={109}
							height={109}
							rx={16.493}
							fill="#F9F9F9"
						/>
					</g>
					<text
						fill="#303030"
						style={{
							whiteSpace: 'pre',
						}}
						fontFamily="SF Pro Text"
						fontSize={76.73}
						fontWeight="bold"
						letterSpacing="0em"
					>
						<tspan x={242.118} y={744.549}>
							J
						</tspan>
					</text>
					<text
						fill="#000"
						style={{
							whiteSpace: 'pre',
						}}
						fontFamily="SF Pro"
						fontSize={64}
						fontWeight="bold"
						letterSpacing="0em"
					>
						<tspan x={599} y={741.75}>
							2x backwards
						</tspan>
					</text>
				</g>
				<g style={{transformOrigin: `50% 50%`, transform: `scale(${spr(3)})`}}>
					<g filter="url(#prefix__filter7_d_5_6)">
						<rect
							x={83}
							y={826}
							width={109}
							height={109}
							rx={16.493}
							fill="#F9F9F9"
						/>
					</g>
					<text
						fill="#303030"
						style={{
							whiteSpace: 'pre',
						}}
						fontFamily="SF Pro Text"
						fontSize={76.73}
						fontWeight="bold"
						letterSpacing="0em"
					>
						<tspan x={113.118} y={906.548}>
							J
						</tspan>
					</text>
					<g filter="url(#prefix__filter8_d_5_6)">
						<rect
							x={212}
							y={826}
							width={109}
							height={109}
							rx={16.493}
							fill="#F9F9F9"
						/>
					</g>
					<text
						fill="#303030"
						style={{
							whiteSpace: 'pre',
						}}
						fontFamily="SF Pro Text"
						fontSize={76.73}
						fontWeight="bold"
						letterSpacing="0em"
					>
						<tspan x={242.118} y={906.548}>
							J
						</tspan>
					</text>
					<g>
						<g filter="url(#prefix__filter9_d_5_6)">
							<rect
								x={341}
								y={826}
								width={109}
								height={109}
								rx={16.493}
								fill="#F9F9F9"
							/>
						</g>
						<text
							fill="#303030"
							style={{
								whiteSpace: 'pre',
							}}
							fontFamily="SF Pro Text"
							fontSize={76.73}
							fontWeight="bold"
							letterSpacing="0em"
						>
							<tspan x={371.118} y={906.548}>
								J
							</tspan>
						</text>
					</g>
					<text
						fill="#000"
						style={{
							whiteSpace: 'pre',
						}}
						fontFamily="SF Pro"
						fontSize={64}
						fontWeight="bold"
						letterSpacing="0em"
					>
						<tspan x={599} y={900.75}>
							4x backwards
						</tspan>
					</text>
				</g>
				<text
					fill="#0B84F3"
					style={{
						whiteSpace: 'pre',
					}}
					fontFamily="SF Pro"
					fontSize={94}
					fontWeight="bold"
					letterSpacing="0em"
				>
					<tspan x={233} y={195.414}>
						Combo Moves
					</tspan>
				</text>
				<defs>
					<filter
						id="prefix__filter0_d_5_6"
						x={80.132}
						y={343}
						width={114.737}
						height={114.737}
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity={0} result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy={2.868} />
						<feGaussianBlur stdDeviation={1.434} />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
						<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5_6" />
						<feBlend
							in="SourceGraphic"
							in2="effect1_dropShadow_5_6"
							result="shape"
						/>
					</filter>
					<filter
						id="prefix__filter1_d_5_6"
						x={209.132}
						y={343}
						width={114.737}
						height={114.737}
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity={0} result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy={2.868} />
						<feGaussianBlur stdDeviation={1.434} />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
						<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5_6" />
						<feBlend
							in="SourceGraphic"
							in2="effect1_dropShadow_5_6"
							result="shape"
						/>
					</filter>
					<filter
						id="prefix__filter2_d_5_6"
						x={80.132}
						y={505}
						width={114.737}
						height={114.737}
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity={0} result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy={2.868} />
						<feGaussianBlur stdDeviation={1.434} />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
						<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5_6" />
						<feBlend
							in="SourceGraphic"
							in2="effect1_dropShadow_5_6"
							result="shape"
						/>
					</filter>
					<filter
						id="prefix__filter3_d_5_6"
						x={209.132}
						y={505}
						width={114.737}
						height={114.737}
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity={0} result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy={2.868} />
						<feGaussianBlur stdDeviation={1.434} />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
						<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5_6" />
						<feBlend
							in="SourceGraphic"
							in2="effect1_dropShadow_5_6"
							result="shape"
						/>
					</filter>
					<filter
						id="prefix__filter4_d_5_6"
						x={338.132}
						y={505}
						width={114.737}
						height={114.737}
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity={0} result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy={2.868} />
						<feGaussianBlur stdDeviation={1.434} />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
						<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5_6" />
						<feBlend
							in="SourceGraphic"
							in2="effect1_dropShadow_5_6"
							result="shape"
						/>
					</filter>
					<filter
						id="prefix__filter5_d_5_6"
						x={80.132}
						y={664}
						width={114.737}
						height={114.737}
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity={0} result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy={2.868} />
						<feGaussianBlur stdDeviation={1.434} />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
						<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5_6" />
						<feBlend
							in="SourceGraphic"
							in2="effect1_dropShadow_5_6"
							result="shape"
						/>
					</filter>
					<filter
						id="prefix__filter6_d_5_6"
						x={209.132}
						y={664}
						width={114.737}
						height={114.737}
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity={0} result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy={2.868} />
						<feGaussianBlur stdDeviation={1.434} />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
						<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5_6" />
						<feBlend
							in="SourceGraphic"
							in2="effect1_dropShadow_5_6"
							result="shape"
						/>
					</filter>
					<filter
						id="prefix__filter7_d_5_6"
						x={80.132}
						y={826}
						width={114.737}
						height={114.737}
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity={0} result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy={2.868} />
						<feGaussianBlur stdDeviation={1.434} />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
						<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5_6" />
						<feBlend
							in="SourceGraphic"
							in2="effect1_dropShadow_5_6"
							result="shape"
						/>
					</filter>
					<filter
						id="prefix__filter8_d_5_6"
						x={209.132}
						y={826}
						width={114.737}
						height={114.737}
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity={0} result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy={2.868} />
						<feGaussianBlur stdDeviation={1.434} />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
						<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5_6" />
						<feBlend
							in="SourceGraphic"
							in2="effect1_dropShadow_5_6"
							result="shape"
						/>
					</filter>
					<filter
						id="prefix__filter9_d_5_6"
						x={338.132}
						y={826}
						width={114.737}
						height={114.737}
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity={0} result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy={2.868} />
						<feGaussianBlur stdDeviation={1.434} />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
						<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5_6" />
						<feBlend
							in="SourceGraphic"
							in2="effect1_dropShadow_5_6"
							result="shape"
						/>
					</filter>
				</defs>
			</svg>
		</AbsoluteFill>
	);
};

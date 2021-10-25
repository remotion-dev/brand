import * as React from 'react';
import {measureSpring, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import SimplexNoise from 'simplex-noise';

export const TwoPointFive = (props: React.SVGProps<SVGSVGElement>) => {
	const frame = useCurrentFrame();
	const {fps, durationInFrames} = useVideoConfig();
	const scale = spring({
		frame,
		fps,
		config: {
			damping: 200,
		},
	});

	const seeds = React.useMemo(() => {
		return new Array(7).fill(true).map((x, _i) => {
			return {x: new SimplexNoise(_i + 'x'), y: new SimplexNoise(_i + 'y')};
		});
	}, []);

	const css = React.useMemo(() => {
		return new Array(7).fill(true).map(
			(x, _i): React.CSSProperties => {
				const xOffset = seeds[_i].x.noise2D(0, frame / 120) * 40;
				const yOffset =
					seeds[_i].y.noise2D(0, frame / 120) * 40 +
					1080 -
					spring({
						frame,
						fps,
						config: {
							mass: 10,
							damping: 200,
						},
					}) *
						1080 +
					spring({
						frame:
							frame -
							durationInFrames +
							measureSpring({
								threshold: 0.05,
								config: {
									mass: 10,
									damping: 200,
								},
								fps,
							}),
						fps,
						config: {
							mass: 10,
							damping: 200,
						},
					}) *
						-1080;

				return {
					transform: `translateX(${xOffset}px) translateY(${yOffset}px)`,
				};
			}
		);
	}, [durationInFrames, fps, frame, seeds]);

	return (
		<svg
			width={1080}
			height={1080}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
			style={{
				transformOrigin: '50% 50%',
			}}
		>
			<path fill="#E5E5E5" d="M0 0h1080v1080H0z" />
			<path fill="#fff" d="M0 0h1080v1080H0z" />
			<path fill="#fff" d="M0 0h1080v1080H0z" />
			<g
				style={{
					transform: css[6].transform,
					transformOrigin: '50% 50%',
				}}
			>
				<text
					fill="#0B84F3"
					style={{
						whiteSpace: 'pre',
					}}
					fontFamily="SF Pro Display"
					fontSize={199}
					fontWeight="bold"
					letterSpacing="0em"
				>
					<tspan x={394} y={648.238}>
						2.5
					</tspan>
				</text>
				<text
					fill="#000"
					style={{
						whiteSpace: 'pre',
					}}
					fontFamily="SF Pro Display"
					fontSize={59}
					fontWeight="bold"
					letterSpacing="0em"
				>
					<tspan x={410} y={468.973}>
						Remotion
					</tspan>
				</text>
			</g>

			<g style={css[0]}>
				<circle cx={174.5} cy={228.5} r={82.5} fill="#F8F8F8" />
				<g clipPath="url(#prefix__clip0_0:1)">
					<path
						d="M215.792 215.543a27.64 27.64 0 013.207 13.168c-.114 15.323-12.765 27.601-28.089 27.601h-27.535v8.256c0 3.907-4.55 5.61-7.122 3.038L142.347 253.7a4.172 4.172 0 010-5.9l13.906-13.906c2.626-2.627 7.122-.755 7.122 2.95v8.343h27.617c9.18 0 16.787-7.332 16.882-16.512a16.597 16.597 0 00-1.602-7.309 4.165 4.165 0 01.834-4.742c.825-.818 1.502-1.487 2.065-2.049 1.976-1.973 5.315-1.5 6.621.968zm-74.666 12.782c.095-9.18 7.702-16.513 16.882-16.513h27.617v8.258c0 3.889 4.541 5.617 7.122 3.036l13.906-13.906a4.172 4.172 0 000-5.9l-13.906-13.906c-2.6-2.599-7.122-.83-7.122 3.044v8.249H158.09c-15.324 0-27.975 12.279-28.089 27.602a27.636 27.636 0 003.207 13.168c1.306 2.468 4.646 2.941 6.622.968.562-.562 1.239-1.231 2.064-2.049a4.163 4.163 0 00.834-4.742 16.597 16.597 0 01-1.602-7.309z"
						fill="#0B84F3"
					/>
				</g>
				<text
					fill="#000"
					style={{
						whiteSpace: 'pre',
					}}
					fontFamily="SF Pro Display"
					fontSize={32}
					fontWeight="bold"
					letterSpacing="0em"
				>
					<tspan x={110.359} y={341.375}>
						{'<Loop />'}
					</tspan>
					<tspan x={92.109} y={379.375}>
						component
					</tspan>
				</text>
			</g>
			<g style={css[1]}>
				<circle cx={174.5} cy={730.5} r={82.5} fill="#F8F8F8" />
				<text
					fill="#000"
					style={{
						whiteSpace: 'pre',
					}}
					fontFamily="SF Pro Display"
					fontSize={32}
					fontWeight="bold"
					letterSpacing="0em"
				>
					<tspan x={116.453} y={843.375}>
						{'Node 17 '}
					</tspan>
					<tspan x={118.359} y={881.375}>
						support
					</tspan>
				</text>
				<path
					d="M202.248 691.307a8.856 8.856 0 00-7.637-4.369h-41.222a8.856 8.856 0 00-7.637 4.369l-20.611 35.25a8.82 8.82 0 000 8.886l20.611 35.25a8.856 8.856 0 007.637 4.369h41.222a8.856 8.856 0 007.637-4.369l20.611-35.25a8.82 8.82 0 000-8.886l-20.611-35.25zm-7.637 74.943h-41.222L132.778 731l20.611-35.25h41.222L215.222 731l-20.611 35.25z"
					fill="#0B84F3"
				/>
			</g>
			<g style={css[2]}>
				<circle cx={540.5} cy={183.5} r={82.5} fill="#F8F8F8" />
				<g clipPath="url(#prefix__clip1_0:1)">
					<path
						d="M527.107 145.375h-18.75a5.348 5.348 0 00-3.788 1.574A5.382 5.382 0 00503 150.75v64.5c0 1.426.564 2.793 1.569 3.801a5.348 5.348 0 003.788 1.574h18.75c.711 0 1.392-.283 1.894-.787a2.69 2.69 0 00.785-1.9v-5.376a2.69 2.69 0 00-.785-1.9 2.672 2.672 0 00-1.894-.787h-13.393v-53.75h13.393c.711 0 1.392-.283 1.894-.787a2.69 2.69 0 00.785-1.9v-5.376a2.69 2.69 0 00-.785-1.9 2.672 2.672 0 00-1.894-.787zm45.536 0h-18.75c-.711 0-1.392.283-1.894.787a2.69 2.69 0 00-.785 1.9v5.376c0 .712.282 1.396.785 1.9a2.672 2.672 0 001.894.787h13.393v53.75h-13.393c-.711 0-1.392.283-1.894.787a2.69 2.69 0 00-.785 1.9v5.376c0 .712.282 1.396.785 1.9a2.672 2.672 0 001.894.787h18.75a5.348 5.348 0 003.788-1.574A5.382 5.382 0 00578 215.25v-64.5a5.382 5.382 0 00-1.569-3.801 5.348 5.348 0 00-3.788-1.574z"
						fill="#0B84F3"
					/>
				</g>
				<text
					fill="#000"
					style={{
						whiteSpace: 'pre',
					}}
					fontFamily="SF Pro Display"
					fontSize={32}
					fontWeight="bold"
					letterSpacing="0em"
				>
					<tspan x={496.25} y={296.375}>
						{'In/Out '}
					</tspan>
					<tspan x={482.125} y={334.375}>
						Markers
					</tspan>
				</text>
			</g>
			<g style={css[3]}>
				<circle cx={540.5} cy={850.5} r={82.5} fill="#F8F8F8" />
				<text
					fill="#000"
					style={{
						whiteSpace: 'pre',
					}}
					fontFamily="SF Pro Display"
					fontSize={32}
					fontWeight="bold"
					letterSpacing="0em"
				>
					<tspan x={517.172} y={963.375}>
						{'CLI '}
					</tspan>
					<tspan x={440.359} y={1001.38}>
						autocomplete
					</tspan>
				</text>
				<g clipPath="url(#prefix__clip2_0:1)">
					<path
						d="M532.876 852.631l-27.026 26.95a3.344 3.344 0 01-4.72 0l-3.152-3.143a3.32 3.32 0 01-.006-4.701l21.419-21.459-21.419-21.459a3.32 3.32 0 01.006-4.701l3.152-3.143a3.344 3.344 0 014.72 0l27.026 26.95a3.321 3.321 0 010 4.706zM586 878.012v-4.437a3.332 3.332 0 00-3.337-3.328h-42.275a3.333 3.333 0 00-3.338 3.328v4.437a3.333 3.333 0 003.338 3.328h42.275a3.332 3.332 0 003.337-3.328z"
						fill="#0B84F3"
					/>
				</g>
			</g>
			<g style={css[4]}>
				<circle cx={904.5} cy={228.5} r={82.5} fill="#F8F8F8" />
				<text
					fill="#000"
					style={{
						whiteSpace: 'pre',
					}}
					fontFamily="SF Pro Display"
					fontSize={32}
					fontWeight="bold"
					letterSpacing="0em"
				>
					<tspan x={838.25} y={341.375}>
						{'Playback '}
					</tspan>
					<tspan x={867.922} y={379.375}>
						rates
					</tspan>
				</text>
				<path
					d="M905.5 225.75c-3.997 0-7.503 2.065-9.551 5.182l-18.216-3.662c-2.335-.498-4.589 1.048-5.052 3.384-.463 2.336 1.039 4.607 3.364 5.072l18.313 3.68c.259 1.276.651 2.5 1.284 3.592h19.715c.983-1.698 1.587-3.644 1.587-5.75 0-6.35-5.123-11.498-11.444-11.498zm-20.028-8.625c3.16 0 5.722-2.575 5.722-5.75s-2.562-5.75-5.722-5.75c-3.16 0-5.722 2.575-5.722 5.75s2.562 5.75 5.722 5.75zm42.917 14.375c0 3.175 2.562 5.75 5.722 5.75 3.16 0 5.722-2.575 5.722-5.75s-2.562-5.75-5.722-5.75c-3.16 0-5.722 2.575-5.722 5.75zm-22.889-23c3.16 0 5.722-2.575 5.722-5.75S908.66 197 905.5 197c-3.16 0-5.722 2.575-5.722 5.75s2.562 5.75 5.722 5.75zm25.75 2.875c0-3.175-2.562-5.75-5.722-5.75-3.16 0-5.722 2.575-5.722 5.75s2.562 5.75 5.722 5.75c3.16 0 5.722-2.575 5.722-5.75zM905.5 179.75c-28.443 0-51.5 23.169-51.5 51.75a51.67 51.67 0 006.985 26.019c1.003 1.728 2.914 2.731 4.906 2.731h79.218c1.992 0 3.903-1.003 4.906-2.731A51.67 51.67 0 00957 231.5c0-28.581-23.057-51.75-51.5-51.75zm37.958 71.875h-75.916a43.266 43.266 0 01-4.959-20.125c0-23.78 19.252-43.125 42.917-43.125 23.665 0 42.917 19.345 42.917 43.125 0 7.029-1.71 13.949-4.959 20.125z"
					fill="#0B84F3"
				/>
			</g>
			<g style={css[5]}>
				<circle cx={920.5} cy={739.5} r={82.5} fill="#F8F8F8" />
				<text
					fill="#000"
					style={{
						whiteSpace: 'pre',
					}}
					fontFamily="SF Pro Display"
					fontSize={32}
					fontWeight="bold"
					letterSpacing="0em"
				>
					<tspan x={860.578} y={852.375}>
						{'\u201CEmpty\u201D '}
					</tspan>
					<tspan x={856.141} y={890.375}>
						template
					</tspan>
				</text>
				<g clipPath="url(#prefix__clip3_0:1)">
					<path
						d="M967.816 732.177h-8.149v-8.157c0-4.503-3.658-8.156-8.167-8.156h-27.222l-10.889-10.875h-27.222c-4.509 0-8.167 3.653-8.167 8.156v48.938c0 4.503 3.658 8.156 8.167 8.156h68.055a8.165 8.165 0 006.925-3.84l13.594-21.75c3.403-5.421-.51-12.472-6.925-12.472zm-81.649-18.012c0-.561.459-1.02 1.02-1.02h22.816l10.889 10.875h29.587c.562 0 1.021.459 1.021 1.02v7.137h-47.639a8.177 8.177 0 00-6.993 3.942l-10.701 17.706v-39.66zm68.055 47.918H890.25l13.135-21.75h64.448l-13.611 21.75z"
						fill="#0B84F3"
					/>
				</g>
			</g>
			<defs>
				<clipPath id="prefix__clip0_0:1">
					<path fill="#fff" transform="translate(130 184)" d="M0 0h89v89H0z" />
				</clipPath>
				<clipPath id="prefix__clip1_0:1">
					<path fill="#fff" transform="translate(503 140)" d="M0 0h75v86H0z" />
				</clipPath>
				<clipPath id="prefix__clip2_0:1">
					<path fill="#fff" transform="translate(497 810)" d="M0 0h89v71H0z" />
				</clipPath>
				<clipPath id="prefix__clip3_0:1">
					<path fill="#fff" transform="translate(878 683)" d="M0 0h98v87H0z" />
				</clipPath>
			</defs>
		</svg>
	);
};

import React, { useMemo } from 'react'
import { sortPalette } from '../../lib';
import { PALETTE_PROP_TYPES } from '../propTypes';

const generateGradientId = () => '' + Math.random().toString(36).substr(2, 9);

const Palette = ({ palette, width, height }) => {
	const sortedPalette = sortPalette(palette);
	const gradientId = useMemo(generateGradientId, [palette.length]);

	return (
		<div className="palette" style={{ width, height }}>
			<svg width="100%" height="100%">
				<defs>
					<linearGradient id={gradientId} x1="0" y1="0.5" x2="1" y2="0.5"> {
						sortedPalette.map(c =>
							<stop key={c.id} offset={c.pos} style={{ stopColor: c.color, stopOpacity: 1 }}/>
						)}
					</linearGradient>
				</defs>
				<rect x="0" y="0" width="100%" height="100%" fill={`url(#${gradientId})`}/>
			</svg>
		</div>
	);
};

Palette.propTypes = PALETTE_PROP_TYPES;

export default Palette

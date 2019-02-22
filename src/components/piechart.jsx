import React, { Component } from 'react';

const PieChart = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="80" height="80" viewBox="-10 -10 220 220">
			<defs>
				<linearGradient id="grey" gradientUnits="objectBoundingBox" x1="1" y1="0" x2="0" y2="1">
					<stop offset="0%" stopColor="#efefef"></stop>
					<stop offset="100%" stopColor="#efefef"></stop>
				</linearGradient>
				<linearGradient id="orange" gradientUnits="objectBoundingBox" x1="1" y1="0" x2="0" y2="1">
					<stop offset="0%" stopColor="#ffbe88"></stop>
					<stop offset="100%" stopColor="#ffbe88"></stop>
				</linearGradient>
			</defs>

			<g fill="none" strokeWidth="18" transform="translate(100,100)">
				<circle cx="0" cy="0" r="100" stroke="url(#grey)"></circle>
				<path className="animatingProgress progressPath" d="M 0, -100 A 100, 100, 0, 1, 1, -58.778016907718, 80.902068752264" stroke="url(#orange)"></path>
			</g>

			<text fill="#334659" fontSize="30" x="0%" y="29%" textAnchor="middle">
				<tspan id="predictionData" x="47%" dy="1em" textAnchor="middle">60%</tspan>
				<tspan id="predictionDataCount" x="47%" dy="1em" textAnchor="middle">Accuracy</tspan>
			</text>
		</svg>
    );
}

export default PieChart;

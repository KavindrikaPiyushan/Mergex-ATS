import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export default function PieCharts(props) {
    const data = [
        { value: props.percentage },
        { value: 100-props.percentage },
        // Remove the other two data points
    ];
      
    const size = {
        width: 400,
        height: 200,
    };
      
    const colors = ['#EA7122', '#FFFFFF']; // Custom colors for data points

    const StyledText = styled('text')(({ theme }) => ({
        fill: '#FFFFFF', // White color for the center label
        textAnchor: 'middle',
        dominantBaseline: 'central',
        fontSize: 20,
    }));

    const Path = styled('path')({
        fill: '#EA7122', // Custom color for the paths
    });
      
    function PieCenterLabel({ children }: { children: React.ReactNode }) {
        const { width, height, left, top } = useDrawingArea();
        return (
            <StyledText x={left + width / 2} y={top + height / 2} style={{fontSize:'16px'

                }}>
                {children}
            </StyledText>
        );
    }
      
    return (
        <div>
            <PieChart series={[{ data, innerRadius: 80 }]} colors={colors} {...size}>
                {/* Conditionally render the center label only if there are exactly two data points */}
                {data.length === 2 && <PieCenterLabel style={{}}>{props.topic}</PieCenterLabel>}
            </PieChart>
            <style>
                {`
                .MuiSvgPath-root {
                    fill: #EA7122; // Custom color for the paths
                    stroke-width: 2px; // Set the width only for path width
                }
                .css-66gjpw-MuiResponsiveChart-container {
                    width: auto;
                }

                `}
            </style>
        </div>
    );
}

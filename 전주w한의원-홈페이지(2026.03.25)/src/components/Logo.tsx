import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'navy' | 'white';
}

export default function Logo({ className = "h-8", variant = 'navy' }: LogoProps) {
  const color = variant === 'navy' ? '#0A192F' : '#F5F5F0';
  
  return (
    <svg 
      viewBox="0 0 160 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="전주W한의원 로고"
    >
      {/* Korean Text: 전주W한의원 */}
      <text 
        x="0" 
        y="42" 
        fill={color} 
        style={{ 
          font: 'bold 28px "Pretendard", "Inter", sans-serif',
          letterSpacing: '-0.05em'
        }}
      >
        전주<tspan fill={color}>W</tspan>한의원
      </text>
    </svg>
  );
}

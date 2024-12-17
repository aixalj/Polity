import React from 'react';
import type { Meta } from '@storybook/react';

const meta = {
  title: 'Polity Design System/Foundations/Typography',
  parameters: {
    docs: {
      description: {
        component: 'Typography system for the Polity Design System',
      },
    },
  },
} satisfies Meta;

export default meta;

const FontDisplay = ({ 
  fontFamily, 
  weights, 
  sizes, 
  title 
}: { 
  fontFamily: string;
  weights: Record<string, string>;
  sizes: Record<string, { size: number; lineHeight?: string; }>;
  title: string;
}) => {
  const sampleText = 'The quick brown fox jumps over the lazy dog';

  return (
    <div className="mb-12">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-6">Font Family: {fontFamily}</p>

      {/* Font Weights */}
      <div className="mb-8">
        <h4 className="text-sm font-medium text-gray-700 mb-4">Weights</h4>
        <div className="space-y-4">
          {Object.entries(weights).map(([name, weight]) => (
            <div key={name} className="space-y-1">
              <div className="text-sm text-gray-600">{name} ({weight})</div>
              <div style={{ fontFamily, fontWeight: weight }} className="text-lg">
                {sampleText}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Font Sizes */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-4">Sizes</h4>
        <div className="space-y-6">
          {Object.entries(sizes).map(([name, { size, lineHeight }]) => (
            <div key={name} className="space-y-1">
              <div className="text-sm text-gray-600">
                {name} ({size}px{lineHeight ? `, line-height: ${lineHeight}` : ''})
              </div>
              <div style={{ 
                fontFamily, 
                fontSize: `${size}px`,
                lineHeight: lineHeight || '1.2'
              }}>
                {sampleText}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Typography = () => {
  const typography = {
    fonts: {
      base: {
        family: 'Inter, sans-serif',
        weights: {
          thin: '100',
          extralight: '200',
          light: '300',
          regular: '400',
          medium: '500',
          semibold: '600',
          bold: '700',
          extrabold: '800',
          black: '900',
        },
        sizes: {
          // Default text sizes
          'xs': { size: 12, lineHeight: '1rem' },     // 12px, 16px
          'sm': { size: 14, lineHeight: '1.25rem' },  // 14px, 20px
          'base': { size: 16, lineHeight: '1.5rem' }, // 16px, 24px
          'lg': { size: 18, lineHeight: '1.75rem' },  // 18px, 28px
          'xl': { size: 20, lineHeight: '1.75rem' },  // 20px, 28px
          '2xl': { size: 24, lineHeight: '2rem' },    // 24px, 32px
          '3xl': { size: 30, lineHeight: '2.25rem' }, // 30px, 36px
          '4xl': { size: 36, lineHeight: '2.5rem' },  // 36px, 40px
          '5xl': { size: 48, lineHeight: '1' },       // 48px, 48px
          '6xl': { size: 60, lineHeight: '1' },       // 60px, 60px
          '7xl': { size: 72, lineHeight: '1' },       // 72px, 72px
          '8xl': { size: 96, lineHeight: '1' },       // 96px, 96px
          '9xl': { size: 128, lineHeight: '1' },      // 128px, 128px

          // Button specific sizes
          'button-xs': { size: 12, lineHeight: '1rem' },      // 12px, 16px
          'button-sm': { size: 14, lineHeight: '1.25rem' },   // 14px, 20px
          'button-md': { size: 16, lineHeight: '1.5rem' },    // 16px, 24px
          'button-lg': { size: 18, lineHeight: '1.75rem' },   // 18px, 28px
          'button-xl': { size: 20, lineHeight: '1.75rem' },   // 20px, 28px

          // Heading sizes
          'h1': { size: 36, lineHeight: '2.5rem' },   // 36px, 40px
          'h2': { size: 30, lineHeight: '2.25rem' },  // 30px, 36px
          'h3': { size: 24, lineHeight: '2rem' },     // 24px, 32px
          'h4': { size: 20, lineHeight: '1.75rem' },  // 20px, 28px
          'h5': { size: 16, lineHeight: '1.5rem' },   // 16px, 24px
          'h6': { size: 14, lineHeight: '1.25rem' },  // 14px, 20px
        },
      }
    },
  };

  return (
    <div className="p-6">
      <FontDisplay 
        title="Inter"
        fontFamily={typography.fonts.base.family}
        weights={typography.fonts.base.weights}
        sizes={typography.fonts.base.sizes}
      />
    </div>
  );
}; 
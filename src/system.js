import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

export const system = createSystem(
  defaultConfig,
  defineConfig({
    globalCss: {
      body: {
        pointerEvents: 'unset!',
      },
      '.vertical-timeline': {
        paddingBottom: '0!',
        marginBottom: '2em',
      },
      '.vertical-timeline-element:first-child::before': {
        content: '""',
        position: 'absolute',
        top: '-2em',
        left: '18px',
        width: '4px',
        height: '2em',
        background:
          'repeating-linear-gradient(to bottom, var(--line-color) 0px 4px, var(--chakra-colors-bg) 4px 8px)',
      },
      '.vertical-timeline-element:last-child::before': {
        content: '""',
        position: 'absolute',
        top: '40px',
        left: '18px',
        width: '4px',
        bottom: '0',
        background: 'var(--chakra-colors-bg)',
      },
      '@media only screen and (min-width: 1170px)': {
        '.vertical-timeline--two-columns .vertical-timeline-element:first-child::before':
          {
            left: '50%',
            marginLeft: '-2px',
          },
        '.vertical-timeline--two-columns .vertical-timeline-element:last-child::before':
          {
            left: '50%',
            marginLeft: '-2px',
            top: '60px',
          },
      },
      '.vertical-timeline-element-date': {
        fontSize: '2xl!',
        opacity: 'unset!',
        top: '-8px!',
      },
    },
    theme: {
      tokens: {
        colors: {
          gray: {
            50: '#F7FAFC',
            100: '#EDF2F7',
            200: '#E2E8F0',
            300: '#CBD5E0',
            400: '#A0AEC0',
            500: '#718096',
            600: '#4A5568',
            700: '#2D3748',
            800: '#1A202C',
            900: '#171923',
            950: '#12141E',
          },
        },
        lineHeights: {
          shortest: {
            value: 1,
          },
          shorter: {
            value: 1.2,
          },
          short: {
            value: 1.33,
          },
        },
      },
      textStyles: {
        xl: {
          value: {
            lineHeight: 'shorter',
          },
        },
        '2xl': {
          value: {
            lineHeight: 'short',
          },
        },
        '3xl': {
          value: {
            letterSpacing: 'normal',
            lineHeight: 'shorter',
          },
        },
        '4xl': {
          value: {
            letterSpacing: 'normal',
            lineHeight: 'shorter',
          },
        },
        '5xl': {
          value: {
            letterSpacing: 'normal',
            lineHeight: 'shortest',
          },
        },
      },
      semanticTokens: {
        colors: {
          accent: {
            value: {
              _dark: '#4299E1',
              _light: '#3182CE',
            },
          },
          bg: {
            DEFAULT: {
              value: {
                _dark: '{colors.gray.800}',
              },
            },
            card: {
              value: {
                _dark: '{colors.gray.700}',
                _light: '{colors.gray.100}',
              },
            },
            drawerBackdrop: {
              value: '{colors.blackAlpha.600}',
            },
            tag: {
              value: '{colors.gray.200/16}',
            },
          },
        },
        shadows: {
          accent: {
            value: '0 3px 0 {colors.accent}',
          },
          tag: {
            value: {
              _dark: 'none',
              _light: 'inset 0 0 0px 1px {colors.fg}',
            },
          },
        },
      },
    },
  }),
);

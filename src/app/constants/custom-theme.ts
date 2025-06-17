import {
  PoTheme,
  PoThemeA11yEnum,
  poThemeDefaultActions,
  poThemeDefaultActionsDark,
  poThemeDefaultDarkValues,
  poThemeDefaultFeedback,
  poThemeDefaultFeedbackDark,
  poThemeDefaultLightValues,
  poThemeDefaultNeutrals,
  PoThemeTypeEnum
} from '@po-ui/ng-components';

export const corporateTheme: PoTheme = {
  name: 'corporateTheme',
  type: {
    light: {
      color: {
        brand: {
          '01': {
            lightest: '#fff0f6',
            lighter: '#ffa3c2',
            light: '#ff69a6',
            base: '#ff007f',      // rosa forte
            dark: '#cc0066',
            darker: '#99004d',
            darkest: '#660033'
          },
          '02': {
            base: '#00c853'       // verde neon
          },
          '03': {
            base: '#ffd600'       // amarelo vibrante
          }
        },
        action: {
          ...poThemeDefaultActions,
          disabled: 'var(--color-neutral-mid-40)'
        },
        feedback: {
          ...poThemeDefaultFeedback,
          info: {
            ...poThemeDefaultFeedback.info,
            base: '#3d5afe'       // azul forte
          }
        },
        neutral: {
          ...poThemeDefaultNeutrals
        }
      },
      onRoot: {
        ...poThemeDefaultLightValues.onRoot,
        '--color-page-background-color-page': '#fff8e1'  // amarelo claro
      },
      perComponent: {
        ...poThemeDefaultLightValues.perComponent
      }
    },
    dark: {
      color: {
        brand: {
          '01': {
            darkest: '#fff0f6',
            darker: '#ffa3c2',
            dark: '#ff69a6',
            base: '#ff007f',
            light: '#cc0066',
            lighter: '#99004d',
            lightest: '#660033'
          },
          '02': {
            base: '#00c853'
          },
          '03': {
            base: '#ffd600'
          }
        },
        action: {
          ...poThemeDefaultActionsDark,
          disabled: 'var(--color-neutral-mid-40)'
        },
        feedback: {
          ...poThemeDefaultFeedbackDark,
          info: {
            ...poThemeDefaultFeedbackDark.info,
            base: '#3d5afe'
          }
        },
        neutral: {
          light: {
            '00': '#121212',
            '05': '#1e1e1e',
            '10': '#2a2a2a',
            '20': '#3c3c3c',
            '30': '#505050'
          },
          mid: {
            '40': '#707070',
            '60': '#9e9e9e'
          },
          dark: {
            '70': '#bdbdbd',
            '80': '#e0e0e0',
            '90': '#f5f5f5',
            '95': '#fafafa'
          }
        }
      },
      onRoot: {
        ...poThemeDefaultDarkValues.onRoot,
        '--color-page-background-color-page': '#1a1a1a'  // fundo mais escuro
      },
      perComponent: {
        ...poThemeDefaultDarkValues.perComponent
      }
    }
  },
  active: PoThemeTypeEnum.light
};

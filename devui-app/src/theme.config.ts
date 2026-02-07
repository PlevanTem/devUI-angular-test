/**
 * DevUI Theme Configuration
 * Official theme setup using ThemeService
 * Reference: https://devui.design/components/zh-cn/theme/demo
 */

export const devuiThemeConfig = {
    id: 'custom-devui-theme',
    name: 'Custom Theme',
    cnName: '自定义主题',
    data: {
        // Primary Colors
        'devui-brand': '#5E7CE0',
        'devui-brand-foil': '#7693F5',
        'devui-brand-active': '#344899',
        'devui-brand-active-focus': '#344899',

        // Status Colors
        'devui-success': '#3AC295',
        'devui-warning': '#FA9841',
        'devui-danger': '#F66F6A',
        'devui-info': '#5E7CE0',

        // Text Colors
        'devui-text': '#252B3A',
        'devui-aide-text': '#71757F',
        'devui-placeholder': '#BABBC0',
        'devui-disabled-text': '#CFD0D3',

        // Background Colors
        'devui-base-bg': '#FFFFFF',
        'devui-global-bg': '#F2F3F5',
        'devui-block': '#FFFFFF',
        'devui-area': '#F2F3F5',

        // Border & Line
        'devui-line': '#ADB0B8',
        'devui-dividing-line': '#DFE1E6',

        // Shadow
        'devui-shadow': 'rgba(0, 0, 0, 0.08)',
        'devui-light-shadow': 'rgba(0, 0, 0, 0.05)',

        // Interactive
        'devui-list-item-hover-bg': '#F2F2F3',
        'devui-list-item-active-bg': '#E9EDFA',
        'devui-list-item-selected-bg': '#E9EDFA',
    },
    isDark: false,
};

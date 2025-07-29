// src/theme/index.ts
import type { ThemeConfig } from 'antd';
import { pastelColors } from './colors';

export const lightTheme: ThemeConfig = {
  token: {
    colorPrimary: pastelColors.primary,
    colorSuccess: pastelColors.success,
    colorWarning: pastelColors.warning,
    colorError: pastelColors.error,
    colorTextBase: pastelColors.text,
    colorTextSecondary: pastelColors.textSecondary,
    colorTextQuaternary: pastelColors.textQuaternary,
    colorBorder: pastelColors.border,
    colorBgBase: pastelColors.bg,
    colorBgContainer: pastelColors.surface,
    colorFillSecondary: pastelColors.surface_muted,
    fontFamily: 'Noto Sans KR, sans-serif',
  },
  components: {
    Button: {
      colorPrimaryHover: pastelColors['primary_dark'],
      colorPrimaryActive: '#C8486F',
    },
    Layout: {
      colorBgHeader: pastelColors.bg,
      colorBgBody: pastelColors.bg,
      colorBgTrigger: pastelColors.surface,
    },
    Input: {
      colorBgContainer: pastelColors['surface_muted'],
    },
    Tag: {
      defaultColor: pastelColors.accent,
    },
    Card: {
      colorBgContainer: pastelColors.surface,
    },
    Alert: {
      colorInfoBg: '#F0F8FF',
      colorSuccessBg: '#F4FCE3',
      colorErrorBg: '#FFF0F0',
    },
  },
};

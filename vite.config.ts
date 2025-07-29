import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          // Màu pastel style Hàn Quốc
          '@primary-color': '#F4AEBE',
          '@secondary-color': '#F9D9D9',
          '@link-color': '#E6D0F0',
          '@success-color': '#C3E5AE',
          '@warning-color': '#FFE299',
          '@error-color': '#F5B5B5',
          '@border-color-base': '#E0E0E0',
          '@text-color': '#1A1A1A',
          '@heading-color': '#1A1A1A',
          '@font-family': '"Noto Sans KR", sans-serif',
          '@layout-body-background': '#FFFDFD',
          '@layout-header-background': '#FFFDFD',
          '@layout-footer-background': '#FDF7F7',
        },
      },
    },
  },
});

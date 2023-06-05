import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mybatboo.app',
  appName: 'mybatboo',
  webDir: 'dist/mybatboo',
  bundledWebRuntime: false,
  plugins: {
    CapacitorHttp: {
      // enabled: true,
    },
  }
};

export default config;

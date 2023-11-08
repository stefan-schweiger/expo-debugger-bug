const appEnvironment = process.env.APP_ENV ?? 'development';

const scheme = 'com.example.test';

export default {
  expo: {
    name: 'Testapp',
    slug: 'test-app',
    owner: 'example',
    version: '1.0.6',
    orientation: 'portrait',
    backgroundColor: '#FFFFFF',
    scheme,
    userInterfaceStyle: 'light',
    jsEngine: 'hermes',
    splash: {
      resizeMode: 'contain',
      backgroundColor: '#FFFFFF',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: scheme,
      config: {
        usesNonExemptEncryption: false,
      },
    },
    android: {
      package: scheme,
    },
    extra: {
      appEnvironment,
    },
    runtimeVersion: {
      policy: 'sdkVersion',
    },
    plugins: [
      [
        'expo-build-properties',
        {
          ios: {
            flipper: true, //'0.182.0',
            // not all libs support fiber yet
            newArchEnabled: false,
          },
          android: {
            // flipper: '0.182.0',
            // not all libs support fiber yet
            newArchEnabled: false,
            enableProguardInReleaseBuilds: true,
          },
        },
      ],
    ],
  },
};

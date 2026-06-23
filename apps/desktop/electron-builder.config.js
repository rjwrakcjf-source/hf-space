module.exports = {
  appId: 'com.hf-space.desktop',
  productName: 'HF Space',
  executableName: 'hf-space',
  copyright: `Copyright © ${new Date().getFullYear()}`,
  directories: {
    buildResources: 'assets',
    output: 'dist',
  },
  files: [
    'src/**/*',
    'dist/**/*',
    'node_modules/**/*',
    'package.json',
  ],
  win: {
    target: [{ target: 'nsis', arch: ['x64', 'ia32'] }],
    icon: 'assets/icons/icon.ico',
    signingHashAlgorithms: ['sha256'],
  },
  mac: {
    target: [{ target: 'dmg', arch: ['x64', 'arm64'] }],
    icon: 'assets/icons/icon.icns',
    hardenedRuntime: true,
    gatekeeperAssess: false,
    entitlements: 'assets/entitlements.mac.plist',
    entitlementsInherit: 'assets/entitlements.mac.plist',
  },
  linux: {
    target: [
      { target: 'AppImage', arch: ['x64'] },
      { target: 'deb', arch: ['x64'] },
    ],
    artifactName: 'hf-space-${version}-${arch}.${ext}',
    icon: 'assets/icons',
    category: 'Development',
    maintainer: 'HF Space Team',
  },
  publish: {
    provider: 'github',
    owner: 'rjwrakcjf-source',
    repo: 'hf-space',
  },
};

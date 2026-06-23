module.exports = {
  appId: 'com.hf-space.desktop',
  productName: 'HF Space',
  executableName: 'hf-space',
  copyright: `Copyright © ${new Date().getFullYear()}`,
  directories: {
    buildResources: 'assets',
    output: 'dist',
  },
  // Bundle main-process source and built renderer; node_modules handled by electron-builder
  files: [
    'src/main/**/*',
    'dist/**/*',
    'package.json',
  ],
  // Workspace packages are resolved by pnpm and must be included explicitly
  extraResources: [],
  // Use ASAR but exclude native modules that cannot be serialised
  asar: true,
  asarUnpack: [
    'node_modules/**/*.node',
  ],
  win: {
    target: [{ target: 'nsis', arch: ['x64', 'ia32'] }],
    icon: 'assets/icons/icon.ico',
    signingHashAlgorithms: ['sha256'],
  },
  nsis: {
    oneClick: false,
    allowToChangeInstallationDirectory: true,
    createDesktopShortcut: true,
    createStartMenuShortcut: true,
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
    releaseType: 'release',
  },
};

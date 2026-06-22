const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

class ExtensionInstaller {
  constructor(installDir = './extensions') {
    this.installDir = installDir;
  }

  async download(extensionId, downloadUrl) {
    const destDir = path.join(this.installDir, extensionId);
    await fs.ensureDir(destDir);
    const response = await axios.get(downloadUrl, { responseType: 'arraybuffer' });
    await fs.writeFile(path.join(destDir, 'extension.zip'), response.data);
    return { extensionId, path: destDir };
  }
}

module.exports = { ExtensionInstaller };

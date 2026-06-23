class VirusScanner {
  async scan(filePath) { return { clean: true, threats: [] }; }
  async scanBuffer(buffer) { return { clean: true, threats: [] }; }
}
module.exports = { VirusScanner };

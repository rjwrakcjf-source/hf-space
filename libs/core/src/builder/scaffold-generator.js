const fs = require('fs-extra');
const path = require('path');

class ScaffoldGenerator {
  constructor(options = {}) {
    this.options = options;
    this.templateDir = options.templateDir || path.join(__dirname, '../../../packages/templates');
  }

  async generate(template, destination, variables = {}) {
    await fs.ensureDir(destination);
    const templatePath = path.join(this.templateDir, template);
    await fs.copy(templatePath, destination);
    await this.replaceVariables(destination, variables);
    return { success: true, path: destination };
  }

  async replaceVariables(dir, variables) {
    // Replace template variables in files
    const files = await fs.readdir(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = await fs.stat(filePath);
      if (stat.isDirectory()) {
        await this.replaceVariables(filePath, variables);
      } else if (stat.isFile()) {
        let content = await fs.readFile(filePath, 'utf8');
        for (const [key, value] of Object.entries(variables)) {
          content = content.replace(new RegExp(`{{${key}}}`, 'g'), value);
        }
        await fs.writeFile(filePath, content);
      }
    }
  }
}

module.exports = { ScaffoldGenerator };

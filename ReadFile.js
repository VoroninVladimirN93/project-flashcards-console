const fs = require('fs');

class ReadFile {
  constructor(path, code) {
    this.path = path;
    this.code = code;
  }

  static async getFile(path, code) {
    return fs.readFileSync(path, code);
  }
}

module.exports = ReadFile;

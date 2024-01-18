const fs = require('fs');
const path = require('path');

const FileUtils = {
    mkdirsSync:  async function(dirname){
        if (fs.existsSync(dirname)) {
            return true;
        } else {
            if (await this.mkdirsSync(path.dirname(dirname))) {
                fs.mkdirSync(dirname);
                return true;
            }
        }
    }
}

module.exports = FileUtils

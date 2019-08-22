/**
 *Created by Shinelon on 2019/8/21
 */
var which = require('which');
var chalk = require('chalk');
function findNpm() {
    var npms = ['tnpm', 'cnpm', 'npm'];
    for(var i = 0; i < npms.length; i++) {
        try {
            // 查找环境变量下指定的可执行文件的第一个实例
            which.sync(npms[i]);
            console.log('use npm: ' + npms[i]);
            return npms[i]
        }catch(e) {
        }
    }
    throw new Error(chalk.red('please install npm'));
}

var npm = findNpm();
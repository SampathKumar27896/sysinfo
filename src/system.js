const os = require("os");

const systemInfo = () => {
    let freeMemory = os.freemem();
    freeMemory = (freeMemory / 1000000000).toFixed(2);
    return {
        architecture : os.arch(),
        cpu : os.cpus()[0],
        free_memory : freeMemory,
        hostname : os.hostname(),
        homedir : os.homedir(),
        hostname : os.hostname(),
        os_platform : os.platform(),
        os_release : os.release()

    };
}



module.exports = systemInfo;
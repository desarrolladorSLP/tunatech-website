var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var config = {
    user: process.env.FTP_USER,
    password: process.env.FTP_PASS,
    host: process.env.FTP_HOST,
    port: 21,
    localRoot: __dirname + '/dist',
    remoteRoot: '/public_html',
    include: ['*', '**/*'],      // this would upload everything except dot files
    deleteRemote: true              // delete existing files at destination before uploading
}

ftpDeploy.deploy(config)
    .then(res => console.log('finished'))
    .catch(err => console.log(err))

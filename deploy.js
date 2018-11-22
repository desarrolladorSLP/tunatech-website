const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();

const program = require('commander');

program
    .version('1.0.0')
    .option('-d, --data', 'Deploys only data json files')
    .parse(process.argv);

const config = {
    user: process.env.FTP_USER,
    password: process.env.FTP_PASS,
    host: process.env.FTP_HOST,
    port: 21,
    localRoot: __dirname + '/dist',
    remoteRoot: '/public_html',
    include: ['*', '**/*'],      // this would upload everything except dot files
    deleteRemote: true              // delete existing files at destination before uploading
}

console.log('Preparing deployment...');
if (program.data) {
    console.log('Deploy only data json files');
    config.localRoot =  __dirname + '/dist/data';
    config.remoteRoot = '/public_html/data';
}

ftpDeploy.deploy(config)
    .then(res => console.log('finished'))
    .catch(err => console.log(err))

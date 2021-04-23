module.exports = (done) => {
    done(`Current directory: ${process.cwd()}`);
    process.stdout.write('\nprompt > ')
}
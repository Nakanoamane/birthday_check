module.exports = {
    devServer: {
        port: 8081,
        host: "localhost"
    },
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Birthday Check',
        }
    }
};
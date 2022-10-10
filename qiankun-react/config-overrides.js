module.exports = {
    webpack: (config) => {
        config.output.library = 'reactApp'
        config.output.libraryTarget = 'umd'
        config.output.publicPath = 'http://localhost:3000/'
        return config
    },
    devServe: (configFunction) => {
        return function (proxy, allowedHost) {
            const config = configFunction(proxy, allowedHost);
            config.headers = {
                "Access-Control-Allow-Origin": '*'
            }
        }
    }
}
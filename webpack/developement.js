const common = require("./common");
const development = {
    devServer: {
        static: {
            directory: ""
        },
        host: "http://localhost/",
        port: 8080
    },
    watch: true
}

module.exports = merge(common, development);
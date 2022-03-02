const path = require('path');


module.exports = {
    entry : "./src/index.js",
    output : {
        path : path.resolve(__dirname, "build"),
        filename : "bundle.js",
    },
    mode: "development",
    module: {
        rules: [
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
        {
            test: /\.(jpg|png|gif|svg)$/,
            use: [{
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "src/img/",
                    publicPath: "src/img/"
                }
            }]
        }
        ]}
}
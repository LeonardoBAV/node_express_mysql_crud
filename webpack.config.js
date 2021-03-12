const path = require('path');

module.exports = {
    entry: './app/public/src/index.js' ,
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './app/public/dist')
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }
        ]
      }
}
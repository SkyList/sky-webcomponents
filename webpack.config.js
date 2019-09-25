const path = require('path')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module:{
        rules: [
            {
                test:/\.css$/i,
                use: ['to-string-loader', 'css-loader'],
            },
            {
                test: /\.md$/i,
                use: 'raw-loader',
              },
        ]
    }
}
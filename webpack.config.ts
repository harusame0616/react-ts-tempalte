import * as path from 'path';
import * as webpack from 'webpack';


 const config: webpack.Configuration = {
    mode: 'development',
    entry: './src/sample1/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
     },
     module: {
         rules: [
             {
                 test: /\.(ts)$/,
                 exclude: /node_modules/,
                 use: "ts-loader",
             }
         ]
     }
}

export default config

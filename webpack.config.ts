import * as path from 'path';
import * as webpack from 'webpack';


 const config: webpack.Configuration = {
    mode: 'development',
    entry: './src/sample1/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}

export default config;

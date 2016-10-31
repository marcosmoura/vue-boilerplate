import path from 'path';

const config = {
  projectRoot: path.resolve(__dirname, '../'),
  rootPath: path.resolve(__dirname, '../dist'),
  nodePath: path.resolve(__dirname, '../node_modules'),
  srcPath: 'src',
  indexPath: 'src/index.html',
  publicPath: '/',
  assetsPath: 'src/assets'
};

let dev = {
  server: {
    port: process.env.PORT || '9000'
  },
  env: {
    NODE_ENV: '"development"'
  }
};

let prod = {
  env: {
    NODE_ENV: '"production"'
  }
};

if (config.env === 'production') {
  Object.assign(config, prod);
} else {
  Object.assign(config, dev);
}

export default config;

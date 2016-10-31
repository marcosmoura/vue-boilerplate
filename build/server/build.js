import ora from 'ora';
import webpack from 'webpack';
import webpackConfig from '../webpack/prod';

const spinner = ora({
  text: 'Building...',
  spinner: 'circleQuarters',
  color: 'green'
});

spinner.start();

webpack(webpackConfig, (error, stats) => {
  if (error) {
    throw error;
  }

  process.stdout.write('\n\n' + stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n');

  spinner.stop();
});

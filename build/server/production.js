import webpack from 'webpack'
import ora from 'ora'
import webpackConfig from '../webpack/production'

const spinner = ora({
  text: 'Building...',
  spinner: 'circleQuarters',
  color: 'green'
})

spinner.start()

webpack(webpackConfig, (error, stats) => {
  if (error) {
    throw error
  }

  process.stdout.write('\n\n' + stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')

  spinner.stop()
})

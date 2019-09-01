/*
module.exports = {
    entry: ['./app.js','./jwt.js'],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
},
module: { },
plugins: [ ]
}
*/
module.exports = {
  mode: 'production',
  entry: './app.js',
  output: {
     path: __dirname+ '/dist',
   },
  node: {
        fs: 'empty',
       child_process: 'empty',
       tls: 'empty',
       net: 'empty'
    },
 target: "node"
};
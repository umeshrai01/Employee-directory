const esbuild = require('esbuild');

esbuild.build({
    entryPoints: ['./src/App.jsx'],
  bundle: true,                   
  outfile: './dist/bundle.js',   
  loader: { '.js': 'jsx' },       
  minify: true,                   
  sourcemap: true,                
  define: { 'process.env.NODE_ENV': '"production"' },
  target: ['es6'],                
}).catch(() => process.exit(1));
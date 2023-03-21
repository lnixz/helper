export default [
    {
        input: './src/main.js',
        output: [
            {
                file: './dist/bundle.es.mjs',
                format: 'es',
            },
            {
                file: './dist/bundle.cjs.js',
                format: 'cjs',
            },
            {
                file: './dist/bundle.amd.js',
                format: 'amd',
            },
            {
                file: './dist/bundle.iife.js',
                format: 'iife',
                name: 'helper',
            },
            {
                file: './dist/bundle.umd.js',
                format: 'umd',
                name: 'helper',
            },
            {
                file: './dist/bundle.system.js',
                format: 'system',
            },
        ]
    },
]
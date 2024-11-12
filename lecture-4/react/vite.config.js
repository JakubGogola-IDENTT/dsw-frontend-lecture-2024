import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
    server: {
        port: 3000,
    },
    plugins: [
        react(),
        mkcert({
            source: 'coding',
        }),
    ],
    base: '/',
    publicDir: 'public',
    build: {
        cssMinify: 'lightningcss',
        rollupOptions: {
            output: {
                manualChunks: {
                    'react-vendor': ['react', 'react-dom', 'react-router-dom'],
                },
            },
            external: '/envConfig.js',
        },
    },
    optimizeDeps: {
        include: ['react/jsx-runtime'],
    },
});

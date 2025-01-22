import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
    resolve: {
        alias: {
            '@views': path.resolve(__dirname, './src/app/views'),
            '@app': path.resolve(__dirname, './src/app')
        }
    }
})
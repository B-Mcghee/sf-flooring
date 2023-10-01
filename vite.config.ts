import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    watch:{
      
    }
  },
  plugins: [react(), splitVendorChunkPlugin()],
})

import type { Plugin } from 'vite';
import { normalizePath } from 'vite';

function VitePluginNormalizePathError(): Plugin {

  return {
    name: 'vite-plugin-normalize-path-error',
    enforce: 'post',
    transform(code: string, id: string) {
      if(normalizePath(id) === id) {
        return `// What a useless plugin\n${code}`;
      }
      return code;
    },
  }
}

export default VitePluginNormalizePathError;

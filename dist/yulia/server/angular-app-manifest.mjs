
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23140, hash: 'fbf4ddc441b54b7c0dc2594e7052efe3987439e2e315e0930a3d99ef1990771b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 22949, hash: 'd8c608095bbbf9044dfca6853507e941ac3728e6425a40040c0fda678f4070d8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 27117, hash: '724982b8e8b2ae0e63467bc7ec2e0e25d2755c72d0e69a9f4715cdb398b6fbdd', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 55100, hash: '0eada56ade82a55cd2f84a46cb2b82bd2477a9add58e3648ecb8e51f5cb76e86', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-PFUNF4HQ.css': {size: 3788, hash: 'GwviV287M+E', text: () => import('./assets-chunks/styles-PFUNF4HQ_css.mjs').then(m => m.default)}
  },
};

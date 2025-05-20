
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
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 25240, hash: '45ca463b6984f1740fb11f2c07be226f1cfb121479d744607cac20b5774a94df', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25024, hash: '4c69f60d8adb3d3593217e32a512ff25c62fe9c50b009ac9b534149854da7d8c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 30497, hash: 'ecff3ef88b99e3a0c6f4748ac9e807196e8ccfc788c16d750c25fe0753c67cb2', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 57314, hash: '2b403dbacde084e710967030bc93d1e26a7c90528fcd1b4eaba729b69de0ac2e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-UX6A6DT3.css': {size: 3861, hash: 'kT7FUXhp9LI', text: () => import('./assets-chunks/styles-UX6A6DT3_css.mjs').then(m => m.default)}
  },
};

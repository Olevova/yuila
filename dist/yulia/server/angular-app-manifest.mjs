
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
    'index.csr.html': {size: 23140, hash: '9e17d9408bd8f0ad419fb337bb3ff3e429cbe5e0184fa7d53478435a8222b635', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 22949, hash: '69dc4a8233fdc46ec34dc3e38c3513e2f21d3f6565bb73ef2f72b717eaad542e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 30302, hash: '280fcd30fc4738a6226d9a785d7e19b06a2ea2485e633a3672beac24f7842bca', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 71781, hash: 'ac087a2772514b8518af699a6f2eb47a2e705db8950fcce0291639e0321b57f5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-PFUNF4HQ.css': {size: 3788, hash: 'GwviV287M+E', text: () => import('./assets-chunks/styles-PFUNF4HQ_css.mjs').then(m => m.default)}
  },
};

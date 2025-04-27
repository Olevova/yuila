
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
    'index.csr.html': {size: 23119, hash: 'd5545008b9f5fa7b1968cd7a03d0c2b1fcbaced711096c264a0e4df0bb2b3869', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 22928, hash: '97b416e2b3306e0a0436e76aa1cad60581a80eadf0217429ca8889f1b4d9ad25', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 52125, hash: '893918b412c4d4abec764e4895b0cc076a644528d8722c21b975d9d6597e7c38', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 27071, hash: '581ab42d99acd468a33d2422873313f414408194ce0ca249542d705282ebb595', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-PGSG5SB7.css': {size: 3782, hash: 'GlvrLet1LvM', text: () => import('./assets-chunks/styles-PGSG5SB7_css.mjs').then(m => m.default)}
  },
};

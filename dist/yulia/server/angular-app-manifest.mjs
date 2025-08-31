
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
    "route": "/agreement"
  },
  {
    "renderMode": 2,
    "route": "/payment-success"
  },
  {
    "renderMode": 2,
    "route": "/404"
  },
  {
    "renderMode": 2,
    "redirectTo": "/404",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 25269, hash: '8409e818542cc6f3690cde26cb49d7872864b2a44bc34804383b34356a0d458c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25053, hash: '219aff6240da24073147962763ff42d55658c09a753e392257a6218e00e2df16', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 57981, hash: '32074e91a4e6f0042014cf959810775c9bc1f497472b5cd6226b9ae28f874bdd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    '404/index.html': {size: 27432, hash: 'c20fb0b089720b2004fb33762745b941e7b65286f22327a1675c0f9c8205ae30', text: () => import('./assets-chunks/404_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 30526, hash: '5165365a9d10bef45878a971271a4949e2b05ca74be82bd582e94ddf38315e3a', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'payment-success/index.html': {size: 30505, hash: 'a594905387372afeeebad52b9efc20737b5054ef39e143f4cc37be88c0502243', text: () => import('./assets-chunks/payment-success_index_html.mjs').then(m => m.default)},
    'agreement/index.html': {size: 43718, hash: '2768306a3c2366d70b751c929601a64bdad6eb352a227a55edc3ec16334d1daf', text: () => import('./assets-chunks/agreement_index_html.mjs').then(m => m.default)},
    'styles-UX6A6DT3.css': {size: 3861, hash: 'kT7FUXhp9LI', text: () => import('./assets-chunks/styles-UX6A6DT3_css.mjs').then(m => m.default)}
  },
};

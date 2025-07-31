
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
    'index.csr.html': {size: 25273, hash: '476352ccd89e4d276fa75cd3f1e6846fb463af58de268a1133e52b0707570671', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25057, hash: 'ba23e1dbb614f4d98c3a419241a85405a2c04270f198ff8d6a540207f360d0b6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 30530, hash: 'f98fa75161481383de1e2c3d3856928023ac3af689fede5d8868d9b38bd58560', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 57959, hash: '6ef468d59476681389ad445ba461430a76a5417c9e2cf4c74caa2f7f25e5dc81', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'agreement/index.html': {size: 43715, hash: '2891266496fb2e859bb8d3ecf81c7ddf1e3e200ce6eda9dc3be39fe12a7a9bf3', text: () => import('./assets-chunks/agreement_index_html.mjs').then(m => m.default)},
    '404/index.html': {size: 27436, hash: '07e3f500f296ef26570897d051a878382cf10a765e3564882b713d8745b86017', text: () => import('./assets-chunks/404_index_html.mjs').then(m => m.default)},
    'styles-UX6A6DT3.css': {size: 3861, hash: 'kT7FUXhp9LI', text: () => import('./assets-chunks/styles-UX6A6DT3_css.mjs').then(m => m.default)}
  },
};

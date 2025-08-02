
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
    'index.csr.html': {size: 25269, hash: 'e06fd7ae5b54a4ee520810116f5efa32e6828a31dff70b021946a8acc82d259e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25053, hash: '43ca193a11cbdb4fa5e80957e6348db3c6bf9603d9dd191a575b648face980ee', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'agreement/index.html': {size: 43711, hash: 'b029012b27d87955b108fca93687319bf935eda34c7418bc70d49178859467cc', text: () => import('./assets-chunks/agreement_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 30526, hash: 'c439633cb5d87ec207190dc09d3ba15528e7d8bed7ccad4cdd4c039c3fbe483d', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    '404/index.html': {size: 27432, hash: 'f20413302444071ae6d3cb08992b9b598d8a927ab9476c72b84b85eed8867832', text: () => import('./assets-chunks/404_index_html.mjs').then(m => m.default)},
    'index.html': {size: 57955, hash: '8be9363da3295056f79e4d36f41374c11d839f8ed2c78cb86a1e2c4c6edb3098', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-UX6A6DT3.css': {size: 3861, hash: 'kT7FUXhp9LI', text: () => import('./assets-chunks/styles-UX6A6DT3_css.mjs').then(m => m.default)}
  },
};

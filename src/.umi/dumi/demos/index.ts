// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!/Users/jingze/Desktop/jz-react-ui-1/src/alert/demo/basic.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!/Users/jingze/Desktop/jz-react-ui-1/src/alert/index.tsx?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!/Users/jingze/Desktop/jz-react-ui-1/src/alert/style/index.ts?dumi-raw-code';
import rawCode4 from '!!dumi-raw-code-loader!/Users/jingze/Desktop/jz-react-ui-1/src/alert/style/index.less?dumi-raw-code';
import rawCode5 from '!!dumi-raw-code-loader!/Users/jingze/Desktop/jz-react-ui-1/src/button/demo/basic.tsx?dumi-raw-code';
import rawCode6 from '!!dumi-raw-code-loader!/Users/jingze/Desktop/jz-react-ui-1/src/button/index.tsx?dumi-raw-code';
import rawCode7 from '!!dumi-raw-code-loader!/Users/jingze/Desktop/jz-react-ui-1/src/button/style/index.ts?dumi-raw-code';
import rawCode8 from '!!dumi-raw-code-loader!/Users/jingze/Desktop/jz-react-ui-1/src/button/style/index.less?dumi-raw-code';

export default {
  'alert-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_trela" */'/Users/jingze/Desktop/jz-react-ui-1/src/alert/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode1},"index.tsx":{"import":"../index","content":rawCode2},"style/index.ts":{"import":"../style","content":rawCode3},"style/index.less":{"import":"./index.less","content":rawCode4}},"dependencies":{"react":{"version":"18.2.0"},"prop-types":{"version":"15.8.1"}},"componentName":"alert","identifier":"alert-basic"},
  },
  'button-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_nottub" */'/Users/jingze/Desktop/jz-react-ui-1/src/button/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode5},"index.tsx":{"import":"../index","content":rawCode6},"style/index.ts":{"import":"../style","content":rawCode7},"style/index.less":{"import":"./index.less","content":rawCode8}},"dependencies":{"react":{"version":"18.2.0"}},"componentName":"button","identifier":"button-basic"},
  },
};

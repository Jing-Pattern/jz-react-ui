// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/jingze/Desktop/jz-react-ui-1/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')})],
    "component": ((props) => dynamic({
          loader: async () => {
            const React = await import('react');
            const { default: getDemoRenderArgs } = await import(/* webpackChunkName: 'dumi_demos' */ '/Users/jingze/Desktop/jz-react-ui-1/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
            const { default: Previewer } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi-theme-default/es/builtins/Previewer.js');
            const { usePrefersColor, context } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi/theme');

            return props => {
              
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
            }
          },
          loading: () => null,
        }))()
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')}), dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'/Users/jingze/Desktop/jz-react-ui-1/node_modules/dumi-theme-default/es/layout.js')})],
    "routes": [
      {
        "path": "/src/alert",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'alert__index.md' */'/Users/jingze/Desktop/jz-react-ui-1/src/alert/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/alert/index.md",
          "updatedTime": 1668063480000,
          "componentName": "alert",
          "title": "Alert ????????????",
          "group": {
            "title": "Alert ????????????",
            "__fallback": true,
            "path": "/src/alert"
          },
          "nav": {
            "title": "??????",
            "path": "/src"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Alert ????????????",
              "heading": "alert-????????????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 3,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Alert ???????????? - jz UI"
      },
      {
        "path": "/src/button",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'button__index.md' */'/Users/jingze/Desktop/jz-react-ui-1/src/button/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/button/index.md",
          "updatedTime": 1668063480000,
          "componentName": "button",
          "title": "Button",
          "group": {
            "title": "Button",
            "__fallback": true,
            "path": "/src/button"
          },
          "nav": {
            "title": "??????",
            "path": "/src"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Button",
              "heading": "button"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 3,
              "value": "????????????",
              "heading": "????????????"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Button - jz UI"
      },
      {
        "path": "/docs",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__index.md' */'/Users/jingze/Desktop/jz-react-ui-1/src/docs/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/docs/index.md",
          "updatedTime": 1668063751722,
          "title": "jz UI",
          "hero": {
            "title": "jz UI",
            "desc": "<div class=\"markdown\"><p>?????????????????? dumi ??????</p></div>",
            "actions": [
              {
                "text": "????????????",
                "link": "/getting-started"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",
              "title": "?????? 1",
              "desc": "<div class=\"markdown\"><p>Balabala</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",
              "title": "?????? 2",
              "desc": "<div class=\"markdown\"><p>Balabala</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "?????? 3",
              "desc": "<div class=\"markdown\"><p>Balabala</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright ?? 2020<br />Powered by <a href=\"https://d.umijs.org/\" target=\"_blank\">dumi<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\" class=\"__dumi-default-external-link-icon\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path><polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg></a></p></div>",
          "slugs": [],
          "nav": {
            "path": "/docs",
            "title": "Docs"
          }
        },
        "title": "jz UI - jz UI"
      },
      {
        "path": "/src",
        "meta": {},
        "exact": true,
        "redirect": "/src/alert"
      }
    ],
    "title": "jz UI",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}

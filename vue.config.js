module.exports = {
    "devServer":{
        "proxy": {
          "/api": {
          "target": 'https://xkcd.com',
          "pathRewrite": { '^/api': '' },
          "changeOrigin": true,
          "secure": false
          }
        }
      }
    }
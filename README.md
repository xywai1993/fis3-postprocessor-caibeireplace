# fis3-postprocessor-caibeireplace
一个fis3 postprocessor 阶段的 插件，用于替换一些字符串

例如 线上环境 替换 vue.dev 

```javascript
fis.media('prod').match('/js/page/**.js', {
    postprocessor: fis.plugin('caibeireplace', {
        reg: [{re: /vue.dev2.1.10/g, replace: 'vue.min2.1.10'},
        ]
    }),
    optimizer: fis.plugin('uglify-js',{
        mangle: {
            except: 'exports, module, require, define'
        },
        compress : {
            drop_console: true
        }
    }),
    parser: fis.plugin('babel-6.x'),
    rExt: 'js'
})

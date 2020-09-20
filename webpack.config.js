/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

const path = require('path');
const fs = require('fs');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = function(env){
    let stringData = fs.readFileSync(path.resolve(__dirname, 'manifest.json'));
    let json = JSON.parse(stringData);
    let scssFiles = json['scss'];
    let jsFiles = json['js'];

    var entry = {};

    //Scss
    // for (var name in scssFiles){
    //     if(!scssFiles.hasOwnProperty(name))continue;
    //     entry[name+'_style'] = path.resolve(__dirname, scssFiles[name]);
    // }
    // entry['theme_style'] = path.resolve(__dirname, scssFiles['dark']);
    //3rd libs js
    let resources = json['resource'];
    var counter = 0;
    var entries = [path.resolve(__dirname, scssFiles['dark'])];
    resources.forEach(function(file){
        // entry['vendor_'+(++counter)] = path.resolve(__dirname, file);
        entries.push(path.resolve(__dirname, file));
    });

    //Ui js
    jsFiles = jsFiles.map(function(file){
        return path.resolve(__dirname, file);
    });
    jsFiles.unshift('./testnamespaces.js');
    entries = entries.concat(jsFiles);
    entry['main'] = entries;


    //Demo js
    entry['demo'] = './demo/demo.js';
    entry['demo_style'] = './demo/demo.scss';

    // entry  = './demo.js';


    return {
        entry:entry,
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].bundle.js',
        },
        mode:"none",
        module:{
            rules:[
                {
                    test: /\.scss$/i,
                    use: [
                        'style-loader', //Create javascript for css //embed this js will automatically load css
                        'css-loader', //translate content of @import to string
                        {
                            loader: 'postcss-loader', //add prefix rules for all browsers ex. transform, -ms-transform...
                            options: {
                                plugins: () => [autoprefixer()]
                            }
                        },
                        'sass-loader' //Sass to css
                    ]
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'fonts/'
                            }
                        }
                    ]
                },
                {
                    test: /pickr.es5.min.js/,
                    use: [{
                        loader: 'expose-loader',
                        options:'Pickr'
                    }]
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]'
                            }
                        }
                    ]
                },


            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'demo/demo.ejs',
                inject:'head'
            }),
            new CopyPlugin([
                {
                    from: 'node_modules/ace-builds/**/*',
                    to: ''
                },
            ])
        ]
    };
};

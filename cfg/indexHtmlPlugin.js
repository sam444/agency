function MyPlugin(options) {
    // Configure your plugin with options...
}

MyPlugin.prototype.apply = function(compiler) {
    compiler.plugin('compilation', function(compilation) {
        compilation.plugin('html-webpack-plugin-after-html-processing', function(htmlPluginData, callback) {
            var regExp = new RegExp('http://rainbow.ebaotech.com','g');
            htmlPluginData.html=htmlPluginData.html.replace(regExp, '');
            callback(null, htmlPluginData);
        });
    });

};

module.exports = MyPlugin;
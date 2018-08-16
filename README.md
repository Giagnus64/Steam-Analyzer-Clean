# Steam Analyzer

### Author: Gianfranco Nuschese ###

### Description: ###
A webapp that pulls game data from the Steam API and sorts it by time played. Stage: Final/Finished - Live at [GitHub Pages](https://giagnus64.github.io/Steam-Analyzer-Clean).


# Entry Points: #

* Frontend styles: assets/styles/* .css
* Image assets: assets/images 
* HTML files: index.html
* Scripts: src/ * .js
* Dev Config: webpack.config.js / postcss.config.js


## Install
You need [Node.js](https://nodejs.org/en/) and [NPM](https://www.npmjs.com).

    $ git clone https://github.com/Giagnus64/Steam-Analyzer-Clean
    $ cd Steam-Analyzer-Clean
    $ npm install


### Start Webpack Dev Server(watches JS files for changes)

    $ npm start

### Build JS File

    $ npm run build

### Build & Watch Styles File

    $ npm run postcss

### Start Browsersync Server (for style-preview purposes)

    $npm run browsersync

## Languages & tools

### HTML

### JavaScript

- [Babel](https://babeljs.io) is used to compile newer JS down to pre ES6 convention. 

- [Webpack](https://webpack.js.org) is used for readability and accessibility for future edits, as well as a [server](https://webpack.js.org/configuration/dev-server/) that automatically builds and refreshes the browser upon changes.

### CSS

- [Postcss](https://postcss.org) is used for readability and accessibility for future edits with the following plugins:
    - [postcss-import](https://github.com/postcss/postcss-import) allows for bundling of multiple css files. 
    - [autoprefixer](https://github.com/postcss/autoprefixer) is used for multi-browser support. 
    - [postcss-cssnext](http://cssnext.io) is used to unwrap nested css.
    - [postcss-mixins](https://github.com/postcss/postcss-mixins) adds the ability to define and use mixins.
    - [postcss-simple-vars](https://github.com/postcss/postcss-simple-vars) allows use of Sass-like variables in css. 


### Build Tools

- [Browser-sync](https://browsersync.io) is used to test stylistic changes. Browsersync also allows multiple devices to connect to the server - used for mobile testing. 

# Dev-Dependencies: #

* NodeJS
* Node Package Manager
    * autoprefixer 
    * babel-core 
    * babel-loader
    * babel-polyfill
    * babel-preset-env
    * babel-preset-stage-0
    * postcss-cli 
    * postcss-import
    * postcss-mixins
    * postcss-simple-vars
    * postcss-cssnext
    * normalize.css
    * webpack

##### Preview Development (Self-hosted servers): #####
* webpack-dev-server
* browser-sync

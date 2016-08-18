# vue-pikaday

A lightweight Vue.js directive wrapper over [dbushell/Pikaday](https://github.com/dbushell/Pikaday).

## Install
>Install the library from NPM
>```
>npm install vue-pikaday
>```

## Usage
>Install the directive
>```js
># in your JS
>import vPikaday from 'vue-pikaday'
>Vue.use(vPikaday)
>```
--
> Set some VM data to bind
> ```js
>  new Vue({
>    data () {
>      return { date: null }
>    }
> })
> ```
--
> Create the datepicker
> ```html
> <input type="text" v-date="date">
> ```

## Styling

The directive does not include any styling by default. You can grab base [css](https://raw.githubusercontent.com/dbushell/Pikaday/master/css/pikaday.css) & [scss](https://raw.githubusercontent.com/dbushell/Pikaday/master/scss/pikaday.scss) from the Pikaday repository.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

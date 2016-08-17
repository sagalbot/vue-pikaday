# vue-pikaday

> A lightweight Vue.js directive wrapper over dbushell/Pikaday.

### Install
```
npm install vue-pikaday
```

### Usage
>Install the directive
>```js
>import vPikaday from './vue-pikaday'
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

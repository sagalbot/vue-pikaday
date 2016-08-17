let Pikaday = typeof require === 'function'
    ? require('Pikaday')
    : window.Pikaday

var moment = typeof require === 'function'
    ? require('moment')
    : window.moment

if (!Pikaday) {
  throw new Error('[vue-pikaday] cannot locate the Pikaday library.')
}

let usingMoment = moment ? true : false;

const vPikaday = {
  // exposed global options
  config: {},
  install: (Vue) => {
    Vue.directive('date', {
      twoWay: true,
      params: ['options'],

      bind(date) {
        let self = this;

        let options = Object.assign({
          field: this.el,
          onSelect() {
            self.set(this.toString())
          }
        }, this.params.options)

        this.picker = new Pikaday(options)

        if (this.arg && !this.vm.datepicker) {
          this.vm.datepicker = {}
        }

        //  Throw an error if the given ID is not unique
        if (this.arg && this.vm.datepicker[this.arg]) {
          console.warn('[vue-datepicker] cannot set already defined datepicker id: \'' + this.arg + '\'')
        } else if (this.arg) {
          this.vm.datepicker[this.arg] = this.picker
        }
      },

      update(date) {
        if (date) {
          this.picker.setDate(date, true)
        }
      },

      unbind() {
        this.picker.destroy()
      }
    })
  }
}

if (window.Vue) {
  window.vPikaday = vPikaday
  Vue.use(vPikaday)
}

export default vPikaday


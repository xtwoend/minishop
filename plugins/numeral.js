import Vue from 'vue'
import numeral from 'numeral'

// numeral.register('locale', 'id', {
//   delimiters: {
//     thousands: '.',
//     decimal: ','
//   }
// })
// numeral.locale('id')

Vue.filter('currency', function (value) {
  return numeral(value).format('0,0')
})

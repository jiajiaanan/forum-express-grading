const dayjs = require('dayjs') // 載入 dayjs 套件
const hbshelpers = require('handlebars-helpers')
const relativeTime = require('dayjs/plugin/relativeTime') // 增加這裡
dayjs.extend(relativeTime)
const multihelpers = hbshelpers()

module.exports = {
  multihelpers,
  currentYear: () => dayjs().year(),
  relativeTimeFromNow: a => dayjs(a).fromNow(),
  ifCond: function (a, b, options) {
    return a === b ? options.fn(this) : options.inverse(this)
  }
}

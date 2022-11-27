const dayjs = require('dayjs') // 載入 dayjs 套件
const hbshelpers = require('handlebars-helpers')
const multihelpers = hbshelpers()

module.exports = {
  multihelpers,
  currentYear: () => dayjs().year()
}

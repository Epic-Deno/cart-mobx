/*
 * @Description: Description
 * @Author: ZHANG ZHEN
 * @Date: 2021-05-18 23:32:39
 * @LastEditors: ZHANG ZHEN
 * @LastEditTime: 2021-05-18 23:32:48
 */
const { override, addDecoratorsLegacy } = require("customize-cra")

module.exports = override(
  addDecoratorsLegacy()
)
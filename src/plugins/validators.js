import Vue from 'vue'
import { extend, setInteractionMode, ValidationObserver, ValidationProvider } from 'vee-validate'
import { messages } from 'vee-validate/dist/locale/de.json'
import * as rules from 'vee-validate/dist/rules'

export const installFormValidators = () => {
  setInteractionMode('eager')

  // register all build-in rules
  Object.keys(rules).forEach(rule => extend(rule, { ...rules[rule], message: messages[rule] }))

  extend('regexp', {
    params: ['expression', 'errorMsg'],
    message: (field, { errorMsg }) => errorMsg,
    validate: (value, { expression }) => new RegExp(expression).test(value),
  })

  Vue.component('ValidationProvider', ValidationProvider)
  Vue.component('ValidationObserver', ValidationObserver)
}

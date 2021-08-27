import Button from './components/Button.vue'
import Header from './components/Header.vue'
import Page from './components/Page.vue'

const Components = [
 Button, Header, Page
]
const install = function (Vue, opts = {}) {
 Components.forEach(component => {
   Vue.component(component.name, component)
 })
}
export default {
 install
}
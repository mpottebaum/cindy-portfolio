import { menuListener } from './menu'

document.addEventListener('turbolinks:load', () => {
    menuListener()
})
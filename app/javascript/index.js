import { menuListener, menuExitListener } from './menu'

document.addEventListener('turbolinks:load', () => {
    menuListener()
    menuExitListener()
})
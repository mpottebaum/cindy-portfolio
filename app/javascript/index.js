document.addEventListener('DOMContentLoaded', () => {
    menuListener()
})

const menuListener = () => {
    const menuButton = document.getElementById('menu-btn')
    menuButton.addEventListener('click', () => {
        const menu = document.getElementById('menu')
        if(menuButton.dataset.status === 'closed') {
            const newMenuItems = buildMenuItems()
            menu.appendChild(newMenuItems)
            menuButton.dataset.status = 'open'
        } else {
            const oldMenuItems = document.getElementById('menu-items')
            menu.removeChild(oldMenuItems)
            menuButton.dataset.status = 'closed'
        }
    })
}

const buildMenuItems = () => {
    const items = document.createElement('div')
    items.id = 'menu-items'
    items.innerHTML = '<p>hey</p>'
    return items
}
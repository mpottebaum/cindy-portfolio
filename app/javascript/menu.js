export const menuListener = () => {
    const menuButton = document.getElementById('menu-btn')
    menuButton.dataset.status = 'closed'
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
    const items = document.createElement('ul')
    items.id = 'menu-items'
    items.className = 'dropdown'
    items.addEventListener('click', () => linkClickListener(items))
    items.innerHTML = `
    <li><a href='/'>home</a></li>
    <li><a href='/about'>about</a></li>
    <li><a href='/contact'>contact</a></li>
    `
    return items
}

const linkClickListener = items => {
    const menu = document.getElementById('menu')
    menu.removeChild(items)
}
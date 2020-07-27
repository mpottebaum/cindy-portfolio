

export const menuListener = () => {
    const menu = document.getElementById('menu')
    const menuButton = document.getElementById('menu-btn')
    menuButton.addEventListener('click', () => {
        const menuItems = document.getElementById('menu-items')
        if(menuItems) {
            menu.removeChild(menuItems)
        } else {
            const newMenuItems = buildMenuItems()
            menu.appendChild(newMenuItems)
        }
    })
}

const buildMenuItems = () => {
    const items = document.createElement('ul')
    items.id = 'menu-items'
    items.className = 'dropdown'
    items.addEventListener('click', () => linkClickListener(items))
    items.innerHTML = `
    <li><a href='/' class='menu-item'>home</a></li>
    <li><a href='/about' class='menu-item'>about</a></li>
    <li><a href='/approach' class='menu-item'>approach</a></li>
    <li><a href='/contact' class='menu-item'>contact</a></li>
    `
    return items
}

const linkClickListener = items => {
    const menu = document.getElementById('menu')
    menu.removeChild(items)
}



export const menuExitListener = () => {
    const menu = document.getElementById('menu')
    const body = document.getElementById('root')
    body.addEventListener('click', e => {
        const menuItems = document.getElementById('menu-items')
        if(e.target.className !== 'menu' && menuItems) {
            menu.removeChild(menuItems)
        }
    })
}
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = [
        {
            name: 'Espresso',
            description: 'A full-flavored, concentrated form of coffee that is served in shots.',
            price: '250 Rs.'
        },
        {
            name: 'Latte',
            description: 'A coffee drink made with espresso and steamed milk.',
            price: '100 Rs.'
        },
        {
            name: 'Cappuccino',
            description: 'An espresso-based coffee drink that originated in Italy, and is traditionally prepared with steamed milk foam.',
            price: '350 Rs.'
        },
        {
            name: 'Croissant',
            description: 'A buttery, flaky, viennoiserie pastry of Austrian origin, but mostly associated with France.',
            price: '200 Rs.'
        }
    ];

    const menuContainer = document.querySelector('.menu-items');
    menuItems.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <span class="menu-item-number">${index + 1}</span>
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p>${item.price}</p>
            </div>
        `;
        menuContainer.appendChild(menuItem);
    });
});
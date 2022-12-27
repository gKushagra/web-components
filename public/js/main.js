import { Sidebar } from "../../lib/sidebar.js";

(function () {
    // Sidebar code
    const sidebar = new Sidebar({
        id: 'test-sidebar',
        height: 100,
        heightUnit: 'vh',
        width: 25,
        widthUnit: 'vw'
    });
    const sidebarBtns = [
        document.getElementById('sidebar__open_btn'),
        document.getElementById('sidebar__close_btn')
    ];
    sidebarBtns.forEach(b => b.addEventListener('click', function (e) {
        const isOpen = sidebar.isOpen();
        isOpen ? sidebar.close() : sidebar.open();
        isOpen ?
            sidebarBtns[0].style.display = 'block'
            : sidebarBtns[0].style.display = 'none';
    }));
    // End sidebar code
})();
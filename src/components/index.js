class Sidebar {

    el;

    constructor(_ = { id: null, height: 100, heightUnit: 'vh', width: 25, widthUnit: 'vw' }) {

        this.el = document.getElementById(_.id);
        this.el.height = '100vh';
        this.el.width = '100vw';
        this.el.style.display = 'none';
        this.el.setAttribute('isopen', false);

        const sidebarContent = this.el.querySelector('SidebarContent');
        sidebarContent.id = `${_.id}&content`;
        sidebarContent.style.height = `${_.height}${_.heightUnit}`;
        sidebarContent.style.width = `${_.width}${_.widthUnit}`;

        const sidebarBody = this.el.querySelector('SidebarBody');
        sidebarBody.id = `${_.id}&body`;
        sidebarBody.style.height = `${_.height}${_.heightUnit}`;
        sidebarBody.style.width = `${100 - _.width}${_.widthUnit}`;

        const sidebarContentResize = this.el.querySelector('SidebarContentResize');
        sidebarContentResize.id = `${_.id}&content_resize`;

        sidebarContentResize.addEventListener('click', function dividerClickEvent(e) {
            // const sidebarBodyId = e.target.id;
            const sidebarBodyId = e.target.id?.split('&')[0];
            document.body.style.cursor = 'col-resize';
            if (sidebarBodyId) {
                const sidebarId = sidebarBodyId.split('&')[0];
                const sidebarEl = document.getElementById(sidebarId);
                sidebarEl.addEventListener('mouseup', function mouseupEvent(e) {
                    console.log(e.clientX);
                    const pixelToViewWidth = (100 * e.clientX / window.innerWidth);
                    sidebarContent.style.width = `${pixelToViewWidth}${_.widthUnit}`;
                    sidebarBody.style.width = `${100 - pixelToViewWidth}${_.widthUnit}`;
                    const sidebarBodyId = e.target.id;
                    if (sidebarBodyId) {
                        const sidebarId = sidebarBodyId.split('&')[0];
                        const sidebarEl = document.getElementById(sidebarId);
                        document.body.style.cursor = 'default';
                        sidebarEl.removeEventListener('mouseup', mouseupEvent);
                    }
                });
            }
            setTimeout(() => {
                document.body.style.cursor = 'default';
            }, 5000);
        });

        // this.el.addEventListener('mousedown', function mousedownEvent(e) {
        //     console.log(e.clientX);
        //     const sidebarBodyId = e.target.id;
        //     if (sidebarBodyId) {
        //         const sidebarId = sidebarBodyId.split('&')[0];
        //         const sidebarEl = document.getElementById(sidebarId);
        //         sidebarEl.addEventListener('mouseup', function mouseupEvent(e) {
        //             console.log(e.clientX);
        //             const pixelToViewWidth = (100 * e.clientX / window.innerWidth);
        //             sidebarContent.style.width = `${pixelToViewWidth}${_.widthUnit}`;
        //             sidebarBody.style.width = `${100 - pixelToViewWidth}${_.widthUnit}`;
        //             const sidebarBodyId = e.target.id;
        //             if (sidebarBodyId) {
        //                 const sidebarId = sidebarBodyId.split('&')[0];
        //                 const sidebarEl = document.getElementById(sidebarId);
        //                 sidebarEl.removeEventListener('mouseup', mouseupEvent);
        //             }
        //         });
        //     }
        // });

        // sidebarBody.addEventListener('click', function (e) {
        //     const sidebarBodyId = e.target.id;
        //     if (sidebarBodyId) {
        //         const sidebarId = sidebarBodyId.split('&')[0];
        //         const sidebarEl = document.getElementById(sidebarId);
        //         sidebarEl.style.display = 'none';
        //         sidebarEl.setAttribute('isopen', false);
        //     }
        // });
    }

    open() {
        this.el.style.display = 'flex';
        this.el.style.flexDirection = 'row';
        this.el.setAttribute('isopen', true);
    }

    close() {
        this.el.style.display = 'none';
        this.el.setAttribute('isopen', false);
    }

    isOpen() {
        return this.el.getAttribute('isopen') === 'true' ? true : false;
    }
}
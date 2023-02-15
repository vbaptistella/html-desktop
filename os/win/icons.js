const desktop = document.getElementById('desktop');

const iconLocations = [
    {
        location: '#desktop',
        name: 'Recycle Bin',
        icon: 'imageres_55.ico',
        pos: { right: 0, bottom: 0 },
        command: 'explorer /recycle_bin'
    },
    {
        location: '#quickApps',
        name: 'Internet Explorer',
        icon: 'ieframe_190.ico',
        command: 'iexplore'
    },
    {
        location: '#quickApps',
        name: 'Windows Media Player',
        icon: 'wmpshare_IDR_MAINFRAME.ico',
        command: 'wmplayer'
    },
    {
        location: '#quickApps',
        name: 'Windows Mail',
        icon: 'WinMail_2.ico',
        command: 'wmail'
    }
]

iconLocations.forEach(iconLoc => {
    const iconEl = nodify(`<i class="icon"><img src="/win/res/vista/icons/${iconLoc.icon}" /><span class="icon-text">${iconLoc.name}</span></i>`);
    console.log(iconLoc.pos)
    if (iconLoc.pos) {
        iconEl.style.left = iconLoc.pos.left;
        iconEl.style.right = iconLoc.pos.right;
        iconEl.style.top = iconLoc.pos.top;
        iconEl.style.bottom = iconLoc.pos.bottom;
    }

    document.querySelector(iconLoc.location).append(iconEl)
})
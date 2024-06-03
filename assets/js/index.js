const expandMenu = () => {
    const menu = document.querySelector('.nav-list');
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

const changeTheme = () => {
    let body = document.getElementsByTagName('body')[0]

    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        document.querySelectorAll('.images').forEach((image) => {
            image.classList.remove('dark-theme');
        })
    } else {
        body.classList.add('dark-theme');
        
        document.querySelectorAll('.images').forEach((image) => {
            image.classList.add('dark-theme');
        })
    }
}
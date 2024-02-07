document.addEventListener('DOMContentLoaded', function () {
    var menuItems = document.querySelectorAll('.menu-itens a');

    menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
            document.getElementById('toggle').checked = false;
        });
    });
});
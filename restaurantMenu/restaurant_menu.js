const breakfastMenu = ['12$-Pancakes', '43$-Eggs Benedict', '43$-Oatmeal', '11$-Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastMenuItem =  breakfastMenu
    .map((item, index) => `<p> Item ${index + 1} : ${item} </p>`).join('');
    document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItem;

let mainCourseItem = '';
    mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
    document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;
    
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;
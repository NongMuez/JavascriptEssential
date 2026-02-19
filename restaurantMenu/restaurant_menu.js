const breakfastMenu = ['12$-Pancakes', '43$-Eggs Benedict', '43$-Oatmeal', '11$-Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastMenuItem =  breakfastMenu
    .map((item, index) => `<p> Item ${index + 1} : ${item} </p>`).join('');
    document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItem;

const mainCourseMenuItem =  mainCourseMenu
    .map((item, index) => `<p> Item ${index + 1} : ${item} </p>`).join('');
    document.getElementById('maincourseMenuItems').innerHTML = mainCourseMenuItem;
    
const dessertMenuItem =  dessertMenu
    .map((item, index) => `<p> Item ${index + 1} : ${item} </p>`).join('');
    document.getElementById('dessertMenuItems').innerHTML = dessertMenuItem;    
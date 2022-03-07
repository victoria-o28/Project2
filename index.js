const males = [{
    day: 'Sunday',
    name: 'Kwasi'
},
{
    day: 'Monday',
    name: 'Kwadwo'
},
{
    day: 'Tuesday',
    name: 'Kwabena'
},
{
    day: 'Wednesday',
    name: 'Kwaku'
},
{
    day: 'Thursday',
    name: 'Yaw'
},
{
    day: 'Friday',
    name: 'Kofi'
},
{
    day: 'Saturday',
    name: 'Kwame'
},
];

const females = [{
    day: 'Sunday',
    name: 'Akosua'
},
{
    day: 'Monday',
    name: 'Adwoa'
},
{
    day: 'Tuesday',
    name: 'Abenaa'
},
{
    day: 'Wednesday',
    name: 'Akua'
},
{
    day: 'Thursday',
    name: 'Yaa'
},
{
    day: 'Friday',
    name: 'Afua'
},
{
    day: 'Saturday',
    name: 'Ama'
},
];

function onSubmit() {
const d = document.getElementById("dd").value;
const m = document.getElementById("mm").value;
const y = document.getElementById("yyyy").value;
const gender = document.querySelector('input[name="gender"]:checked').value;

if ((d <= 0) || (d > 31)) {
    window.alert('Enter a valid day!');
} else if ((m <= 0) || (m > 12)) {
    window.alert('Enter a valid month!');
} else {
    returnDayOfWeek(d, m, y, gender)
}
}

function returnDayOfWeek(d, m, y, gender) {
const DD = +d;
const MM = +m;
const CC = +Math.ceil(y / 100);
const YY = +y.slice(-2);

const dayOfWeek = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7

returnAknanName(Math.round(dayOfWeek), gender);
}

function returnAknanName(dayOfWeek, gender) {
console.log(dayOfWeek, gender)
let aknanName = ''
if (gender === 'MALE') {
    for (let i = 0; i < males.length; i++) {
        aknanName = males[dayOfWeek].name;
    }
} else {
    for (let i = 0; i < females.length; i++) {
        aknanName = females[dayOfWeek].name;
    }
}

const output = document.getElementById("aknan-name");
output.innerHTML = aknanName;

return aknanName;
}
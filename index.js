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
}

if ((d <= 0) || (d > 31)) {
    window.alert('Enter a valid day!');
} else if ((m <= 0) || (m > 12)) {
    window.alert('Enter a valid month!');
} else {
    returnDayOfWeek(d, m, y, gender)
}


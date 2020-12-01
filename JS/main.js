const users = [
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'Male'
    },
    {
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'Female'
    },
    {
        name: 'Daniela',
        age: 22,
        email: 'andrea@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
];

// Foreacg
// users.forEach((u) => console.log(u.name));
// users.forEach(user => {
//     user.social.forEach(s => console.log(s.url))
// })

// users.forEach(function() {
//     console.log(users.name);
// })

// for(let i = 0; i < users.length; i++) {
//     console.log(users[i].name)
// }

// Filter
// const academloUsers = users.filter((user) => user.email.endsWith('@academlo.com') && user.gender == 'Male')
// const academloUsers = users.filter(function() {
//     return user.email.endsWith('@academlo.com');
// })
// const academlo = [];
// for(let i = 0; i < users.length; i++) {
//     if(users[i].email.endsWith('@academlo.com')) {
//         academloUsers.push(users[i]);
//     }
// }
// console.log(academloUsers);

// Find
// const erik = users.find((user) => user.gender === 'Male');
// const eriks = users.filter((user) => user.gender === 'Male');
// console.log(erik);
// console.log(eriks);

// Map

// crea un array nuevo con el return de la función anónima por cada elemento
// const emails = users.map((user) => {
//     return user.age * 2
// });
// console.log(emails);

// const emails = users.map((user) => user.age * 2);
// const ages = [1, 2, 3, 4 ,5];

// const newArray = ages.map(function(age) {
//     return "<div>"+age+"</div>"
// })
// [2, 3, 4, 5, 6]
//console.log(newArray)
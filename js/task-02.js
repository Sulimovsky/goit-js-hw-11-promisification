const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
];
  
const toggleUserState = (allUsers, userName) => {

    return new Promise((resolve, reject) => {
        allUsers.map(user =>
            user.name === userName ? resolve({ ...user, active: !user.active }) : reject(user),
        );
    });
};
  
const logger = updatedUsers => console.table(updatedUsers);

Promise.all([toggleUserState(users, 'Mango')]).then(logger);
Promise.all([toggleUserState(users, 'Lux')]).then(logger);
class Database {
    data = {
        users: {},
    };

    signIn = async (email, password) => {
        if (users[email].password === password) {
            return users[email];
        } else {
            throw new Error();
        }
    }

    signUp = async (name, email, password) => {
        if (users[email]) {
            throw new Error();
        } else {
            users[email] = {
                name,
                email,
                password,
            };
        }
    }
}

const db = new Database();

const userRequest = db.signIn('sebasgarcep@gmail.com', '123456');

userRequest
    .then(user => console.log(user.name))
    .catch(error => console.log(error));

export default Database;
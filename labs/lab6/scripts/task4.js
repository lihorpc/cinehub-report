class Client {
    #login;
    #email;

    constructor(login, email) {
        this.#login = login;
        this.#email = email;
    }

    get login() {
        return this.#login;
    }

    set login(newLogin) {
        if (newLogin.length >= 3) {
            this.#login = newLogin;
        } else {
            console.error('Login must be a string with at least 3 characters');
        }
    }

    get email() {
        return this.#email;
    }

    set email(newEmail) {
        if (newEmail.includes('@')) {
            this.#email = newEmail;
        } else {
            console.error('Invalid email format');
        }
    }
}

const client = new Client('name', 'email@gmail.com');
console.log('Initial values:');
console.log('Login:', client.login);
console.log('Email:', client.email);

console.log('\nTrying to update values:');
client.login = 'new_name';
client.email = 'new_email@example.com';
console.log('New login:', client.login);
console.log('New email:', client.email);

console.log('\nTrying invalid values:');
client.login = 'ab';
client.email = 'invalid-email';
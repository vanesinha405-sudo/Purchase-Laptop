class UsersService {

    getUsers() {
        return cy.request('GET', 'https://jsonplaceholder.typicode.com/users');
    }

    getUserById(id, failOnStatusCode = true) {
        return cy.request({
            method: 'GET',
            url: `https://jsonplaceholder.typicode.com/users/${id}`,
            failOnStatusCode
        });
    }

    createUser(userData) {
        return cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/users',
            body: userData,
            headers: { 'Content-type': 'application/json' }
        });
    }

    updateUser(id, userData, failOnStatusCode = true) {
        return cy.request({
            method: 'PUT',
            url: `https://jsonplaceholder.typicode.com/users/${id}`,
            body: userData,
            failOnStatusCode
        });
    }

    deleteUser(id, failOnStatusCode = true) {
        return cy.request({
            method: 'DELETE',
            url: `https://jsonplaceholder.typicode.com/users/${id}`,
            failOnStatusCode
        });
    }

}

export default new UsersService();

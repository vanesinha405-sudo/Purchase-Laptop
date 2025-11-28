import UsersService from "../../services/UsersService";

describe('Users API Testing - Complete Suite', () => {

    let createdUserId = null; // Usuario creado en hooks
    const validId = 5;         // IDs válidos 1-10 en JSONPlaceholder
    const invalidId = 11;      // ID inválido para tests negativos

    // 🔹 before() → crear usuario inicial
    before(() => {
        const seedUser = {
            name: "User Inicial",
            username: "seedUser",
            email: "seed@example.com"
        };

        UsersService.createUser(seedUser).then((res) => {
            expect(res.status).to.eq(201);
            createdUserId = res.body.id;
            cy.log("Usuario creado en before(): " + createdUserId);
        });
    });

    // 🔹 beforeEach() → log
    beforeEach(() => {
        cy.log("Preparando cada test...");
    });

    // -------------------
    // TESTS POSITIVOS
    // -------------------

    it('GET - Lista de usuarios', () => {
        UsersService.getUsers().then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body).to.be.an('array');
        });
    });

    it('GET - Usuario válido', () => {
        UsersService.getUserById(validId).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body.id).to.eq(validId);
        });
    });

    it('PUT - Actualizar usuario válido', () => {
        const updatedData = {
            name: "Nombre Actualizado",
            username: "seedUpdated"
        };

        UsersService.updateUser(validId, updatedData).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body.name).to.eq("Nombre Actualizado");
        });
    });

    it('POST - Crear usuario usando fixture', () => {
        cy.fixture('newUser.json').then((data) => {
            UsersService.createUser(data).then((res) => {
                expect(res.status).to.eq(201);
            });
        });
    });

    // -------------------
    // TESTS NEGATIVOS
    // -------------------

    it('GET - Usuario inexistente devuelve 404', () => {
        UsersService.getUserById(invalidId, false).then((res) => {
            expect(res.status).to.be.oneOf([404, 500]);
        });
    });

    it('PUT - Usuario inexistente devuelve 404/500', () => {
        const updatedData = {
            name: "Nombre Falso",
            username: "noUser"
        };

        UsersService.updateUser(invalidId, updatedData, false).then((res) => {
            expect(res.status).to.be.oneOf([404, 500]);
        });
    });

    // -------------------
    // HOOKS FINALES
    // -------------------

    afterEach(() => {
        cy.log("Finalizando test... (afterEach)");
    });

    after(() => {
        cy.log("Eliminando usuario creado en before()...");

        if (createdUserId !== null) {
            UsersService.deleteUser(createdUserId, false).then((res) => {
                expect(res.status).to.be.oneOf([200, 404]);
                cy.log("Usuario eliminado: " + createdUserId);
                cy.log("Status: " + res.status);
               
            });
        }
    });

});

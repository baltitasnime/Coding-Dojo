const express = require('express');
const faker = require('faker');
const app = express();
const port = 8001;

const createUser = () => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();

    const newFake = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        firstName: firstName,
        lastName: lastName,
    };
    return newFake;
};

const newFakeUser = createUser();
console.log(newFakeUser);



const createCompany = () => {
    return {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        },
    };
};



app.get('/api/users/new', (req, res) => {
    const newUser = createUser();
    res.json({ user: newUser });
});


app.get('/api/companies/new', (req, res) => {
    const newCompany = createCompany();
    res.json({ company: newCompany });
});

app.get('/api/user/company', (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    res.json({ user: newUser, company: newCompany });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const httpStatus = require("http-status");
const request = require("supertest");
const app = require("../index");

const { newUser, insertUser } = require("./apiRoute.fixture");

describe("User routes", () => {
  jest.setTimeout(20000);
  test("POST /v1/users", async () => {
    const newUser = {
      first_name: "John",
      last_name: "Lenon",
      dob: "2023-04-23",
      location: "Indonesia",
      timezone: "Asia/Jakarta"
    };

    const res = await request(app)
      .post(`/v1/users`)
      .send(newUser)
      .expect(httpStatus.CREATED);

    expect(res.body).toEqual({
      id: expect.anything(Number),
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      dob: newUser.dob,
      location: newUser.location,
      createdAt: expect.anything(String),
      updatedAt: expect.anything(String),
      isJobScheduled: expect.anything(Boolean),
      timezone: expect.anything(String),
    });
  });

  test("DELETE /v1/users/:id", async () => {
    await insertUser(newUser);

    await request(app)
      .delete(`/v1/users/${newUser.id}`)
      .expect(httpStatus.NO_CONTENT);
  });

  test("PUT /v1/users/:id", async () => {
    await insertUser(newUser);

    const putUserData = {
      first_name: "Rujak",
      last_name: "Buah",
    };

    await request(app)
      .put(`/v1/users/${newUser.id}`)
      .send(putUserData)
      .expect(httpStatus.OK);
  });
});

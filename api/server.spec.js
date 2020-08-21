const supertest = require("supertest");

const server = require("./server");
const db = require("../data/dbConfig");
const Users = require("../users/usersModel");

describe("server", () => {
  describe("GET /", () => {
    it("should find a list of users", async () => {
      return supertest(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
});

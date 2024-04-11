const router = require("./router")

describe("Router Tests", () => {
  it("should call next() for /v1 route", async () => {
    const req = {}
    const res = {}
    const next = jest.fn() // Mocking the next function

    // Manually call the route handler for /v1
    await router.get("/v1")(req, res, next)

    // Check if next() is called
    expect(next).toHaveBeenCalled()
  })

  it("should call next() for /v2 route", async () => {
    const req = {}
    const res = {}
    const next = jest.fn() // Mocking the next function

    // Manually call the route handler for /v2
    await router.get("/v2")(req, res, next)

    // Check if next() is called
    expect(next).toHaveBeenCalled()
  })
})

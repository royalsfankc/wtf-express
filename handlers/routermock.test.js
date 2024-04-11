const router = require("./router")
const { createRequest, createResponse } = require("node-mocks-http")
const next = jest.fn() // Mocking the next function

describe("Router Tests", () => {
  it("should call next() for /v1 route", async () => {
    const request = createRequest({
      method: "GET",
      url: "/v1",
    })
    const response = createResponse()
    await router.handle(request, response, next)
    expect(next).toHaveBeenCalled()
  })

  it("should call next() for /v2 route", async () => {
    const request = createRequest({
      method: "GET",
      url: "/v2",
    })
    const response = createResponse()
    await router.handle(request, response, next)
    expect(next).toHaveBeenCalled()
  })
})

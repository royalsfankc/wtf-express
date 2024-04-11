const express = require("express")
const router = express.Router()

// Route handler for /v1 route
router.get("/v1", async (req, res, next) => {
  try {
    next()
  } catch (error) {
    next(error)
  }
})

// Route handler for /v2 route
router.get("/v2", async (req, res, next) => {
  try {
    next()
  } catch (error) {
    next(error)
  }
})

module.exports = router

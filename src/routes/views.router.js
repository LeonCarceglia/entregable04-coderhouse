import express from "express"
import ProductManager from "../ProductManager.js"

const router = express.Router()
const productManager = new ProductManager()
const products = productManager.getProducts()

router.get("/realtimeproducts", (req, res) => {
  res.render("realTimeProducts", { products })
})

router.get("/", (req, res) => {
  res.render("home", { products })
})



export default router

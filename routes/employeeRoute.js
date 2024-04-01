import express from "express"
import { create, fetch, update} from "../controller/employeeController.js"
const route = express.Router()

route.post("/create", create)
route.get("/fetch", fetch)
route.put("/update/:id", update)
//route.delete("/delete/:id", deleteEmployee) -- might get back to it to add password

export default route
import {Router} from 'express'
import { getEmployees ,CreateEmployee,UpdateEmployee,deleteEmployee,getEmployee} from '../controllers/employees.controller.js'

const router=Router()

router.get("/employees",getEmployees)

router.get("/employees/:id",getEmployee)

router.post("/employees",CreateEmployee)

router.patch("/employees/:id",UpdateEmployee)


router.delete("/employees/:id",deleteEmployee)

export default router
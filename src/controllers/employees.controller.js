import {pool} from '../db.js'

export const getEmployees=async(req,res) =>{
    try {
        const [rows]=await pool.query('SELECT * FROM empleados')
        res.json(rows)
    } catch (error) {
    return res.status(500).json({message:"Error de Conexion"})
    }
    
}

export const getEmployee=async(req,res) =>{
    try {
        const [rows]=await pool.query("SELECT * FROM empleados where id=?",[req.params.id])
        if(rows.length <=0 ) return res.status(404).json({message:"Empleado No encontrado"})
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({message:"Error de Conexion"})
    }
}

export const CreateEmployee= async(req,res)=>{
    const {name,salary}=req.body
    try {
        const [rows]= await pool.query('INSERT INTO empleados(name,salary) VALUES(?,?)',[name,salary])
        res.send({
            id:rows.insertId,
            name,
            salary
        })
    } catch (error) {
        return res.status(500).json({message:"Error de Conexion"})
    }
}


export const deleteEmployee= async(req,res)=>{
    
    try {
        const [result]=await pool.query('DELETE FROM empleados WHERE id=?',req.params.id)
        if(result.affectedRows<=0)  return res.status(404).json({message:"Empleado No Encontrado"})
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message:"Error de Conexion"})
    }
}

export const UpdateEmployee=async(req,res)=>{
    const {id}=req.params
    const {name,salary}=req.body

    try {
        const [result]=await pool.query('UPDATE empleados SET name=IFNULL(?,name) ,salary=IFNULL(?,salary) WHERE id=?',[name,salary,id])
    if(result.affectedRows===0) return res.status(404).json("Empleado No Encontrado")

    const [rows]=await pool.query('SELECT * FROM empleados WHERE id=?',[id])
    res.json(rows[0])
    } catch (error) {
        return res.status(500).json({message:"Error de Conexion"})
    }
}

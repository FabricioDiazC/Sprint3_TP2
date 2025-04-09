import { body } from 'express-validator';

export const registerValidationRules= () => [

  body("nombreSuperHeroe").trim().notEmpty().withMessage("Nombre de Superheroe obligatorio.").isLength({ min: 3, max: 60 }).withMessage("Nombre de Superheroe debe tener entre 3 y 60 caracteres."),

  body("nombreReal").trim()  .notEmpty().withMessage("Nombre Real obligatorio.").isLength({ min: 3, max: 60 }).withMessage("Nombre Real debe tener entre 3 y 60 caracteres"),

  body("edad").trim().notEmpty().withMessage("Edad obligatorio.").isInt({ min: 1 }).withMessage("Edad debe ser mayor a cero"),
    
  body("poderes").notEmpty().withMessage("Poderes obligatorio.").isArray({ min: 1 }).withMessage("Poderes no es un array o está vacio"),

];
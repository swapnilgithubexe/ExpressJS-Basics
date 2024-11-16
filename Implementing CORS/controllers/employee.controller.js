import { allEmployees } from "../model/employee.model.js";

export const getAllEmployees = (req, res) => {
  const empls = allEmployees();
  res.status(200).send(empls);
};

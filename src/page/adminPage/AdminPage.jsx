import { AddResults } from "../patientResult/AddResults";
import { Patient } from "../patientResult/Patient";
import { PatientsFilled } from "../patientResult/PatientsFilled";

export const AdminPage = () => {
  return (
    <>
      <AddResults />
      <Patient />
      <PatientsFilled />
    </>
  );
};

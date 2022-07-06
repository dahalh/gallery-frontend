import React from "react";
import { RegisterForm } from "../../components/register-form/RegisterForm";
import DefaultLayout from "../layouts/DefaultLayout";

const Registration = () => {
  return (
    <DefaultLayout>
      <RegisterForm />
    </DefaultLayout>
  );
};

export default Registration;

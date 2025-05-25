"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormGroup } from "@/components/shared/form-group";
import { FormField } from "@/components/shared/form-field";
import ImageContainer from "@/components/shared/image";

type FormLoginProps = {
  loading?: boolean;
};

const FormLogin = ({ loading }: FormLoginProps) => {
  return (
    <div className="flex flex-col gap-3">
      <ImageContainer
        className="w-32 mb-10 object-cover mx-auto"
        src="/logo.svg"
      />
      <FormGroup name="email" label="Email">
        <FormField>
          <Input type="text" />
        </FormField>
      </FormGroup>
      <FormGroup name="password" label="Password">
        <FormField>
          <Input type="password" />
        </FormField>
      </FormGroup>
      <Button type="submit" disabled={loading}>
        Login
      </Button>
    </div>
  );
};

export default FormLogin;

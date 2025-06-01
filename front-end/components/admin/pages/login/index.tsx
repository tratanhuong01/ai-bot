"use client";

import FormLogin from "./form-login";
import { useMutation } from "@tanstack/react-query";
import { Form } from "@/components/shared/form";
import { ADMIN_SESSION, userService } from "@/services/user.service";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import schema from "./schema";
import { toast } from "sonner";

const Login = () => {
  const router = useRouter();
  const mutation = useMutation({
    mutationKey: ["LOGIN"],
    mutationFn: async (data: any) => {
      $$.loading(true);
      const result = await userService.login(data);
      return result;
    },
    onSuccess: (data) => {
      $$.loading(false);
      toast("Login Successful", {
        description: "You have successfully logged into the system.",
      });
      Cookies.set(ADMIN_SESSION, JSON.stringify(data.access_token));
      router.push("/admin/blogs");
    },
    onError: () => {
      $$.loading(false);
      Cookies.remove(ADMIN_SESSION);
      toast("Login Failed", {
        description: "Please check your username and password.",
      });
    },
  });
  //
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Form onSubmit={mutation.mutate} zodResolver={zodResolver(schema)}>
        <div className="flex-col flex justify-center w-80 gap-5 mx-auto">
          <FormLogin loading={mutation.isPending} />
        </div>
      </Form>
    </div>
  );
};

export default Login;

"use client";

import Loading from "@/components/shared/loading";
import { ADMIN_SESSION, userService } from "@/services/user.service";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import cookies from "js-cookie";
import { LockIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import Footer from "./footer";

type ContainerProps = {
  children?: ReactNode;
};

const queryClient = new QueryClient();

const Container = ({ children }: ContainerProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Wrapper>{children}</Wrapper>
    </QueryClientProvider>
  );
};

const Wrapper = ({ children }: ContainerProps) => {
  const pathname = usePathname();
  const [isAccess, setIsAccess] = useState<boolean | undefined>();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const loadData = async () => {
    let accept = true;
    if (!pathname.startsWith("/admin")) {
      setLoading(false);
      return true;
    }
    if (!sessionStorage.getItem("admin_verified")) {
      const value = window.prompt(
        "Please enter the secret code. This code was provided to you by the super user."
      );
      if (value === process.env.NEXT_PUBLIC_KEY_SECRET) {
        sessionStorage.setItem("admin_verified", "true");
      } else {
        accept = false;
      }
    } else {
      try {
        await userService.checkToken();
        if (pathname === "/admin/login") {
          router.push("/admin/cars");
        }
      } catch {
        cookies.remove(ADMIN_SESSION);
        router.push(`/admin/login`);
      }
    }
    setLoading(false);
    return accept;
  };
  useQuery({
    queryKey: ["load-config", pathname, isAccess, loading],
    queryFn: async () => {
      let response = true;
      if (isAccess === undefined) {
        response = await loadData();
        setIsAccess(response);
      }

      return true;
    },
  });
  useEffect(() => {
    if (pathname === "/#teams") {
      document.querySelector("#teams")?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  if (loading) return <Loading />;
  if (isAccess === false)
    return (
      <div className="w-full h-screen overflow-hidden flex flex-col items-center justify-center">
        <LockIcon size={60} className="text-gray-500" />
        <p>You are not permission.</p>
        <p></p>
      </div>
    );
  if (isAccess && pathname.startsWith("/admin")) return children;
  return (
    <div className="bg-[#050913] text-white w-full min-h-screen">
      {children}
      <Footer />
    </div>
  );
};

export default Container;

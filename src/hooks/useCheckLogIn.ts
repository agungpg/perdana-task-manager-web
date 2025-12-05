import { pathWithoutToken } from "@/constants/url";
import { getAccessToken } from "@/utils/token";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";


const useCheckLogIn = () => {
  const router = useRouter();
  const currentPath = usePathname();
  const isLoggedIn = (): boolean => {
    const token = getAccessToken();
    return Boolean(token);
  }
  useEffect(() => {
    if (!isLoggedIn() && pathWithoutToken.indexOf(currentPath) === -1) {
      router.replace("/login");
    }
    else if (isLoggedIn() && pathWithoutToken.indexOf(currentPath) !== -1) {
      router.replace("/dashboard");
    }
  }, [router, currentPath]);
}

export default useCheckLogIn;
import { useMutation } from "@tanstack/react-query";

const mutationFn = async (jwt: string) => {
  return await fetch("/api/cookies/set", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jwt }),
  });
};

const useSetCookiesHook = () => {
  const mutation = useMutation({
    mutationFn: (jwt: string) => mutationFn(jwt),
  });
  return mutation;
};

export default useSetCookiesHook;

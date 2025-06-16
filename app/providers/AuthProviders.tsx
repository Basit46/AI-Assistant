"use client";

import { useEffect } from "react";
import { useAuthStore } from "../store/AuthStore";
import { supabase } from "../utils/supabase";
import { useRouter } from "next/navigation";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const setUser = useAuthStore((s) => s.setUser);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user ?? null);
    });

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(session?.user);
      } else {
        setUser(null);
        router.replace("/auth/login");
      }
    });

    return () => {
      sub.subscription.unsubscribe();
    };
  }, [setUser, router]);

  return <>{children}</>;
}

import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth/login");
  }

  return (
    <div className="bg-neutral-100 min-h-screen h-full">{children}</div>
  );
}

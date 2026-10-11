import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminSidebar from "@/components/components-admin/sidebar";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  if (!token) {
    redirect("/sign-in");
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/check`,
    {
      headers: {
        Cookie: `token=${token.value}`,
      },
      cache: "no-store",
    },
  );

  if (!response.ok) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <AdminSidebar />

      <main className="ml-64 min-h-screen">{children}</main>
    </div>
  );
}

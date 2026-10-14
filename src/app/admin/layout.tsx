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

  let response: Response;

  try {
    response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/check`, {
      headers: {
        Cookie: `token=${token.value}`,
      },
      cache: "no-store",
    });
  } catch (error) {
    console.error("[Admin Auth] Backend request failed:", error);
    throw new Error("Unable to verify admin authentication.");
  }

  if (response.status === 401 || response.status === 403) {
    redirect("/sign-in");
  }

  if (!response.ok) {
    throw new Error(`Admin authentication check failed: ${response.status}`);
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <AdminSidebar />
      <main className="ml-64 min-h-screen">{children}</main>
    </div>
  );
}

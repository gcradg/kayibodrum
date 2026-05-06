import type { Metadata } from "next";
import AdminDashboard from "@/components/admin/AdminDashboard";

export const metadata: Metadata = {
  title: "Admin Dashboard | KAYI Bodrum",
  description: "Administrative dashboard for managing KAYI Bodrum projects, content, media and inquiries."
};

export default function AdminPage() {
  return <AdminDashboard />;
}

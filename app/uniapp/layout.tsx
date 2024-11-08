import { SideBarUniapp } from "@/components/ui/sidebar-uniapp";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen">
      <SideBarUniapp />

      <div className="relative flex overflow-y-auto overflow-x-hidden py-2 px-2 h-screen w-full">
        {children}
      </div>
    </div>
  );
}

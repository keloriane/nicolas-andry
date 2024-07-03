import { MenuProvider } from "@/context/MenuContext";
import StyledComponentsRegistry from "@/lib/registry";
import Menu from "@/components/common/Menu";
import Contact from "@/components/Contact";
import { archivo } from "../font";
import Footer from "@/components/Footer";

export default function CreationsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Menu />
      {children}
      <Contact archivo={archivo.className} />
      <Footer />
    </div>
  );
}

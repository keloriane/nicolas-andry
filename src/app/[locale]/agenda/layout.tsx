import Menu from "@/components/common/Menu";
import Contact from "@/components/Contact";
import { archivo } from "../../font";
import Footer from "@/components/Footer";

export default function AgendaLayout({
  params: { locale },
  children,
}: Readonly<{
  params: { locale: string };
  children: React.ReactNode;
}>) {
  return (
    <div className="content-anim">
      <Menu locale={locale} />
      {children}
      <Contact archivo={archivo.className} />
      <Footer />
    </div>
  );
}

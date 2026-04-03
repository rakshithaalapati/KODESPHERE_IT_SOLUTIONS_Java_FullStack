import Navbar from "../components/Navbar";

export default function MainLayout({ children }: any) {
  return (
    <>
      <Navbar />
      <div className="main-layout">{children}</div>
    </>
  );
}
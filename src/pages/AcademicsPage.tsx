import Navbar from "@/components/Navbar";
import Academics from "@/components/Academics";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const AcademicsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Academics />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AcademicsPage;

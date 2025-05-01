import Banner from "@/Components/Banner/Banner";
import Coach from "@/Components/Coach/Coach";
import Courses from "@/Components/Courses/Courses";
import FaqSection from "@/Components/FaqSection/FaqSection";
import Footer from "@/Components/Footer/Footer";
import Hire from "@/Components/Hire/Hire";
import Testimonials from "@/Components/Testimonials/Testimonials";

export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-100/30 to-white">
        <Banner />
      </div>
      <Coach />
      <Courses />
      <FaqSection />
      <Testimonials />
      <Hire />
      <div className="bg-gradient-to-r from-blue-100/30 to-white">
        <Footer />
      </div>
    </div>
  );
}

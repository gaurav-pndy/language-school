import Admissions from "@/components/Admissions";
import BlogNews from "@/components/BlogNews";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import LearningResources from "@/components/LearningResources";
import LivingInRussia from "@/components/LivingInRussia";
import Programs from "@/components/Programs";
import StudentServices from "@/components/StudentServices";
import SuccessStories from "@/components/SuccessStories";
import Teachers from "@/components/Teachers";
import VisaGuide from "@/components/VisaGuide";
import WhyChoose from "@/components/WhyChoose";

// app/page.js
export default function HomePage() {
  return (
    <div>
      <Hero />
      <WhyChoose />
      <Programs />
      <Teachers />
      <StudentServices />
      <SuccessStories />
      <Admissions />
      <VisaGuide />
      <LivingInRussia />
      <LearningResources />
      <BlogNews />
      <FAQ />
    </div>
  );
}

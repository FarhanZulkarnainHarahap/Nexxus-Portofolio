import FormContactSection from "./children-contact-section-components/form-section";
import TextFormSection from "./children-contact-section-components/text-form";

export default function ContactSectionPage() {
  return (
    <section
      className="min-h-screen w-full grid place-items-center pt-25 bg-[#121212]" // Background color disesuaikan di sini
      id="contact-section"
    >
      <div className="w-[95%] min-h-[90%] grid place-items-center bg-black/30 rounded-[20px] p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full gap-10">
          <TextFormSection />
          <FormContactSection />
        </div>
      </div>
    </section>
  );
}

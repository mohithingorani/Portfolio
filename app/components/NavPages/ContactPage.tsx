import ContactForm from "../ContactForm";
import UnderLine from "../Underline";

export default function ContactPage() {
  return (
    <div>
      <div className="poppins-semibold h-full text-3xl poppins-normal">
        Contact
      </div>
      <div className="my-4 ">
        <UnderLine />
      </div>
      <div className="mt-6 space-y-6">
        <a
          href="mailto:mohithingorani20003@gmail.com"
          className="text-base text-yellow-200 hover:text-yellow-100 hover:underline transition-all"
        >
          mohithingorani20003@gmail.com
        </a>
        <ContactForm />
      </div>
    </div>
  );
}

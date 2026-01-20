import ContactForm from "../ContactForm";
import UnderLine from "../Underline";
export default function ContactPage() {
  return (
    <div>
      <div className="poppins-semibold text-3xl poppins-normal">Contact</div>
      <div className="my-4 ">
        <UnderLine />
      </div>
      <div className=" mt-6">
       <ContactForm/>
      </div>
    </div>
  );
}

{
  /* <button onClick={()=>sendMail()}>send email</button> */
}

import { useForm, ValidationError } from "@formspree/react";
import styles from "../../styles/Home.module.css"

const Form = () => {
  const [state, handleSubmit] = useForm("mwkyaqvr");
  if (state.succeeded) {
    return <p>Thanks for joining</p>;
  }
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.formInput} autoComplete="off">
        <label htmlFor="name" className="text-white w-screen">
          Your Name
        </label>
        <input id="name" type="name" name="name" className="flex justify-center" />
        <ValidationError prefix="name" field="name" errors={state.errors} />
        <label htmlFor="email" className="text-white">
          Your Email Address
        </label>
        <input id="email" type="email" name="email" className="flex justify-center"  />
        <ValidationError prefix="email" field="email" errors={state.errors} />
        <label htmlFor="subject" className="text-white">
          Subject
        </label>
        <input id="subject" type="subject" name="subject" className="flex justify-center" />
        <ValidationError prefix="email" field="email" errors={state.errors} />
        <label htmlFor="message" className="text-white">Message</label>
        <textarea id="message" name="message" className="flex justify-center"  />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </form>
    </>
  );
};

export default Form;

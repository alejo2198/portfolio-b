import "./ContactForm.scss";
import useInput from "../../hooks/use-input";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const form = useRef();
  const {
    value: Name,
    isValid: NameIsValid,
    hasError: NameHasError,
    inputBlurHandler: NameBlurHandler,
    valueChangeHandler: NameChangeHandler,
    reset: NameReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: Email,
    isValid: EmailIsValid,
    hasError: EmailHasError,
    inputBlurHandler: EmailBlurHandler,
    valueChangeHandler: EmailChangeHandler,
    reset: EmailReset,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));
  const {
    value: Company,
    isValid: CompanyIsValid,
    hasError: CompanyHasError,
    inputBlurHandler: CompanyBlurHandler,
    valueChangeHandler: CompanyChangeHandler,
    reset: CompanyReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: Message,
    isValid: MessageIsValid,
    hasError: MessageHasError,
    inputBlurHandler: MessageBlurHandler,
    valueChangeHandler: MessageChangeHandler,
    reset: MessageReset,
  } = useInput((value) => value.trim() !== "");

  const formIsValid =
    NameIsValid && EmailIsValid && CompanyIsValid && MessageIsValid;

  const formSubmitHandler = (event) => {
    event.preventDefault();
    //change the error state if an empty form is submitted
    NameBlurHandler();
    EmailBlurHandler();
    CompanyBlurHandler();
    MessageBlurHandler();
    event.preventDefault();
    if (!formIsValid) {
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          // Show success toast
          toast.success(
            "I have received your message and will reach out to you promptly!",
            {
              position: "top-right",
            }
          );
          //if the form is valid
          NameReset();
          EmailReset();
          CompanyReset();
          MessageReset();
        },
        (error) => {
          console.log("FAILED...", error);
          toast.error(
            "Something went wrong. Please check your connection and try again later.",
            {
              position: "top-right",
            }
          );
        }
      );
  };

  const nameInputClasses = NameHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = EmailHasError
    ? "form-control invalid"
    : "form-control";
  const companyInputClasses = CompanyHasError
    ? "form-control invalid"
    : "form-control";
  const messageInputClasses = MessageHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact__wrapper">
        <div className="contact__text">
          <p>
            If you think I could be an asset to your web development team,
            please send me a message.
          </p>
          <p>
            I want to join a strong team where, under great mentorship, I could
            contribute to big projects.
          </p>
          <p>
            I hope to grow exponentially in this field as a part of your
            company.
          </p>
        </div>
        <form ref={form} className="form" onSubmit={formSubmitHandler}>
          <div className={`form__control-group ${nameInputClasses}`}>
            <label htmlFor="user_name" className="form__label">
              Full Name: *
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="Jane Doe"
              className="form__input"
              onChange={NameChangeHandler}
              onBlur={NameBlurHandler}
              value={Name}
            />
            {NameHasError && (
              <p className="error-text">Please enter a full name *</p>
            )}
          </div>

          <div className={`form__control-group ${emailInputClasses}`}>
            <label htmlFor="user_email" className="form__label">
              Email: *
            </label>
            <input
              type="email"
              name="user_email"
              placeholder="amazon@gmail.com"
              className="form__input"
              onChange={EmailChangeHandler}
              onBlur={EmailBlurHandler}
              value={Email}
            />
            {EmailHasError && (
              <p className="error-text">Please enter a valid email *</p>
            )}
          </div>

          <div className={`form__control-group ${companyInputClasses}`}>
            <label htmlFor="user_company" className="form__label">
              Company: *
            </label>
            <input
              type="text"
              name="user_company"
              placeholder="Amazon"
              className="form__input"
              onChange={CompanyChangeHandler}
              onBlur={CompanyBlurHandler}
              value={Company}
            />
            {CompanyHasError && (
              <p className="error-text">Please enter a comapny name *</p>
            )}
          </div>

          <div className={`form__control-group ${messageInputClasses}`}>
            <label htmlFor="message" className="form__label">
              Message: *
            </label>
            <textarea
              name="message"
              className="form__textarea"
              onChange={MessageChangeHandler}
              onBlur={MessageBlurHandler}
              value={Message}
            ></textarea>
            {MessageHasError && (
              <p className="error-text">Please enter a message *</p>
            )}
          </div>

          <button type="submit" className="form__button">
            Send Message
          </button>
        </form>

       
      </div>
    </section>
  );
};

export default ContactForm;

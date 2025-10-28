
import { useFormContext, useForm, FormProvider } from "react-hook-form";
import './Style.css';
import {name_validation, email_validation, message_validation} from './inputValidation';

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out!</p>
      <Form />
    </div>
  );
}

function InputField({ label, type, name, required = false, placeholder = "", validation }) {
  const { register, formState: { errors } } = useFormContext()
  return (
    <div className="input-field">
      <div className="lable-field">
        <label htmlFor={name}>{label}</label>
        <p className="error-message">{errors[name]?.message}</p>
      </div>
      <input type={type} id={name} name={name} placeholder={placeholder} className={errors[name] ? "input-error" : ""}  {...register(name, validation)} />
    </div>
  );
}

function Form() {
  const methods = useForm()
  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={e => e.preventDefault()} noValidate>
        <InputField {...name_validation} />
        <InputField {...email_validation} />
        <InputField {...message_validation} />
        <button onClick={onSubmit}>Submit</button>
      </form>
    </FormProvider>
  );
}

/*<InputField label="Email:" type="email" name="email" />
        <InputField label="Message:" type="textarea" name="message" />
*/
export default Contact;
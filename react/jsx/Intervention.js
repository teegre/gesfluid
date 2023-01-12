import { useRef } from "react";
import useForm from "./UseForm";

const FORM_ENDPOINT = "https://localhost:8000/api/interventions"

const Form = () => {
  const formElement = useRef(null);
  const additionalData = {
    sent: new Date().toISOString(),
  }

  const { handleSubmit, status, message } = useForm({
    from: formElement.current,
    additionalData,
  });

  if (status === "success") {
    return (
      <>
        <div>It worked!</div>
        <div>{message}</div>
      </>
    );
  }

  if (status === "error") {
    return (
      <>
        <div>Oops... Something went wrong!</div>
        <div>{message}</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      ref={formElement}
    >
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder=""
        />
      </div>
    </form>
  )
}

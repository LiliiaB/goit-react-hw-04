import css from "./ErrorMessage.module.css";

export const ErrorMessage = ({ error }) => {
  return (
    <div>
      <p>Error: {error}</p>
    </div>
  );
};

export default ErrorMessage;

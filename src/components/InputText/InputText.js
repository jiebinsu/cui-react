import React from "react";
import PropTypes from "prop-types";
import "@coopdigital/foundations-forms/dist/forms.css";

const InputText = ({
  id,
  name,
  type,
  className,
  label,
  hint,
  hasError,
  errorMsg,
  disabled,
  placeholder,
  ...props
}) => {
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  const classNames = ["coop-form__field", "coop-form__input"];
  const ariaDescribedBy = [];

  if (hint) ariaDescribedBy.push(hintId);

  if (hasError) {
    classNames.push("coop-form__invalid");
    ariaDescribedBy.push(errorId);
  }

  classNames.push(className);

  return (
    <div className="coop-form__row">
      {label && (
        <label htmlFor={id} className="coop-form__label">
          {label}
        </label>
      )}
      {hint && (
        <p id={`${id}-hint`} className="coop-form__hint">
          {hint}
        </p>
      )}
      {hasError && (
        <p id={`${id}-error`} className="coop-form__error">
          {errorMsg}
        </p>
      )}
      <input
        type={type}
        name={name}
        id={id}
        className={classNames.join(" ")}
        aria-describedby={ariaDescribedBy && ariaDescribedBy.join(" ")}
        disabled={disabled}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default InputText;

InputText.defaultProps = {
  type: "text",
  disabled: false,
  hasError: false,
  className: null,
  hint: null,
  label: null,
  errorMsg: null,
  placeholder: null,
};

InputText.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text"]),
  className: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  hasError: PropTypes.bool,
  errorMsg: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
};

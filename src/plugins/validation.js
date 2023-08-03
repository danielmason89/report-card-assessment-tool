import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from "vee-validate";
import {
  required,
  max,
  min,
  alpha_spaces as alphaSpaces,
  email,
  max_value as maxVal,
  min_value as minVal,
  not_one_of as excluded,
} from "@vee-validate/rules";

export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("requiredStudent", required);
    defineRule("requiredStudentName", required);
    defineRule("requiredContactName", required);
    defineRule("requiredContactEmail", required);
    defineRule("requiredContactMessage", required);
    defineRule("AllOptionsRequired", required);
    defineRule("max", max);
    defineRule("min", min);
    defineRule("alpha_spaces", alphaSpaces);
    defineRule("email", email);
    defineRule("min_value", minVal);
    defineRule("max_value", maxVal);
    defineRule("excluded", excluded);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The field ${ctx.field} is required.`,
          requiredStudentName: `The student name entered ${ctx.field} is not valid.`,
          requiredContactName: `The ${ctx.field} entered is not valid.`,
          requiredContactEmail: `The ${ctx.field} entered is not valid.`,
          requiredContactMessage: `The ${ctx.field} entered is not valid.`,
          requiredStudent: `This ${ctx.field} field requires a chosen ${ctx.field}`,
          min: `The ${ctx.field} field is too short.`,
          max: `The ${ctx.field} field is too long.`,
          alpha_spaces: `The ${ctx.field} field may only contain alphabetic characters and spaces.`,
          email: `The ${ctx.field} field must be a valid email.`,
          min_value: `The ${ctx.field} field is too low.`,
          max_value: `The ${ctx.field} field is too high.`,
          excluded: `You are not allowed to use this value for the field ${ctx.field}.`,
          AllOptionsRequired: `You must select all options for this form to be submitted.`,
        };

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${ctx.field} is invalid.`;

        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};

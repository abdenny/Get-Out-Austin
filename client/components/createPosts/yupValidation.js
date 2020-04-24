import * as Yup from "yup";

const validationSchema = Yup.object({
  title: Yup.string("Enter a Title")
    .max(100, "Title cannot be longer then 100 characters.")
    .required("Title is required"),
  description: Yup.string("Enter a Description")
    .max(500, "The description cannot be longer than 500 characters.")
    .required("Description is required"),
  category: Yup.string("Category").required("Category is required."),
  price: Yup.number("Enter a price.")
    .max(1000, "Price cannot exceed $1000.")
    .required("Please enter a price."),
  guest_range: Yup.array()
    .of(Yup.number())
    .min(1)
    .required("Please select a guest range."),
  date_range: Yup.array().of(Yup.string("Date Range")).required(),
});

export default validationSchema;

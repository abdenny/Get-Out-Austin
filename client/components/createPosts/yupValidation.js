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
    .min(1, "Price must be greater than 0.")
    .max(1000, "Price cannot exceed $1000.")
    .required("Please enter a price."),
  photos: Yup.string("Photo")
    .required("A photo is required.")
    .url("Photo link is not a valid URL."),
  // guest_range: Yup.array().of(Yup.number()).min(1),
  // .required("Please select a guest range."),
  // date_range: Yup.array().of(Yup.string("Date Range")),
  // .required("A date range is required."),
});

export default validationSchema;

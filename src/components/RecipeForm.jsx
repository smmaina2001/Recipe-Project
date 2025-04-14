import { Formik, Form, Field, ErrorMessage } from "formik";

function RecipeForm() {
  return (
    <div>
      <h2>Create New Recipe</h2>
      <Formik
        initialValues={{ title: "", ingredients: "", instructions: "" }}
        validate={values => {
          const errors = {};
          if (!values.title) errors.title = "Title is required";
          if (!values.ingredients) errors.ingredients = "Ingredients are required";
          if (!values.instructions) errors.instructions = "Instructions are required";
          return errors;
        }}
        onSubmit={async (values, { resetForm }) => {
          const res = await fetch("http://localhost:5555/recipes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(values),
          });

      if (res.ok) {
        alert("Recipe added!");
        resetForm();
      } else {
        alert("Failed to create recipe.");
      }
    }}
  >
    <Form>
      <label>Title</label>
      <Field name="title" />
      <ErrorMessage name="title" component="div" />

      <label>Ingredients</label>
      <Field name="ingredients" as="textarea" />
      <ErrorMessage name="ingredients" component="div" />

      <label>Instructions</label>
      <Field name="instructions" as="textarea" />
      <ErrorMessage name="instructions" component="div" />

      <button type="submit">Submit</button>
    </Form>
  </Formik>
</div>
  );
}

export default RecipeForm;
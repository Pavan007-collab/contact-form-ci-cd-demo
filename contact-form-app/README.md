# Contact Form Application

This project is a simple contact form built with HTML, CSS, and JavaScript. It includes client-side validation to ensure that users provide valid input before submitting the form.

## Project Structure

```
contact-form-app
├── src
│   ├── index.html        # HTML structure for the contact form
│   ├── styles
│   │   └── style.css     # CSS styles for the contact form
│   └── scripts
│       └── validation.js  # JavaScript for input validation
└── README.md             # Project documentation
```

## Features

- Input fields for Name, Email, and Message
- Client-side validation for:
  - Non-empty fields
  - Valid email format
- User feedback messages for validation results

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd contact-form-app
   ```

3. Open the `src/index.html` file in your web browser.

## Validation Logic

The validation logic implemented in `src/scripts/validation.js` includes:

- Checking if the Name and Message fields are non-empty.
- Validating the Email field using a regular expression to ensure it follows the correct format.
- Displaying appropriate error messages for invalid inputs and a success message upon successful validation.

Feel free to customize the styles in `src/styles/style.css` and enhance the functionality in `src/scripts/validation.js` as needed.
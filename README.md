
# Contact Form:

A simple, responsive contact form built with HTML, CSS, and JavaScript. The form validates user input on the client side and provides clear feedback for errors and successful submissions.

---

## Features

- **Input fields:** Name, Email, Message
- **Client-side validation:** Ensures all fields are filled and email is valid (regex)
- **Error messages:** Displayed below each input if validation fails
- **Success message:** Shown on valid submission (no actual sending)
- **Responsive design:** Clean and simple styling for clarity

---

## Getting Started

### 1. Clone or Download

Clone this repository or download the ZIP and extract it.

```sh
git clone https://github.com/Pavan007-collab/Contact-Form
```

### 2. Open the Project

Open the `src/index.html` file in your web browser.

---

## File Structure

```
src/
├── index.html
├── styles/
│   └── style.css
└── scripts/
    └── validation.js
```

---

## Usage

1. Fill in your **Name**, **Email**, and **Message**.
2. Click **Submit**.
3. If any field is invalid, an error message will appear below that field.
4. If all fields are valid, a success message will be displayed below the button.

---

## Validation Logic

- **Name:** Cannot be empty.
- **Email:** Must be a valid email address (checked with regex).
- **Message:** Cannot be empty.

---

## Customization

- **Styling:** Edit `styles/style.css` to change the look and feel.
- **Validation:** Update `scripts/validation.js` to add more rules or change error messages.
- **Form Fields:** Add or remove fields in `index.html` as needed.

---

## Troubleshooting

- **Validation not working?**  
  Make sure `scripts/validation.js` is correctly linked in `index.html` and there are no JavaScript errors in your browser console.

- **Styling not applied?**  
  Check that `styles/style.css` is in the correct folder and linked properly.

- **Form not displaying?**  
  Open `index.html` directly in your browser, not from within a text editor.

---

## License

This project is for educational purposes and does not send form data to a server.

---

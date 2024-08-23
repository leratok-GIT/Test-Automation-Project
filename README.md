# Websites Contact Form - Test Automation

This repository contains automated tests for the contact form on the Mzamomtsha Primary School website. The tests are built using Puppeteer and Jest to ensure that the form's functionality, including validation and successful submission, works as expected.

## Table of Contents

- [Project Overview](ProjectOverview)
- [Setupand Installation](SetupandInstallation)
- [Running Tests](RunningTests)
- [Test Structure](TestStructure)
- [Common lssues](Commonlssues)
- [License](#license)

## Project Overview

The goal of this project is to automate the testing of the contact form on the Mzamomtsha Primary School website. The form includes fields for the user's first name, last name, email, phone number, and message. These fields are validated to ensure correct input before submission.

## Setup and Installation

  1. **Clone the repository:**
  git clone (https://github.com/leratok-GIT/Test-Automation-Project.git)

  2. **Install Dependencies:**
  Make sure you have Node.js installed. Then, install the neccessary npm packages:
   ```bash
   npm install
   ```
## Running Tests
To execute the tests, run the following command:
  ```bash
   npm test
   ```
This will start the Jest test runner, which will execute all the test cases defined in the __tests__ directory.

## Test Structure
The tests are sturctured as follows:
  - **Form Submission Test:** This test verifies that the form submits correctly when all     fields are valid.
  - **Validation Error Test:** This test checks for appropriate error messages when           invalid data is entered into the form fields.
  - **Empty Fields Test:** This test ensures that the form displays validation errors         when required fields are left empty.

## Common lssues
### 1. Detached Frame Errors:
This error can occur if Puppeteer tries to interact with a frame that has been detached or reloaded. Make sure the page is fully loaded before performing actions on it. Increasing the timeout or adding waits may help resolve this issue.

### 2. Timeouts
Some tests may require increased timeouts, especially when waiting for elements to load. You can adjust the timeout settings in the 'jest.config.js' or directly within the test cases using the 'timeout' option.

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request or open an Issue to discuss any changes or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
```yaml

---

Replace `https://github.com/yourusername/contact_form_test_automation.git` with the actual URL of your GitHub repository. This README provides a comprehensive guide to your project, including how to set it up, run tests, and understand the test code.
```


   


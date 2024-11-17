# Education Appointment Form Project

## Project Description
This project is a simple and elegant web form used to make an education appointment. The form takes various information from the user and after submitting the form, it redirects the user to a page with the message "Form is submitted". The project includes the following features:

- Transparent background image.
- A form with text, select, checkbox and submit button.
- An ad area on the right side (when I made it sticky, it appeared at the bottom and left of the page, even though I gave the command to make it on the right side).
- City, course type, title, hours, and phone location options created using Mocky.io.
- Email and Turkish phone number verification with JavaScript.
- A responsive and sticky menu.

## Technologies Used
- **HTML5**
- **CSS3**
- **JavaScript**
- **Mocky.io** (for dropdown data with API)

## Features
1. All fields of the form are validated with JavaScript.

2. Special validation for email and phone number (Turkish phone number required).

3. When the form is submitted, it redirects the user to the "Form is submitted" page.

4. The ad area on the right disappears when the close button is clicked.

5. City, course type, title, time range and phone location options are dynamically loaded with Mocky.io API.

## Mocky.io API
JSON data structure created using Mocky.io:
```json
{
{
  "title": ["Mr", "Ms", "Mrs", "Miss", "Dr", "Prof", "Rev", "Sir", "Madam", "Master"],
  "city": ["Istanbul", "Ankara", "Izmir", "Bursa", "Antalya", "Adana", "Konya", "Trabzon", "Gaziantep", "Mersin"],
  "courseType": ["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science", "Engineering", "History", "Geography", "Literature", "Art"],
  "phoneLocation": ["By phone", "In person", "Video call", "E-mail", "Text message", "WhatsApp", "Zoom", "Skype", "Telegram", "FaceTime"],
  "hours": ["8:00-10:00", "10:00-12:00", "12:00-14:00", "14:00-16:00", "16:00-18:00", "18:00-20:00", "20:00-22:00", "22:00-00:00", "00:00-02:00", "02:00-04:00"]
}

}

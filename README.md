Language Learning Teacher Finder Application
Project Overview
This project is an application for a company offering online language learning services through a variety of teachers. The application consists of three main pages:

Home Page: Features the company's advantages and includes a call-to-action link directing users to the Teachers page.
Teachers Page: Displays a list of teachers that users can filter by teaching language, student proficiency level, and hourly rate.
Favorites Page: A private page listing teachers that the user has added to their favorites.

Technical Specifications
Firebase Authentication
Users can register, log in, log out, and fetch current user data.
Registration/login forms are created using react-hook-form and yup for validation.
Forms include mandatory fields and can be closed via a close button, clicking on the backdrop, or pressing the Esc key.

Teacher Data
Teachers are stored in a Firebase Realtime Database.

Teacher Card
Implemented according to the provided mockup, showcasing teacher characteristics.
The Teachers page initially renders 4 cards, with more loaded on clicking the "Load more" button, triggering a database request for additional cards.
Favorites Functionality
Clicking the heart button:
Unauthenticated users see a modal or push notification indicating the feature is for registered users only.
Authenticated users add the teacher to their favorites, changing the heart button color, with favorites stored in localStorage or Firebase.
Favorites persist across page reloads for authenticated users.
Clicking the heart button again removes the teacher from favorites and resets the button color.
Detailed View and Booking
Clicking "Read more" expands the card to show detailed teacher information and student reviews.
Clicking "Book trial lesson" opens a modal with a booking form validated using react-hook-form and yup.
The booking form modal can be closed via a close button, backdrop click, or pressing the Esc key.
Favorites Page
Authenticated users can view their favorite teachers in a style similar to the Teachers page.

Frontend: React, React Router, CSS Modules
Backend: Firebase Authentication, Firebase Realtime Database
Forms and Validation: react-hook-form, yup
State Management: Redux Toolkit
Deployment: Vercel.

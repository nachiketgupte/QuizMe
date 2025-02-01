# QuizMe Frontend

This is the frontend for the Quiz Game application, built using **React** with **Tailwind CSS** for styling. The frontend allows users to sign up, log in, and interact with the game interface.

## Features
- User authentication (Sign Up, Log In)
- Form validation with error messages
- Show/Hide password functionality
- API integration for user registration
- Success animation after account creation
- Auto-redirect to the game page after successful registration

## Technologies Used
- React.js
- Tailwind CSS
- React Router
- Axios (for API calls)
- Framer Motion (for animations)

## Prerequisites
Make sure you have **Node.js** and **npm** installed on your machine.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/quiz-game-frontend.git
   cd quiz-game-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application
To start the frontend development server, run:
```bash
npm start
```
The application should now be running at **http://localhost:3000**.

## Project Structure
```
quiz-game-frontend/
│── src/
│   ├── components/        # Reusable components
│   ├── pages/             # Page components (Signup, Login, Game)
│   ├── App.js             # Main app component
│   ├── index.js           # Entry point
│── public/                # Static files
│── package.json           # Project dependencies
│── README.md              # Documentation
```

## API Endpoints
The frontend communicates with a backend server running at **http://localhost:5000**.

| Endpoint      | Method | Description            |
|--------------|--------|------------------------|
| `/signup`    | POST   | Registers a new user   |
| `/login`     | POST   | Authenticates a user   |

## Environment Variables
Create a `.env` file in the root directory and define:
```
REACT_APP_API_BASE_URL=http://localhost:5000
```

## Deployment
To build the project for production:
```bash
npm run build
```
This will generate an optimized version in the `build/` folder.

## Future Enhancements
- Implement real-time quiz functionality
- Add user profile management
- Improve UI with better animations and effects

## License
This project is licensed under the MIT License.

---
Feel free to contribute or report issues in the repository!


# Code-Chronicles
The Full Stack Code Chronicles is a web application that allows users to create an account and access a personalized blogging platform. Users can sign up using their email address and password or opt for a quicker login process through their GitHub account. Once logged in, users can create, edit, and delete blog posts, as well as view and comment on posts created by other users.

The application is built using a full stack development approach, utilizing technologies such as:

- Front-end: HTML, CSS, JavaScript,React Js
- Back-end: Node.js, Express.js
- Database: MongoDB
- Authentication: oauth 2.0
- Deployment: cyclic

The Full Stack Code Chronicles offers a seamless user experience with an intuitive and responsive user interface. It provides a platform for users to share their thoughts, engage with other users' content, and build a vibrant community of bloggers.

**Features**:
- User registration and login:
    - Create an account using email and password
    - Login using GitHub authentication
- User profiles:
    - Edit user information and profile picture
    - View and manage created blog posts
- Blog posts:
     - Create, edit, and delete blog posts
     - View and comment on blog posts created by other users
- User-friendly interface:
     - Responsive design for optimal user experience on various devices
     - Intuitive navigation and user-friendly interactions

**Installation :**

To set up and run the Full Stack Code Chronicles locally, follow these steps:

1. Clone the repository:

    `git clone https://github.com/shabbiryahya/code-chronicles.git code-chronicles`

2. Navigate to the project directory:

     `cd code-chronicles`
3. Install the dependencies:

     `npm install`
4. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Add the following variables:
 
          PORT=<port-number>

          DB_CONNECTION_URL = <mongodb-connection-string>

          GITHUB_OAUTH_CLIENT_ID = <github-client-id>

          GITHUB_OAUTH_CLIENT_SECRET = <github-client-secret>

          BASE_URL='<base-url>

          JWT_SECRET_KEY = <jwt-key>

5. Start the application:

   `npm start`

6. Open your browser and visit `http://localhost:<port-number>` to access the Full Stack Code Chronicles.   

**Screenshots :**


[Signup](https://code-chronicles.cyclic.app/)

![Signup](https://i.imgur.com/m0z4BaO.png)

[Signin](https://code-chronicles.cyclic.app/)

![Signin](https://i.imgur.com/kBPRe4k.png)

[HomePage](https://code-chronicles.cyclic.app/)

![HomePage](https://i.imgur.com/wx5ScTp.png)

[Create Post](https://code-chronicles.cyclic.app/create) `Login Required`

![Create Post](https://i.imgur.com/nllweJ8.png)


[Post Comment](https://code-chronicles.cyclic.app/blog/id) `Login Required`

![Post Comment](https://i.imgur.com/vkA1XSB.png)




**Contributing :**

   Contributions to the Full Stack Blog App are welcome! If you encounter any bugs, issues, or have suggestions for enhancements, please feel free to submit a pull request or open an issue in the GitHub repository.

**License :**

The Full Stack Blog App is licensed under the Apache License 2.0.

[Deployed](https://code-chronicles.cyclic.app/)

[Github](https://github.com/shabbiryahya/code-chronicles)

 
          



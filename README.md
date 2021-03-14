# 04 Web APIs: Code Quiz

Assignment 4 - Thom Williams: Password Generator

 task for week 3 of the University of Manchester Coding Bootcamp course.

It modifies starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. The criteria are a specific length of characters, lower case characters, upper case character and special characters.

This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code. The UI has been left as designed with a clean, polished, responsive and accessible interface. A pre-coded Media Query allows adaptation for mobile devices.


## Installing / Getting started

Hosted by Github Pages. The application loads in the web browser. All files available to clone / download from Thom Willims' GitHub repository. 

### Initial Configuration

N/A Application should load in any universal browser.

## Developing

To clone this template, or develop further from this repo, please head to GitHub and follow these steps:

```shell
git clone https://github.com/ThomWilliams/password_generator_tew.git
cd password_generator_tew
code .
```

The repository comprises a HTML index file, CSS style file, Javascript file, screenshot images, GIF demonstration video and this README. A reset CSS file has also been added.

### Building

No further additional steps should be required for the developer to view the files / build on the project.

Once opened in any browser such as Chrome, the styled html page for the Password Generator should be displayed. 

### Deploying / Publishing

All developments by Thom Williams to the main branch. Deployed on Git Hub pages to the following address: 

[Github Pages](https://thomwilliams.github.io/password_generator_tew/)


## Features

This Password Generator modifies starter code provided to create an application that enables employees to generate random passwords based on selected criteria of their choice. 

Key Features include: 

* Click event listener begins generating password at a single click
* Series of message prompt asks employees to select their criteria for the password including: 
    - Length of characters for the password (between 8-128 numerical characters)
    - Whether they would like uppercase characters
    - Whether they would like lowercase characters
    - Whether they would like special characters
* Erroneous entries (bugs) such as the selection of no characters, or a number of characters over less than 8, or over 128 have been called out with appropriate alerts.
* The selection of characters is randomly generated (with the random fucntion) and presented in the flex box with ID (#password), to replace the placeholder text "Your Secure Password"
* The UI has been left largely unchanged to retain its clean, polished, responsive interface. 
* Pre-coded Media queries have been used to provide a responsive layout suited for desktop and mobile use. 

## Links

- Project homepage: [GitHub](https://thomwilliams.github.io/password_generator_tew/)
- Repository: [GitHub](https://github.com/ThomWilliams/password_generator_tew)
- Issue tracker: [GitHub](https://github.com/ThomWilliams/password_generator_tew/issues)
  - In case of sensitive bugs like security vulnerabilities, please contact thomwilliams1990@gmail.com. We value your effort to improve the security and privacy of this project.
- Related projects: [GitHub](https://github.com/ThomWilliams)


## Accessibility

A Wave accessibility checker confirms the following features meet accessibility standards including:

* Semantic HTML elements.
* Suitably contrasting colour scheme.
* ARIA label attribute added to "Generated Password". 


# Screenshot

A screenshot of both the desktop versions is provided in the assets Folder: 

Desktop version: ![Desktop Screenshot](Assets/Password_Generator_TEW_screenshot.png)



# GIF

A gif visual demonstration is also provided as a guide:

GIF GUIDE: ![gif demo](assets/images/Password_generator_demo.gif)


======
## Credits

These are the web articles referenced during this Code Refactor accessibility excercise. 

[w3 Schools](https://www.w3schools.com/javascript)
[Wave](https://wave.webaim.org/)
[Mozilla Developer](https://developer.mozilla.org/)
[GitHub Readme Guide](https://github.com/jehna/readme-best-practices)

## License

MIT License

Copyright (c) [2021] [Thomas Edward Williams]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

=====================================
=====================================
=====================================

## Your Task

At some point in your journey to become a full-stack web developer, you’ll likely be asked to complete a coding assessment&mdash;perhaps as part of an interview process. A typical coding assessment includes both multiple-choice questions and interactive coding challenges. 

To help familiarize you with these tests and allow you to use the skills covered in this unit, this week’s homework invites you to build a timed coding quiz with multiple-choice questions. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface. 

This week’s coursework will equip you with all the skills you need to succeed in this assignment.

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```

## Mock-Up

The following animation demonstrates the application functionality:

![A user clicks through an interactive coding quiz, then enters initials to save the high score before resetting and starting over.](./Assets/04-web-apis-homework-demo.gif)

## Grading Requirements

This homework is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository contains application code.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the homework instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository, with a unique name and a readme describing the project.

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

Feature: User should be able to able to login

Background:
  Given user is in login page

@Registration
Scenario Outline:

  When user enter "<Username>"
  And user enter password  "<Password>"
  And user click on login button
  Then user should be able navigate "<Result>"

  Examples:
    | Username | Password | Result                                                                       |
    | Admin    | admin123 | https://opensource-demo.orangehrmlive.com/index.php/dashboard                |
    | Admin    |          | https://opensource-demo.orangehrmlive.com/                                   |
    |          | admin123 | https://opensource-demo.orangehrmlive.com                                   |
    | seemasvk | test123  | https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials |
    | seemasvk | admin123 | https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials |
    | Admin    | test123  | https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials |
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/Feature/Login.feature");
formatter.feature({
  "line": 1,
  "name": "User should be able to able to login",
  "description": "",
  "id": "user-should-be-able-to-able-to-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "",
  "description": "",
  "id": "user-should-be-able-to-able-to-login;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user enter \"\u003cUsername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enter password  \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user should be able navigate \"\u003cResult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "user-should-be-able-to-able-to-login;;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "Result"
      ],
      "line": 15,
      "id": "user-should-be-able-to-able-to-login;;;1"
    },
    {
      "cells": [
        "Admin",
        "admin123",
        "https://opensource-demo.orangehrmlive.com/index.php/dashboard"
      ],
      "line": 16,
      "id": "user-should-be-able-to-able-to-login;;;2"
    },
    {
      "cells": [
        "Admin",
        "",
        "https://opensource-demo.orangehrmlive.com/"
      ],
      "line": 17,
      "id": "user-should-be-able-to-able-to-login;;;3"
    },
    {
      "cells": [
        "",
        "admin123",
        "https://opensource-demo.orangehrmlive.com"
      ],
      "line": 18,
      "id": "user-should-be-able-to-able-to-login;;;4"
    },
    {
      "cells": [
        "seemasvk",
        "test123",
        "https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials"
      ],
      "line": 19,
      "id": "user-should-be-able-to-able-to-login;;;5"
    },
    {
      "cells": [
        "seemasvk",
        "admin123",
        "https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials"
      ],
      "line": 20,
      "id": "user-should-be-able-to-able-to-login;;;6"
    },
    {
      "cells": [
        "Admin",
        "test123",
        "https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials"
      ],
      "line": 21,
      "id": "user-should-be-able-to-able-to-login;;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5660208600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsInLoginPage()"
});
formatter.result({
  "duration": 274714400,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "",
  "description": "",
  "id": "user-should-be-able-to-able-to-login;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user enter \"Admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enter password  \"admin123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user should be able navigate \"https://opensource-demo.orangehrmlive.com/index.php/dashboard\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.userEnter(String)"
});
formatter.result({
  "duration": 265697800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.userEnterPassword(String)"
});
formatter.result({
  "duration": 390022800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnLoginButton()"
});
formatter.result({
  "duration": 1253462200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://opensource-demo.orangehrmlive.com/index.php/dashboard",
      "offset": 30
    }
  ],
  "location": "MyStepdefs.userShouldBeAbleNavigate(String)"
});
formatter.result({
  "duration": 48819800,
  "status": "passed"
});
formatter.after({
  "duration": 217200,
  "status": "passed"
});
formatter.before({
  "duration": 6739399500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsInLoginPage()"
});
formatter.result({
  "duration": 114221600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "",
  "description": "",
  "id": "user-should-be-able-to-able-to-login;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user enter \"Admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enter password  \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user should be able navigate \"https://opensource-demo.orangehrmlive.com/\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.userEnter(String)"
});
formatter.result({
  "duration": 418362700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.userEnterPassword(String)"
});
formatter.result({
  "duration": 232090500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnLoginButton()"
});
formatter.result({
  "duration": 296771700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://opensource-demo.orangehrmlive.com/",
      "offset": 30
    }
  ],
  "location": "MyStepdefs.userShouldBeAbleNavigate(String)"
});
formatter.result({
  "duration": 125888200,
  "status": "passed"
});
formatter.after({
  "duration": 76000,
  "status": "passed"
});
formatter.before({
  "duration": 98472718100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsInLoginPage()"
});
formatter.result({
  "duration": 54509200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "",
  "description": "",
  "id": "user-should-be-able-to-able-to-login;;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user enter \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enter password  \"admin123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user should be able navigate \"https://opensource-demo.orangehrmlive.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.userEnter(String)"
});
formatter.result({
  "duration": 374437900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.userEnterPassword(String)"
});
formatter.result({
  "duration": 289112700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnLoginButton()"
});
formatter.result({
  "duration": 268376900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://opensource-demo.orangehrmlive.com",
      "offset": 30
    }
  ],
  "location": "MyStepdefs.userShouldBeAbleNavigate(String)"
});
formatter.result({
  "duration": 71443800,
  "error_message": "java.lang.AssertionError: expected [https://opensource-demo.orangehrmlive.com] but found [https://opensource-demo.orangehrmlive.com/]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:575)\r\n\tat org.testng.Assert.assertEquals(Assert.java:585)\r\n\tat FeatureOrangeHRMSaucelab.Utils.validateURL(Utils.java:195)\r\n\tat FeatureOrangeHRMSaucelab.MyStepdefs.userShouldBeAbleNavigate(MyStepdefs.java:35)\r\n\tat ✽.Then user should be able navigate \"https://opensource-demo.orangehrmlive.com\"(src/test/Resources/Feature/Login.feature:12)\r\n",
  "status": "failed"
});
formatter.write("!!!!!!!.....Scenario Failed......!!!!!!Please see attached screenshot for error/Issue");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1233535400,
  "status": "passed"
});
formatter.before({
  "duration": 4082506600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsInLoginPage()"
});
formatter.result({
  "duration": 149069800,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "",
  "description": "",
  "id": "user-should-be-able-to-able-to-login;;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user enter \"seemasvk\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enter password  \"test123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user should be able navigate \"https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "seemasvk",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.userEnter(String)"
});
formatter.result({
  "duration": 734345900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.userEnterPassword(String)"
});
formatter.result({
  "duration": 391129200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnLoginButton()"
});
formatter.result({
  "duration": 754451300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials",
      "offset": 30
    }
  ],
  "location": "MyStepdefs.userShouldBeAbleNavigate(String)"
});
formatter.result({
  "duration": 110794700,
  "status": "passed"
});
formatter.after({
  "duration": 99200,
  "status": "passed"
});
formatter.before({
  "duration": 3726527200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsInLoginPage()"
});
formatter.result({
  "duration": 61735600,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "",
  "description": "",
  "id": "user-should-be-able-to-able-to-login;;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user enter \"seemasvk\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enter password  \"admin123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user should be able navigate \"https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "seemasvk",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.userEnter(String)"
});
formatter.result({
  "duration": 288940800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.userEnterPassword(String)"
});
formatter.result({
  "duration": 285273800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnLoginButton()"
});
formatter.result({
  "duration": 594208900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials",
      "offset": 30
    }
  ],
  "location": "MyStepdefs.userShouldBeAbleNavigate(String)"
});
formatter.result({
  "duration": 58919100,
  "status": "passed"
});
formatter.after({
  "duration": 87200,
  "status": "passed"
});
formatter.before({
  "duration": 94613077500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsInLoginPage()"
});
formatter.result({
  "duration": 67175200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "",
  "description": "",
  "id": "user-should-be-able-to-able-to-login;;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user enter \"Admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enter password  \"test123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user should be able navigate \"https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.userEnter(String)"
});
formatter.result({
  "duration": 280338500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.userEnterPassword(String)"
});
formatter.result({
  "duration": 257284300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnLoginButton()"
});
formatter.result({
  "duration": 835840000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials",
      "offset": 30
    }
  ],
  "location": "MyStepdefs.userShouldBeAbleNavigate(String)"
});
formatter.result({
  "duration": 52038600,
  "status": "passed"
});
formatter.after({
  "duration": 60600,
  "status": "passed"
});
});
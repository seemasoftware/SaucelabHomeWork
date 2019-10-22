package FeatureOrangeHRMSaucelab;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class MyStepdefs extends Utils{
    LoginPage loginPage=new LoginPage();

    @Given("^user is in login page$")
    public void userIsInLoginPage()
    {
       loginPage.LoginPage();
    }

    @When("^user enter \"([^\"]*)\"$")
    public void userEnter(String Password)
    {
        loginPage.EnterUsername(Password);
    }

    @And("^user enter password  \"([^\"]*)\"$")
    public void userEnterPassword(String Username)  {
        loginPage.EnterPassword(Username);
    }

    @And("^user click on login button$")
    public void userClickOnLoginButton() {
        loginPage.ClickOnLoginButton();
    }

    @Then("^user should be able navigate \"([^\"]*)\"$")
    public void userShouldBeAbleNavigate(String Result)  {
        validateURL(Result);
    }
}

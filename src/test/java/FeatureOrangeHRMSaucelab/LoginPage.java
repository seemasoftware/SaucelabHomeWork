package FeatureOrangeHRMSaucelab;

import org.openqa.selenium.By;

public class LoginPage extends Utils {

 LoadProps loadProps=new LoadProps();

 private By _Username =By.id("txtUsername");
 private By _Password= By.name("txtPassword");
 private By _LoginButton=By.xpath("//input[@name=\"Submit\"]");

    public void LoginPage()
    {
        validateURL(loadProps.getProperty("LoginURL"));
    }
    public void EnterUsername(String Username)
    {
        EnterText(_Username,Username);
    }

    public void EnterPassword(String Password)
    {
      EnterText(_Password,Password);
    }

   public void ClickOnLoginButton()
   {
      ClickElement(_LoginButton);
   }

}

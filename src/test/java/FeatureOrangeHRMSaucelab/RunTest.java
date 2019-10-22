package FeatureOrangeHRMSaucelab;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features=".",tags="@Registration",format = {"pretty","html:target/Destination"})
//@CucumberOptions(features  = "src\\test\\Resources\\Feature\\Category.feature:7")



public class RunTest {
}

package FeatureOrangeHRMSaucelab;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import static org.apache.commons.io.FileUtils.copyFile;


public class Hooks extends Utils {
    BrowserSelector browserSelector = new BrowserSelector();
    LoadProps loadProps=new LoadProps();

    @Before
    public void SetUpBrowser()
    {
        browserSelector.setUpBrowser();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        driver.get(loadProps.getProperty("url"));
    }

    @After
    public void CloseBrowser(Scenario scenario) throws IOException {
        if(scenario.isFailed()) {
            String screenshotName = scenario.getName().replaceAll("[.,:;?!]", "") + rendomDate() + ".png";
            //This takes screenshot from the driver at save it to the specified destination
            File sourcePath=((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
            //Building up the destination path for the screenshot to save
            //Also make sure to create a folder 'screenshots' with in the cucumber-report folder
            File destinationPath = new File(System.getProperty("user.dir")+"/target/Destination/screenshots/"+screenshotName);
            //copy taken screenshot from source location to destination location
            copyFile(sourcePath,destinationPath);
            scenario.write("!!!!!!!.....Scenario Failed......!!!!!!Please see attached screenshot for error/Issue");
            //Attached screenshot to our report
            scenario.embed(((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES),"image/png");
            driver.quit();
        }
    }
}



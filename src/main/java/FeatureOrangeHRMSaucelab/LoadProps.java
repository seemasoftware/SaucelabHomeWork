package FeatureOrangeHRMSaucelab;

import org.testng.annotations.Test;

import java.io.FileInputStream;
import java.util.Properties;

public class LoadProps {
    static Properties props;
    private static FileInputStream inputStream;
    public static String getProperty(String key){
        props = new Properties();
        try{
            inputStream = new FileInputStream("src\\test\\Resources\\TestData\\testdataConfig.properties");
            props.load(inputStream);
            inputStream.close();
        }catch (java.io.IOException e){
            e.printStackTrace();
        }
        return props.getProperty(key);
    }

    @Test
    public void test1(){System.out.println(getProperty("url")+" "); }
}

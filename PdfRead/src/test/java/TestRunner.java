import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"src/main/java/FeatureFiles"},
		glue = {"stepDefinition"},
		plugin = {"pretty", "html:Output/html-report"},
		monochrome = true,
		dryRun = false
		)
public class TestRunner {
	
	

}

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = { "src/main/java/FeatureFiles/PDFReadViaUtility.feature" }, glue = { "stepDefinition" }, plugin = { "pretty",
		"html:Output/html-reportForPDFUtil" }, dryRun = false)

public class PDFUtilTestRun {

}

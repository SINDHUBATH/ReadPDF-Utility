package stepDefinition;

import java.io.IOException;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pdfReader.ReadPDF;

public class ReadPDFStepDef extends ReadPDF{
	
	String PDF_FIRST;
	String PDF_SECOND;
	

@Given("^Read PDF$")
public void read_PDF() throws IOException {
	PDF_FIRST = pdfCompare("http://www.africau.edu/images/default/sample.pdf");
	PDF_SECOND = pdfCompare("https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf");

}

@Then("^Compare PDF results$")
public void compare_PDF_results() {
	
Assert.assertEquals(PDF_FIRST, PDF_SECOND);	
	
}


	
}

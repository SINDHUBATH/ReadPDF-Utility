package stepDefinition;

import java.io.IOException;

import cucumber.api.java.en.Given;
import pdfReader.PdfUtil;

public class PdfUtilStepDef extends PdfUtil {

	@Given("Read both PDFs")
	public void read_both_PDFs() throws IOException {
		comparePDF();
	}

//	@Then("Compare and display PDF diffs")
//	public void compare_and_display_PDF_diffs() {
//	}

}

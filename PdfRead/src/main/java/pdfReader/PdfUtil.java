package pdfReader;

import java.io.IOException;

import com.testautomationguru.utility.CompareMode;
import com.testautomationguru.utility.PDFUtil;

public class PdfUtil {

	public void comparePDF() throws IOException {
		PDFUtil pdfUtility = new PDFUtil();
		
		String file1 = "‎⁨⁨/Users/ramizramizmrr/Desktop/lesson2";
		
		String file2 = "/Users/ramizramizmrr/Desktop/pdf-test";
		
		pdfUtility.setCompareMode(CompareMode.VISUAL_MODE);
		pdfUtility.compare(file1, file2);
		
	}
	
}

package pdfReader;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;

public class ReadPDF {

	public String pdfCompare(String url) throws IOException {

		URL filePath = new URL(url);
		InputStream is = filePath.openStream();
		BufferedInputStream fileParse = new BufferedInputStream(is);
		PDDocument doc = PDDocument.load(fileParse);
		PDFTextStripper strippedPDF = new PDFTextStripper();
		String PDFText = strippedPDF.getText(doc);
		System.out.println(PDFText);
		return PDFText;
	}
}

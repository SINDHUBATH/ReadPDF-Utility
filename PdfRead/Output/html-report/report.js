$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/FeatureFiles/PDFRead.feature");
formatter.feature({
  "name": "Compare PDFs",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Read and Compare PDFs",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Read PDF",
  "keyword": "Given "
});
formatter.match({
  "location": "ReadPDFStepDef.read_PDF()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Compare PDF results",
  "keyword": "Then "
});
formatter.match({
  "location": "ReadPDFStepDef.compare_PDF_results()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c [A Simple PDF File \n This is a small demonstration .pdf file - \n just for use in the Virtual Mechanics tutorials. More text. And more \n text. And more text. And more text. And more text. \n And more text. And more text. And more text. And more text. And more \n text. And more text. Boring, zzzzz. And more text. And more text. And \n more text. And more text. And more text. And more text. And more text. \n And more text. And more text. \n And more text. And more text. And more text. And more text. And more \n text. And more text. And more text. Even more. Continued on page 2 ...\n Simple PDF File 2 \n ...continued from page 1. Yet more text. And more text. And more text. \n And more text. And more text. And more text. And more text. And more \n text. Oh, how boring typing this stuff. But not as boring as watching \n paint dry. And more text. And more text. And more text. And more text. \n Boring.  More, a little more text. The end, and just as wel]l. \n\u003e but was:\u003c [\n \n \nPDF Bookmark Sample Page 1 of 4 \n \nPDF BOOKMARK SAMPLE \n \nSample Date: May 2001 \nPrepared by: Accelio Present Applied Technology \nCreated and Tested Using: • Accelio Present Central 5.4 \n• Accelio Present Output Designer 5.4 \nFeatures Demonstrated: • Primary bookmarks in a PDF file. \n• Secondary bookmarks in a PDF file. \nOverview \nThis sample consists of a simple form containing four distinct fields. The data file contains eight \nseparate records. \nBy default, the data file will produce a PDF file containing eight separate pages. The selective \nuse of the bookmark file will produce the same PDF with a separate pane containing \nbookmarks. This screenshot of the sample output shows a PDF file with bookmarks. \n \nThe left pane displays the available bookmarks for this PDF. You may need to enable the \ndisplay of bookmarks in Adobe Acrobat Reader by clicking Window \u003e Show Bookmarks. \nSelecting a date from the left pane displays the corresponding page within the document. \nNote that the index has been sorted according to the specification in the bookmark file, and that \npages within the file are created according to the original order in the data file. \n \n \n \nPDF Bookmark Sample Page 2 of 4 \n \nSample Data File \n^reformat trunc\n^symbolset WINLATIN1\n^field trans_date\n2000-01-1\n^field description\nDescription for item #1\n^field trans_type\nTYPE1\n^field trans_amount\n11.00\n^page 1\n^field trans_date\n2000-01-2\n^field description\nDescription for item #2\n^field trans_type\nTYPE2\n^field trans_amount\n11.00\n^page 1\n^field trans_date\n2000-01-3\n^field description\nDescription for item #3\n^field trans_type\nTYPE3\n \nSample Bookmark File \n[invoices]\nInvoices by Date\u003d0\ntrans_date\u003d1,A\n[type]\nInvoices by Item Type\u003d0\ntrans_type\u003d1,A\n[amount]\nInvoices by Transaction Amount\u003d0\ntrans_amount\u003d1,D\nThe example bookmark file includes three distinct sections: \n• Invoices sorted, ascending, by date. \n• Invoices sorted, ascending, by item type. \n• Invoices sorted, descending, by transaction amount. \n \n \n \nPDF Bookmark Sample Page 3 of 4 \n \nSample Files \nThis sample package contains: \n \nFilename Description \nap_bookmark.IFD The template design. \nap_bookmark.mdf The template targeted for PDF output. \nap_bookmark.dat A sample data file in DAT format. \nap_bookmark.bmk A sample bookmark file. \nap_bookmark.pdf Sample PDF output. \nap_bookmark_doc.pdf A document describing the sample. \nDeploying the Sample \nTo deploy this sample in your environment: \n1. Open the template design ap_bookmark.IFD in Output Designer and recompile the \ntemplate for the appropriate presentment target. \n2. Modify the -z option in the ^job command in the data file ap_bookmark.dat to: \n• Identify the target output device. \n• Identify the bookmark file using the -abmk command. \n• Identify the section for which to generate bookmarks, if desired, using the -abms \ncommand. \nFor example, \n \nTo bookmark by   Use the command line parameter   \nInvoices -abmkap_bookmark.bmk -abmsinvoices\nType -abmkap_bookmark.bmk -abmstype\nAmount -abmkap_bookmark.bmk -abmsamount\n \n \n \nPDF Bookmark Sample Page 4 of 4 \n \n3. Place the accompanying files in directories consistent with your implementation: \n• Place ap_bookmark.IFD in the Designs subdirectory for Output Designer. \n• Place ap_bookmark.mdf in the forms subdirectory accessible to Central. \n• Place ap_bookmark.bmk in an addressable directory. \nRunning the Sample \n• To run this sample, place ap_bookmark.dat in the collector directory scanned by Centra]l. \n\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat stepDefinition.ReadPDFStepDef.compare_PDF_results(ReadPDFStepDef.java:27)\n\tat ✽.Compare PDF results(file:src/main/java/FeatureFiles/PDFRead.feature:6)\n",
  "status": "failed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/FeatureFiles/PDFReadViaUtility.feature");
formatter.feature({
  "name": "Compare PDFs using Utility",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Compare PDF and display difference",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Read both PDFs",
  "keyword": "Given "
});
formatter.match({
  "location": "PdfUtilStepDef.read_both_PDFs()"
});
formatter.result({
  "error_message": "java.io.FileNotFoundException: ‎⁨⁨/Users/ramizramizmrr/Desktop/lesson2 (No such file or directory)\n\tat java.base/java.io.RandomAccessFile.open0(Native Method)\n\tat java.base/java.io.RandomAccessFile.open(RandomAccessFile.java:345)\n\tat java.base/java.io.RandomAccessFile.\u003cinit\u003e(RandomAccessFile.java:259)\n\tat java.base/java.io.RandomAccessFile.\u003cinit\u003e(RandomAccessFile.java:214)\n\tat org.apache.pdfbox.io.RandomAccessBufferedFileInputStream.\u003cinit\u003e(RandomAccessBufferedFileInputStream.java:99)\n\tat org.apache.pdfbox.pdmodel.PDDocument.load(PDDocument.java:1062)\n\tat org.apache.pdfbox.pdmodel.PDDocument.load(PDDocument.java:1025)\n\tat org.apache.pdfbox.pdmodel.PDDocument.load(PDDocument.java:973)\n\tat com.testautomationguru.utility.PDFUtil.getPageCount(PDFUtil.java:177)\n\tat com.testautomationguru.utility.PDFUtil.comparePdfByImage(PDFUtil.java:430)\n\tat com.testautomationguru.utility.PDFUtil.comparePdfFiles(PDFUtil.java:304)\n\tat com.testautomationguru.utility.PDFUtil.compare(PDFUtil.java:264)\n\tat pdfReader.PdfUtil.comparePDF(PdfUtil.java:18)\n\tat stepDefinition.PdfUtilStepDef.read_both_PDFs(PdfUtilStepDef.java:12)\n\tat ✽.Read both PDFs(file:src/main/java/FeatureFiles/PDFReadViaUtility.feature:5)\n",
  "status": "failed"
});
});
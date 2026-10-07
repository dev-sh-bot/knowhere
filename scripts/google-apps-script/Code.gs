function doPost(event) {
  const properties = PropertiesService.getScriptProperties();
  const expectedSecret = properties.getProperty("WEBHOOK_SECRET");
  const spreadsheetId = properties.getProperty("SPREADSHEET_ID");

  try {
    const lead = JSON.parse(event.postData.contents || "{}");
    if (!expectedSecret || lead.secret !== expectedSecret) {
      return jsonResponse({ ok: false, error: "Unauthorized" });
    }

    if (!spreadsheetId) {
      return jsonResponse({ ok: false, error: "Spreadsheet is not configured" });
    }

    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    let sheet = spreadsheet.getSheetByName("Leads");
    if (!sheet) sheet = spreadsheet.insertSheet("Leads");

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Received At",
        "Name",
        "Email",
        "Company",
        "Service",
        "Budget",
        "Message",
      ]);
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      new Date(),
      safeCell(lead.name),
      safeCell(lead.email),
      safeCell(lead.company),
      safeCell(lead.service),
      safeCell(lead.budget),
      safeCell(lead.message),
    ]);

    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse({ ok: false, error: "Could not store the lead" });
  }
}

function safeCell(value) {
  const text = String(value || "").trim();
  return /^[=+@\-]/.test(text) ? "'" + text : text;
}

function jsonResponse(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(
    ContentService.MimeType.JSON,
  );
}

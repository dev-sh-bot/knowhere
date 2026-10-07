# Contact form lead storage

The contact form posts to the site's `/api/contact` route. The route validates the submission, then forwards it server-to-server to a Google Apps Script web app. The Apps Script writes each lead to the `Leads` tab of a private spreadsheet.

## Google setup

1. Sign in to Google as the Knowhere account that should own the leads.
2. Create a spreadsheet named **Knowhere — Contact Leads**.
3. Open [script.new](https://script.new) and paste `scripts/google-apps-script/Code.gs` into the project.
4. In the Apps Script project settings, add these script properties:
   - `SPREADSHEET_ID`: the value between `/d/` and `/edit` in the spreadsheet URL.
   - `WEBHOOK_SECRET`: a newly generated random secret with at least 32 bytes of entropy.
5. Deploy the script as a web app that executes as the Knowhere account and accepts requests from anyone. The endpoint only writes rows after the server-side secret matches. Keep the spreadsheet's sharing set to its intended private audience.
6. Copy the web app URL and configure the site server with:

   ```env
   GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/DEPLOYMENT_ID/exec
   GOOGLE_SHEETS_WEBHOOK_SECRET=the-same-secret-from-script-properties
   ```

   Use `.env.local` for local development and set the same values in the production host's environment settings. `.env.local` is ignored by Git.

The first accepted submission creates the `Leads` tab and its column headings. The form reports success only when the sheet receiver confirms the write.

FOX TREE COFFEE — RUFUS FORM READY VERSION

This folder contains the full static website with:
- Netlify-ready booking enquiry form
- Recent event video and gallery
- thank-you.html confirmation page
- no JavaScript blocking the form submission

HOW TO DEPLOY
1. Upload/deploy this whole folder to Netlify.
2. Make sure index.html is directly inside the folder you drag into Netlify, not hidden inside another folder.
3. Wait for Netlify to finish the deploy.
4. Open the live Netlify URL and hard refresh with Ctrl + F5.

HOW TO MAKE FORM EMAIL RUFUS
1. In Netlify, open the Fox Tree Coffee site.
2. Go to Project configuration.
3. Go to Notifications.
4. Open Form submission notifications.
5. Click Add notification.
6. Choose Email notification.
7. Select the form named booking-enquiry if shown, or choose All forms.
8. Put this email address in the notification email field:
   rufus@lloydowen.com
9. Save.

HOW TO TEST
1. Open the live Netlify website.
2. Fill in the enquiry form with a real test email.
3. Click Send enquiry.
4. You should land on /thank-you.html.
5. In Netlify, go to Forms and check for a verified submission under booking-enquiry.
6. Check rufus@lloydowen.com inbox and spam/junk.

IMPORTANT NOTES
- The website code cannot force Netlify to email Rufus. That part is controlled in the Netlify dashboard notification settings.
- The form must be tested on the live Netlify website, not by opening index.html on your computer.
- Keep the input called name="email" because Netlify uses this as the Reply-To email on the notification.
- Do not add event.preventDefault() to the booking form in script.js.

FORM FIX ADDED
--------------
The booking form now posts to /thank-you instead of /thank-you.html.
There is also a fallback /thank-you.html file and a /thank-you/index.html file, so both thank-you URLs exist.
After deploying, test the live form and check Netlify > Forms > booking-enquiry.
Email notifications still need to be set in Netlify to rufus@lloydowen.com under Project configuration > Notifications > Form submission notifications.

# Akalya R: Developer Portfolio
Plain HTML, CSS and JavaScript. No build step.

## Run in VS Code
1. Open the `portfolio` folder in VS Code.
2. Install the **Live Server** extension, right-click `index.html`, choose **Open with Live Server**.
   (Or run `python -m http.server 8000` in the folder and open http://localhost:8000.)

## Customize (everything is in `js/script.js`, top `CONFIG` block)
- **Email:** set `email`.
- **Contact form:** set `formEndpoint` to a Formspree (or similar) URL. Empty = opens your email app (mailto). Success is only shown after a real successful submit.
- **Profile photo:** save your photo as `assets/images/profile.jpg` (square-ish, face centered). Until then, an "AR" placeholder shows.
- **Project screenshots:** save images in `assets/images/` using the names in `js/script.js` (e.g. `smart-health.png`). Add `github` / `demo` URLs; buttons appear only when a URL is set.
- **Project status:** change `status` (Completed, Hackathon project, Pending). Check these are accurate.
- **Certificates:** put images in `assets/certificates/`, then edit the entries (title, org, date, image, link).
- **Resume:** save your PDF as `assets/resume/Akalya_R_Resume.pdf`. Until then the button shows a message.
- **Achievements / learning journey:** edit the `achievements` and `journey` arrays.

## Deploy
Upload the folder to GitHub Pages, Netlify or Vercel (static site). Before deploying: add email, resume, form endpoint, real project links, and update the `<meta>` tags in `index.html` with your site URL and an Open Graph image if you want one.

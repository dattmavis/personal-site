# Personal Site

This is a simple Next.js project inspired by the nostalgic look of Geocities while using modern tooling.

## Pages
- Home
- About
- Photography
- Projects
- Blog
- Contact
- Admin dashboard (for managing posts and photos)

The admin dashboard lets you configure an S3 bucket and manage all content. Posts are written using a ReactQuill WYSIWYG editor and can optionally appear on the Projects page. Photo uploads read EXIF data via `@/utility/exif`, allow you to toggle visibility and generate share links for friends.

To get started:

```bash
npm install
npm run dev
```

You'll need to configure AWS credentials and any additional setup for the admin tools.

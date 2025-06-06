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

The admin dashboard is intended to integrate with an S3 bucket for photo storage and provide a WYSIWYG markdown editor for blog posts. Photo uploads should read EXIF data using utility functions from `@/utility/exif`. Hidden share links can be generated for private photos.

To get started:

```bash
npm install
npm run dev
```

You'll need to configure AWS credentials and any additional setup for the admin tools.

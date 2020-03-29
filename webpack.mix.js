const mix = require('laravel-mix');
const tailwind = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: [
    './**/*.hbs',
    './assets/**/*.scss',
  ],
  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

mix
  .sass('assets/css/main.scss', 'assets/built')
  .options({
    processCssUrls: false,
    postCss: [
      tailwind('./tailwind.config.js'),
      ...process.env.NODE_ENV === 'production'
        ? [purgecss]
        : []
    ]
  })
  .setPublicPath('assets/built')
;

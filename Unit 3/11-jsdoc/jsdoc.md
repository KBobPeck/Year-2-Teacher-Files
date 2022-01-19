{
  "source": {
    <!-- ! this is where the program will look to compile, you can add as many folders as you like to the array -->
    "inlcude": ["src"],
    <!-- ! any files that end in .ts, this can also be .js if you want  -->
    "includePattern": ".ts$",
    "includePattern": "(.ts$|.js$)",
    <!-- ! will not look in node_modules or docs (docs is the output folder) -->
    "exludePattern:": "(node_modules/|docs)"
  },

  <!-- ! this allows you to use markdown -->
  "plugins": ["plugins/markdown"],

  <!-- ! this these are just settings for any links that we have in the docs -->
  "templates": {
    "cleaverLinks": true,
    "monospace": true
  },

  <!-- ! these are options -->
  "opts": {
    <!-- ! this allows us to recursively use other folders -->
    "recurse": true,
    <!-- ! this is where the file will be output when done -->
    "destination": "./docs/"
  }
}

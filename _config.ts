import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";
import googleFonts from "lume/plugins/google_fonts.ts";
import jsx from "lume/plugins/jsx.ts";

const site = lume();

site.use(googleFonts({
  fonts:
    "https://fonts.google.com/share?selection.family=Playfair+Display:ital,wght@0,400..900;1,400..900",
}));
site.use(sass(/* Options */));
site.use(jsx(/* Options */));

site.add("assets");
site.add("styles/main.scss");


export default site;
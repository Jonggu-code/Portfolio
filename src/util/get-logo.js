import dark_logo from "./../assets/dark_logo_header.png";
import basic_logo from "./../assets/basic_logo_header.png";

export function getLogoImage(modeColor) {
    switch (modeColor) {
        case "dark":
            return dark_logo;
        case "basic":
            return basic_logo;
    }
}

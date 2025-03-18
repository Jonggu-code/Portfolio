import dark_logo from "./../assets/dark_logo_mobile.png";
import basic_logo from "./../assets/basic_logo_mobile.png";

export function getLogoImage(modeColor) {
    switch (modeColor) {
        case "dark":
            return dark_logo;
        case "basic":
            return basic_logo;
    }
}

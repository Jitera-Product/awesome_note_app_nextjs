import ImageLogo from "./images/logo.jpeg";
import NoImage from "./images/no-image.png";
import Image1667466632569png from "./images/1667466632569.png";
import Image1667466744306svg from "./images/1667466744306.svg";
import Image1667466779335svg from "./images/1667466779335.svg";
import Image1667466779519svg from "./images/1667466779519.svg";
const assets = (name: string) => {
  switch (name) {
    case "logo":
      return ImageLogo;
    case "1667466632569png":
      return Image1667466632569png;
    case "1667466744306svg":
      return Image1667466744306svg;
    case "1667466779335svg":
      return Image1667466779335svg;
    case "1667466779519svg":
      return Image1667466779519svg;
    default:
      return NoImage;
  }
};
export default assets;

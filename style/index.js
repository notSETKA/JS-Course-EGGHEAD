import {
  bl,
  block1,
  blocks,
  fbut,
  finput,
  fintro,
  fintro1,
  fintro2,
  footer,
  header,
  inputflex,
  intro,
  introButtonDiv,
  introH1,
  introH2,
  introP,
  wholePageStyle,
} from "../app.js";

wholePageStyle("0px", "0px", "border-box", "Montserrat");
header("100%", "140vh", "flex", "column", "#252B42", "center", "center");
intro("center", "40%", "flex", "column", "center");
introH2("#23A6F0", "16px", "24px", "0.1px");
introH1("#FFF", "58px", "80px", "0.2px");
introP("#FFF", "20px", "30px", "0.2px");
introButtonDiv(
  "#FFF",
  "#23A6F0",
  "10px 30px 10px 30px",
  "10px",
  "5px",
  "none",
  "#252B42",
  "1px solid #23A6F0",
  "#23A6F0"
);
blocks("70%", "flex", "80px");
bl("inherit", "30px", "80px", "flex");
block1(
  'url("../img/icon1.png") no-repeat',
  "contain",
  "50px",
  "58px",
  "16px",
  "50px",
  "2px",
  "#E74040",
  "#737373",
  "14px",
  "training Courses",
  "The gradual accumulation of information about atomic and small-scale behaviour...",
  "#FFF",
  "#000"
);
block1(
  'url("../img/icon3.png") no-repeat',
  "contain",
  "50px",
  "58px",
  "16px",
  "50px",
  "2px",
  "#E74040",
  "#737373",
  "14px",
  "2,769 online courses",
  "The gradual accumulation of information about atomic and small-scale behaviour...",
  "#FFF",
  "#000"
);
block1(
  'url("../img/icon2.png") no-repeat',
  "contain",
  "50px",
  "58px",
  "16px",
  "50px",
  "2px",
  "#FFF",
  "#fff",
  "14px",
  "training Courses",
  "The gradual accumulation of information about atomic and small-scale behaviour...",
  "#23A6F0",
  "#FFF"
);
footer('60vh', 'flex', 'column', 'center', 'center');
fintro('#23A6F0', '14px');
fintro1('#000', '40px');
fintro2('#737373', '14px');
inputflex();
finput('15px 150px 15px 15px', '1px solid #E6E6E6', '5px 0px 0px 5px', '#F9F9F9');
fbut('16px 25px 16px 25px', 'none', '0px 5px 5px 0px', '#23A6F0', '#FFF');
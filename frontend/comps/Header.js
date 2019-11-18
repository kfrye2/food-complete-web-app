import Link from 'next/link';

const linkStyle1 = {
  marginRight: 15,
  border: '1px solid #cadd5f',
  borderRadius: '5px',
  padding: '10px',
  fontFamily: 'Verdana',
  textDecoration: 'none',
  color: '#cadd5f'
};
const navBar = {
    padding: '20px',
    textAlign: 'right',
    background: '#013220',
    boxShadow: '5px 10px 18px #888888'
};
const foodBackground = {
  backgroundImage: "url(https://img.huffingtonpost.com/asset/58b7e08d1a00003400f41275.jpeg?cache=J7IxmNvgTj&ops=1778_1000)",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",
  imageRendering: "-webkit-optimize-contrast",
  imageRendering: "pixelated",
  transform: "scaleX(-1)",
  width: "100%",
  height: "250px"
};
const title = {
  transform: "scaleX(-1) !important",
  textAlign: "center",
  margin: "0 5% 0 auto",
  width: "30%",
  height: "50px",
  color: "rgb(202, 221, 95)",
  background: "rgba(1,50,32,0.50)",
  fontFamily: "Impact, fantasy",
  fontSize: "40px",
  padding: "10px 20px 100px 20px",
  textShadow: "0 0 3px rgba(0, 0, 0, 0.7)",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
}
const descriptionBar = {
  background: "rgb(202, 221, 95)",
  height: "40px",
  padding: "0 20px 100px 20px",
  boxShadow: "4px 4px 8px #888888"
}
const description = {
  background: "rgb(252, 208, 0)",
  textAlign: "center",
  height: "40px",
  width: "55%",
  margin: "0 auto",
  padding: "0 20px 100px 20px",
}
const descriptionTitle = {
  color: "rgb(1,50,32)",
  fontFamily: "Impact, fantasy",
  fontSize: "30px",
  textShadow: "0 0 3px rgba(0, 0, 0, 0.2)",
}
const descriptionSubheader1 = {
  color: "rgb(1,50,32)",
  fontSize:"19px",
  fontFamily: "Trebuchet MS, Arial, Helvetica, sans-serif"
}
const descriptionSubheader2 = {
  color: "rgb(1,50,32)",
  fontSize:"12px",
  fontFamily: "Trebuchet MS, Arial, Helvetica, sans-serif"
}

const Header = () => (
  <div>
    <div style={navBar}>
      <Link href="/">
        <a style={linkStyle1}>Home</a>
      </Link>
    </div>
    <div>
      <div style={foodBackground}>
        <br/><br/>
          <div style={title}><br/>NUTRITION INQUISITION</div>
      </div>
    </div>
    <div style={descriptionBar}>
      <div style={description}>
        <br/>
        <div style={descriptionTitle}>SEARCH &amp; DISCOVER</div>
        <div style={descriptionSubheader1}>nutritional facts</div>
        <div style={descriptionSubheader2}>about your favorite foods</div> 
      </div>
    </div>
  </div>
);

export default Header;
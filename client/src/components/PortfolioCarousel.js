import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "../App.css";

function PortfolioOutfitCard(props) {
  // // const portfolioArray = props.showOutfits.filter((i) => {
  // //   return i.category === "food";
  // // });

  // const portfolioLength = portfolioArray.map((imageEl) => 100 / portfolioArray);

  // const [portfolioWidthState, setPortfolioWidthState] = useState(portfolioLength);

  // // const portfolioId = portfolioArray.map((e) => e._id);

  // return (
  //   <>
  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "inlineBlock",
  //         marginBottom: "20px",
  //       }}
  //     >
  //       {portfolioWidthState.map((cardWidth, i) => (
  //         <Card
  //           key={"card-" + i}
  //           className="full-outfit"
  //           style={{ width: cardWidth + "%", transition: "width 1s" }}
  //           onMouseOver={() => {
  //             let min = 5;
  //             let variance = 100 - portfolioWidthState.length * min;
  //             let nWidth = [];
  //             let maxValue = -3;
  //             portfolioWidthState.forEach((width, x) => {
  //               nWidth.push(Math.abs(x - i));
  //               maxValue =
  //                 maxValue < Math.abs(x - i) ? Math.abs(x - i) : maxValue;
  //             });
  //             let sum = 0;
  //             nWidth = nWidth.map((nw, i) => {
  //               return maxValue - nw;
  //             });
  //             nWidth.forEach((nw) => (sum += nw));
  //             let scale = variance / sum;
  //             nWidth = nWidth.map((nw, i) => {
  //               return scale * nw + min;
  //             });
  //             setPortfolioWidthState(nWidth);
  //           }}
  //         >
  const [widthState, setWidthState] = useState([20, 20, 20, 20, 20]);

  // later card data will a separate state
  return (
    <>
      <div  style={{ display: "flex", justifyContent: "inlineBlock" }}>
        {widthState.map((cardWidth, i) => (
          <Card className="portfolio-cards"
            style={{ width: cardWidth + "%", transition: "width 1s" }}
            onMouseOver={() => {
             
              let min = 5;
              let variance = 100 - widthState.length * min;
              console.log(variance);
              let nWidth = [];
              let len = widthState.length;
              let maxValue = -1;
              widthState.forEach((width, x) => {
                console.log({ x, len, i });
                nWidth.push(Math.abs(x - i));
                maxValue =
                  maxValue < Math.abs(x - i) ? Math.abs(x - i) : maxValue;
              });
              let sum = 0;
              nWidth = nWidth.map((nw, i) => {
                return maxValue - nw;
              });
              nWidth.forEach((nw) => (sum += nw));
              let scale = variance / sum;
              nWidth = nWidth.map((nw, i) => {
                return scale * nw + min;
              });
              console.log(nWidth);
              setWidthState(nWidth);
            }}
          >
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "/assets/seafood.png"}
            />
          </Card>
        ))}
      </div>
    </>
  );
}

export default PortfolioOutfitCard;

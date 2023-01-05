import React from "react";
import styled from "styled-components";

const Palette = () => {
  return (
    <SwatchWrapper>
      <Coloum>
        <Swatch className="tone0"></Swatch>
        <Swatch className="tone1"></Swatch>
        <Swatch className="tone2"></Swatch>
        <Swatch className="tone3"></Swatch>
        <Swatch className="tone4"></Swatch>
        <Swatch className="tone5"></Swatch>
        <Swatch className="tone6"></Swatch>
        <Swatch className="tone7"></Swatch>
        <Swatch className="tone8"></Swatch>
        <Swatch className="tone9"></Swatch>
      </Coloum>
      <Coloum>
        <Swatch className="sinopia"></Swatch>
        <Swatch className="tenneTawny"></Swatch>
        <Swatch className="ochre"></Swatch>
        <Swatch className="harvestGold"></Swatch>
        <Swatch className="lemonCurry"></Swatch>
        <Swatch className="appleGreen"></Swatch>
        <Swatch className="oliveDrab3"></Swatch>
        <Swatch className="spanishGreen"></Swatch>
        <Swatch className="mountainMeadow"></Swatch>
        <Swatch className="turquoise"></Swatch>
      </Coloum>
      <Coloum>
        <Swatch className="darkSienna"></Swatch>
        <Swatch className="kobe"></Swatch>
        <Swatch className="chocolateTraditional"></Swatch>
        <Swatch className="bistreBrown"></Swatch>
        <Swatch className="avocado"></Swatch>
        <Swatch className="darkMossGreen"></Swatch>
        <Swatch className="forestGreenTraditional"></Swatch>
        <Swatch className="castletonGreen"></Swatch>
        <Swatch className="genericViridian"></Swatch>
        <Swatch className="pacificBlue"></Swatch>
      </Coloum>
    </SwatchWrapper>
  );
};

const SwatchWrapper = styled.div`
  border: 2px solid hotpink;
  display: flex;
  flex-flow: row wrap;
  gap: 0.5rem;

  position: absolute;
  top: 7rem;
  right: 0rem;
  z-index: 9999999;
`;

const Coloum = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

const Swatch = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 3rem;
`;

export default Palette;

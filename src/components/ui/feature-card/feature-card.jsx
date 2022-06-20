import React from "react";
import Title, { TitleSize } from "../title/title";
import { Feature, Image, Owner, Header } from "./styles";
import { P } from "/src/components/styled";

function FeatureCard({ title, owner, about, isNegative, image }) {
  return (
    <Feature isNegative={isNegative}>
      <Header>
        <Image src={image} alt={title} />
        <Owner isNegative={isNegative}>{owner}</Owner>
        <Title as="h3" size={TitleSize.EXTRA_SMALL}>
          {title}
        </Title>
      </Header>
      <P dangerouslySetInnerHTML={{ __html: about }} />
    </Feature>
  );
}

export default FeatureCard;

import React from "react";
import Title from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";
import FeatureCard from "../../ui/feature-card/feature-card";
import { Ul, Li } from "/src/components/styled";
import { Features } from "./styles";
import { AppRoute } from "/src/const";

function FeaturesList({ features }) {
  return features && features.length ? (
    <Features>
      <Title as="h2">Почему фермерские продукты лучше?</Title>
      <Ul $isGridList>
        {features.map((feature) => (
          <Li key={feature.id}>
            <FeatureCard {...feature} />
          </Li>
        ))}
      </Ul>
      <Button link={AppRoute.BUY}>Купить</Button>
    </Features>
  ) : null;
}

export default FeaturesList;

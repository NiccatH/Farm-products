import React, { useState } from "react";
import Panel from "/src/components/ui/panel/panel";
import Title, { TitleSize } from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";
import ProductCard from "/src/components/ui/product-card/product-card";
import CheckboxList from "/src/components/ui/checkbox-list/checkbox-list";
import {
  StyledOrder,
  LeftColumn,
  AdressInput,
  PriceLabel,
  PriceValue,
  ProductSwiper,
  CheckboxLabel
} from "./styles";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

function Order({ products }) {
  const [selectProductIds, setSelectProductIds] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);
  const handleOnClickProduct = (value, index) => {
    if (!selectProductIds.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };

  const selectProducts = selectProductIds.map((id) =>
    products.find((product) => product.id === id)
  );

  const fullPrice = selectProducts.reduce(
    (sum, product) => (sum += product.price),
    0
  );

  const [address, setAddress] = useState("");
  const handleBuyClick = () => {
    alert(`Спасибо за заказ, вы купили:\n${selectProducts.map(
      (product) => `${product.name} - ${product.price} руб. \n`
    )}
    Итого: ${fullPrice} руб.
    Доставка по адресу: ${address}.`);
  };
  return products && products.length ? (
    <StyledOrder as="form">
      <LeftColumn>
        <Panel marginBottom={18} paddingTop={24} paddingBottom={10}>
          <Title as="h2" size={TitleSize.EXTRA_SMALL} marginBottom={12}>
            Выберите продукты
          </Title>
          <CheckboxList
            labelComponent={CheckboxLabel}
            name={"select-products"}
            isGridList={false}
            options={products.map((product) => ({
              value: product.id,
              title: product.name
            }))}
            selectValues={selectProductIds}
            onChange={setSelectProductIds}
            onClickLabel={handleOnClickProduct}
          />
        </Panel>
        <Panel>
          <Title as="h2" size={TitleSize.EXTRA_SMALL} marginBottom={24}>
            Сделать заказ
          </Title>
          <AdressInput
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Введите адрес доставки"
          />
          <PriceLabel as="span">Цена</PriceLabel>
          <PriceValue value={fullPrice}></PriceValue>
          <Button
            maxWidth
            onClick={handleBuyClick}
            disabled={!(selectProductIds.length && address)}
          >
            Купить
          </Button>
        </Panel>
      </LeftColumn>
      <ProductSwiper
        onSwiper={setSwiperRef}
        spaceBetween={12}
        direction="vertical"
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        mousewheel
        pagination={{
          type: "fanction"
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </ProductSwiper>
    </StyledOrder>
  ) : (
    "Продукты были слишком вкусные и их разобрали."
  );
}

export default Order;

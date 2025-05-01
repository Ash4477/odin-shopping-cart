import { useMemo, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { mainSneakers, otherSneakers } from "../data/sneakers";
import { ImageHolder, Image, Button } from "../components/UIComponents";
import {
  FaLocationArrow,
  FaPlus,
  FaMinus,
  FaCheckCircle,
} from "react-icons/fa";
import { toast } from "react-toastify";
import styled from "styled-components";
import CONSTANTS from "../data/constants";

const colors = ["white", "black", "#f8604f", "#7209b7", "#ce4257"];
const sizes = [39, 40, 41, 42, 43, 44, 45];

const Container = styled.div`
  padding: 0 3rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

const ProdTextDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

const OptionDiv = styled.div`
  margin-top: 0.5rem;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 2px solid ${CONSTANTS.tertiaryColor};
`;

const ColorCircle = styled.button`
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: ${(props) => (props.$color ? props.$color : "grey")};
  border-radius: 50%;
  border: ${(props) =>
    props.$active ? `2px solid ${CONSTANTS.tertiaryColor}` : "1px solid grey"};
`;

const SizeBox = styled.button`
  cursor: pointer;
  width: 40px;
  height: 40px;
  font-weight: bold;
  background-color: ${(props) =>
    props.$active ? CONSTANTS.primaryColor : "inherit"};
  color: ${(props) => (props.$active ? "white" : "black")};
  border-color: "black";
  border-style: solid;
`;

const QuantityDiv = styled.div`
  flex: 1;
  display: flex;
  gap: 2rem;
  justify-content: center;
  font-weight: normal;
  border: 2px solid ${CONSTANTS.tertiaryColor};
  padding: 0.2rem 0;
`;

const QuantityBtn = styled.button`
  cursor: pointer;
  background: transparent;
  border: 0;
  color: ${CONSTANTS.primaryColor};
`;

const Product = () => {
  const [activeColor, setActiveColor] = useState("white");
  const [activeSize, setActiveSize] = useState(39);
  const [quantity, setQuantity] = useState(1);
  const { prodId } = useParams();
  const { addToCart } = useOutletContext();

  const product = useMemo(() => {
    let tempProd = mainSneakers.find((s, idx) => idx === Number(prodId));
    if (!tempProd)
      tempProd = otherSneakers.find(
        (s, idx) => mainSneakers.length + idx === Number(prodId)
      );
    return tempProd;
  }, [prodId]);

  const handleAddCartClick = () => {
    addToCart({
      title: product.title,
      price: product.price,
      image: product.image,
      quantity,
      color: activeColor,
      size: activeSize,
    });
    toast.success(
      quantity === 1 ? "Item added to cart" : "Items added to cart",
      {
        position: "top-center",
        style: {
          background: CONSTANTS.primaryColor,
          color: CONSTANTS.secodaryColor,
          fontWeight: "bold",
          borderRadius: "8px",
        },
        icon: <FaCheckCircle style={{ fontSize: "1.5rem" }} />,
      }
    );
  };

  return (
    <Container>
      <ImageHolder
        style={{ border: `2px solid ${CONSTANTS.tertiaryColor}`, flex: "1.5" }}
      >
        <Image src={product.image} />
      </ImageHolder>
      <ProdTextDiv>
        <FlexDiv>
          <h1 style={{ flex: "3", fontSize: "2rem" }}>
            {product.title.toUpperCase()}
          </h1>
          <p
            style={{
              color: CONSTANTS.primaryColor,
              flex: "1",
            }}
          >
            ${product.price}
          </p>
        </FlexDiv>
        <p style={{ color: CONSTANTS.tertiaryColor }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          tempora expedita consectetur tenetur veritatis eligendi. Veritatis
          laboriosam quos cum optio?
        </p>
        <div>
          <h2>CHOOSE COLOR</h2>
          <OptionDiv>
            {colors.map((color, idx) => (
              <ColorCircle
                key={idx}
                $color={color}
                $active={color === activeColor}
                onClick={() => setActiveColor(color)}
              />
            ))}
          </OptionDiv>
        </div>
        <div>
          <h2>CHOOSE SIZE</h2>
          <OptionDiv>
            {sizes.map((size, idx) => (
              <SizeBox
                key={idx}
                $active={size === activeSize}
                onClick={() => setActiveSize(size)}
              >
                {size}
              </SizeBox>
            ))}
          </OptionDiv>
        </div>
        <FlexDiv style={{ gap: "1rem" }}>
          <QuantityDiv>
            <QuantityBtn
              onClick={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                }
              }}
            >
              <FaMinus />
            </QuantityBtn>
            <p>{quantity}</p>
            <QuantityBtn onClick={() => setQuantity(quantity + 1)}>
              <FaPlus />
            </QuantityBtn>
          </QuantityDiv>
          <Button
            style={{
              flex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
            }}
            onClick={handleAddCartClick}
          >
            <p>ADD TO CART </p>
            <FaLocationArrow />
          </Button>
        </FlexDiv>
      </ProdTextDiv>
    </Container>
  );
};

export default Product;

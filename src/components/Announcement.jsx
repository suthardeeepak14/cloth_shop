import styled from "styled-components";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
`;

const Announcement = () => {
  return (
    <Container>
      Super Deal! Free Shipping on Orders over{" "}
      <CurrencyRupeeIcon style={{ fontSize: 16, alignItems: "center" }} /> 500
    </Container>
  );
};

export default Announcement;

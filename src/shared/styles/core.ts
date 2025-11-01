import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const FlexCol = styled(Flex)`
  flex-direction: column;
`;

const FlexRow = styled(Flex)`
  flex-direction: row;
`;

export { FlexCol, FlexRow };

import styled from "styled-components/native";

export const HomeBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const MovieImage = styled.Image`
  width: 75;
  height: 75;
  margin-left: 50;
`;

export const TopStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 38;
  text-align: center;
  font-family: sans-serif;
  font-weight: bold;
`;

export const OverLayContainer = styled.View`
  flex: 1;
  background-color: rgba(100, 40, 60, 0.4);
`;

export const BottomStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const ButtonStyled = styled.Text`
  font-size: 30;
  color: #fff;
`;

export const MovieItemStyled = styled.Text`
  /* color: ${(props) => props.theme.mainColor}; */
  color: darkred;
  font-size: 18;
  margin-top: 10;
  margin-bottom: 10;
  margin-left: 10;
  width: 100%;
`;

// export const CreateButtonStyled = styled.Button`
//   /* font-size: 1;
//   margin: 1.25; */
//   /* padding: 2; */
//   /* border-radius: 3;
//   background-color: pink;
//   color: black; */
//   /* color: ${(props) => props.theme.backgroundColor};
//   background-color: ${(props) => props.theme.mainColor}; */
//   /* &:hover {
//     color: ${(props) => props.theme.mainColor};
//     background-color: ${(props) => props.theme.backgroundColor};
//   } */
// `;

export const MovieDetailWrapper = styled.View`
  margin-top: 50;
`;

export const MovieDetailImage = styled.Image`
  width: 150;
  height: 150;
  margin-left: auto;
  margin-right: auto;
`;

export const MovieDetailTitle = styled.Text`
  font-weight: bold;
  font-size: 40;
  text-align: center;
`;

export const MovieContent = styled.Text``;

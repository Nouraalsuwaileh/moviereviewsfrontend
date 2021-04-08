import styled from "styled-components/native";

export const HomeBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
  background-color: blue;
`;

export const MovieImage = styled.Image`
  width: 125;
  height: 125;
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
  color: #8d063e;
  font-size: 15;
  margin-top: 10;
  margin-bottom: 10;
  margin-left: 10;
  width: 100%;
  font-weight: bold;
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
  /* margin-top: 70; */
  /* margin-bottom: 35; */
`;

export const MovieDetailImage = styled.Image`
  width: 150;
  height: 150;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20;
`;

export const MovieDetailTitle = styled.Text`
  font-weight: bold;
  font-size: 25;
  text-align: center;
`;

export const MovieContent = styled.Text`
  margin-top: 5;
`;

import * as React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  height: 40;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

const Title = styled.Text`
  color: white;
`;

interface IProps {
  title: String;
}

const Header = (props: IProps) => {
  const {title} = props;
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default Header;

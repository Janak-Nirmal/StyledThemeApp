import React from 'react';
import styled, {ThemeProvider} from 'styled-components/native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {switchTheme} from '../redux/actions';
import {darkTheme, lightTheme} from '../styles/theme';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.View`
  padding: 15px;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.PRIMARY_TEXT_COLOR};
`;

const Title = styled.Text`
  padding: 20px;
  font-size: 24px;
  font-weight: 500;
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`;

const Button = styled.TouchableOpacity`
  margin-top: 20px;
  background-color: ${props => props.theme.SECONDARY_BUTTON_COLOR};
  border-radius: 5px;
  padding: 10px;
`;

const ButtonText = styled.Text`
  font-size: 20px;
  color: ${props => props.theme.SECONDARY_TEXT_COLOR};
`;

class HomeScreen extends React.Component {
  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <Container>
          <TextContainer>
            <Title>Themed App with React Native & Styled Components</Title>
          </TextContainer>
          {this.props.theme.mode === 'light' ? (
            <Button onPress={() => this.props.switchTheme(darkTheme)}>
              <ButtonText>Switch to Dark Theme</ButtonText>
            </Button>
          ) : (
            <Button onPress={() => this.props.switchTheme(lightTheme)}>
              <ButtonText>Switch to Light Theme</ButtonText>
            </Button>
          )}
        </Container>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  theme: state.themeReducer.theme,
});

const mapDispatchToProps = dispatch => ({
  switchTheme: bindActionCreators(switchTheme, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);

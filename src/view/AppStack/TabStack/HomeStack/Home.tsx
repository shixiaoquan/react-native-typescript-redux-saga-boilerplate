import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';
import {navigate} from 'util/navigationService';
import * as routes from 'constants/route';
import {AppState} from 'store';
import {addCar, getCars} from 'store/home/action';
import {showToast} from 'store/global/action';
import {HomeState} from 'store/home/type';

interface HomeProps {
  home: HomeState;
  addCar: typeof addCar;
  getCars: typeof getCars;
  showToast: typeof showToast;
}

class Home extends React.Component<HomeProps> {
  componentDidMount() {
    this.props.getCars();
  }
  render() {
    const {
      props: {
        home: {data},
        addCar: addCarRequest,
        showToast: showToastRequest,
      },
    } = this;
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button
          title="go to detail screen"
          onPress={() => {
            navigate(routes.detail);
          }}
        />
        <>
          {data.map(({name, price}) => (
            <View key={name}>
              <Text>{name}</Text>
              <Text>价格:</Text>
              <Text>{price}</Text>
            </View>
          ))}
        </>
        <Button
          title="add a new car"
          onPress={() => {
            addCarRequest({name: `宝马 ${Math.random()}`, price: 123123});
          }}
        />
        <Button
          title="show toast"
          onPress={() => showToastRequest({content: 'lolololo'})}
        />
      </View>
    );
  }
}

export default connect(
  (state: AppState) => ({
    home: state.home,
  }),
  {addCar, getCars, showToast},
)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

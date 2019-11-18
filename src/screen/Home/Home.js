import React, { useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';

import TextStyles from 'helpers/TextStyles';
import strings from 'localization';
import getUser from 'selectors/UserSelectors';

function Home(props) {
  const user = useSelector(state => getUser(state));
  const getMessage = useCallback(() => `${strings.homeMessage} ${user && user.name}`, [user]);

  return (
    <View style={styles.container}>
      <View style={styles.homeHeader}>
        <Text style={TextStyles.darkTitle}>
          {strings.home}
        </Text>
      </View>
      <Text>
        {getMessage()}
      </Text>
      <TouchableOpacity onPress={()=>props.navigation.navigate('Detail')}>
        <Text>Oke</Text>
      </TouchableOpacity>
    </View>
  );
}

Home.navigationOptions = {
  title: strings.home,
  header : null
};

export default Home;

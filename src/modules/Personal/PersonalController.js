/**
 * 个人中心
 */
import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import BaseController from '../../support/Base/BaseController';

export default class PersonalController extends BaseController {
    dosth = () => {
      console.log('dosth == ');
    }

    render() {
      return (
        <View style={{ flex: 1, backgroundColor: 'red' }}>
          <Text>ddddd</Text>
        </View>
      );
    }
}

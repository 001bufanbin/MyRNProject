/**
 * 买车
 */
import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import BaseController from '../../support/Base/BaseController';

export default class BuyCarController extends BaseController {
    dosth = () => {
      console.log('dosth == ');
    }

    render() {
      return (
        <View style={{ flex: 1, backgroundColor: 'red' }}>
          <Text>买车买车买车买车</Text>
        </View>
      );
    }
}

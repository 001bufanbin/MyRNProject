/**
 * 卖车
 */
import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import BaseController from '../../support/Base/BaseController';

export default class SellCarController extends BaseController {
    dosth = () => {
      console.log('dosth == ');
    }

    render() {
      return (
        <View style={{ flex: 1, backgroundColor: 'yellow' }}>
          <Text>卖车卖车卖车卖车</Text>
        </View>
      );
    }
}

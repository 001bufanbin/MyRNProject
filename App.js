/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { Navigation } from 'react-native-navigation';
import registeScreens from './src/modules/index';

// eslint-disable-next-line import/no-unresolved
const tab1Icon = require('./src/resource/public/tabbar_home.png');
// eslint-disable-next-line import/no-unresolved
const tab2Icon = require('./src/resource/public/tabbar_buyCar.png');
// eslint-disable-next-line import/no-unresolved
const tab3Icon = require('./src/resource/public/tabbar_sellCar.png');

export default function start() {
  registeScreens();

  // Navigation.events().registerAppLaunchedListener(async () => {
  //   Navigation.setRoot({
  //     root: {
  //       component: {
  //         name: 'Home.HomeController',
  //       },
  //     },
  //   });
  // }


  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          id: 'BottomTabs',
          children: [
            {
              stack: {
                id: 'TAB1_ID',
                children: [
                  {
                    component: {
                      name: 'Home.HomeController',
                      passProps: {
                        text: 'This is tab 1',
                        myFunction: () => 'Hello from a function!',
                      },
                      options: {
                        topBar: {
                          visible: true,
                          animate: false,
                          title: {
                            text: 'React Native Navigation!',
                          },
                        },
                        bottomTab: {
                          text: '首页',
                          icon: tab1Icon,
                          selectedIcon: tab1Icon,
                          testID: 'FIRST_TAB_BAR_BUTTON',
                        },
                      },
                    },
                  },
                ],
                options: {
                  topBar: {
                    visible: false,
                  },
                },
              },
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'BuyCar.BuyCarController',
                      passProps: {
                        text: 'This is tab 2',
                      },
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    text: '买车',
                    icon: tab2Icon,
                    testID: 'SECOND_TAB_BAR_BUTTON',
                  },
                },
              },
            },
            {
              component: {
                name: 'SellCar.SellCarController',
                passProps: {
                  text: 'This is tab 3',
                  myFunction: () => 'Hello from a function!',
                },
                options: {
                  topBar: {
                    visible: true,
                    animate: false,
                  },
                  bottomTab: {
                    text: '卖车',
                    icon: tab3Icon,
                    selectedIcon: tab3Icon,
                  },
                },
              },
            },
          ],
          options: {
            bottomTabs: {
              titleDisplayMode: 'alwaysShow',
              testID: 'BOTTOM_TABS_ELEMENT',
            },
          },
        },
      },
    });
  });
}

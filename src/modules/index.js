/**
 * 导航注册
 */
import { Navigation } from 'react-native-navigation';
/**
 * 首页
 */
import HomeController from './Home/HomeController';
/**
 * 买车
 */
import BuyCarController from './BuyCar/BuyCarController';
/**
 * 卖车
 */
import SellCarController from './SellCar/SellCarController';
/**
 * 个人中心
 */
import PersonalController from './Personal/PersonalController';


export default function registeScreens() {
  /**
   * 主页
   */
  // Navigation.registerComponent('Home.HomeController', () => HomeController, store, provider);
  Navigation.registerComponent('Home.HomeController', () => HomeController);

  /**
   * 买车
   */
  // Navigation.registerComponent('BuyCar.BuyCarController', () => BuyCarController, store, provider);
  Navigation.registerComponent('BuyCar.BuyCarController', () => BuyCarController);

  /**
   * 卖车
   */
  // Navigation.registerComponent('SellCar.SellCarController', () => SellCarController, store, provider);
  Navigation.registerComponent('SellCar.SellCarController', () => SellCarController);

  /**
   * 个人中心
   */
  // Navigation.registerComponent('Personal.PersonalController', () => PersonalController, store, provider);
  Navigation.registerComponent('Personal.PersonalController', () => PersonalController);
}

// module.exports = {
//   registeScreens,
// };

/**
 * Application Routes
 */

import { DrawerNavigator } from 'react-navigation';
import SideMenu from './common/SideMenu';
import Dashboard from './containers/Dashboard';
import Payment from './containers/Payment';
import Transfer from './containers/Transfer';

import Accounts from './containers/Accounts';
import Cards from './containers/Cards';
import Airtime from './containers/Airtime';
import Settings from './containers/Settings';

const routes = {
	Dashboard : {
		name : 'Dashboard',
		screen : Dashboard
	},
	Payment : {
		name : 'Payment',
		screen : Payment
	},
	Transfer : {
		name : 'Transfer',
		screen : Transfer
	},
	Accounts : {
		name : 'Accounts',
		screen : Accounts
	},
	Cards : {
		name : 'Cards',
		screen : Cards
	},
	Airtime : {
		name : 'Airtime',
		screen : Airtime
	},
	Settings : {
		name : 'Settings',
		screen : Settings
	}
}

let drawerNavigatorConfig = {
	initialRouteName : 'Dashboard',
	drawerWidth: 294,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',  
    // drawerBackgroundColor: 'orange',
    // contentOptions: {
    //     activeTintColor: 'red',
    // },    
    contentComponent: SideMenu,
};

const Route = DrawerNavigator(routes, drawerNavigatorConfig);

export default Route;
/**
 * Application Routes
 */

import { DrawerNavigator } from 'react-navigation';
import SideMenu from './common/SideMenu';
import Dashboard from './containers/Dashboard';
import Payment from './containers/Payment';
import Transfer from './containers/Transfer';

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
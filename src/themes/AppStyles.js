import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const AppStyles = {
    /* common */
    mainContainer: {
        backgroundColor:'#FFFFFF'
    },
    row: {
        flexDirection: 'row',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'        
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },  
    circle: {
        width: 12,
        height: 12,
        borderRadius: 12/2,
        backgroundColor: '#d4b3ed',
        marginLeft: 10
    },     
    /***********/

    /* HeaderBar */
    headerBar : {
        zIndex: 1,
        height: 56,
        backgroundColor : '#77439e',
        flexDirection: 'row',
        position: 'absolute', 
        top: 0, 
        flex: 1, 
        alignSelf: 'stretch', 
        right: 0, 
        left: 0
    },
    menuicon : {
        width: 28,
        height: 28,
        marginTop: 13,
        marginLeft: 10,
    },
    headertitleDiv: {        
        justifyContent: 'center', 
        alignItems: 'center', 
        flex:1
    },
    headertitle: {
        alignSelf:'center',
        fontSize:20,
        color: '#FFFFFF',
        justifyContent:'center',
        alignItems:'center',
        marginRight: 30,
        fontFamily: 'ProximaNovaSoft-Regular'
    },
    banner: {
        height: 260,        
        backgroundColor:'#b46fea'
    },
    bannerBottomDiv: {
        height: 42,
        backgroundColor: '#77439e',
    },
    bgwhite: {
        backgroundColor: '#ffffff',
    },
    bggray: {
        backgroundColor: '#f1f1f1'
    },
    list: {
        height: 65
    },
    indicatorBar: {
        height: 30,
        // backgroundColor: '#dddddd',
        flex: 1,             
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'        
    },
    slideDiv: {        
        flex: 1,
        width: screenWidth,
        height: 170,
        justifyContent: 'center',
        alignItems: 'center'
    }
    /***********/
}

export default AppStyles;
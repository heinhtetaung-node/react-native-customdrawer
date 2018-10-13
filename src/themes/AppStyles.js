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
    smallHeader: {
        fontFamily: 'ProximaNovaSoft-Medium',
        fontSize: 14,        
        color: '#FFFFFF',
        marginLeft: 10
    },
    transitionTitle: {
        fontFamily: 'ProximaNovaSoft-Semibold',
        fontSize: 16,        
        color: '#959595',
        marginLeft: 10,
        marginTop: 9
    },
    transitionTime: {
        fontFamily: 'ProximaNovaSoft-Medium',
        fontSize: 14,        
        color: '#959595',
        marginLeft: 10,        
        marginTop: 5
    },
    transitionAmt: {
        fontFamily: 'ProximaNovaSoft-Semibold',
        fontSize: 16,        
        color: '#E44235',
        marginRight: 10,
        marginTop: 9,
        textAlign: 'right'
    },
    transitionType: {
        fontFamily: 'ProximaNovaSoft-Semibold',
        fontSize: 14,        
        color: '#959595',
        marginRight: 10,        
        marginTop: 5,
        textAlign: 'right'
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
    /****************/


    /**** Banner ****/
    banner: {
        height: 260,        
        backgroundColor:'#b46fea'
    },
    bannerBottomDiv: {
        height: 42,
        backgroundColor: '#77439e',
        justifyContent: 'center',
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
    },    
    balanceText: {
        fontFamily: 'ProximaNovaSoft-Regular',
        fontSize: 18,
        color: '#FFFFFF',
        marginTop: 110
    },
    NText: {
        fontFamily: 'ProximaNovaSoft-Semibold',
        fontSize: 32,
        marginTop: 12,
        color: '#FFFFFF'
    },
    SPText: {
        fontFamily: 'ProximaNovaSoft-Semibold',
        fontSize: 24,
        marginTop: 12,
        color: '#FFFFFF'
    },
    /***********/


    /**** Dashboard *****/
    bgwhite: {
        backgroundColor: '#ffffff',
    },
    bggray: {
        backgroundColor: '#f1f1f1'
    },
    list: {
        flexDirection: 'row',
        height: 65
    },
    listLeft: {    
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        // backgroundColor: 'green',
        width: this.screenWidth/2
    },
    listRight: {    
        flex: 1,        
        flexDirection: 'column',
        justifyContent: 'flex-start',
        // backgroundColor: 'blue',
        width: this.screenWidth/2        
    },
    /**************/
}

export default AppStyles;
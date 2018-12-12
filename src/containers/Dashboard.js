import React, { Component } from 'react';
import { FlatList, ScrollView, View, Text, Dimensions, TouchableWithoutFeedback } from 'react-native';
import HeaderBar  from '../common/HeaderBar';
import { AppStyles } from '../themes';

import { connect } from 'react-redux';
import { getPosts } from './../redux/actions';
const mapStateToProps = state => {
    return{
        transitions : state.postreducer.posts  // redux_step4 getting data from store and connect with view
    }
}

let $this;
class Dashboard extends Component {
	constructor(props){
		super(props);
		this.state = { activeSlider: 1, slideEnd : 3, transitions : [],  refreshing: true }
		$this = this;
	}

	screenWidth = Dimensions.get('window').width;    // !important need to refactor

	componentWillMount(){
		this.addSliderInterval();	
		this.getLatestTransitions();
	}

	componentDidMount(){
		
	}

	getLatestTransitions(){
		this.props.getPosts();  // redux_step1 calling to actions
		// fetch('https://seedstartest.herokuapp.com/api/transitions').then((response) => response.json()).then((responseJson) => {
		// 	this.setState({
		// 		transitions : responseJson,
		// 		refreshing : false
		// 	})
		// }).catch((error) => {
		// 	console.error(error);
		// 	this.setState({
		// 		refreshing : false
		// 	})
		// });
	}

	addSliderInterval(){
		this.setState({
			interval: setInterval(() => {
				var currentslide = this.state.activeSlider;
				var nextslide = currentslide + 1;
				if(currentslide==this.state.slideEnd){
					currentslide = 0;
					nextslide = 1;	
				}
				this.setState({
					activeSlider : nextslide
				});		
				this.scrollToNextSlide(currentslide);		
			}, 5000)
		});
	}

	componentWillUnmount() {
		clearInterval(this.state.interval);
	}
	
	
	scrollToNextSlide(currentslide){	
		this.refs.sliderscroll.scrollTo({x: currentslide*this.screenWidth, y: 0, animated: true});
	}

	scrollToSpecificSlide(slide){
		clearInterval(this.state.interval);
		this.scrollToNextSlide(slide);		
		this.setState({ activeSlider: slide+1 });
		setTimeout(function(){
			$this.addSliderInterval();
		}, 1000);
	}

	callScrollEvent(event){
		var scrollReached = event.nativeEvent.contentOffset.x/this.screenWidth;
		scrollReached = scrollReached.toFixed(0);
		this.setState({
			activeSlider : parseInt(scrollReached)+1
		});
		clearInterval(this.state.interval);
		setTimeout(function(){
			$this.addSliderInterval();
		}, 500);									
	}

	showDate(d){
		var d = new Date(d.substr(0,10));		
		var todaydate = new Date();		
		var todaydatestr = todaydate.getDate()  + "/" + (todaydate.getMonth()+1) + "/" + todaydate.getFullYear();				
		var datestring = d.getDate()  + "/" + (d.getMonth()+1) + "/" + d.getFullYear();
		if(datestring == todaydatestr){
			return "Today";
		}

		var yesdate = new Date();
    	yesdate.setDate(yesdate.getDate()-1);
		var yesdatestr = yesdate.getDate()  + "/" + (yesdate.getMonth()+1) + "/" + yesdate.getFullYear();		
		if(datestring == yesdatestr){
			return "Yesterday";
		}
		return datestring;
	}

	handleRefresh(){
		$this.getLatestTransitions();		
	}

	render() {    
		return (    
			
			<View style={[ AppStyles.mainContainer, {flex: 1} ]}> 				        
				<HeaderBar {...this.props} title='Dashboard' /> 
				<View>	

					{/* Banner */}
					<View style={[ AppStyles.banner ]}>
						<ScrollView ref="sliderscroll"
							horizontal={true}
							pagingEnabled={true}
							showsHorizontalScrollIndicator={false}
							scrollEventThrottle={5}	
							onMomentumScrollEnd={(event)=>{this.callScrollEvent(event)}}>
							<View style={[ AppStyles.slideDiv ]}>
								<Text style={[ AppStyles.balanceText ]}>Balance</Text>
								<Text style={[ AppStyles.NText ]}>N 979153.36</Text>
								<Text style={[ AppStyles.SPText ]}>16.500 SP</Text>
							</View>
							<View style={[ AppStyles.slideDiv ]}>
								<Text style={[ AppStyles.balanceText ]}>Balance</Text>
								<Text style={[ AppStyles.NText ]}>USD 452.36</Text>
								<Text style={[ AppStyles.SPText ]}>556,400 MMK</Text>
							</View>
							<View style={[ AppStyles.slideDiv ]}>
								<Text style={[ AppStyles.balanceText ]}>Balance</Text>
								<Text style={[ AppStyles.NText ]}>N 4545.36</Text>
								<Text style={[ AppStyles.SPText ]}>16.500 SP</Text>
							</View>							
						</ScrollView>
						<View style={[ AppStyles.indicatorBar ]}>							
							<TouchableWithoutFeedback onPress={() => {this.scrollToSpecificSlide(0)}}>
								<View style={[ AppStyles.circle, { backgroundColor: (this.state.activeSlider==1)? '#ffffff' : '#d4b3ed' } ]}></View>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback onPress={() => {this.scrollToSpecificSlide(1)}}>
								<View style={[ AppStyles.circle, { backgroundColor: (this.state.activeSlider==2)? '#ffffff' : '#d4b3ed' } ]}></View>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback onPress={() => {this.scrollToSpecificSlide(2)}}>
								<View style={[ AppStyles.circle, { backgroundColor: (this.state.activeSlider==3)? '#ffffff' : '#d4b3ed' } ]}></View>							
							</TouchableWithoutFeedback>
						</View>
					</View>
					{/************************/}
					
					{/* Banner Bottom */}
					<View style={[ AppStyles.bannerBottomDiv ]}>
						<Text style={[ AppStyles.smallHeader ]}>Latest Transition</Text>
					</View>
					{/************************/}					
				</View>

				{/* Content */}				
				<FlatList
					refreshing={(this.props.transitions.length>0)? false : true}
					onRefresh={this.handleRefresh}
					data={this.props.transitions} 
					renderItem={({ item, index }) => (						
						<View style={[ AppStyles.list, { backgroundColor: ((index%2!=0))? '#f1f1f1' : '#ffffff' } ]}>
							<View style={[ AppStyles.listLeft ]}>
								<Text style={[ AppStyles.transitionTitle ]}>{item.transition_name}</Text>
								<Text style={[ AppStyles.transitionTime ]}>{this.showDate(item.created_at)}</Text>
							</View>
							<View style={[ AppStyles.listRight ]}>
								<Text style={[ AppStyles.transitionAmt, {color:(item.plus_or_minus=='+')? '#16967A' : '#E44235'} ]}>{item.plus_or_minus} {(item.n_or_sp=='n')? 'N' : ''} {parseFloat(item.transition_amt).toFixed(0)} {(item.n_or_sp=='sp')? 'SP' : ''}</Text>
								<Text style={[ AppStyles.transitionType ]}>{item.transition_type}</Text>
							</View>
						</View>
					)}
					keyExtractor = { (item, index) => index.toString() }
				/>				
				{/************************/}
			</View>			
        );
    }
}

export default connect(mapStateToProps, { getPosts })(Dashboard);

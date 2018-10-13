import React, { Component } from 'react';
import { ScrollView, View, Text, Dimensions, TouchableWithoutFeedback } from 'react-native';
import HeaderBar  from '../common/HeaderBar';
import { AppStyles } from '../themes';
let $this;
export default class Dashboard extends Component {
	constructor(props){
		super(props);
		this.state = { activeSlider: 1, slideEnd : 3 }
		$this = this;
	}

	screenWidth = Dimensions.get('window').width;    // !important need to refactor

	componentWillMount(){
		this.addSliderInterval();
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

	render() {    
		return (      
			<View> 				        
				<HeaderBar {...this.props} title='Dashboard' /> 
				<ScrollView style={[ AppStyles.mainContainer ]}>										
					<View style={[ AppStyles.banner ]}>
						<ScrollView ref="sliderscroll"
							horizontal={true}
							pagingEnabled={true}
							showsHorizontalScrollIndicator={false}
							scrollEventThrottle={5}	
							onMomentumScrollEnd={(event)=>{this.callScrollEvent(event)}}>
							<View style={[ AppStyles.slideDiv ]}>
								<Text>abc</Text>
							</View>
							<View style={[ AppStyles.slideDiv ]}>
								<Text>def</Text>
							</View>
							<View style={[ AppStyles.slideDiv ]}>
								<Text>ghi</Text>
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
					<View style={[ AppStyles.bannerBottomDiv ]}>

					</View>
					<View>
						<View style={[ AppStyles.list ]}>						
						</View>
						<View style={[ AppStyles.bggray, AppStyles.list ]}>
						</View>
						<View style={[ AppStyles.list ]}>
						</View>
						<View style={[ AppStyles.bggray, AppStyles.list ]}>
						</View>
						<View style={[ AppStyles.list ]}>
						</View>
						<View style={[ AppStyles.bggray, AppStyles.list ]}>
						</View>
						<View style={[ AppStyles.list ]}>
						</View>
						<View style={[ AppStyles.bggray, AppStyles.list ]}>
						</View>
					</View>
				</ScrollView>
			</View>
        );
    }
}


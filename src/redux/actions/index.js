export function getPosts () {
    return (dispatch) => {
        fetch('https://seedstartest.herokuapp.com/api/transitions').then((response) => response.json()).then((responseJson) => {
			let posts = responseJson
            dispatch({type:'VIEW_POSTS', posts})
		}).catch((error) => {
			dispatch({type:'VIEW_POSTS_ERR', error})
		});
    }
} 

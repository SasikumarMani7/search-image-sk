import React from 'react'

class ImageList extends React.Component{ 
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div className='ui raised very padded text container segment'>
                <center>
            {
                this.props.images.map((index) =>
                    <img src={index.largeImageURL} alt="image"/>) 
            }</center>
            </div>);
    }
}
    

export default ImageList;
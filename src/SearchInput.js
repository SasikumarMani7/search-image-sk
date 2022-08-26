import React from 'react';


class SearchInput extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                entry: ''
            }
            //binding this keyword
            this.onInputChange = this.onInputChange.bind(this)
            this.onFormSubmit = this.onFormSubmit.bind(this)
    
    }

    onInputChange(event) {
        // if (event.key === 'Enter') 
            this.setState({entry: event.target.value})
            // this.props.onSearchSubmit(event.target.value)
        //   }
        }
        onFormSubmit = (event) => {
                event.preventDefault();
                this.props.onSearchSubmit(this.state.entry)
        }
        
    
    render() {
        return (
            <div className='ui segment'>
                <form action="" onSubmit={this.onFormSubmit} className='ui form'>
                    <h1>Pexels</h1>
                    <div className='field'>
                        <div className='ui massive icon input'>
                            <input type="text" placeholder='Image search engine, search here .....'
                                onChange={this.onInputChange}
                                // onChange={(event)=> 
                                //     this.state({entry: event.target.value})}
                                value = {this.state.entry}
                            ></input>
                            <i className='search icon'></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchInput;

import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    state = {  }
    render() { 
        return ( 
            <Auxiliary>
                <Burger/>
                <div>Build Components</div>
            </Auxiliary>
         );
    }
}
 
export default BurgerBuilder;
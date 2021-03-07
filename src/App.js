import React, { Component } from 'react'
import HeaderWrapper from './components/header/headerWrapper/HeaderWrapper'
import FooterWrapper from './components/footer/FooterWrapper/FooterWrapper'

class App extends Component {


    render() {



        return (
            <div>

                <HeaderWrapper className="mb-5" />
                
                <FooterWrapper />
            </div>
        )
    }
}


export default App
import React, { Component } from 'react';
import navbar from '../components/navbar.jsx';
import Ionicon from 'react-ionicons';
import './home.css';
class home extends Component {
    render () {
        return (
            <div >
                <navbar />
                <div id="bg">
                    <div id="bg-overlay">
                    <div className="container">{ /*this is for format */}
                        <h2>TABLE</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean 
                            commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus 
                            et magnis dis parturient montes, nascetur ridiculus mus. Donec quam 
                            felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
                            massa quis enim. Donec pede justo, fringilla.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean 
                            commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus 
                            et magnis dis parturient montes, nascetur ridiculus mus. Donec quam 
                            felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
                            massa quis enim. Donec pede justo, fringilla.
                        </p>
                        
                            <Ionicon icon="ios-add-circle" fontSize="35px" onClick={() => console.log('Hi!')} color="red"/> 
                        
                                                        
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default home
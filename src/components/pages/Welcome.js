import React, { Component } from 'react';

import '../../assets/css/Welcome.css';

class Welcome extends Component {

    render() {
        return (
            <React.Fragment>  
                <div className='animateText'>
                    <iframe src="assets/sounds/chalkboardEffects.mp3" title="audio" id="audio" allow="autoplay" style={{display :"none"}}></iframe>
                    <p style={{animation: 'type 0.75s linear'}}>&lt;!DOCTYPE html&gt;</p>
                    <p style={{animation: 'type 0.75s linear 0.25s backwards'}}>&lt;html lang=&quot;en&quot;&gt;</p>
                    <p style={{animation: 'type 0.75s linear 0.5s backwards'}}>&nbsp;&nbsp;&lt;head&gt;</p>
                    <p style={{animation: 'type 1s linear 0.75s backwards'}}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta charset=&quot;utf-8&quot; /&gt;</p>
                    <p style={{animation: 'type 0.75s linear 1.25s backwards'}}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta</p>
                    <p style={{animation: 'type 1s linear 1.5s backwards'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name=&quot;viewport&quot;</p>
                    <p style={{animation: 'type 1s linear 2s backwards'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content=&quot;width=device-width&quot;</p>
                    <p style={{animation: 'type 0.75s linear 2.25s backwards'}}>&nbsp;&nbsp;&nbsp;&nbsp;/&gt;</p>
                    <p style={{animation: 'type 0.75s linear 2.5s backwards'}}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;link</p>
                    <p style={{animation: 'type 1s linear 2.75s backwards'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rel=&quot;shortcut icon&quot;</p>
                    <p style={{animation: 'type 1s linear 3.25s backwards'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;href=&quot;./assets/img/resume.png&quot;</p>
                    <p style={{animation: 'type 0.75s linear 4s backwards'}}>&nbsp;&nbsp;&nbsp;&nbsp;/&gt;</p>
                    <p style={{animation: 'type 0.75s linear 4.25s backwards'}}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;link</p>
                    <p style={{animation: 'type 1s linear 4.5s backwards'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rel=&quot;manifest&quot;</p>
                    <p style={{animation: 'type 1s linear 4.75s backwards'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;href=&quot;./manifest.json&quot;</p>
                    <p style={{animation: 'type 0.75s linear 5.25s backwards'}}>&nbsp;&nbsp;&nbsp;&nbsp;/&gt;</p>
                    <p style={{animation: 'type 1s linear 5.5s backwards'}}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Noah Varghese&lt;/title&gt;</p>
                    <p style={{animation: 'type 0.75s linear 5.75s backwards'}}>&nbsp;&nbsp;&lt;/head&gt;</p>
                </div>      
            </React.Fragment>
        );
    }
}

export default Welcome;

import React, { Component } from 'react';
import "../styles/wave.css";


export default class Wave extends Component {

    constructor(props) {
        super(props);
        this.canvas1Ref = React.createRef();
        this.canvas2Ref = React.createRef();
    }

    componentDidMount = () => {
        const canvas1 = document.getElementsByClassName("wave1")[0];
        const canvas2 = document.getElementsByClassName("wave2")[0];

        const c1 = canvas1.getContext('2d');
        const c2 = canvas2.getContext('2d');

        /*
        const wave1 = {
            y: 100,
            length: 0.02,
            amplitude: 45,
            frequency: 0.012,
            color: "#2196f3"
        }

        const wave2 = {
            y: 75,
            length: 0.02,
            amplitude: 45,
            frequency: 0.014,
            color: "#000000"
        }
        */
        const wave1 = {
            y: 100,
            length: 0.02,
            amplitude: 45,
            frequency: 0.012,
            color: "#2196f3"
        }

        const wave2 = {
            y: 75,
            length: 0.02,
            amplitude: 45,
            frequency: -0.5,
            color: "#000000"
        }

        let increment1 = wave1.frequency;
        let increment2 = wave2.frequency;

        function animate() {
            
            //requestAnimationFrame(animate);

            c1.fillStyle = wave1.color;
            c1.clearRect(0, 0, canvas1.width, canvas1.height);
    
            c1.beginPath();
            c1.moveTo(canvas1.width, 0);
            c1.lineTo(0,0);

            for ( let i = 0; i < canvas1.width; i++ ) 
            {
                let y1 = wave1.y + Math.sin(i * wave1.length + increment1) * wave1.amplitude;
                c1.lineTo(i, y1);
            }

            c1.lineTo(canvas1.width, 0);

            c1.strokeStyle = wave1.color;
            c1.fill();

            c2.fillStyle = wave2.color;
            c2.clearRect(0, 0, canvas2.width, canvas2.height);

            c2.beginPath();
            c2.moveTo(canvas2.width, 0);
            c2.lineTo(0,0);

            for ( let i = 0; i < canvas2.width; i++ ) 
            {
                let y1 = wave2.y + Math.sin(i * wave2.length + increment2) * wave2.amplitude;
                c2.lineTo(i, y1);
            }

            c2.lineTo(canvas2.width, 0);

            c2.strokeStyle = wave2.color;
            c2.fill();

            increment1 += wave1.frequency;
            increment2 += wave2.frequency;
        }

        animate();
    }

    render() {
        return (
            <>
                <canvas className="wave1" ref={this.canvas1Ref}>
                </canvas>
                <canvas className="wave2" ref={this.canvas2Ref}>
                </canvas>
            </>
        )
    }
}

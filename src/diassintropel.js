import React, { Component } from 'react';
import './diassintropel.css';

export class Diassintropel extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            second : 0,
            minute : 0,
            hour : 0,
            day : 0,
            countDown : new Date('Mar 6 2020 17:03:00').getTime(),
            distance: 0
        }
    }

    componentWillMount() {
        this.contanding();
    }

    componentDidMount() {
        this.interval = setInterval(() => this.contanding(), 1000);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    contanding(){
        let now = new Date().getTime();
        let distance = now - this.state.countDown ;
        this.setState({
            day: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hour: Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))),
            minute: Math.floor((distance % (1000 * 60 * 60))/(1000 * 60)),
            second: Math.floor((distance % (1000 * 60))/(1000))
        })
    }

    render() {
        return (
            <div className="container">
                <h1>¿Cuánto lleva la U sin tropel?</h1>
                <ul>
                    <li><span id="days">{this.state.day}</span>Días</li>
                    <li><span id="hours">{this.state.hour}</span>Horas</li>
                    <li><span id="minutes">{this.state.minute}</span>Minutos</li>
                    <li><span id="seconds">{this.state.second}</span>Segundos</li>
                </ul>
            </div>
        )
    }
}

export default Diassintropel

import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'

const Container = styled.div`
    position: relative;
    top: 56px;
    color: black;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background: #181818;
`;

class Home extends React.Component {
    state = {
        arr: [
            { title: 'Top CSS & Javascript Effects', channel: 'Online Tutorial', view: '1.500.000 lượt xem' },
        ]
    }

    render() {

        return (
            <Container>
                <Card arr={this.state.arr} />
                <Card arr={this.state.arr} />
                <Card arr={this.state.arr} />
                <Card arr={this.state.arr} />
                <Card arr={this.state.arr} />
                <Card arr={this.state.arr} />
                <Card arr={this.state.arr} />
                <Card arr={this.state.arr} />
                <Card arr={this.state.arr} />
                <Card arr={this.state.arr} />
                <Card arr={this.state.arr} />
                <Card arr={this.state.arr} />
            </Container >
        )
    }
}

export default Home
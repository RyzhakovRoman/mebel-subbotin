import * as React from 'react'
import {ReactElement} from 'react'
import Button from '../../kit/button'
import MainBanner from './main-banner'
import Container from '../../layout/container'

export default function Home(): ReactElement {
    return (
        <>
            <MainBanner />
            <Container>
                <h1 style={{textAlign: 'center', marginTop: '.6rem'}}>
                    Мебель из Мурома на заказ
                </h1>
            </Container>{' '}
            <br />
            <Button text={'First Button'} />
        </>
    )
}

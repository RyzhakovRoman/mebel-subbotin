import * as React from 'react'
import {ReactElement} from 'react'
import Button from '../../kit/button'
import MainBanner from './main-banner'

export default function Home(): ReactElement {
    return (
        <div>
            <MainBanner />
            <h2>Главная</h2>
            контент главной
            <br />
            <Button text={'First Button'} />
        </div>
    )
}

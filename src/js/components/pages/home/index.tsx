import * as React from 'react'
import {ReactElement} from 'react'
import Button from '../../kit/button'

export default function Home(): ReactElement {
    return (
        <div>
            <h2>Главная</h2>
            контент главной
            <br />
            <Button text={'First Button'} />
        </div>
    )
}

import * as React from 'react'
import {FC} from 'react'
import {R} from '../../../navigation/routes'
import {Link} from 'react-router-dom'

interface LogoPropsInterface {
    linkClassName?: string;
    logoClassName?: string;
}

// todo - сделать бревно в лого крутящимся

const Logo: FC<LogoPropsInterface> = ({
    linkClassName = '',
    logoClassName = '',
}) => {
    return (
        <Link to={R.HOME} className={linkClassName}>
            <div className={`logo ${logoClassName}`} />
        </Link>
    )
}

export default Logo

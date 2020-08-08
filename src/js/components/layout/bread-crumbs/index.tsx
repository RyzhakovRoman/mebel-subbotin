import * as React from 'react'
import {FC} from 'react'
import './index.less'
import Breadcrumb from 'antd/lib/breadcrumb'
import 'antd/lib/breadcrumb/style'
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem'
import {Link} from 'react-router-dom'
import {R} from '../../../navigation/routes'
import {HomeOutlined} from '@ant-design/icons/lib'

export interface RouteInfo {
    to: R | string;
    name: string;
}

interface BreadCrumbsPropsInterface {
    listOfRoutes: RouteInfo[];
}

const BreadCrumbs: FC<BreadCrumbsPropsInterface> = ({listOfRoutes}) => {
    // console.log('listOfRoutes ', listOfRoutes)
    return (
        <Breadcrumb>
            <BreadcrumbItem>
                <Link to={R.HOME}>
                    <HomeOutlined /> Главная
                </Link>
            </BreadcrumbItem>
            {listOfRoutes.map(route => (
                <BreadcrumbItem key={route.to}>
                    <Link to={route.to}>{route.name}</Link>
                </BreadcrumbItem>
            ))}
        </Breadcrumb>
    )
}

export default BreadCrumbs

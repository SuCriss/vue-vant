/***
 *
 * article接口模块列表
 *
 */

import base from './base'
import { get, post } from '@/request/http'
// import qs from 'qs';//根据需求是否导入qs模块
const article = {
    articleList(params){
        return get(`${base.sq}/test`,params)
    },
    login(params){
        return post(`${base.bd}/login`,params)
    }
}

export default article
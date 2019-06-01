"use strict";
import axios from 'axios'
// import jsonp from '@/common/js/jsonp'
const DEFAULT_TIMEOUT = 5000;
axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE1ODUyODg0NDQsInN1YiI6ImFkbWluIiwiY3JlYXRlZCI6MTU1MzY2NjA0NDEzMH0.E-q-yALWQPRx4ApxM7gjmpmbG0c8P98l5o2L5SDZRRR0fogD_WgOp5tvkMQDYsPzgJ5kWijnyMhG6syI5ZcqGg';
// axios.defaults.timeout = DEFAULT_TIMEOUT;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = '//hi3.mop.com/ajax/';
console.log(process.env.NODE_ENV)

// const urlYun = process.env.NODE_ENV=='development'?"//sandbox.mop.com/domain-cloud":"//confadmin.mop.com"; //测试地址
// const urlYun = "//confadmin.mop.com"; //线上地址
const urlYun = "http://124.232.143.246:8181"; //测试本地地址
const cloud = {
    // 用户数据条件分页查询
    allChannel: data => {
        return axios({
            url: urlYun+'/business/user/find',
            method: 'get',
            params: data,
            contentType: false,
            processData: false
        })
    },

    //添加用户
    toSubmitFormdata: data => {
        return axios({
            url: urlYun+'/business/user/add',
            method: 'post',
            params: data,
            contentType: false,
            processData: false
        })
    },

    //根据ID删除用户
    deleteUser: data => {
        return axios({
            url: urlYun+'/business/user/deleted',
            method: 'delete',
            params: data,
            contentType: false,
            processData: false
        })
    },

    //根据ID查询用户信息详情
    checkUserId: data => {
        return axios({
            url: urlYun+'/business/user/detail',
            method: 'get',
            params: data,
            contentType: false,
            processData: false
        })
    },

    //修改用户信息
    updateUser: data => {
        return axios({
            url: urlYun+'/business/user/update',
            method: 'post',
            params: data,
            contentType: false,
            processData: false
        })
    },
  
}
export default cloud;
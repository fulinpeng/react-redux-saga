
 import React from 'react'
 import ReactDOM  from 'react-dom';
 import WebApp from './webApp'
 import './webApp/common/css/base'
 
 // 创建根容器
//  const ROOT = document.createElement('div')
//  ROOT.setAttribute('id', 'root');
 
 ReactDOM.render(
   <WebApp />,
  //  document.body.appendChild(ROOT)
  document.getElementById('root')
 )
 
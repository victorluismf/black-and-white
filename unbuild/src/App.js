import React from 'react'
import './App.css'

export default () => {

  return (
    <div className="fullSection">
      <div className="logoSection"></div>
      <h1 className="logoIcon">&</h1>
      <div className="heroSection">
        <h2 className="heroTitle">
          <b className="b">B</b>
          <b className="l">l</b>
          <b className="a">a</b>
          <b className="c">c</b>
          <b className="k">k</b>
          <b className=""> </b>
          <b className="and">&</b>
          <b className=""> </b>
          <b className="w">W</b>
          <b className="h">h</b>
          <b className="i">i</b>
          <b className="t">t</b>
          <b className="e">e</b>
        </h2>
        <h3 className="heroText">Utilize o botão para alterar o modo de exibição</h3>
      </div>
      <img className="background" src="https://victorluismf.github.io/black-and-white/images/woman-bw.png" width="510" height="auto"/>
      <div className="copyright">
        <p>Desenvolvido por <b className="myName">Victor Luis 光</b></p>
      </div>
    </div>
    
  )
}


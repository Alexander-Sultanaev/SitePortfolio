import React from "react";
import GithubPic from "../../images/akar-icons_github-fill.svg"
import GitPic from "../../images/logos_git-icon.svg"
import ReactPic from "../../images/logos_react.svg"
import SassPic from "../../images/logos_sass.svg"
import CssPic from "../../images/vscode-icons_file-type-css.svg"
import HtmlPic from "../../images/vscode-icons_file-type-html.svg"
import JsPic from "../../images/vscode-icons_file-type-js-official.svg"
import VscodePic from "../../images/vscode-icons_file-type-vscode.svg"

const Techs = () => {
  return(
      <section className="techs">
      <h2 className="techs__title">Мой стек технологий</h2>
      <ul className="techs__list">
        <li className="techs__element"><img className="techs__element-image" alt="Github" src={GithubPic}></img></li>
        <li className="techs__element"><img className="techs__element-image" alt="Git" src={GitPic}></img></li>
        <li className="techs__element"><img className="techs__element-image" alt="React" src={ReactPic}></img></li>
        <li className="techs__element"><img className="techs__element-image" alt="Sass" src={SassPic}></img></li>
        <li className="techs__element"><img className="techs__element-image" alt="CssPic" src={CssPic}></img></li>
        <li className="techs__element"><img className="techs__element-image" alt="Html" src={HtmlPic}></img></li>
        <li className="techs__element"><img className="techs__element-image" alt="Js" src={JsPic}></img></li>
        <li className="techs__element"><img className="techs__element-image" alt="Vscode" src={VscodePic}></img></li>
      </ul>
    </section>
  )
}

export default Techs
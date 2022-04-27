import React from 'react';
import "../assets/styles/footer.scss";
import legalRuleFR from "../assets/pdf/Legal_Rule_FR.pdf";
import legalRuleEN from "../assets/pdf/Legal_Rule_EN.pdf";
import { langageState } from "../components/Header";
import {useRecoilValue, selector} from 'recoil';

export default function Footer (){
    const langageStateGet = selector({
        key: 'langageStateGet',
        get: ({get}) => {
            const state = get(langageState);
            return state;
        },
    });
    const displayLangage = useRecoilValue(langageStateGet);

    if (displayLangage === "fr"){
    return(
        <div id='FO-main'>
                <a href={legalRuleFR}>Legal Rule</a>
                <span></span>
                <h4>| © 2022 Mahaut Gérard</h4>
                <h4>| Crédits: <a href="https://lucassovre.github.io">Lucas Sovre</a> & Free SVG Background by <a target="_blank" href="https://bgjar.com">BGJar</a> & <a href="https://icons.getbootstrap.com/">BootStrap Icons</a></h4>
        </div>
    )
            }
            if (displayLangage === "en"){
                return(
                    <div id='FO-main'>
                            <a href={legalRuleEN}>Legal Rule</a>
                            <span></span>
                            <h4>| © 2022 Mahaut Gérard</h4>
                            <h4>| Thanks to <a href="https://lucassovre.github.io">Lucas Sovre</a> & Free SVG Background by <a target="_blank" href="https://bgjar.com">BGJar</a> & <a href="https://icons.getbootstrap.com/">BootStrap Icons</a></h4>
                    </div>
                )
                        }
}
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from '../styles/ResultCharacter.module.css';
import { DRContext } from "../context/DRContext"

import hermione from "../assets/images/Hermione.png"
import herrypoter from "../assets/images/harryPotter.png"
import ron from "../assets/images/ron.png"
import nevil from "../assets/images/nevil.png"

import runa from "../assets/images/runa.png"
import cho from "../assets/images/cho.png"
import philius from "../assets/images/philius.png"
import helena from "../assets/images/helena.png"

import pomona from "../assets/images/pomona.png"
import sedric from "../assets/images/sedric.png"
import nimpadora from "../assets/images/nimpadora.png"
import hellga from "../assets/images/hellGa.png"

import malpoy from "../assets/images/malpoy.png"
import snape from "../assets/images/snape.png"
import slughorn from "../assets/images/slughorn.png"
import voldemort from "../assets/images/voldemort.png"

import goHome from "../assets/images/goHomeB.png"

const characterImages = [
    hermione, herrypoter, ron, nevil,
    runa, cho, philius, helena,
    pomona, sedric, nimpadora, hellga,
    malpoy, snape, slughorn, voldemort
]

export default function ResultCharacter() {
    const { result } = useContext(DRContext)
    const [backgroundUrl, setBackgroundUrl] = useState(null);
    useEffect(() => {
        if (result >= 0 && result < characterImages.length) {
            setBackgroundUrl(characterImages[result]);
        }
    }, [result]);
    return (
        <div>
            <img src={backgroundUrl} className={styles.characterBackground}></img>
            <Link to="/testSelect">
                <img src={goHome} className={styles.goHomeBtn}></img>
            </Link>
        </div>
    )
}
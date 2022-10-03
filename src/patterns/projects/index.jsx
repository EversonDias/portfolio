import Data from '../../../data/projects'
import styled from 'styled-components'
import CardImg from '../../components/cardImg';
import style from './styles.module.css';

export default function Projects() {
    const DataBase = Data

    return (
        <section className={style.container}>
            {DataBase.map((e) => (
                <a className={style.a} href={e.link} target='_black'>
                    <h1 className={style.h1}>{e.title}</h1>
                    <div className={style.div}>
                        <CardImg
                            src={e.img}
                            title={e.title}
                        />
                        <p className={style.p}>
                            {e.about}
                        </p>
                    </div>
                </a>
            )
            )}
        </section>
    )
}
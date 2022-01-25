import * as React from 'react'
import { useIntl } from 'gatsby-plugin-react-intl'
import { StaticImage } from 'gatsby-plugin-image'
import * as SC from './index.module.scss'

const Portrait = () => {
  const intl = useIntl()

  return (
    <section id="portrait">
      <h1 className="section__title">{intl.formatMessage({ id: 'portrait' })}</h1>
      <p>{intl.formatMessage({ id: 'portrait_description' })}</p>
      <div className={SC.photosContainer}>
        <div className={SC.standingImg}>
          <StaticImage alt="Standing" src="../../images/v-kansai_10.jpg" />
        </div>
        <div className={SC.vuefesImg}>
          <StaticImage alt="Vue Fes" src="../../images/vuefes.jpg" />
        </div>
      </div>
    </section>
  )
}

export default Portrait

import React, { FC } from 'react'
import { useIntl } from 'gatsby-plugin-react-intl'
import * as SC from './index.module.scss'
import { SiteMetadataTypes } from '../../types'
import { NekoButton } from 'nekohack-ui'
import PlaneLogoSvg from '../../static/icons/plane_logo.svg'

export const Card: FC<any> = ({ data }: SiteMetadataTypes) => {
  const intl = useIntl()

  return (
    <div className={SC.content}>
      <div className={SC.cardInfo}>
        <h1 className={SC.name}>{data.author}</h1>
        <span className={SC.tag}>{intl.formatMessage({ id: 'covid19.fully_vaccinated' })}</span>
        <ul className={SC.position}>
          {data.position.split(',').map((p: string) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <p className={SC.contact}>
          <NekoButton
            onClick={() => {
              const url =
                'https://docs.google.com/forms/d/e/1FAIpQLSfFzwsCVnFbu-lV0Jz2fEYHR97hpBSK2g6kEwc-G1fo976ngA/viewform'
              window.open(url, '_blank')
            }}
          >
            {intl.formatMessage({ id: 'contact' })}
            <PlaneLogoSvg
              style={{
                width: '20px',
                height: '20px',
                marginLeft: '4px',
              }}
            />
          </NekoButton>
        </p>
      </div>
    </div>
  )
}

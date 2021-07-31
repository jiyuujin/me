import React, { FC } from 'react'
import { useIntl } from 'gatsby-plugin-react-intl'
import * as SC from './index.module.scss'

type ProductProps = {
  data: Array<{
    node: {
      id: string
      title: string
      description: string
      skills: string[]
      image: string
    }
  }>
}

const Product: FC<ProductProps> = ({ data }) => {
  const intl = useIntl()

  return (
    <div className="wrapper">
      <div className="section">
        <div className={SC.subtitle}>
          {intl.formatMessage({ id: 'product' })}
        </div>
        {data.map(({ node }: any) => {
          return (
            <div key={node.id}>
              <div className={SC.subtitle}>
                {intl.formatMessage({ id: node.title })}
              </div>
              {node.image && (
                <img src={node.image} alt={node.title} decoding="async" />
              )}
              <div
                className={SC.description}
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({
                    id: node.description,
                  }),
                }}
              />
              <div className={SC.subtitle}>
                {intl.formatMessage({
                  id: 'product_technology_used',
                })}
              </div>
              <div className={SC.description}>
                <ul>
                  {node.skills.map((skill: string) => {
                    return <li key={skill}>{skill}</li>
                  })}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Product

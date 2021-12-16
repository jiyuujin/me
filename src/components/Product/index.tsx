import React, { FC } from 'react'
import { useIntl } from 'gatsby-plugin-react-intl'

type ProductProps = {
  data: Array<{
    node: {
      id: string
      title: string
      description: string[]
      skills?: string[]
      image?: string
      url?: string
      sub?: Array<{
        title: string
        skills: string[]
        url: string
      }>
    }
  }>
}

const Product: FC<ProductProps> = ({ data }) => {
  const intl = useIntl()

  return (
    <div className="section">
      <h1>{intl.formatMessage({ id: 'product' })}</h1>
      {data.map(({ node }: any) => {
        return (
          <div key={node.id}>
            <h2>{intl.formatMessage({ id: node.title })}</h2>
            {node.image && <img src={node.image} alt={node.title} decoding="async" />}
            {node.description.map((d: string, index: number) => {
              return (
                <p
                  key={index}
                  dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: d }) }}
                />
              )
            })}
            {node.skills && (
              <>
                <h3>{intl.formatMessage({ id: 'product_technology_used' })}</h3>
                <ul>
                  {node.skills?.map((s: string) => {
                    return <li key={s}>{s}</li>
                  })}
                </ul>
              </>
            )}
            {node.url && (
              <>
                <h3>{intl.formatMessage({ id: 'product_url' })}</h3>
                <p>
                  <a href={node.url} target="_blank" rel="noopener noreferrer">
                    {node.url}
                  </a>
                </p>
              </>
            )}
            {node.sub && (
              <>
                <h3>{intl.formatMessage({ id: 'sub_product' })}</h3>
                <ul>
                  {node.sub?.map(
                    (s: { title: string; skills: string[]; url: string }, index: number) => (
                      <li key={index}>
                        <h4>{intl.formatMessage({ id: s.title })}</h4>
                        <h5>{intl.formatMessage({ id: 'product_technology_used' })}</h5>
                        <ul>
                          {s.skills?.map((s: string) => {
                            return <li key={s}>{s}</li>
                          })}
                        </ul>
                        <h5>{intl.formatMessage({ id: 'product_url' })}</h5>
                        <p>
                          <a href={s.url} target="_blank" rel="noopener noreferrer">
                            {s.url}
                          </a>
                        </p>
                      </li>
                    ),
                  )}
                </ul>
              </>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Product

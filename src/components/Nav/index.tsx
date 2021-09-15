import React, { FC } from 'react'
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl'
import * as SC from './index.module.scss'

const languageName: {
  [field: string]: string
} = {
  en: 'English',
  ja: '日本語',
}

const Nav: FC = () => {
  const ref = React.useRef<HTMLDivElement>()

  React.useEffect(() => {
    window.onscroll = function updateNav() {
      if (isPageOffset()) {
        ref.current?.classList.add(SC.navActive)
      } else {
        ref.current?.classList.remove(SC.navActive)
      }
    }
  }, [])

  function isPageOffset(): boolean {
    const offset = ref.current?.offsetTop

    return window.pageYOffset > offset!
  }

  return (
    <div className={SC.navContainer}>
      <nav ref={ref} className={SC.nav} id="nav">
        <div className={SC.navContent}>
          <h1 className={SC.navIcon}>
            <a href="/">
              Yuma <span className={SC.navHidden}>Kitamura</span>
            </a>
          </h1>

          <div className={SC.navLinks}>
            <IntlContextConsumer>
              {({
                languages,
                language: currentLocale,
              }: {
                languages: string[]
                language: string
              }) =>
                languages.map((language) => (
                  <a
                    key={language}
                    role="button"
                    aria-pressed="true"
                    onClick={() => changeLocale(language)}
                    className={SC.navLink}
                  >
                    {languageName[language]}
                  </a>
                ))
              }
            </IntlContextConsumer>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav

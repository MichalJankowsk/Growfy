/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'

import Header from 'components/header'
import Button from 'components/button'
import Hero from 'components/hero'
import Client from 'components/client'
import Services from 'components/services'
import Choose from 'components/choose'
import Adv from 'components/adv'
import Testimonials from 'components/testimonials/Testimonials'
import Footer from 'components/footer'

import stl from './Home.module.scss'

// https://growfy-template.webflow.io

const Home = () => (
  <div className={stl.wrapper}>
    <Head>
      <title>Growfy - Marketing Solutions that grow your b usiness.</title>
    </Head>

    <div className="wrapper">
      <Header />

      <main className="page">
        <Hero />
        <Client />
        <Services />
        <Choose />
        <Adv />
        <Testimonials />

        <section className="page__blog blog">
          <div className="blog__container">
            <div className="blog__header header-main">
              <a href="" className="header-main__label">
                Blog
              </a>
              <h2 className="header-main__title">
                Read our <br /> articles & news
              </h2>
              <div className="header-main__body">
                <div className="header-main__text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero.
                  </p>
                </div>
                <div className="header-main__actions">
                  <Button label="All Posts" />
                </div>
              </div>
            </div>
            <div className="blog__items">
              <artcile className="blog__item item-blog">
                <div className="item-blog__header">
                  <a href="" className="item-blog__image">
                    <img src="/img/blog-image-01.jpg" alt="image" />
                  </a>
                  <a href="" className="item-blog__category">
                    Social Media
                  </a>
                </div>
                <div className="item-blog__body">
                  <div className="item-blog__date">August 28, 2022</div>
                  <h4 className="item-blog__title item-blog__">
                    <a href="" className="item-blog__link-title">
                      How to Use Social Proof in Marketing
                    </a>
                  </h4>
                  <div className="item-blog__text text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      lobortis arcu enim urna adipiscing praesent velit viverra
                      sit semper lorem.
                    </p>
                  </div>
                  <a href="" className="item-blog__link">
                    Read now
                  </a>
                </div>
              </artcile>
              <artcile className="blog__item item-blog">
                <div className="item-blog__header">
                  <a href="" className="item-blog__image">
                    <img src="/img/blog-image-02.jpg" alt="image" />
                  </a>
                  <a href="" className="item-blog__category">
                    SEO
                  </a>
                </div>
                <div className="item-blog__body">
                  <div className="item-blog__date">August 28, 2022</div>
                  <h4 className="item-blog__title item-blog__">
                    <a href="" className="item-blog__link-title">
                      Make a great first impression with these titles
                    </a>
                  </h4>
                  <div className="item-blog__text text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      lobortis arcu enim urna adipiscing praesent velit viverra
                      sit semper lorem.
                    </p>
                  </div>
                  <a href="" className="item-blog__link">
                    Read now
                  </a>
                </div>
              </artcile>
              <artcile className="blog__item item-blog">
                <div className="item-blog__header">
                  <a href="" className="item-blog__image">
                    <img src="/img/blog-image-03.jpg" alt="image" />
                  </a>
                  <a href="" className="item-blog__category">
                    Strategy
                  </a>
                </div>
                <div className="item-blog__body">
                  <div className="item-blog__date">August 28, 2022</div>
                  <h4 className="item-blog__title item-blog__">
                    <a href="" className="item-blog__link-title">
                      How to Grab Your Reader’s Attention
                    </a>
                  </h4>
                  <div className="item-blog__text text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      lobortis arcu enim urna adipiscing praesent velit viverra
                      sit semper lorem.
                    </p>
                  </div>
                  <a href="" className="item-blog__link">
                    Read now
                  </a>
                </div>
              </artcile>
            </div>
          </div>
        </section>

        <section className="page__start start">
          <div className="start__container">
            <div className="start__body">
              <div className="start__column">
                <h2 className="start__title">
                  Ready to start <br /> scaling your business now?
                </h2>
                <div className="start__text text">
                  <p>
                    Lorem ipsum dolor sit am consectetur adipiscing varius enim
                    in eros.
                  </p>
                </div>
              </div>
              <div className="start__column">
                <div className="start__actions">
                  <Button label="Our services" />
                  <Button label="Contact us" isDark />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  </div>
)

export default Home

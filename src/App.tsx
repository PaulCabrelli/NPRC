import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Mail,
  MapPin,
  Menu,
  Wind,
  X,
} from 'lucide-react'

const galleryLabels = [
  'Sunday at the field', 'Club flying day', 'Sunday flying', 'Windsock',
  'Mini glider', 'High in the sky', 'Mayoor', 'John', 'Ready for launch',
  "Where's my plane?", 'Heads up!', 'Sean', 'Line up', 'Line up',
  'Mustang P-51', 'Mustang P-51', 'Club photo', 'LVG C.VI', 'LVG C.VI',
  'High Boy', "Derek's son", "Derek's son", 'Derek and son', 'Heads up!',
  'Me109', 'Magnitilla', 'I/C Junior 60', 'Junior 60 in flight', 'Helicopter',
  'Junior 60', 'LVG C.VI', 'LVG C.VI', 'Old Warden', 'Landing', 'DH9A',
  '019', '018', '017', '015 1/2',
]

const gallery = galleryLabels.map((label, index) => ({
  src: `${import.meta.env.BASE_URL}Gallery_images/gallery-${String(index + 1).padStart(2, '0')}.${index === 22 ? 'png' : 'jpg'}`,
  alt: label,
  label,
}))

const electricHours = [
  { day: 'Weekdays', time: '12 noon – 8:30pm' },
  { day: 'Saturday', time: '11am – 8:30pm' },
  { day: 'Sunday', time: '12 noon – 8:30pm' },
]

const icHours = [
  { day: 'Wednesday', time: '12 noon – 4pm' },
  { day: 'Saturday', time: '11am – 4pm' },
]

const fees = [
  { name: 'Club membership', amount: '£20', detail: 'per year' },
  { name: 'BMFA insurance', amount: '£51', detail: 'per year' },
  { name: 'CAA registration', amount: '£12.34', detail: 'via BMFA' },
  { name: 'Brent Council permit', amount: '£48', detail: 'per year' },
]

const clubHistory = [
  {
    period: 'Early 1970s',
    title: 'Sunday mornings by the railway',
    description: 'Northwick Park drew curious crowds to watch model aircraft. Flyers used a concrete cricket pitch beside the railway as an improvised runway.',
  },
  {
    period: 'A growing club',
    title: 'A place to learn and belong',
    description: 'Radio control brought new possibilities. Members flew together and gathered regularly, sharing their knowledge, aircraft and enthusiasm.',
  },
  {
    period: 'Through change',
    title: 'Finding a way to keep flying',
    description: 'Changing access and noise restrictions brought difficult stretches, including a move away from the park. The club later found its way back to Northwick Park.',
  },
  {
    period: 'Today',
    title: 'The story carries on',
    description: 'Even after further changes to the field and flying arrangements, club members kept advocating for their place in the park—and kept flying.',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (activeImageIndex === null) return

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveImageIndex(null)
      if (event.key === 'ArrowLeft') {
        setActiveImageIndex((current) => current === null ? null : (current + gallery.length - 1) % gallery.length)
      }
      if (event.key === 'ArrowRight') {
        setActiveImageIndex((current) => current === null ? null : (current + 1) % gallery.length)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeImageIndex])

  return (
    <>
      <div className="topline">
        <span>Northwick Park · Harrow, London</span>
        <a href="https://www.monarchmodels.co.uk/" target="_blank" rel="noreferrer">
          Associated model shop <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      </div>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Northwick Park Flying Club home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">NP</span>
          <span className="brand-name">Northwick Park<span>RC Model Flying Club</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav id="main-navigation" className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#club" onClick={closeMenu}>The club</a>
          <a href="#story" onClick={closeMenu}>Our story</a>
          <a href="#flying" onClick={closeMenu}>Flying times</a>
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
          <a href="#visit" onClick={closeMenu}>Find us</a>
          <a className="nav-join" href="#contact" onClick={closeMenu}>Come flying <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main id="home">
        <section className="hero" aria-labelledby="hero-title">
          <img
            className="hero-image"
            src={`${import.meta.env.BASE_URL}images/hero-flight.jpg`}
            alt="A model aircraft in flight over Northwick Park"
            fetchPriority="high"
          />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow"><span /> A proper little flying field</p>
            <h1 id="hero-title">Made for the<br />joy of <em>flight.</em></h1>
            <p className="hero-copy">A friendly model flying club in the heart of Northwick Park, bringing pilots and aircraft together for over 50 years.</p>
            <div className="hero-actions">
              <a className="button button-sun" href="#contact">Come and meet us <ArrowUpRight size={17} /></a>
              <a className="hero-link" href="#flying">See when we fly <ArrowDown size={16} /></a>
            </div>
          </div>
          <div className="hero-caption"><span>51°34′ N</span><span>FIELD NOTES · 01</span></div>
        </section>

        <section className="intro-section section-wrap" id="club">
          <div className="intro-label"><span className="eyebrow">A club with its feet on the ground</span><span className="section-index">01 / THE CLUB</span></div>
          <div className="intro-copy">
            <h2>Big skies.<br /><span>Good company.</span></h2>
            <div className="intro-description">
              <p>From control-line engines to electric gliders and quadcopters, Northwick Park has seen generations of model flyers take to the air.</p>
              <p>Whether you have a model ready to go or are just curious, get in touch. The club can help you find your feet and get flying safely.</p>
              <a className="text-link" href="https://www.northwickparkflyingclub.co.uk/about" target="_blank" rel="noreferrer">Read the club's story <ArrowUpRight size={15} /></a>
            </div>
          </div>
          <div className="intro-stamp" aria-hidden="true"><span>EST.</span><strong>1970s</strong><span>AND STILL FLYING</span></div>
        </section>

        <section className="history-section" id="story">
          <div className="section-wrap history-inner">
            <div className="history-heading">
              <p className="eyebrow">From the club’s archive <span className="section-index">02 / OUR STORY</span></p>
              <h2>A field with<br /><span>a long story.</span></h2>
              <p>Model flying has been part of Northwick Park for generations. Club member Derek Morrison recalls the people, changes and determination that kept it in the air.</p>
              <a className="text-link" href="https://www.northwickparkflyingclub.co.uk/about" target="_blank" rel="noreferrer">
                Read Derek’s full history <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="history-timeline">
              {clubHistory.map((event) => (
                <article className="history-event" key={event.period}>
                  <span className="history-period">{event.period}</span>
                  <div>
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="history-credit">A short retelling of Derek Morrison’s account, <a href="https://www.northwickparkflyingclub.co.uk/about" target="_blank" rel="noreferrer">published by Northwick Park Flying Club</a>.</p>
          </div>
        </section>

        <section className="flying-section" id="flying">
          <div className="section-wrap flying-inner">
            <div className="flying-heading">
              <div>
                <p className="eyebrow">Plan your visit <span className="section-index">03 / FLYING TIMES</span></p>
                <h2>When the field<br />comes alive.</h2>
              </div>
              <p className="flying-intro">The field is shared by different kinds of flying. Check the times before setting off, and always put safety first.</p>
            </div>
            <div className="schedule-grid">
              <Schedule title="Electric & gliders" rows={electricHours} marker="01" />
              <Schedule title="Internal combustion" rows={icHours} marker="02" />
            </div>
            <div className="wind-note"><Wind size={19} aria-hidden="true" /><p><strong>Keep an eye on the wind.</strong> The club recommends not flying when wind speeds are over 13 mph.</p></div>
            <p className="schedule-footnote"><Clock3 size={14} aria-hidden="true" /> Flying ends at 8:30pm or sunset, whichever comes first. Times are from the club's published information; check with the club before travelling.</p>
          </div>
        </section>

        <section className="gallery-section section-wrap" id="gallery">
          <div className="gallery-heading">
            <div><p className="eyebrow">A view from the flight line <span className="section-index">04 / GALLERY</span></p><h2>Small aircraft.<br /><span>Wide horizons.</span></h2></div>
            <span className="gallery-total">{gallery.length} PHOTOGRAPHS</span>
          </div>
          <div className="gallery-grid">
            {gallery.map((image, index) => (
              <figure className={`gallery-item gallery-item-${index + 1}`} key={image.src}>
                <button className="gallery-trigger" type="button" onClick={() => setActiveImageIndex(index)} aria-label={`Open photo: ${image.label}`}>
                  <img src={image.src} alt={image.alt} loading="lazy" />
                </button>
                <figcaption><span>{String(index + 1).padStart(2, '0')}</span>{image.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="visit-section" id="visit">
          <div
            className="visit-photo"
            role="img"
            aria-label="Model aircraft gathered at the club field"
            style={{ backgroundImage: `url("${import.meta.env.BASE_URL}images/club-day.jpg")` }}
          />
          <div className="visit-content">
            <p className="eyebrow">The field is closer than you think <span className="section-index">05 / FIND US</span></p>
            <h2>See you<br />at the <em>field.</em></h2>
            <p className="visit-copy">The flying site is in the field on the left-hand side of Northwick Park. Access is off Norval Road, with parking nearby inside the park grounds.</p>
            <a className="button button-ink" href="https://www.google.com/maps/search/?api=1&query=Northwick+Park+Norval+Road+Harrow" target="_blank" rel="noreferrer">
              <MapPin size={17} /> Get directions <ArrowUpRight size={15} />
            </a>
            <p className="parking-note">Controlled parking on weekdays · Free parking at weekends</p>
          </div>
        </section>

        <section className="membership-section section-wrap" id="membership">
          <div className="membership-heading">
            <p className="eyebrow">A few things to get airborne <span className="section-index">06 / MEMBERSHIP</span></p>
            <h2>Start with<br /><span>a conversation.</span></h2>
            <p>New to the club? Send an expression of interest and the members will share the welcome pack and help you understand what you need to fly.</p>
            <a className="text-link" href="mailto:test.email@googlemail.com?subject=Northwick%20Park%20RC%20Model%20Flying%20Club">Ask about joining <ArrowUpRight size={15} /></a>
          </div>
          <div className="fees-panel">
            <div className="fees-title"><span>Published annual costs</span><span>GBP / YEAR</span></div>
            {fees.map((fee) => (
              <div className="fee-row" key={fee.name}>
                <span className="fee-name">{fee.name}</span>
                <strong>{fee.amount}</strong>
                <span className="fee-detail">{fee.detail}</span>
              </div>
            ))}
            <p className="fees-disclaimer">Figures are reproduced from the club website and may have changed. Please confirm current fees and flying requirements with the club before joining.</p>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-topline"><span>Northwick Park RC Model Flying Club</span><span>Harrow, London</span></div>
          <div className="contact-main">
            <div><p className="eyebrow">Your next flying day starts here</p><h2>Come on.<br /><em>Have a go.</em></h2></div>
            <div className="contact-actions">
              <a href="mailto:sean.k.mendis@googlemail.com?subject=Northwick%20Park%20RC%20Model%20Flying%20Club"><Mail size={18} /> General enquiries <ArrowUpRight size={15} /></a>
              <a href="mailto:mendisr@outlook.com?subject=Northwick%20Park%20RC%20Model%20Flying%20Club">Membership enquiries <ArrowUpRight size={15} /></a>
            </div>
          </div>
          <footer className="site-footer"><span>© Northwick Park RC Model Flying Club</span><span>Built for the love of flying <span className="footer-plane">✳</span></span><a href="#home">Back to top ↑</a></footer>
        </section>

        {activeImageIndex !== null && (
          <div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Photo gallery viewer"
            onClick={(event) => {
              if (event.target === event.currentTarget) setActiveImageIndex(null)
            }}
          >
            <button className="lightbox-control lightbox-close" type="button" aria-label="Close photo" autoFocus onClick={() => setActiveImageIndex(null)}>
              <X size={23} />
            </button>
            <button className="lightbox-control lightbox-arrow" type="button" aria-label="Previous photo" onClick={() => setActiveImageIndex((current) => current === null ? null : (current + gallery.length - 1) % gallery.length)}>
              <ChevronLeft size={27} />
            </button>
            <figure className="lightbox-figure">
              <img src={gallery[activeImageIndex].src} alt={gallery[activeImageIndex].alt} />
              <figcaption>{gallery[activeImageIndex].label}</figcaption>
            </figure>
            <button className="lightbox-control lightbox-arrow" type="button" aria-label="Next photo" onClick={() => setActiveImageIndex((current) => current === null ? null : (current + 1) % gallery.length)}>
              <ChevronRight size={27} />
            </button>
            <span className="lightbox-count" aria-live="polite">{String(activeImageIndex + 1).padStart(2, '0')} / {String(gallery.length).padStart(2, '0')}</span>
          </div>
        )}
      </main>
    </>
  )
}

type ScheduleProps = {
  title: string
  rows: { day: string; time: string }[]
  marker: string
}

function Schedule({ title, rows, marker }: ScheduleProps) {
  return (
    <div className="schedule-block">
      <div className="schedule-title"><span>{marker}</span><h3>{title}</h3></div>
      <div className="schedule-rows">
        {rows.map((row) => (
          <div className="schedule-row" key={row.day}><span>{row.day}</span><strong>{row.time}</strong></div>
        ))}
      </div>
    </div>
  )
}

export default App
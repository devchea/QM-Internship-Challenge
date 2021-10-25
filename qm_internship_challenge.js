import { Selector, ClientFunction } from 'testcafe'

fixture('Problem 1').page('https://www.quantummetric.com/our-story/')

test('check_mc_image', async t => {
  const mcImageUrl =
    'https://www.quantummetric.com/assets/uploads/our-story-mario-ciabarra@3x.png'

  const mcImage = Selector(
    '.u3m-company-bio-grid-card-profile-picture-container > a > img'
  ).withAttribute('src', mcImageUrl)

  await t
    .expect(mcImage.exists).ok()
})

fixture('Problem 2').page('https://www.quantummetric.com/resources/')

test('check_cpd_at_navbar_and_cpd_link', async (t) => {
  const cpdNav = Selector('#primary-menu > #menu-item-16393 > a').withText('CONTINUOUS PRODUCT DESIGN')

  const getUrl = ClientFunction(() => document.location.href)

  const cpdUrl =
    'https://www.quantummetric.com/what-is-continuous-product-design/'

  await t
    .expect(cpdNav.exists).ok()
    .click(cpdNav)
    .expect(getUrl()).eql(cpdUrl)
})

fixture('Problem 3').page('https://www.quantummetric.com/resources/')
  const caseStudyBtn = Selector('.resource-filter-wrap__button > .filter-button').withAttribute('data-filter', '.case-study')

  const eBookBtn = Selector('.resource-filter-wrap__button > .filter-button').withAttribute('data-filter', '.e-book')

  const dropdown = (idx) => {
    return Selector('.use-case-filter').nth(idx)
  }

  const dropdownOption = (idx) => {
    return dropdown(idx).child('option')
  }

  const visibleCards = Selector('div').withAttribute('class', 'center container').filterVisible()

test('check_h4_csBtn_m_ai', async t => {
  
  await t
    .click(caseStudyBtn)
    .click(dropdown(0))
    .click(dropdownOption(0).withAttribute('value', '.media'))
    .click(dropdown(1))
    .click(dropdownOption(1).withAttribute('value', '.analytics-insights'))
    .expect(await visibleCards.innerText).contains('The Telegraph Boosts Online Conversion with Quantum Metric')
})

test('check_h4_ebookBtn_fs_ce', async t => {

  await t
    .click(eBookBtn)
    .click(dropdown(0))
    .click(dropdownOption(0).withAttribute('value', '.financial-services'))
    .click(dropdown(1))
    .click(dropdownOption(1).withAttribute('value', '.customer-experience'))
    .expect(await visibleCards.innerText).contains('The Advantages of Real-Time Session Replay Over Cobrowsing')
})
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions

  // Devatha Vaahanas
  createRedirect({
    fromPath: `/vaahanas`,
    toPath: `https://rollthedice.in/pages/vaahanas`,
    isPermanent: true,
    redirectInBrowser: true,
  })

  createRedirect({
    fromPath: `/puzzles/deva-vaahana/*`,
    toPath: `https://rollthedice.in/pages/puzzles/deva-vaahana/:splat`,
    isPermanent: true,
    redirectInBrowser: true,
  })

  // Ekasloki Ramayana
  createRedirect({
    fromPath: `/ekashloki-ramayana`,
    toPath: `https://rollthedice.in/pages/ekashloki-ramayana`,
    isPermanent: true,
    redirectInBrowser: true,
  })

  // Sri Rama Pattabhisheka
  createRedirect({
    fromPath: `/sri-rama-pattabhisheka`,
    toPath: `https://rollthedice.in/pages/sri-rama-pattabhisheka`,
    isPermanent: true,
    redirectInBrowser: true,
  })

  // Dashavatara
  createRedirect({
    fromPath: `/dashavatara`,
    toPath: `https://rollthedice.in/pages/10-avatars-of-lord-vishnu-stories-facts-roll-the-dice`,
    isPermanent: true,
    redirectInBrowser: true,
  })
  // All individual Dashavatara URLs
  createRedirect({
    fromPath: `/puzzles/dashavatara/matsya`,
    toPath: `https://rollthedice.in/pages/10-avatars-of-lord-vishnu-stories-facts-roll-the-dice`,
    isPermanent: true,
    redirectInBrowser: true,
  })
  createRedirect({
    fromPath: `/puzzles/dashavatara/vamana`,
    toPath: `https://rollthedice.in/pages/10-avatars-of-lord-vishnu-stories-facts-roll-the-dice`,
    isPermanent: true,
    redirectInBrowser: true,
  })
  createRedirect({
    fromPath: `/puzzles/dashavatara/varaha`,
    toPath: `https://rollthedice.in/pages/10-avatars-of-lord-vishnu-stories-facts-roll-the-dice`,
    isPermanent: true,
    redirectInBrowser: true,
  })
  createRedirect({
    fromPath: `/puzzles/dashavatara/narasimha`,
    toPath: `https://rollthedice.in/pages/10-avatars-of-lord-vishnu-stories-facts-roll-the-dice`,
    isPermanent: true,
    redirectInBrowser: true,
  })
  createRedirect({
    fromPath: `/puzzles/dashavatara/kurma`,
    toPath: `https://rollthedice.in/pages/10-avatars-of-lord-vishnu-stories-facts-roll-the-dice`,
    isPermanent: true,
    redirectInBrowser: true,
  })
  createRedirect({
    fromPath: `/puzzles/dashavatara/balarama`,
    toPath: `https://rollthedice.in/pages/10-avatars-of-lord-vishnu-stories-facts-roll-the-dice`,
    isPermanent: true,
    redirectInBrowser: true,
  })
  createRedirect({
    fromPath: `/puzzles/dashavatara/rama`,
    toPath: `https://rollthedice.in/pages/10-avatars-of-lord-vishnu-stories-facts-roll-the-dice`,
    isPermanent: true,
    redirectInBrowser: true,
  })
  createRedirect({
    fromPath: `/puzzles/dashavatara/parashurama`,
    toPath: `https://rollthedice.in/pages/10-avatars-of-lord-vishnu-stories-facts-roll-the-dice`,
    isPermanent: true,
    redirectInBrowser: true,
  })
  createRedirect({
    fromPath: `/puzzles/dashavatara/krishna`,
    toPath: `https://rollthedice.in/pages/10-avatars-of-lord-vishnu-stories-facts-roll-the-dice`,
    isPermanent: true,
    redirectInBrowser: true,
  })
  createRedirect({
    fromPath: `/puzzles/dashavatara/kalki`,
    toPath: `https://rollthedice.in/pages/10-avatars-of-lord-vishnu-stories-facts-roll-the-dice`,
    isPermanent: true,
    redirectInBrowser: true,
  })
}

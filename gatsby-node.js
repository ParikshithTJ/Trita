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
    toPath: `https://rollthedice.in/pages/dashavatara`,
    isPermanent: true,
    redirectInBrowser: true,
  })
  createRedirect({
    fromPath: `/puzzles/dashavatara/*`,
    toPath: `https://rollthedice.in/pages/puzzles/dashavatara/:splat`,
    isPermanent: true,
    redirectInBrowser: true,
  })
}

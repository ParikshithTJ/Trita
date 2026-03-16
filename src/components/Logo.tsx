import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

type LogoProps = {
  className?: string
  title?: string
}

export default function Logo({ className, title = "Trita Infotainment LLP" }: LogoProps) {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "trita-logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 64, placeholder: DOMINANT_COLOR, formats: [PNG])
        }
      }
    }
  `)

  const image = getImage(data.file.childImageSharp.gatsbyImageData)

  if (!image) {
    return null
  }

  return (
    <GatsbyImage
      image={image}
      alt={title}
      className={className}
    />
  )
}

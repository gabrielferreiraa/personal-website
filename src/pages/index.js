import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import SEO from "../components/seo";
import global from "../global"
import "../global.css"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${global.colors.background};
    overflow: hidden;

    @media screen and (max-width: 768px) {
      font-size: 14px;
      display: flex;
      align-items: center;
      height: 100vh;
    }

    * {
      font-family: ${global.fontFamily}, sans-serif;
      margin: 0;
      padding: 0;
    }
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`

const Avatar = styled.img.attrs({
  id: "avatar",
})`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  margin: 30px;
  border: 2px solid #fff;
  box-shadow: 4px 7px 8px 0px rgba(0, 0, 0, 0.65);
`

const Name = styled.h1`
  color: #fff;
  font-size: 2.3em;
`

const SocialMedias = styled.ul`
  margin-top: 30px;
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`

const Link = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  text-decoration: none;
`

const Media = styled.li`
  margin-right: 15px;
  font-size: 0.7em;
  color: #fff;

  ${Link} {
    color: #fff;

    &:hover {
      color: ${global.colors.primary};
    }
  }

  ${({ highlight }) =>
    !!highlight &&
    `
    cursor: pointer;
    border: 1px solid ${global.colors.primary};
    background-color: transparent;
    padding: 7px;
    border-radius: 3px;
    transition: background-color 200ms ease;
    
    ${Link} {
      color: ${global.colors.primary};
    }

    &:hover {
      background-color: ${global.colors.primary};
      
      ${Link} {
        color: ${global.colors.background};
      }
    }
  `}
`

const Job = styled.h3`
  font-size: 0.7em;
  margin-top: 3px;
  color: #666;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  font-size: 0.6em;
  color: #fff;
  padding: 10px;
  text-align: center;
  width: 100%;
`

export default () => {
  return (
    <>
      <Wrapper>
        <SEO title="Welcome" />
        <GlobalStyle />
        <Avatar
          src={global.avatar}
          title={`${global.name} - ${global.email}`}
          alt={global.name}
        />
        <div>
          <Name>{global.name}</Name>
          <Job>{global.job}</Job>
          <SocialMedias>
            <Media highlight>
              <Link href={`mailto:${global.email}`}>let's connect</Link>
            </Media>
            {global.medias.map(media => (
              <Media key={media.name}>
                <Link href={media.link}>{media.name}</Link>
              </Media>
            ))}
          </SocialMedias>
        </div>
      </Wrapper>
      <Footer>made fast with gatsby by me</Footer>
    </>
  )
}

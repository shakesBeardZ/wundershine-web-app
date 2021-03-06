import css from 'styled-jsx/css'

export default css`
  .container {
    padding: 50px 0;
    background: linear-gradient(180deg, rgba(230,230,230,1) 0%, rgba(255,255,255,1) 8%, rgba(255,255,255,1) 100%);
  }
  .hero {
    text-align: center;
    padding: calc(50vh - 300px) 0;
  }
  h1 {
    font-family: 'Vollkorn', serif;
    text-transform: uppercase;
    font-size: 30px;
    font-weight: 400;
  }

  .app-row {
    margin: 10px 0 0 0;
    padding: 30px 0;
  }
  .app-row.with-border {
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  .text-content {
    padding: 0 25px;
  }

  .title-row {
    display: flex;
    flex-direction: row;
  }
  .title-row img {
    max-width: 80px;
    max-height: 80px;
    margin: 10px 20px 10px 0;
  }
  .title-row h3 {
    font-family: 'Vollkorn', serif;
    font-size: 36px;
    line-height: 1.45em;
    font-weight: 500;
    margin: 10px 0 0 0;
  }
  .title-row h4 {
    color: #797979;
    font-size: 18px;
    line-height: 1.3em;
    font-weight: 400;
    margin: 0;
  }

  p.description {
    font-size: 15px;
  }

  .links {
    margin: 25px 0;
  }
  a.link {
    padding: 0 15px;
  }
  a.link.with-spacer {
    border-right: 1px solid #999;
  }

  .screens {
    margin: 40px 0;
  }
  img.screen {
    width: 70px;
    max-width: calc(33% - 30px);
    margin: 0 30px 0 0;
  }

  @media only screen and (max-width: 767px) {
    .title-row {
      justify-content: center;
      padding: 10px 0;
    }
    .title-row img {
      max-width: 55px;
      max-height: 55px;
    }
    .title-row h3 {
      font-size: 22px;
    }
    .title-row h4 {
      font-size: 15px;
    }
    .screens, .links, p {
      text-align: center;
    }
    img.screen {
      max-width: 50px;
      margin: 0 20px 0 0;
    }
  }

`

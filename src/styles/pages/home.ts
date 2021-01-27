import styled from 'styled-components'

export const Background = styled.div`
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 200px;
  background: linear-gradient(0deg, #1c1814 1%, transparent),
              url('https://wallpapercave.com/wp/wp3543695.png');
  background-size: cover;

  h1 {
    font-size: 16px;
  }

  @media (min-width: 1000px) {
    height: 100vh;
    background: url('https://wallpapercave.com/wp/wp3543695.png');
    background-size: cover;
  }
`

export const Widget = styled.div`
  border-radius: 4px;
  border: 2px solid #2869f0;
  background-color: #1c1814;

  & + & {
    margin-top: 24px;
  }
`

export const WidgetHeader = styled.div`
  padding: 14px 32px;
  background-color: #2869f0;
`

export const WidgetContent = styled.div`
  padding: 18px 32px;

  p {
    font-size: 14px;
    line-height: 1.4;
  }
`

export const Container = styled.div`
  margin: auto;
  padding-top: 40px;
  width: min(350px, 95%);

  @media (min-width: 1000px) {
    padding-top: 55px;
    margin-left: 128px;
  }
`

export const Footer = styled.footer`
  display: flex;
  padding: 20px;
  margin-top: 20px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, .5);
`

export const Logo = styled.img`
  margin-bottom: 32px;
`

export const Form = styled.form`
  margin: 32px 0;

  input {
    width: 100%;
    height: 36px;
    border-radius: 4px;
    padding: 8px 16px;
    background: none;
    color: rgba(255, 255, 255, 0.7);
    border: 2px solid rgba(255, 255, 255, 0.5);
  }

  button {
    width: 100%;
    height: 36px;
    margin-top: 24px;
    border-radius: 4px;
    background: #e63c2c;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }
`

export const Title = styled.h1`
  font-size: 16px;
  line-height: 1.8;
`

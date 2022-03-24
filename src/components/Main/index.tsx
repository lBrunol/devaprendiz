import * as S from './styles'
import SocialButton from '../SocialButton'

const Main = ({ title = 'React', body = 'É isso ai' }) => (
  <main>
    <S.Title>{title}</S.Title>
    <SocialButton
      href="https://google.com"
      type="twitter"
      description={`Link para o Twitter`}
    ></SocialButton>
    <SocialButton
      href="https://google.com"
      type="youtube"
      description={`Link para o YouTube`}
    ></SocialButton>

    <SocialButton
      href="https://google.com"
      type="facebook"
      description={`Link para o Facebook`}
    ></SocialButton>
    <SocialButton
      href="https://google.com"
      type="instagram"
      description={`Link para o Instagram`}
    ></SocialButton>
    <p>{body}</p>
  </main>
)

export default Main

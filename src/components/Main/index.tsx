import * as S from './styles'
import SocialButton from '../SocialButton'

const Main = () => (
  <>
    <S.Container>
      <S.Aside>
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
      </S.Aside>
      <S.Main>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum
          turpis justo, sit amet sagittis lectus interdum id. Pellentesque eget
          metus vitae orci congue pellentesque id et dolor. Aliquam mollis
          sollicitudin imperdiet. Duis vitae libero at nibh dictum egestas eget
          sed felis. Nunc dapibus mauris id iaculis iaculis. Phasellus facilisis
          sapien vel nunc luctus sodales. Integer vitae pharetra sapien. Quisque
          sem sem, congue a turpis sed, consectetur cursus est. Vivamus egestas
          pellentesque lectus a ultricies. Aenean ut orci nec nibh porta
          venenatis eget luctus risus. Suspendisse molestie nulla at dui
          efficitur, semper gravida nibh luctus. Nullam sodales est vel sagittis
          venenatis. Quisque dapibus sollicitudin ligula, a vestibulum nibh
          bibendum pharetra. Etiam id ligula nulla. Nullam in luctus velit.
        </p>
        <p>
          Ut venenatis enim vel purus fermentum, vestibulum accumsan odio
          pharetra. Pellentesque vehicula a diam suscipit pellentesque. Aenean
          sed eleifend turpis, tempor rhoncus justo. Quisque convallis enim
          risus, quis auctor ligula bibendum non. Integer sollicitudin accumsan
          neque ac pharetra. Mauris faucibus purus aliquet ipsum tincidunt
          commodo. Donec non velit tempor, finibus lectus at, dapibus ex. Ut
          vitae venenatis ligula. Proin imperdiet nisi ut odio rutrum
          pellentesque. Integer elementum pellentesque viverra. Aenean malesuada
          sem sem, sed imperdiet nibh laoreet id. Suspendisse et magna a enim
          pretium dapibus a sed mauris. Etiam a fermentum justo.
        </p>
        <p>
          Curabitur diam eros, imperdiet et velit id, semper scelerisque dolor.
          Donec suscipit elit vitae lorem laoreet, sed fermentum ex scelerisque.
          Nulla ornare vulputate velit in sagittis. Mauris et ante dapibus,
          euismod velit vitae, congue ex. In nec tortor a massa pharetra
          accumsan. Donec ut quam in nisl facilisis dapibus vel vitae nunc.
          Curabitur mattis commodo risus vel accumsan. Nunc ac finibus odio, ac
          varius neque. Morbi egestas velit magna, maximus ultricies nunc
          tristique ut. Ut quis tortor ut quam bibendum pretium nec quis elit.
          Curabitur vitae urna lacinia, feugiat mi vel, faucibus sem.
        </p>
        <p>
          Nam eu aliquam massa. Suspendisse vestibulum finibus lectus et auctor.
          Vestibulum aliquam posuere nulla, eu sodales neque lacinia ut. Proin a
          ultricies justo. Aliquam sit amet egestas libero. Curabitur facilisis
          et turpis ut elementum. Duis ac mauris et nisl malesuada facilisis.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Praesent sit amet pulvinar mi. Suspendisse at
          ultrices leo. Donec dignissim venenatis erat, ultrices rutrum diam
          dignissim sed.
        </p>
        <p>
          Nullam vehicula ac dolor et iaculis. Nam nibh metus, gravida
          pellentesque nunc accumsan, condimentum ultricies velit. Nam et congue
          enim. Suspendisse maximus mi et urna commodo iaculis. Fusce placerat
          condimentum magna, quis laoreet sapien dapibus id. Quisque pulvinar
          urna ex, ut dignissim eros volutpat quis. In quis ultrices orci, non
          pretium dui. Maecenas vitae nisl in orci iaculis vestibulum sed
          rhoncus ante.
        </p>
      </S.Main>
    </S.Container>
  </>
)

export default Main

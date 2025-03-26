import styled from 'styled-components'
import profile from './profile.jpg'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 100vh;
  margin: 2em 0;
  font-family: system-ui, sans-serif;
`

const Sidebar = styled.aside`
  flex-basis: 300px;
  background: #fee;
`
const SidebarTop = styled.div`
  aspect-ratio: 1;
  text-align: center;
  padding: 30px;

  & img {
    width: 90%;
    border-radius: 50%;
    margin: auto;
  }
`
const Nav = styled.nav``
const NavLinkList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 1em;
`
const NavLinkListItem = styled.li`
  padding: .3em 0;
`
const Link = styled.a`
  color: inherit;
  display: block;

  &:hover {
    color: red;
  }
`

const Main = styled.main`
  flex-basis: 450px;
  padding: 2em;
  max-height: 80vh;
  overflow-y: auto;

  & p:first-of-type::first-letter {
    initial-letter: 2.5;
    color: red;
    padding: .5em;
  }
`
const MainHeading = styled.div`
  margin: 0em;
  padding: 0em;
  height: 5em;

  & h1 {
    text-align: center;
  }
`

function App() {
  return (
    <Wrapper>
      <Sidebar>
        <SidebarTop>
          <img src={profile} alt="" />
          <p>Max Mustermann</p>
        </SidebarTop>
        <Nav>
          <NavLinkList>
            <NavLinkListItem><Link href="#a">Lorem.</Link></NavLinkListItem>
            <NavLinkListItem><Link href="#b">Eius.</Link></NavLinkListItem>
            <NavLinkListItem><Link href="#c">Agea.</Link></NavLinkListItem>
            <NavLinkListItem><Link href="#d">Architecto!</Link></NavLinkListItem>
            <NavLinkListItem><Link href="#e">Hic!</Link></NavLinkListItem>
            <NavLinkListItem><Link href="#f">Commodi?</Link></NavLinkListItem>
          </NavLinkList>
        </Nav>
      </Sidebar>

      <Main>
        <MainHeading>
          <h1>Lorem Ipsum</h1>
        </MainHeading>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates corporis dolorem quisquam ut repellat ab dicta distinctio laudantium, quis voluptas nobis quidem expedita sint, voluptatum nihil praesentium repellendus non. Commodi?</p>
        <p>Officiis tenetur deleniti ducimus laudantium. Dicta pariatur nostrum possimus deserunt quia ipsum ipsam natus, vero nulla vitae earum optio sequi quos obcaecati laudantium! Modi sed nemo veniam atque et autem?</p>
        <p>Neque eius deserunt porro sequi officia, laboriosam cupiditate reprehenderit nam esse rerum, accusamus maiores adipisci optio minima nihil temporibus excepturi vitae soluta officiis. Quisquam, aliquid ipsum voluptatum magnam aut aperiam.</p>
        <p>Delectus hic quod et voluptatibus tempora! Molestias voluptatem deserunt enim officia quod repellendus reiciendis eum veniam accusamus maiores, impedit porro nisi vero velit quibusdam temporibus recusandae nulla excepturi laborum expedita!</p>
        <p>Rerum atque dolore deserunt maiores nesciunt placeat explicabo. Placeat, ducimus esse animi molestiae voluptate quidem similique, id maiores dolorem distinctio dicta quos enim. Quo eveniet ex commodi quisquam deserunt! Nam!</p>
        <p>Odio nostrum alias exercitationem, eos eius, officiis delectus culpa iusto voluptates dolorem omnis fuga! Fuga, veniam nemo eum sequi, tenetur voluptatem asperiores deleniti expedita nobis quas corrupti eaque nesciunt necessitatibus?</p>
        <p>Quasi officiis nam officia error provident numquam vero. Alias placeat molestiae quasi repellendus sed accusamus? Consectetur reprehenderit, hic excepturi modi vel tenetur quos beatae qui, iusto eum, fugit suscipit optio?</p>
        <p>Ea, illo nemo! Nostrum adipisci, perferendis laborum vero reiciendis a facere eos! Expedita dolores, voluptate perferendis alias exercitationem odio explicabo laudantium, velit dicta voluptates aut quisquam ex blanditiis quaerat cum!</p>
        <p>Veniam magnam laboriosam fugiat labore. Distinctio, natus nihil optio accusantium, sequi ipsum mollitia culpa velit provident earum est numquam, ullam ex. Rerum magni incidunt eveniet veniam dolorum minima, enim voluptate.</p>
        <p>Facilis voluptatem delectus facere quam labore minus id rem maiores fugiat tempore possimus est fuga minima, voluptas reprehenderit libero velit quidem fugit quibusdam animi nisi alias rerum a accusamus! Maxime.</p>
        <p>Aspernatur iste nobis perspiciatis suscipit dolore. Similique nam veniam officiis distinctio, porro error. Vero, incidunt soluta, eum consequatur dolores nesciunt officia hic temporibus neque vel eligendi consequuntur ipsum magni inventore.</p>
        <p>Suscipit repellat sit tempora nemo? Molestiae maxime nam tempore pariatur quod corrupti fugit fugiat unde aliquid, alias eum neque vitae consequatur dicta, explicabo ab possimus sapiente laboriosam delectus at sunt.</p>
        <p>Tenetur sed, quos sint voluptates in maxime iusto corporis consequuntur atque perspiciatis suscipit similique corrupti rem ipsa voluptate tempora possimus tempore adipisci ab neque expedita optio. Unde error distinctio non.</p>
        <p>Tempore vitae non consequuntur, dolores iure autem possimus perspiciatis blanditiis assumenda. Doloribus ad officiis autem animi consectetur, cupiditate possimus, nihil, consequatur mollitia commodi quos tenetur iure labore necessitatibus molestiae doloremque!</p>
        <p>Cumque, aut pariatur soluta voluptate harum commodi temporibus explicabo fugiat repellat corrupti dolores sapiente repudiandae eum alias. Laborum nisi, vel sint, nostrum deserunt libero recusandae, accusamus ullam ipsam a quaerat.</p>
      </Main>
    </Wrapper>
  )
}

export default App

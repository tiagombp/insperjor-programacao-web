Objetivo: https://codepen.io/tiagombp/full/LYOMVOX

## HTML final

```html
<head>
  <script src="https://kit.fontawesome.com/749ba7bf07.js" crossorigin="anonymous">
  </script>
</head>
<div class="wrapper">
  <header>
    <ul class="menu">
      <li><i class="fa-solid fa-circle-info"></i><span class="menu--texto">Sobre</span></li>
      <li><i class="fa-solid fa-bars-progress"></i><span class="menu--texto">Projetos</span></li>
      <li><i class="fa-solid fa-envelope"></i><span class="menu--texto">Contato</span></li>
    </ul>
  </header>
  <main>
    <h1>Pale Blue Dot</h1>
    <p>
      Look again at that dot. That's here. That's home. That's us. On it everyone you love, everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives. The aggregate of our joy and suffering, thousands of confident religions, ideologies, and economic doctrines, every hunter and forager, every hero and coward, every creator and destroyer of civilization, every king and peasant, every young couple in love, every mother and father, hopeful child, inventor and explorer, every teacher of morals, every corrupt politician, every "superstar," every "supreme leader," every saint and sinner in the history of our species lived there--on a mote of dust suspended in a sunbeam.
    </p>
    
    <p>
      The Earth is a very small stage in a vast cosmic arena. Think of the rivers of blood spilled by all those generals and emperors so that, in glory and triumph, they could become the momentary masters of a fraction of a dot. Think of the endless cruelties visited by the inhabitants of one corner of this pixel on the scarcely distinguishable inhabitants of some other corner, how frequent their misunderstandings, how eager they are to kill one another, how fervent their hatreds.
    </p>
  </main>
</div>
```

```css
body {
  background-color: #333;
  color: #333;
}

.wrapper {
  background-color: ghostwhite;
  margin: 0 auto;
  margin-top: 3rem;
  max-width: 80ch;
  padding: 20px;
  border-radius: 10px;
}

header {
  border-bottom: 3px solid #333;
}

.menu {
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding-left: 0;
  font-family: sans-serif;
}

.menu li {
  cursor: pointer;
}

i.fa-solid {
  margin-right: .5em;
}

main p {
  line-height: 1.25;
}
```

## Roteiro

1. Come??a com um simples `div` dentro de um `body`, e texto dentro do `div`.

2. Objetivo ?? falar sobre margens, padding e tamanhos.

QUAL ?? A LARGURA DESSE DIV?

?? 100%!

3. Definir cores de fundo.

4. Definir um width para o `div`. Mostrar o que acontece quando o tamanho diminui. Width ?? constante. Melhor um `max-width`.

5. Definir padding. Mostrar a diferen??a para o padding. Prefiro usar margem para separar elementos, padding para espa??amentos internos de caixas de texto, bot??es, r??tulos em gr??ficos.

6. Mostrar a quest??o do tamanho, que ?? computado como 600px sendo do content-box. Mudar para border-box.

7. Zerar a margem do body.

8. Mostrar algumas margens do div. Mostrar que d?? para posicionar mais ou menos com margens, mas as margens na verdade s??o em rela????o ao container OU a outros elementos adjacentes. Acrescentar mais um div para mostrar. Falar de margin-collapsing. Como distanciamento pessoal.

9. Definimos um width e uma margin-left, ent??o a right ficou autom??tica. Poder??amos definir a mrgin-right e usar auto para a margin-left, e com isso efetivamente alinhar as caixas ?? direita do container.

10. Essa combina????o de margins laterais autom??ticas e max-width d??o responsividade out of the box.

11. Mostrar que poder??amos usar width com media query:

```css
@media (max-width: 600px) {
  div {
    width: 100%;
  }
}
```

11.a. Apagar o par??grafo.

body
  div
    ul
      li
  div
    div
      h2
      p
    div
      h2
      p
      div
        ul
          li


12. Estruturar melhor o texto. Deixar um div ao redor.

13. Incluir um div dentro do segundo div.

14. ul e lis no topo e embaixo


geral :
```css
ul {
  list-style: none;
  padding-left: 0;
  display: flex;
  justify-content: space-around;
}
```

15. Estlizar com hover.

16. Imagem. Melhor definir width. Se definir os dois, precisa de object-fit.



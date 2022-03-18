
https://observablehq.com/@845b73f2d04459f8/exercicio-grafico-com-escala-e-rotulos

https://observablehq.com/@845b73f2d04459f8/revisao-seletores-css-parte-1

https://observablehq.com/@tiagombp/transicoes

## Roteiro

1. Começa com um simples `div` dentro de um `body`, e texto dentro do `div`.

2. Objetivo é falar sobre margens, padding e tamanhos.

QUAL É A LARGURA DESSE DIV?

É 100%!

3. Definir cores de fundo.

4. Definir um width para o `div`. Mostrar o que acontece quando o tamanho diminui. Width é constante. Melhor um `max-width`.

5. Definir padding. Mostrar a diferença para o padding. Prefiro usar margem para separar elementos, padding para espaçamentos internos de caixas de texto, botões, rótulos em gráficos.

6. Mostrar a questão do tamanho, que é computado como 600px sendo do content-box. Mudar para border-box.

7. Zerar a margem do body.

8. Mostrar algumas margens do div. Mostrar que dá para posicionar mais ou menos com margens, mas as margens na verdade são em relação ao container OU a outros elementos adjacentes. Acrescentar mais um div para mostrar. Falar de margin-collapsing. Como distanciamento pessoal.

9. Definimos um width e uma margin-left, então a right ficou automática. Poderíamos definir a mrgin-right e usar auto para a margin-left, e com isso efetivamente alinhar as caixas à direita do container.

10. Essa combinação de margins laterais automáticas e max-width dão responsividade out of the box.

11. Mostrar que poderíamos usar width com media query:

```css
@media (max-width: 600px) {
  div {
    width: 100%;
  }
}
```

11.a. Apagar o parágrafo.

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



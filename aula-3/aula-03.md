## Selectors

### Exemplo 1

```html
<article>
    <p>
        Eu sou o primeiro parágrafo. Quero ser mais forte do que os outros.
    </p>
    <p>
        Eu sou o segundo parágrafo.
    </p>
</article>
```

limitar largura

```css

article {

    width: 500px;

}
```

### Exemplo 2

aplicar uma classe

```css

article p.primeiro-paragrafo {

    font-weight: bold;

}
```

Hover nos parágrafos.


### Tipos

#### Simples

Universal selector *

Type selector (tag)

Class selector (.class)

> Notice how the `.` is only present in CSS and not the HTML. This is because the `.` character instructs the CSS language to match class attribute members. This is a common pattern in CSS, where a special character, or set of characters, is used to define selector types.

<div class="my-class another-class some-other-class"></div>

> This is because CSS looks for a class attribute that contains the defined class, rather than matching that class exactly.

ID selector (#id)

Attribute selector (`[attribute]`)

Along with case operators, you have access to operators that match portions of strings inside attribute values.

```css

/* A href that contains "example.com" */
[href*='example.com'] {
  color: red;
}

/* A href that starts with https */
[href^='https'] {
  color: green;
}

/* A href that ends with .com */
[href$='.com'] {
  color: blue;
}

#### Pseudo-classes, pseudo-elements

#### Complex selectors

>, +, ~

#### Compound selectors

```

## Patterns

Double container

```css
.prose-container {
    max-width: 40rem;
    margin: 0 auto;
    width: 90%;
}
```

## Extras

Jogo: https://flukeout.github.io/


1. Seletores
2. Box-model



font-style
font-size
font-weight
text-align
letter-spacing
line-height
color

margin
padding

trbl

exemplo prose x  opener

width em elementos inline
diferença para o inline-block


https://pudding.cool/projects/vocabulary/index.html
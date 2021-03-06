https://html.spec.whatwg.org/
https://css-tricks.com/a-love-letter-to-html-css/
https://www.w3.org/Style/CSS/current-work

https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element
https://developer.mozilla.org/pt-BR/docs/Learn/CSS/First_steps/How_CSS_is_structured
https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units


fail graciously
deixar de funcionar de forma graciosa

Presentational HTML x Semantics HTML

https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML
https://developer.mozilla.org/pt-BR/docs/Learn/Accessibility/HTML

A great deal of web content can be made accessible just by making sure the correct Hypertext Markup Language elements are used for the correct purpose at all times.

You might wonder why this is so important. After all, you can use a combination of CSS and JavaScript to make just about any HTML element behave in whatever way you want. 

Semantic HTML doesn't take any longer to write than non-semantic (bad) markup if you do it consistently from the start of your project. Even better, semantic markup has other benefits beyond accessibility:

Easier to develop with — as mentioned above, you get some functionality for free, plus it is arguably easier to understand.
Better on mobile — semantic HTML is arguably lighter in file size than non-semantic spaghetti code, and easier to make responsive.
Good for SEO — search engines give more importance to keywords inside headings, links, etc. than keywords included in non-semantic <div>s, etc., so your documents will be more findable by customers.

Out there on the web, the truth is that people do some very strange things with HTML markup.

The goal isn't "all or nothing"; every improvement you can make will help the cause of accessibility.

One of the best accessibility aids a screen reader user can have is an excellent content structure with headings, paragraphs, lists, etc.


1. The screen reader reads each header out as you progress through the content, notifying you what a heading is, what is a paragraph, etc.
2. It stops after each element, letting you go at whatever pace is comfortable for you.
3. You can jump to the next/previous heading in many screen readers.
4. You can also bring up a list of all headings in many screen readers, allowing you to use them as a handy table of contents to find specific content.

Another consideration when creating layouts is using HTML5 semantic elements as seen in the above example (see content sectioning) — you can create a layout using only nested <div> elements, but it is better to use appropriate sectioning elements to wrap your main navigation (<nav>), footer (<footer>), repeating content units (<article>), etc. These provide extra semantics for screen readers (and other tools) to give users extra clues about the content they are navigating

One key aspect of the accessibility of UI controls is that by default, browsers allow them to be manipulated by the keyboard.

You essentially get this behavior for free, just by using the appropriate elementsYou essentially get this behavior for free, just by using the appropriate elements

Tá tudo resolvido? Não, falta suporte nativo para vários componentes / padrões.



HTML for structure
CSS for presentation
JS for behavior

You may be as surprised as I was to learn that the graphically rich and inter- active pages we see on the web are generated by simple, text-only documents. The text file behind the scenes is referred to as the source document.

Adding descriptive tags to a text document is known as “marking up” the document. Web pages use a markup language called HyperText Markup Language, 

HTML: conteúdo, semântica e conexões.

The heart of the matter is that as web designers, we never know exactly how the pages we create will be viewed. We don’t know which of the dozens of browsers might be used, whether it is on a desktop computer or some- thing more portable, how large the browser window will be, what fonts are installed, whether functionality such as JavaScript is enabled, how fast the internet connection is, whether the pages are being read by a screen reader, and so on. The Big Concepts in this chapter are primarily reactions to and methods for coping with the inescapable element of the Unknown in our medium. 

this is the web
https://bradfrost.com/blog/post/this-is-the-web/

Como lidar com essa complexidade?

Padrões.

Sticking with web standards is your primary tool for ensuring your site is consistent on all stan- dards-compliant browsers (that’s approximately 99% of browsers in current use). It also helps make your content forward-compatible as web technologies and browser capabilities evolve.

https://www.w3.org/standards/

Progressive Enhancement
RESPONSIVE WEB DESIGN
ONE WEB FOR ALL (ACCESSIBILITY)

When designing with progressive enhancement, you start with a baseline experience that makes the content or core functionality available to even the most rudimentary browsers or assistive devices. From there, you layer on more advanced features for the browsers that can handle them. You might finish with some “nice to have” effects, like animation or wrapping text around images in interesting shapes, that enhance the experi- ence for users with the most advanced browsers, but aren’t really critical to the brand or message.
Progressive enhancement is the flip side of an approach to browser diversity called graceful degradation, in which you design the fully enhanced experience first, then create a series of fallbacks for non-supporting browsers. Both methods have their place in modern development.

When an HTML document is written in logical order and its elements are marked up in a meaningful way, it will be usable on the widest range of browsing environments, including the oldest browsers, future brows- ers, and mobile and assistive devices. It may not look exactly the same, but the important thing is that your content is available. It also ensures that search engines like Google will catalog the content correctly. A clean HTML document with its elements accurately and thoroughly described is the foundation for accessibility.

The first rule in progressive enhancement is to make sure basic functionality—such as linking from page to page or accomplishing essential tasks like data submission via forms—is intact even when JavaScript is off. In this way, you ensure the baseline experi- ence, and enhance it when JavaScript is available.


Responsive

Responsive Web Design (RWD) is a strategy for providing appropriate layouts to devices based on the size of the viewport (browser window). 


Accessibility

It is critical, however, to keep in mind that people access the web in many different ways—with a keyboard, mouse, voice commands, screen readers, Braille output, magnifiers, joysticks, foot pedals, and so on. Web designers must build pages in a manner that creates as few barriers as pos- sible to getting to information, regardless of the user’s ability and the device used to access the web. In other words, you must design for accessibility.

Vision impairment
People with low or no vision may use an assistive device such as a screen reader, Braille display, or a screen magnifier to get content from the screen. They may also simply use the browser’s text zoom function to make the text large enough to read.
Mobility impairment
Users with limited or no use of their hands may use special devices such as modified mice and keyboards, foot pedals, voice commands, or joy- sticks to navigate the web and enter information.
Auditory impairment
Users with limited or no hearing will miss out on audio aspects of mul- timedia, so it is necessary to provide alternatives, such as transcripts for audio tracks or captions for video.
Cognitive impairment
Users with memory, reading comprehension, problem solving, and atten- tion limitations benefit when sites are designed simply and clearly. These qualities are helpful to anyone using your site.


Skip links.
Empty alt attributes (with no alt, the img url is read :/ . alt ="" solves this. role="presentation" does too).


Support
Box Model
Box Sizing


DOM Visualizer
http://bioub.github.io/dom-visualizer/


https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML
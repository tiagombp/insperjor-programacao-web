setwd("/Users/tiago/Documents/github/insperjor-programacao-web/exercicios-alunos")
a<-jsonlite::read_json('link.json')
b<-data.frame('link' = rep('', 552), 'block_id' = rep('', 552))
for (i in 1:552)  {
  b[i, 'link'] = a[[i]]$link
  b[i, 'block_id'] = ifelse(is.null(a[[i]]$block_id), '', a[[i]]$block_id)
}
write.csv2

library(rvest)
url <- "https://www.globo.com"

x<-url %>%
  read_html() %>%
  html_elements("a.post__link") %>%
  html_attrs()

x<-url %>%
  read_html() %>%
  html_elements("div.container.false") %>%
  html_nodes("a.post__link") %>%
  html_attr("href")

('data-block-id')





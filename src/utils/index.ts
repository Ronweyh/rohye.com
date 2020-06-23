// 获取文字内容添加标签包裹
export function getTextAndGenerateHtml(className: string, index = 0) {
  let tag = document.getElementsByClassName(className)[index]
  if (tag.getElementsByTagName('div').length) return
  let subs = tag.innerHTML.split('')
  let html = ``
  subs.forEach(item => {
    let divTag = `<div>${item}</div>`
    html+=divTag
  })
  tag.innerHTML = html
}

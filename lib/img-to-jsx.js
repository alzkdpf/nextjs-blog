const visit = require('unist-util-visit')
const sizeOf = require('image-size')
const fs = require('fs')

module.exports = (options) => (tree) => {
  // console.log('tree', tree)

  visit(
    tree,
    // only visit p tags that contain an img element
    (node) => {
      // console.log('type', JSON.stringify(node))
      const test =
        node.type === 'paragraph' &&
        node.children.some((n) => {
          console.log('type2', n.type)
          return n.type === 'image'
        })
      console.log('test', test)
      return test
    },
    (node) => {
      console.log('sjdkflajsdkfja;klsjdflsd', node.children)
      const imageNode = node.children.find((n) => n.type === 'image')

      console.log('child2', imageNode, `${process.cwd()}/public${imageNode.url}`)
      // only local files
      if (fs.existsSync(`${process.cwd()}/public${imageNode.url}`)) {
        console.log('file check')
        const dimensions = sizeOf(`${process.cwd()}/public${imageNode.url}`)
        imageNode.type = 'jsx'
        imageNode.value = `<img
              alt={\`${imageNode.alt}\`}
              src={\`${imageNode.url}\`}
          >`
        node.type = 'div'
        node.children = [imageNode]
      }
    }
  )
}

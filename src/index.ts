import World from './world'

const root = document.getElementById('root')
if (root) {
  const world = new World('Hello TypeScript!')
  world.sayHello(root)
} else {
  console.error('Root element not found')
}

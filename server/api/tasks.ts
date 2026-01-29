export default defineEventHandler(async () => {
  await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate delay
  return [
    { id: 1, title: 'Task One', completed: false },
    { id: 2, title: 'Task Two', completed: true },
    { id: 3, title: 'Task Three', completed: false },
  ]
})

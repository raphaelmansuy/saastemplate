module.exports = {
  description: 'Component Story Generator',
  prompts: [
    {
      type: 'fuzzypath',
      message: 'Component name for story',
      name: 'path',
      rootPath: './components',
      itemType: 'file',
    },
  ],
  actions: [
    {
      type: 'add',
      path: 'stories/{{getFolder path}}/{{getName path}}.stories.tsx',
      templateFile: 'generators/stories/component/Component.stories.tsx.hbs',
    },
  ],
}

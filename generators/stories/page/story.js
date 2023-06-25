module.exports = {
  description: 'Page Story Generator',
  prompts: [
    {
      type: 'fuzzypath',
      message: 'Page name for story',
      name: 'path',
      rootPath: './app',
      itemType: 'file',
    },
  ],
  actions: [
    {
      type: 'add',
      path: 'stories/{{getFolder path}}/{{getName path}}.stories.tsx',
      templateFile: 'generators/stories/page/Page.stories.tsx.hbs',
    },
  ],
}
